// proofread.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import { glob } from "glob";
import fs from "fs/promises";
import pLimit from "p-limit";
import "dotenv/config"; // Loads .env file contents into process.env

// --- Configuration ---
const DOCS_PATH = "../../docs/**/*.md"; // Glob pattern to find your markdown files. Adjust if your folder is not named 'docs'.
const CONCURRENT_REQUESTS = 1; // Number of files to process in parallel. Adjust based on API rate limits.
const GEMINI_MODEL = "gemini-2.5-flash"; //"gemini-2.5-pro"; // Or "gemini-1.5-pro-latest" for potentially higher quality
const CACHE_FILE = ".proofread-cache.json"; // File to store processed file paths

// --- Cache Functions ---
async function loadCache(cachePath) {
  try {
    const data = await fs.readFile(cachePath, "utf-8");
    return new Set(JSON.parse(data));
  } catch (error) {
    if (error.code === "ENOENT") {
      return new Set(); // No cache file found, start fresh
    }
    console.error(`Error loading cache file: ${error.message}`);
    return new Set(); // Start with an empty cache on error
  }
}

async function saveCache(cachePath, cache) {
  try {
    await fs.writeFile(cachePath, JSON.stringify([...cache], null, 2), "utf-8");
  } catch (error) {
    console.error(`Error saving cache file: ${error.message}`);
  }
}

// --- Main Logic ---

// 1. Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: GEMINI_MODEL });

// 2. Create the prompt template
function getPrompt(markdownContent) {
  return `You are an expert technical writer and proofreader for software documentation. Your task is to correct the English language in the provided Markdown file content.

Please follow these rules strictly:
1.  **Correct Language:** Fix grammar, spelling, punctuation, awkward phrasing, and improve clarity and flow. Make the text sound like it was written by a native English speaker.
2.  **Preserve Markdown:** DO NOT change any Markdown formatting. All code blocks (\`\`\`), inline code (\`code\`), headings (#, ##), lists (*, -), blockquotes (>), links ([text](url)), and HTML tags must remain exactly as they are.
3.  **Preserve Technical Accuracy:** DO NOT change the technical meaning of the text. Do not add new information, examples, or opinions.
4.  **Preserve Structure:** Do not add, remove, or reorder sections of the document.
5.  **Output Only the Corrected Markdown:** Your entire response should be only the full, corrected Markdown text. Do not add any commentary, preamble, or explanation before or after the corrected text.

Here is the Markdown content to correct:
${markdownContent}`;
}

// 3. Define the function to process a single file
async function proofreadFile(filePath, cache) {
  console.log(`- Processing: ${filePath}`);
  try {
    const originalContent = await fs.readFile(filePath, "utf-8");

    // Skip empty files
    if (!originalContent.trim()) {
      console.log(`  -> Skipped (empty file): ${filePath}`);
      return;
    }

    const prompt = getPrompt(originalContent);
    const result = await model.generateContent(prompt);
    const response = result.response;
    const correctedContent = response.text();

    const unixContent = correctedContent.replace(/\r\n/g, "\n");
    const windowsContent = unixContent.replace(/\n/g, "\r\n");

    await fs.writeFile(filePath, windowsContent, "utf-8");
    console.log(`  -> Success: ${filePath} updated.`);
    cache.add(filePath); // Add to cache on success
    await saveCache(CACHE_FILE, cache); // Save cache after each success
    await setTimeout(() => {}, 10000);
  } catch (error) {
    console.error(`  -> FAILED for ${filePath}:`, error.message);
    process.exit(1);

    // chill out to get quota
    //await setTimeout(() => {}, 60000);
  }
}

// 4. Main execution function
async function run() {
  console.log("Starting documentation proofreading process...");

  const processedCache = await loadCache(CACHE_FILE);

  // Find all markdown files
  let allFiles = await glob(DOCS_PATH);

  // Filter out all files that have Libraries in path
  allFiles = allFiles.filter((file) => !file.includes("\\Libraries\\"));
  //allFiles = allFiles.filter((file) => file.includes("8_5"));

  if (allFiles.length === 0) {
    console.log("No markdown files found. Check your DOCS_PATH configuration.");
    return;
  }
  console.log(`Found ${allFiles.length} total markdown files.`);

  // Filter out already processed files
  const filesToProcess = allFiles.filter((file) => !processedCache.has(file));
  const skippedCount = allFiles.length - filesToProcess.length;

  if (skippedCount > 0) {
    console.log(`Skipping ${skippedCount} previously processed files.`);
  }

  if (filesToProcess.length === 0) {
    console.log("No new files to process. All up-to-date!");
    return;
  }

  console.log(`Processing ${filesToProcess.length} new or modified files.`);

  // Use p-limit to control concurrency
  const limit = pLimit(CONCURRENT_REQUESTS);
  const promises = filesToProcess.map((file) =>
    limit(() => proofreadFile(file, processedCache))
  );

  // Wait for all files to be processed
  await Promise.all(promises);

  await saveCache(CACHE_FILE, processedCache);

  console.log("\nProofreading process complete!");
  console.log("Run 'git diff' to review the changes.");
}

async function convertToWindowsEOL() {
  console.log("Starting documentation proofreading process...");

  // Find all markdown files
  let allFiles = await glob(DOCS_PATH);

  // Filter out all files that have Libraries in path
  allFiles = allFiles.filter((file) => !file.includes("\\Libraries\\"));

  if (allFiles.length === 0) {
    console.log("No markdown files found. Check your DOCS_PATH configuration.");
    return;
  }
  console.log(`Found ${allFiles.length} total markdown files.`);

  allFiles.forEach(async (file) => {
    try {
      const originalContent = await fs.readFile(file, "utf-8");

      // Skip empty files
      if (!originalContent.trim()) {
        console.log(`  -> Skipped (empty file): ${file}`);
        return;
      }

      // Change EOL from mixed Unix-Windows to Windows format
      const unixContent = originalContent.replace(/\r\n/g, "\n");
      const windowsContent = unixContent.replace(/\n/g, "\r\n");
      await fs.writeFile(file, windowsContent, "utf-8");
      console.log(`  -> Success: ${file} updated.`);

    } catch (error) {
      console.error(`  -> FAILED for ${file}:`, error.message);
      process.exit(1);
    }
  });

}

function getLinkFixPrompt(markdownContent, edits) {
    const replacementsText = edits
      .map((e) => `- replace '${e.badLink}' with '${e.goodLink}'`)
      .join("\n");
  
    return `You are a precise search-and-replace tool for Markdown files. Your task is to apply a list of specific link replacements to the provided Markdown content.
  
  **Rules:**
  1.  **Apply All Replacements:** You must perform every replacement exactly as specified in the list below.
  2.  **Preserve Everything Else:** Do not change any other part of the content, including text, Markdown formatting, code blocks, or other links.
  3.  **Exact Matches:** Only replace the exact 'old link' string within markdown link syntax like \`[text](link)\`. For example, if a replacement is "replace '/a/b/' with 'c/d.md'", you must change \`[some text](/a/b/)\` to \`[some text](c/d.md)\`.
  4.  **Output Only Markdown:** Your entire response must be only the full, corrected Markdown text. Do not add any commentary, confirmation messages, or explanations.
  
  **Replacements to apply:**
  ${replacementsText}
  
  **Markdown content to modify:**
  ${markdownContent}`;
}

/* This function should read data from .bad-links which contains lines like these:

INFO    -  Doc file 'api.md' contains an absolute link '/Guide/web_service_testing/', it was left as is. Did you mean 'Guide/web_service_testing.md'?
INFO    -  Doc file 'api.md' contains an absolute link '/Guide/rest_web_service/', it was left as is. Did you mean 'Guide/rest_web_service.md'?
INFO    -  Doc file 'api.md' contains an absolute link '/Guide/soap_web_services/', it was left as is. Did you mean 'Guide/soap_web_services.md'?

It should also get the list of .md files as in `run` function and process them.
If a file is present in data, get the list of all suggested edits and send to LLM along with the file contents to apply.

*/
async function fixLinks() {
    console.log("Starting link fixing process...");
    const BAD_LINKS_FILE = ".bad-links";
  
    // 1. Read and parse the .bad-links file
    let linkLogContent;
    try {
      linkLogContent = await fs.readFile(BAD_LINKS_FILE, "utf-8");
    } catch (error) {
      if (error.code === "ENOENT") {
        console.log(`'${BAD_LINKS_FILE}' not found. No links to fix. Exiting.`);
        return;
      }
      console.error(`Error reading ${BAD_LINKS_FILE}:`, error.message);
      process.exit(1);
    }
  
    const editsByFile = new Map();
    // Regex to capture the filename, bad link, and suggested good link from the log
    const linkRegex = /Doc file '(.*?)' contains an absolute link '(.*?)'.*Did you mean '(.*?)'\?/;
    const lines = linkLogContent.split(/\r?\n/);
  
    for (const line of lines) {
      const match = line.match(linkRegex);
      if (match) {
        const [, shortFileName, badLink, goodLink] = match;
        if (!editsByFile.has(shortFileName)) {
          editsByFile.set(shortFileName, []);
        }
        editsByFile.get(shortFileName).push({ badLink, goodLink });
      }
    }
  
    if (editsByFile.size === 0) {
      console.log("No valid link suggestions found in .bad-links file.");
      return;
    }
    
    console.log(`Found link suggestions for ${editsByFile.size} file(s).`);
  
    // 2. Find all markdown files
    const allFiles = await glob(DOCS_PATH);
    
    // 3. Create a list of tasks to perform by matching log files to existing files
    const tasks = [];
    for (const [shortFileName, edits] of editsByFile.entries()) {
        // Normalize path separators to forward slashes for cross-platform compatibility
        const normalizedShortFileName = shortFileName.replace(/\\/g, '/');
        const fullPath = allFiles.find(f => f.replace(/\\/g, '/').endsWith(normalizedShortFileName));
  
        if (fullPath) {
            tasks.push({ filePath: fullPath, edits: edits });
        } else {
            console.warn(`  -> WARNING: File '${shortFileName}' from .bad-links not found in DOCS_PATH.`);
        }
    }
    
    if (tasks.length === 0) {
        console.log("No matching files found to apply link fixes.");
        return;
    }
    
    console.log(`Processing ${tasks.length} file(s) with link fixes.`);
  
    // 4. Process each file using the LLM and p-limit for concurrency
    const limit = pLimit(CONCURRENT_REQUESTS);
    const promises = tasks.map((task) =>
      limit(async () => {
        console.log(`- Fixing links in: ${task.filePath}`);
        try {
          const originalContent = await fs.readFile(task.filePath, "utf-8");
  
          const prompt = getLinkFixPrompt(originalContent, task.edits);
          const result = await model.generateContent(prompt);
          const response = result.response;
          const correctedContent = response.text();
          
          // A simple sanity check to ensure the LLM didn't return an empty or garbage response
          if (!correctedContent || correctedContent.trim() === "") {
              throw new Error("LLM returned empty content.");
          }

          const unixContent = correctedContent.replace(/\r\n/g, "\n");
          const windowsContent = unixContent.replace(/\n/g, "\r\n");
          await fs.writeFile(task.filePath, windowsContent, "utf-8");
          console.log(`  -> Success: ${task.filePath} updated.`);
        } catch (error) {
          console.error(`  -> FAILED to fix links for ${task.filePath}:`, error.message);
          // Continue with other files instead of exiting the whole process
        }
      })
    );
    
    await Promise.all(promises);
    
    console.log("\nLink fixing process complete!");
    console.log("Run 'git diff' to review the changes.");
  }

// 5. Run the script
run();
//convertToWindowsEOL();
//fixLinks();