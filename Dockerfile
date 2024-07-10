# Node Block
FROM node:alpine as bounceAdFe
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000

# Nginx Block
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=bounceAdFe /app/build .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
