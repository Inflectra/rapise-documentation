from openai import OpenAI

client = OpenAI();

# Function to delete all files from a vector store
def delete_all_recent_files():
    try:
        all_files = client.files.list()
        
        for file in all_files:
            if file.created_at > 1722000000:
                print(f"{file.filename} [{file.id}]  created_at: {file.created_at}")
                client.files.delete(file.id);
        
        print("All files deleted from the vector store.")
    
    except Exception as e:
        print(f"An error occurred: {e}")

# Call the function to delete all files from the vector store
delete_all_recent_files()
