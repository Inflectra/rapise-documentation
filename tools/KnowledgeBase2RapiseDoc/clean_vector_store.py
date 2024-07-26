from openai import OpenAI

client = OpenAI();

# Replace with your actual vector store ID
vector_store_id = "vs_VhSTQVUfQ0MEGlLBdxVI2g6Q"

# Function to delete all files from a vector store
def delete_all_files_from_vector_store(vector_store_id):
    try:
        all_files = list(client.beta.vector_stores.files.list(vector_store_id=vector_store_id))
        
        for file in all_files:
            print(f"[{file.id}]")
            client.files.delete(file.id);
        
        print("All files deleted from the vector store.")
    
    except Exception as e:
        print(f"An error occurred: {e}")

# Call the function to delete all files from the vector store
delete_all_files_from_vector_store(vector_store_id)

