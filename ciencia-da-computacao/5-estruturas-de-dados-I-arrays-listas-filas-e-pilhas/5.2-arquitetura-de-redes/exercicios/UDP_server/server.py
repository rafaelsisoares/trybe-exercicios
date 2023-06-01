from socketserver import DatagramRequestHandler, UDPServer


class UDP(DatagramRequestHandler):
    def handle(self):
        for line in self.rfile:
            self.wfile.write(line)
            print(line.decode('utf-8').strip())


if __name__ == '__main__':
    HOST, PORT = '127.0.0.1', 8084
    with UDPServer((HOST, PORT), UDP) as server:
        server.serve_forever()
