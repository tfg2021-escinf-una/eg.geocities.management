import { IGenericRequest, IGenericResponse, useAxios } from '../useAxios';

export const requestHandler = async({
  type,
  baseUrl,
  endpoint,
  params,
  headers,
} : IGenericRequest) : Promise<IGenericResponse> => {
  try {
    const {
      data,
      status
    } = await useAxios({
      type: type,
      baseUrl: baseUrl,
      endpoint: endpoint,
      params: params,
      headers: headers
    });

    return {
      data: data,
      errors: [],
      statusCode: status
    }
  }
  catch(err){
    console.error(err);
    return {
      statusCode: err.response.status,
      errors: err
    };
  }
};
