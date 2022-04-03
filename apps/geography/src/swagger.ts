import swaggerUi = require('swagger-ui-express');
import swaggerJsDoc = require('swagger-jsdoc');

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
        version: '0.0.0',
        basePath: '/api'
      },
    },
    apis: ['**/*.ts'], // files containing annotations as above
  };

  const swaggerDocs = swaggerJsDoc(options);

  // Defining swagger endpoint.
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs, { 'showExplorer': true }));
};
