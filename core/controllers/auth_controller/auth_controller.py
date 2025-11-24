from pathlib import Path
import sys
from proyecto_login.core.use_cases.autenticate.authenticate_user import auth_user

path_root = Path(__file__).parents[4]
sys.path.append(str(path_root))

def controller(front_user, front_pass):
    data = auth_user(front_user,front_pass)
    return data