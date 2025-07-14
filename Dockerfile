FROM node:16 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod



FROM nginx:alpine
COPY --from=builder /app/dist/frontend /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
