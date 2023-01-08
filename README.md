# Geocities API

This project was generated using [Nx](https://nx.dev).

🔎 **Smart, Fast and Extensible Build System**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@eg.geocities.management/mylib`.

## Development server

Run `npm run start` for a dev server. Navigate to http://localhost:3000/api/. The app will automatically reload if you change any of the source files.


## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Docker development

Run `docker-compose up` to build and start the project on containers. The following docker compose file will mount a container in the 3000.  
You just need to set the right environment keys. Replace the the string that are into i  
Navigate to http://localhost:3000/api/

```
version: '3.7'
services:
  geography: 
    build:
      context: .
      dockerfile: ./apps/geography/Dockerfile
    ports:
      - "3000:3000"
    environment: 
      APIBaseUrl: BASEURL_TO_BE_REPLACED
      APIHost: APIHOST_TO_BE_REPLACED
      APIKey: APIKEY_TO_BE_REPLACED
```

## Running unit tests

Run `npm run test` to execute the unit tests via [Jest](https://jestjs.io).

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
