import os
import socket

# 1. Print current working directory (pwd)



def pocdone():
    print(f"PWD: {os.getcwd()}")

    print(f"Machine: {socket.gethostname()}")
    parent_content = os.listdir('..')
    print("\nContents of parent directory (../):")
    for item in parent_content:
        print(f" - {item}")
