FROM node:alpine as builder
WORKDIR /app
COPY package.json package-lock.json .
RUN ["npm", "install"]
COPY . .
RUN ["npm", "run", "build"]

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]


