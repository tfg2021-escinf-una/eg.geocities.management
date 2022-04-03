import { Request, Response } from 'express';

export const controllerName = "countries";

export const getCountries = async(req : Request, res : Response ) => {
    res.status(200).json({
        "message" : "Successful"
    });
};