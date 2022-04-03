import { Application } from "express";
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

export const useSwagger = (app)  => {
  const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'EG GeoCities Management',
        description: 'API Documentation, every endpoint will be found here.',
        contact: {
          name: 'TFG2021 Devs',
          email: 'tfg2021.escinf.una@gmail.com'
        },
        license: {
          name: 'MIT',
        },
        version: '1.0.1',
        basePath: '/'
      },
    },
    apis: ['**/*.ts'], // files containing annotations as above
  };

  const swaggerDocs = swaggerJsDoc(options);

  // Defining swagger endpoint.
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs, { 'showExplorer': true }));
};
