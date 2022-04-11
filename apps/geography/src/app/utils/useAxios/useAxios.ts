import { IGenericRequest } from '../requestHandler/interfaces';
import axios, { AxiosResponse }  from 'axios';

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
