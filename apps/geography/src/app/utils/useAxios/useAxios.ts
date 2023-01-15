import axios, { AxiosResponse } from 'axios';

export interface IGenericResponse {
  data? : any,
  errors? : any,
  statusCode?: number,
}

export interface IGenericRequest {
  type : 'GET' | 'POST' | 'PUT' | 'DELETE';
  baseUrl : string;
  endpoint: string;
  params : any;
  headers : any;
}

export const useAxios = async({
  type,
  baseUrl,
  endpoint,
  headers,
  params
} : IGenericRequest) : Promise<AxiosResponse> => {
  const options = {
    method: type,
    url: `${baseUrl}/${endpoint}`,
    params: params,
    headers: headers
  };

  return await axios.request(options);
};
