import os
import platform
import psutil
import socket

# 1. PWD (Current Working Directory)
def pocdone():
    print(f"--- Current Directory ---\n{os.getcwd()}\n")

# 2. Running Machine Name
    print(f"--- Machine Name ---\n{platform.node()}\n")

# 3. List content in 2 upper directories (/../../)
    target_dir = os.path.abspath(os.path.join(os.getcwd(), "..", ".."))
    print(f"--- Content of {target_dir} ---")
    try:
        print(os.listdir(target_dir))
    except FileNotFoundError:
        print("Directory not found.")
    print("\n")

# 4. CPU Stats
    print(f"--- CPU Stats ---")
    print(f"Usage: {psutil.cpu_percent(interval=1)}%")
    print(f"Core Count: {psutil.cpu_count()}\n")

# 5. Programming Environment Stats (Memory/PID)
    print(f"--- Environment Stats ---")
    process = psutil.Process(os.getpid())
    print(f"Python PID: {os.getpid()}")
    print(f"Memory Usage: {process.memory_info().rss / 1024 / 1024:.2f} MB\n")

# 6. Open/Available TCP Ports
    print(f"--- Open TCP Ports ---")
    connections = psutil.net_connections(kind='tcp')
    for conn in connections:
        if conn.status == 'LISTEN':
            print(f"Port: {conn.laddr.port}, Status: {conn.status}")



   
