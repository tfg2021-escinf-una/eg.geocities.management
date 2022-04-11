import { IGenericRequest, IGenericResponse } from './interfaces';
import { useAxios } from '../useAxios';

export const requestHandler = async({
  type,
  baseUrl,
  endpoint,
  params,
  headers,
} : IGenericRequest) : Promise<IGenericResponse> => {

  const genericResponse : IGenericResponse = {
    response : {},
    errors : [],
    statusCode : 0
  };

  try {

    const response = await useAxios({
      type: type,
      baseUrl: baseUrl,
      endpoint: endpoint,
      params: params,
      headers: headers
    });

    genericResponse.response = response.data;
    genericResponse.errors = [];
    genericResponse.statusCode = response.status;
  }
  catch(err){
    console.error(err);
    genericResponse.errors = err;
  }

  return genericResponse;
};
