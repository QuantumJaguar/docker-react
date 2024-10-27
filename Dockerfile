FROM node:20-alpine3.20 AS builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
#new block starts from FROM
FROM nginx:alpine
# EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
