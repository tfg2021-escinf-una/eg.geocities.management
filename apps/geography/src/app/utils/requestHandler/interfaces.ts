export interface IGenericResponse {

    response? : any,
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
