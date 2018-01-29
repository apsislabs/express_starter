# README

## Getting Started

1. `docker-compose up -d`
2. wait for it...
3. visit `localhost:3000`
4. rejoice!

### First Run


### Connection to the container

You can either run:

```
$ docker-compose exec web sh
```

or

```
$ bin/ssh_to_container
```

### Recommended Reading

## The Containers

If you look in `docker-compose.yml` you'll notice that we've spun up a number of containers, not all of which may be useful for your project.

1. **web**: Your core container.
2. **redis**: A `redis` instance.
3. **localstack**: [`localstack`](https://github.com/localstack/localstack) is a suite of fake AWS services.
4. **mysql**: Your application's database.
6. **stripe**: An officially supported stripe mock.
7. **mailcatcher**: For viewing emails on your local environment.
