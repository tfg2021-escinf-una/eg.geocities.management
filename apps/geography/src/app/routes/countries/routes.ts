import { Application, NextFunction, Request, Response } from 'express';
import { controllerName, getCountries, getCountryDetails, getCountryRegions, getCountryRegionsDivisions } from '../../controllers';
import { defaultPrefix } from '../prefix';

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
   * /api/v1/countries/:
   *  get:
   *    tags:
   *      - Countries
   *    summary: Endpoint used to get a list countries.
   *    consumes:
   *      - application/json
   *    parameters:
   *      - in: query
   *        name: currencyCode
   *        schema:
   *          type: string
   *    responses:
   *      '200':
   *        description: The retrieve operation has been successfully
   *      '500':
   *        description: Server Internal Error
   */
  app.get(`${defaultPrefix}/${controllerName}/`, [
    //middleware in needed case.
  ], getCountries);

  /**
   * @swagger
   * /api/v1/countries/{countryid}:
   *  get:
   *    tags:
   *      - Countries
   *    summary: Endpoint used to get a specific country based on their code.
   *    consumes:
   *      - application/json
   *    parameters:
   *      - in: path
   *        name: countryid
   *        required: true
   *        schema:
   *          type: string
   *    responses:
   *      '200':
   *        description: The retrieve operation has been successfully
   *      '500':
   *        description: Server Internal Error
   */
  app.get(`${defaultPrefix}/${controllerName}/:countryid`, [
    //middleware in needed case.
  ], getCountryDetails);

  /**
   * @swagger
   * /api/v1/countries/{countryid}/regions:
   *  get:
   *    tags:
   *      - Countries
   *    summary: Endpoint used to get a list of regions based on the country.
   *    consumes:
   *      - application/json
   *    parameters:
   *      - in: path
   *        name: countryid
   *        required: true
   *        schema:
   *          type: string
   *      - in: query
   *        name: limit
   *        schema:
   *          type: integer
   *    responses:
   *      '200':
   *        description: The retrieve operation has been successfully
   *      '500':
   *        description: Server Internal Error
   */
  app.get(`${defaultPrefix}/${controllerName}/:countryid/regions`, [
    //middleware in needed case.
  ], getCountryRegions);

  /**
   * @swagger
   * /api/v1/countries/{countryid}/regions/{regioncode}/adminDivisions:
   *  get:
   *    tags:
   *      - Countries
   *    summary: Endpoint used to get the divisions of a region based on a country.
   *    consumes:
   *      - application/json
   *    parameters:
   *      - in: path
   *        name: countryid
   *        required: true
   *        schema:
   *          type: string
   *      - in: path
   *        name: regioncode
   *        required: true
   *        schema:
   *          type: string
   *      - in: query
   *        name: limit
   *        schema:
   *          type: integer
   *    responses:
   *      '200':
   *        description: The retrieve operation has been successfully
   *      '500':
   *        description: Server Internal Error
   */
  app.get(`${defaultPrefix}/${controllerName}/:countryid/regions/:regioncode/adminDivisions`, [
    //middleware in needed case.
  ], getCountryRegionsDivisions);
};
