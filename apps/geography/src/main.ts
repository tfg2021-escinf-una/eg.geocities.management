import * as express from 'express';
import { useSwagger } from './swagger';
import { useCountryRoutes } from './app/routes';
import bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// liveness route 
app.get('/', (req, res) => {
  res.send('Web API running')
})

// swagger
useSwagger(app);

// inject routes
useCountryRoutes(app);

// server configuration
const port = process.env.port || 3000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
