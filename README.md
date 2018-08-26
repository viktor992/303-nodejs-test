# 303 Software NodeJS test

Simple NodeJS application for author/content management.

## Development

Install dependencies:

```bash
$ npm i
```

Add configuration file:

```bash
$ cp config/config.json.example config/config.json
```

Create database if necessary:

```bash
$ npm run create:db
```

Run it:
```bash
$ npm run start
```

## Technologies used

* NodeJS
* Express
* Sequelize

## Code Style

The Airbnb JavaScript code style is used in this project.

To run a linting tool (eslint) to check the code style, run:

```bash
$ npm run lint
```
## Database scripts

To create a database for the current environment run:

```bash
$ npm run create:db
```

Run this command to execute pending migrations:

```bash
$ npm run migrate
```

or this one to revert a migration:

```bash
$ npm run migrate:undo
```

To run every seed execute the following command:

```bash
$ npm run seed
```

## Available Endpoints

- `GET /contents` : Obtains all entries.
- `GET /contents/{id}` : Obtains a single entry.
- `POST /contents` : Registers a new entry.
- `DELETE /contents/{id}` : Deletes an entry.
- `PUT /contents/{id}` : Updates an entry.
