import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class AuthenticatedGuard implements CanActivate{
    async canActivate(context: ExecutionContext): Promise<any> {
        const request = context.switchToHttp().getRequest() as Request;
        try{
            return request.isAuthenticated();
        }catch(e){
            throw new ForbiddenException();
        }
    }
} 