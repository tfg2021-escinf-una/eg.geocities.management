import * as express from 'express';
import { useCountryRoutes } from './app/routes';
import { environment } from './environment';
import { useSwagger } from './swagger';
import bodyParser = require('body-parser');

const { ProductionMode } = environment
const app = express();

app.use(bodyParser.json());

// liveness route
app.get('/', (_req, res) => {
  res.send('Web API running')
})

if(!ProductionMode)
  useSwagger(app);
useCountryRoutes(app);

// server configuration
const port = process.env.port || 3000;
const server = app.listen(port, () => {
  console.log(`ProductionMode: ${ProductionMode}`)
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
