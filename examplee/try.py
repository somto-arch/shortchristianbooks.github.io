import os

def pocdone():
    # 1. Get current directory
    current_dir = os.getcwd()
    print(f"Current Directory: {current_dir}")
    
    parts = os.path.normpath(current_dir).split(os.sep)
    
    # 2. Print contents of every dir up to root
    temp_path = ""
    # Skips empty first element for absolute paths on Linux/macOS
    start_index = 1 if current_dir.startswith(os.sep) else 0 
    
    for i in range(len(parts), start_index, -1):
        path_to_check = os.sep.join(parts[:i])
        if not path_to_check: path_to_check = os.sep # Handle root
        
        print(f"\nScanning: {path_to_check}")
        try:
            print(f"Contents: {os.listdir(path_to_check)}")
        except PermissionError:
            print(f"Permission Denied: {path_to_check}")

    # 3. Write poc.txt in the dir just before root
    # parts[0] is typically empty for absolute paths, parts[1] is first real dir
    if len(parts) > 1:
        # Construct path to the second directory (dir just before root)
        second_dir = os.sep.join(parts[:2])
        if not second_dir.startswith(os.sep): # Handle Windows drive letters
             second_dir = parts[0] + os.sep + parts[1]
             
        file_path = os.path.join(second_dir, 'poc.txt')
        
        try:
            with open(file_path, 'w') as f:
                f.write('')
            print(f"\nSuccessfully created {file_path}")
        except Exception as e:
            print(f"\nFailed to create file: {e}")
