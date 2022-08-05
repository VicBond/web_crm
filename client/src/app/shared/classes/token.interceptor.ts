import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Injectable()
export class TokenInterceptor {
constructor(private auth: AuthService) {

}
}
