import os

def pocdone():
    # Start at current working directory
    current_dir = os.getcwd()

    while True:
        print(current_dir)
        # Get parent directory
        parent_dir = os.path.dirname(current_dir)

        # If the parent is the same as current, we've reached root
        if parent_dir == current_dir:
            break
        current_dir = parent_dir
