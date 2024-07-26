import os
from openai import OpenAI

def list_files_in_folder(folder_path):
    files_list = []
    for root, _, files in os.walk(folder_path):
        for file in files:
            # Construct the relative file path
            relative_path = os.path.relpath(os.path.join(root, file), folder_path)
            # Add to the list in the form FolderName/FileName
            files_list.append(folder_path + "/" + relative_path.replace("\\", "/"))
    return files_list

client = OpenAI();

vector_store_id = "vs_VhSTQVUfQ0MEGlLBdxVI2g6Q"
folder_path = 'Upload'

# Ready the files for upload to OpenAI
#file_paths = ["Upload/KB3.md", "Upload/KB4.md"]
file_paths = list_files_in_folder(folder_path)
file_streams = [open(path, "rb") for path in file_paths]
 
# Use the upload and poll SDK helper to upload the files, add them to the vector store,
# and poll the status of the file batch for completion.
file_batch = client.beta.vector_stores.file_batches.upload_and_poll(
  vector_store_id=vector_store_id, files=file_streams
)
 
# You can print the status and the file counts of the batch to see the result of this operation.
print(file_batch.status)
print(file_batch.file_counts)