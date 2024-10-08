# Usa una imagen de Node.js imagen oficial tomada de docker hub
ARG NODE_VERSION=21.6.0

# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine as base

# Establece el directorio de trabajo dentro del contenedor 
WORKDIR /app 

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente
COPY . .

# Exponer el puerto 4200 para la aplicación Angular
EXPOSE 4200

# Ejecuta la aplicación en modo desarrollo
CMD ["npm", "start", "--", "--host", "0.0.0.0"]