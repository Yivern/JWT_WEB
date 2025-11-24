from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
def time_exp():
    uri = "mongodb+srv://JesusAngarita:Jesus780228@proyectoreact.vetue4i.mongodb.net/?retryWrites=true&w=majority&appName=proyectoReact"

    client = MongoClient(uri, server_api=ServerApi('1'))

    tabla = client["test"]["configuracion"]

    query = {
        "_id": 1
    }

    data = tabla.find(query)

    for x in data:
        if x:
            return x
        else:
            return None
