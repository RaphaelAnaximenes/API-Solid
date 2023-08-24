import { MissingParamError } from '../errors/missing-params-error';
import { httpRequest, httpResponse } from './../protocols/http';
import { badRequest } from '../helpers/http-helper'
export class SignUpController{
  handle (httpRequest: httpRequest): httpResponse {
    if(!httpRequest.body.name){
      return badRequest(new MissingParamError('name'))
    }

    if(!httpRequest.body.email){
      return badRequest( new MissingParamError('email'))
    }
  }
}