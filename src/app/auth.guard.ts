import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { from, Observable } from "rxjs";
import { ApiModule } from "./api/api.module";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private api: ApiModule, private router: Router) {}

  canActivate(): boolean {
    if (this.api.isLoggedIn() || this.api.getUserObject() != null) {
      return true;
    } else {
      this.router.navigate(["session/login"]);
      return false;
    }
  }
}
