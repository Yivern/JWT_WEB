from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

def connectDB():
    #Conexion a MongoDB
    #URL para conectar con Mongo
    uri = "mongodb+srv://JesusAngarita:Jesus780228@proyectoreact.vetue4i.mongodb.net/?retryWrites=true&w=majority&appName=proyectoReact"

    # Crear un cliente para conectar 
    client = MongoClient(uri, server_api=ServerApi('1'))

    # Verificacion de que se conectó con exito
    try:
        client.admin.command('ping')
        print("Pinged your deployment. You successfully connected to MongoDB!")
    except Exception as e:
        print(e)

    

connectDB()