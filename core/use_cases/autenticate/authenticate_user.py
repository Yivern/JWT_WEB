import sys
from pathlib import Path

path_root = Path(__file__).parents[2]
sys.path.append(str(path_root))

from use_cases.validateUser.validateUsers import validate_user
from use_cases.token.create_JWT import create_JWT

def auth_user(front_user,front_pass):
    user_validate = validate_user(front_user,front_pass)
    if  user_validate == True:
        data = create_JWT(True)
        return data
    else:
        data = create_JWT(False)
        return data