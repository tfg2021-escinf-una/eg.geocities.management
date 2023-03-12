import { Request, Response } from 'express';
import { environment } from '../../../environment';
import { requestHandler } from '../../utils';

const {
  APIBaseUrl,
  APIHost,
  APIKey
} = environment

export const controllerName = 'countries';
export const getCountries = async (req : Request, res : Response) => {
  const reqQueryParams = {
    currencyCode : req.query?.currencyCode,
  };

  const response = await requestHandler({
    type: 'GET',
    baseUrl: APIBaseUrl,
    endpoint: 'v1/geo/countries',
    params : reqQueryParams,
    headers: {
      'X-RapidAPI-Host': APIHost,
      'X-RapidAPI-Key': APIKey
    }
  });

  return res.status(response.statusCode)
    .json(response)
    .end();
};

export const getCountryDetails = async(req : Request, res : Response) => {
  const reqQueryParams = {
    languageCode : req.query?.languageCode,
    asciiMode : req.query?.asciiMode,
  };

  const response = await requestHandler({
    type: 'GET',
    baseUrl: APIBaseUrl,
    endpoint: `v1/geo/countries/${req.params?.countryid}`,
    params : reqQueryParams,
    headers: {
      'X-RapidAPI-Host': APIHost,
      'X-RapidAPI-Key': APIKey
    }
  });

  res.status(response.statusCode)
    .json(response)
    .end();
};

export const getCountryRegions = async(req : Request, res : Response) => {
  const reqQueryParams = {
    languageCode : req.query?.languageCode,
    asciiMode : req.query?.asciiMode,
    limit: req.query?.limit
  };

  const response = await requestHandler({
    type: 'GET',
    baseUrl: APIBaseUrl,
    endpoint: `v1/geo/countries/${req.params?.countryid}/regions`,
    params : reqQueryParams,
    headers: {
      'X-RapidAPI-Host': APIHost,
      'X-RapidAPI-Key': APIKey
    }
  });

  res.status(response.statusCode)
    .json(response)
    .end();
};

export const getCountryRegionsDivisions = async(req : Request, res : Response) => {
  const reqQueryParams = {
    sort : req.query?.languageCode,
    offset : req.query?.offset,
    limit: req.query?.limit
  };

  const response = await requestHandler({
    type: 'GET',
    baseUrl: APIBaseUrl,
    endpoint: `v1/geo/countries/${req.params?.countryid}/regions/${req.params?.regioncode}/adminDivisions`,
    params : reqQueryParams,
    headers: {
      'X-RapidAPI-Host': APIHost,
      'X-RapidAPI-Key': APIKey
    }
  });

  res.status(response.statusCode)
    .json(response)
    .end();
};
