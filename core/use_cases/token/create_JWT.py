import time, sys, jwt, time
from pathlib import Path
# from pprint import pprint
path_root = Path(__file__).parents[4]
sys.path.append(str(path_root))

from proyecto_login.core.entities.code_jwt.conf_jwt import *
from proyecto_login.core.controllers.conf_token.token_exp import time_exp

def create_JWT(verificar):
    if verificar:
        payload = {
            "statusCode": 200,
            "statusMessage": "OK",
            "statusDescription":  "Request succeeded without error",

            # TRAER EL TIEMPO DESDE LA BASE DE DATOS proyecto.db/CONFIGURACION
            "exp": int(time.time()) + 5000,
            "result": {
                "success": True,
                "message": "Usuario validado correctamente",
                "token": ""
            }
        }
        encoded_jwt = jwt.encode(payload,key,algorithm='HS256',headers=header)

        correcto = {
            "statusCode": 200,
            "statusMessage": "OK",
            "statusDescription":  "Request succeeded without error",

            # TRAER EL TIEMPO DESDE LA BASE DE DATOS proyecto.db/CONFIGURACION
            "exp": int(time.time()) + 5000,
            "result": {
                "success": True,
                "message": "Usuario validado correctamente",
                "token": encoded_jwt
            }
        }
        return correcto
    
    else:
        payload = {
            "statusCode": 422,
            "statusMessage": "OK",
            "statusDescription":  "Request succeeded without error",
            "exp": int(time.time()) + 5000,
            "result": {
                "success": False,
                "message": "Usuario no valido",
                "token": ""
            }
        }
        encoded_jwt = jwt.encode(payload,key,algorithm='HS256',headers=header)
        incorrecto = {
            "statusCode": 422,
            "statusMessage": "OK",
            "statusDescription":  "Request succeeded without error",
            "exp": int(time.time()) + 5000,
            "result": {
                "success": False,
                "message": "Usuario no valido",
                "token": encoded_jwt
            }
        }
        return incorrecto