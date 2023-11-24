FROM ubuntu:22.04

RUN apt-get update && apt-get install -y nginx certbot python3-certbot-nginx

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
