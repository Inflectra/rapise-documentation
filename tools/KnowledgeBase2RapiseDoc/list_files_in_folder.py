import os

def list_files_in_folder(folder_path):
    files_list = []
    for root, _, files in os.walk(folder_path):
        for file in files:
            # Construct the relative file path
            relative_path = os.path.relpath(os.path.join(root, file), folder_path)
            # Add to the list in the form FolderName/FileName
            files_list.append(folder_path + "/" + relative_path.replace("\\", "/"))
    return files_list

# Example usage
folder_path = 'Upload'
files = list_files_in_folder(folder_path)
for file in files:
    print(file)
