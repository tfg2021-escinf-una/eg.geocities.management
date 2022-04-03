import { Request, Response } from 'express';
import { requestHandler } from '../../utils';

export const controllerName = 'countries';

export const getCountries = async (req : Request, res : Response) => {

  const reqQueryParams = {
    currencyCode : req.query?.currencyCode,
  };

  const response = await requestHandler({
    type: 'GET',
    baseUrl: 'https://wft-geo-db.p.rapidapi.com',
    endpoint: 'v1/geo/countries',
    params : reqQueryParams,
    headers: {
      'X-RapidAPI-Host': process.env.XRapidAPIHost,
      'X-RapidAPI-Key': process.env.XRapidAPIKey
    }
  });

  res.status(response.statusCode).json(response);
};

export const getCountryDetails = async(req : Request, res : Response) => {

  const reqQueryParams = {
    languageCode : req.query?.languageCode,
    asciiMode : req.query?.asciiMode,
  };

  const response = await requestHandler({
    type: 'GET',
    baseUrl: 'https://wft-geo-db.p.rapidapi.com',
    endpoint: `v1/geo/countries/${req.params?.countryid}`,
    params : reqQueryParams,
    headers: {
      'X-RapidAPI-Host': process.env.XRapidAPIHost,
      'X-RapidAPI-Key': process.env.XRapidAPIKey
    }
  });

  res.status(response.statusCode).json(response);
};

export const getCountryRegions = async(req : Request, res : Response) => {

  const reqQueryParams = {
    languageCode : req.query?.languageCode,
    asciiMode : req.query?.asciiMode,
    limit: req.query?.limit
  };

  const response = await requestHandler({
    type: 'GET',
    baseUrl: 'https://wft-geo-db.p.rapidapi.com',
    endpoint: `v1/geo/countries/${req.params?.countryid}/regions`,
    params : reqQueryParams,
    headers: {
      'X-RapidAPI-Host': process.env.XRapidAPIHost,
      'X-RapidAPI-Key': process.env.XRapidAPIKey
    }
  });

  res.status(response.statusCode).json(response);
};

export const getCountryRegionsDivisions = async(req : Request, res : Response) => {

  const reqQueryParams = {
    sort : req.query?.languageCode,
    offset : req.query?.asciiMode,
    limit: req.query?.limit
  };

  const response = await requestHandler({
    type: 'GET',
    baseUrl: 'https://wft-geo-db.p.rapidapi.com',
    endpoint: `v1/geo/countries/${req.params?.countryid}/regions/${req.params?.regioncode}/adminDivisions`,
    params : reqQueryParams,
    headers: {
      'X-RapidAPI-Host': process.env.XRapidAPIHost,
      'X-RapidAPI-Key': process.env.XRapidAPIKey
    }
  });

  res.status(response.statusCode).json(response);
};
