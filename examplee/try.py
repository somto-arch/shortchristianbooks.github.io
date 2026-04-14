import os
import getpass
import socket

# Get the current working directory (pwd)


def pocdone():
    cwd = os.getcwd()
    user = getpass.getuser()
    machine = socket.gethostname()
    print(f"Directory: {cwd}")
    print(f"Username: {user}")
    print(f"Machine:   {machine}")
   # for i in range(10):
      #  print(i)
