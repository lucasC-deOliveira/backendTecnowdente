import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import auth from "../../../config/auth";
import { AppError } from "../../../errors/AppError";

interface IPayload {
  sub: string;
}

interface AppRequest extends Request {
  user: {
    id: string
  }
}

export async function ensureAuthenticated(request: AppRequest, response: Response, next: NextFunction) {
  const authHeader = request.headers["authorization"] ||  request.headers["Authorization"] ;

  if (!authHeader) {
    throw new AppError("Token missing", 401)
  }

  const [, token] = authHeader.split(" ")

  if(!token){
    throw new AppError("Token invalid", 401)
    
  }

  try {
    const { sub: user_id } = verify(token, auth.secret_token) as IPayload;

    request.user = {
      id: user_id
    }

    next()
  }

  catch {
    // throw new AppError("Invalid token!", 401)
    return response.status(401).json({ message: "invalid token" })
  }

}