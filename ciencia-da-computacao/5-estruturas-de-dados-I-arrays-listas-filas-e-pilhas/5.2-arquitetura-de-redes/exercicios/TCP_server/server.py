# https://docs.python.org/3/library/socketserver.html
from socketserver import StreamRequestHandler, TCPServer


class TCP(StreamRequestHandler):
    def handle(self):
        self.wfile.write(b"Ola, client\n")
        for line in self.rfile:
            # Response
            self.wfile.write(line)
            # Console
            print(line.decode('ascii').strip())


if __name__ == '__main__':
    HOST, PORT = '127.0.0.1', 8085
    with TCPServer((HOST, PORT), TCP) as server:
        server.serve_forever()
