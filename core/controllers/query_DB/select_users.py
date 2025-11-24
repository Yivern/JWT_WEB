from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi


def select_users(user_front,password_front):
    uri = "mongodb+srv://JesusAngarita:Jesus780228@proyectoreact.vetue4i.mongodb.net/?retryWrites=true&w=majority&appName=proyectoReact"

    client = MongoClient(uri, server_api=ServerApi('1'))

    tabla = client["test"]["users"]

    query = {
        "usuario": user_front,
        "contraseña": password_front
    }

    data = tabla.find(query)

    for x in data:
        return True

    return None
