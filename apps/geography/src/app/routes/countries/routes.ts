import { getCountries, controllerName } from "../../controllers";
import { Application, Request, Response, NextFunction } from "express";
import { defaultPrefix } from "../config";

export const useCountryRoutes = (app : Application) => {
  app.use((_req : Request, res : Response, next : NextFunction) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

 /**
   * @swagger
   * /api/v1/countries/getCountries:
   *  get:
   *    tags:
   *      - Countries
   *    summary: Endpoint used to get countries.
   *    consumes:
   *      - application/json
   *    responses:
   *      '200':
   *        description: Retrieve has been successfully
   *      '500':
   *        description: Server error
   */
  app.get(`${defaultPrefix}/${controllerName}/getCountries`, [], getCountries);
};