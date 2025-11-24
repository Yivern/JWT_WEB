# Traer la informacion desde la base de datos del archivo controllers/query_DB/select_users.py
# Validar el usuario con la informacion traia del front
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import sys
from pathlib import Path
path_root = Path(__file__).parents[5]
sys.path.append(str(path_root))

from proyecto_login.core.controllers.query_DB.select_users import select_users

def validate_user(front_user,front_pass):
    user_DB = select_users(front_user,front_pass)
    
    if  user_DB == None:
        
        return False
    
    return True
