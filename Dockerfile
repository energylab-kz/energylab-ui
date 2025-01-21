FROM nginx:1.27.3-alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY . /usr/share/nginx/html

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]