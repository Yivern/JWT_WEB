from http.server import HTTPServer,BaseHTTPRequestHandler
import json, sys

from pprint import pprint
from pathlib import Path
path_root = Path(__file__).parents[5]
sys.path.append(str(path_root))

from proyecto_login.core.controllers.auth_controller.auth_controller import controller

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Authorization, Content-Type')
        self.end_headers()

    def do_POST (self):
        if self.path == "/users/auth":
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data)
            username = data['user']
            password = data['pass']

            payload = controller(username, password)
            self.send_response(payload['statusCode'])
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(payload).encode())
            return

        if self.path == "/users/register":
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data)
            
            username = data["user"]
            password = data["pass"]
            return
        
        if self.path != "/users/auth" or "/users/register":
            self.send_response(404)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            error = "No existe este endpoint"
            self.wfile.write(json.dumps(error).encode())
            return

def run(server_class = HTTPServer, handler_class = SimpleHTTPRequestHandler, port=3001):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Starting server on port {port}')
    httpd.serve_forever()

if __name__ == '__main__':
    run()
