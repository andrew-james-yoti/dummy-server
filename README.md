openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 -out certificate.pem

## docker

build

```shell
 docker build -t dummy-server:1.0 .
```

```shell
docker run \
--publish 3000:3000 \
--name dummy-server \
dummy-server:1.0
```