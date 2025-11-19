import os
import shutil

# Path to your React components folder
COMPONENTS_PATH = "src/Components"

def create_english_files():
    # Get all files in the folder
    for filename in os.listdir(COMPONENTS_PATH):
        # Only target .jsx files
        if filename.endswith(".jsx"):
            base_name = filename[:-4]  # Remove .jsx
            new_name = f"{base_name}EN.jsx"
            
            old_path = os.path.join(COMPONENTS_PATH, filename)
            new_path = os.path.join(COMPONENTS_PATH, new_name)

            # Copy only if it doesn't already exist
            if not os.path.exists(new_path):
                shutil.copy(old_path, new_path)
                print(f"Created: {new_name}")
            else:
                print(f"Skipped (already exists): {new_name}")

if __name__ == "__main__":
    create_english_files()
