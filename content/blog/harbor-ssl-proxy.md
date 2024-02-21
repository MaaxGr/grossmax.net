
This is how to run a nginx proxy with ssl support using lets encrypt certificates.

## Prepare nginx.conf

```js [nginx.conf]
server {
  listen 80;
  listen [::]:80;
  server_name localhost;

  client_max_body_size 0;
  chunked_transfer_encoding on;

  location / {
    proxy_pass http://vh07.maax.gr:81;
    proxy_set_header  Host              $http_host;
    proxy_set_header  X-Real-IP         $remote_addr;
    proxy_set_header  X-Forwarded-For   $proxy_add_x_forwarded_for;
    proxy_set_header  X-Forwarded-Proto $scheme;
    proxy_buffering off;
    proxy_request_buffering off;
  }
}
```

* Change `proxy_pass` to the adress where harbor is running on http


## Create docker-compose.yml

```
version: "3"

services:
  harbor-proxy:
    image: nginx
    expose:
      - 80
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf
    environment:
      VIRTUAL_HOST: harbor.maax.gr
      VIRTUAL_PORT: 80
      LETSENCRYPT_HOST: harbor.maax.gr
      LETSENCRYPT_EMAIL: admin@maax.gr


networks:
  default:
    external:
      name: compose-net

```

