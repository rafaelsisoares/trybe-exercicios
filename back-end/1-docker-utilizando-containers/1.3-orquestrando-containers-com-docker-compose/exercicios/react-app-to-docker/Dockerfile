# Imagem base
FROM node:13-alpine

# Diretório onde ficará a aplicação
WORKDIR /react-app

ENV PATH /react-app/node_modules/.bin:$PATH

# Copiando o package.json e instalando as dependências
COPY package.json /react-app/package.json
RUN npm install
RUN npm install react-scripts@3.3.1 -g

# Iniciando a aplicação
CMD [ "npm", "start" ]

# Expondo a porta
EXPOSE 80
