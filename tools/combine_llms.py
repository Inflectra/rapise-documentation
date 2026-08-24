#!/usr/bin/env python3
"""
Combines individual llms-*.txt files into a single llms-full.txt file.

Usage:
    python combine_llms.py

The script reads all llms-*.txt files from ../docs/ and combines them
into ../docs/llms-full.txt with section separators.
"""

import os
from pathlib import Path
from datetime import datetime

# Files to combine, in order
LLMS_FILES = [
    "llms-global.txt",
    "llms-web.txt", 
    "llms-rvl.txt",
    "llms-framework.txt",
    "llms-extending.txt",
]

SECTION_SEPARATOR = "\n\n" + "=" * 80 + "\n\n"

def main():
    # Determine paths
    script_dir = Path(__file__).parent
    docs_dir = script_dir.parent / "docs"
    output_file = docs_dir / "llms-full.txt"
    
    # Read llms.txt as the header
    header_file = docs_dir / "llms.txt"
    if not header_file.exists():
        print(f"Error: {header_file} not found")
        return 1
    
    sections = []
    
    # Add header from llms.txt
    with open(header_file, "r", encoding="utf-8") as f:
        header_content = f.read().strip()
    
    # Modify header to indicate this is the full version
    header_lines = header_content.split("\n")
    # Insert note after first heading
    for i, line in enumerate(header_lines):
        if line.startswith("# "):
            header_lines.insert(i + 1, "\n> This is the combined full documentation. Individual sections available at llms-*.txt\n")
            break
    
    sections.append("\n".join(header_lines))
    
    # Add each section file
    missing_files = []
    for filename in LLMS_FILES:
        filepath = docs_dir / filename
        if not filepath.exists():
            missing_files.append(filename)
            print(f"Warning: {filename} not found, skipping")
            continue
        
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read().strip()
        
        sections.append(content)
        print(f"Added: {filename}")
    
    # Combine all sections
    full_content = SECTION_SEPARATOR.join(sections)
    
    # Add generation timestamp at the end
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    full_content += f"\n\n---\nGenerated: {timestamp}\n"
    
    # Write output
    with open(output_file, "w", encoding="utf-8") as f:
        f.write(full_content)
    
    # Summary
    print(f"\nCreated: {output_file}")
    print(f"Total sections: {len(sections)}")
    if missing_files:
        print(f"Missing files: {', '.join(missing_files)}")
    
    # Show file size
    size_kb = output_file.stat().st_size / 1024
    print(f"File size: {size_kb:.1f} KB")
    
    return 0

if __name__ == "__main__":
    exit(main())
