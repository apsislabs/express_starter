# starterapp

## Setting up

1. pull the codebase
1. `bin/rename [your-app-name]` # your-app-name should be a npm friendly package name.
1. `rm bin/rename`
1. delete this `setting up` section of the readme

### Optional

#### Port Changes

The docker-compose maps the server to port `80` on the host. You may want to move it to a different port. Change the port mapping in the following files:

- `docker-compose.yml`
- `README.me` (just below in the `getting started` section)

## Getting Started

1. `docker-compose up`
2. visit `localhost:80`
3. rejoice!

## Developing

### Connection to the container

`bin/ssh_to_container`

### Connecting to the database

From inside the container run:

`ops/psql.sh`

### Migrations

`npm run g:migration [name]`

Migrations will automatically be run up to latest on application startup.

To rollback a migration, run in the docker container: `npx knex migrate:rollback`. To rollback a single step run: `npx knex migration:down`.

### Recommended Reading

## The Containers

If you look in `docker-compose.yml` you'll notice that we've spun up a number of containers, not all of which may be useful for your project.

1. **server**: Your core container.
1. **db**: A postgres database.
1. **mailcatcher**: For viewing emails on your local environment. (disabled by default)
1. **localstack**: [`localstack`](https://github.com/localstack/localstack) is a suite of fake AWS services. (disabled by default)
1. **redis**: A `redis` instance. (disabled by default)

---

# Built by Apsis

[![apsis](https://s3-us-west-2.amazonaws.com/apsiscdn/apsis.png)](https://www.apsis.io)

`express_starter` was built by Apsis Labs. We love sharing what we build! Check out our [other libraries on Github](https://github.com/apsislabs), and if you like our work you can [hire us](https://www.apsis.io/work-with-us/) to build your vision.
