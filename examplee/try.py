import os, platform, sys, subprocess, socket

# 1. One-liner to install psutil
try:
    import psutil
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "psutil"]); import psutil

    def pocdone():
        print(f"--- [PWD] ---\n{os.getcwd()}\n")
        print(f"--- [Machine] ---\n{platform.node()} ({platform.system()})\n")
    
        # 2. List content 2 upper directories (/../../)
        upper_dir = os.path.abspath(os.path.join(os.getcwd(), "..", ".."))
        print(f"--- [Content in {upper_dir}] ---")
        try:
            for item in os.listdir(upper_dir): print(item)
        except FileNotFoundError:
            print("Directory not found.")
        print("\n")
    
        # 3. CPU & Environment Stats
        print(f"--- [CPU/Env Stats] ---")
        print(f"CPU Usage: {psutil.cpu_percent(interval=1)}%")
        print(f"Logical CPUs: {psutil.cpu_count()}")
        print(f"Memory: {psutil.virtual_memory().percent}%\n")
    
        # 4. Open TCP Ports (Listening)
        print("--- [Open Listening TCP Ports] ---")
        for conn in psutil.net_connections(kind='tcp'):
            if conn.status == psutil.CONN_LISTEN:
                print(f"Port: {conn.laddr.port} | PID: {conn.pid}")
    
    
    if __name__ == "__main__":
        get_system_info()
    
