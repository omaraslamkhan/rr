import { Student } from "./../model/user.module";
import { Constants } from "./../../assets/constants";
import { NgModule, Injectable } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Http } from "@angular/http";
import { User } from "../model/user.module";
import { BrowserModule } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";
import { Subscription } from "rxjs";

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
@Injectable()
export class ApiModule {
  private KEY_AUTHENTICATION: string = "authentication";
  private authenticated: boolean;
  constructor(private http: Http, private router: Router) {}

  private getUrl(url: string): string {
    return `${environment.apiUrl}` + url;
  }

  public getLocalKey() {
    return this.KEY_AUTHENTICATION;
  }

  public getUserObject(): any {
    if (localStorage.getItem(this.KEY_AUTHENTICATION)) {
      return JSON.parse(localStorage.getItem(this.KEY_AUTHENTICATION)).user;
    }
    this.router.navigate([`/session/login`]);
  }

  public async login(
    role: string,
    email: string,
    password: string,
    cb: Function
  ) {
    var loginUrl = "";

    switch (role) {
      case Constants.ROLE_ADMIN: {
        loginUrl = "Clients/login?include=user";
        break;
      }
      case Constants.ROLE_PARENT: {
        loginUrl = "Clients/login?include=user";
        break;
      }
      case Constants.ROLE_TEACHER: {
        loginUrl = "teachers/login?include=user";
        break;
      }
      case Constants.ROLE_STUDENT: {
        loginUrl = "students/login?include=user";
        break;
      }
      default:
        break;
    }

    let loginObserver = await this.http.post(this.getUrl(`${loginUrl}`), {
      email: email,
      password: password,
    });

    loginObserver.subscribe(
      (response) => {
        localStorage.setItem(
          this.KEY_AUTHENTICATION,
          JSON.stringify(response.json())
        );
        this.authenticated = true;
        cb(null, response);
      },
      (error) => {
        this.authenticated = false;
        this.handleError(error, cb);
      }
    );
  }

  isLoggedIn() {
    return this.authenticated;
  }

  public signup(data: User, cb: Function) {
    let sendObeserver = this.http.post(
      this.getUrl(`Clients/upsertWithWhere?[where][email]=${data.email}`),
      data
    );
    sendObeserver.subscribe(
      (response) => {
        cb(null, response.json());
      },
      (error) => {
        this.handleError(error, cb);
      }
    );
  }

  // Teachers Section
  public addClient(data: User, cb: Function) {
    const observer = this.http.post(this.getUrl(`Clients`), data);
    observer.subscribe(
      (response) => {
        cb(null, response);
      },
      (error) => {
        this.handleError(error, cb);
      }
    );
  }
  updateClient(data: User, cb: Function) {
    const observer = this.http.post(
      this.getUrl(`Clients/update?[where][id]=${data.id}`),
      data
    );
    observer.subscribe(
      (response) => {
        cb(null, response);
      },
      (error) => {
        this.handleError(error, cb);
      }
    );
  }

  getAllClients(role, cb: (data: User[]) => void): Subscription {
    const observer = this.http.get(
      this.getUrl(
        `Clients?filter[where][role]=${role}&filter[where][isActive]=true&filter[include]=Student`
      )
    );
    return observer.subscribe(
      (response) => {
        cb(response.json() as User[]);
      },
      (error) => {
        this.handleError(error, cb);
      }
    );
  }
  //Add child

  public addChild(data: Student, cb: Function) {
    const observer = this.http.post(this.getUrl(`students`), data);
    observer.subscribe(
      (response) => {
        cb(null, response);
      },
      (error) => {
        this.handleError(error, cb);
      }
    );
  }

  //get students
  getAllStudents(cb: (data: Student[]) => void): Subscription {
    const observer = this.http.get(
      this.getUrl(
        `students?filter[where][isActive]=true&filter[where][parentId]=${
          this.getUserObject().id
        }`
      )
    );
    return observer.subscribe(
      (response) => {
        cb(response.json() as Student[]);
      },
      (error) => {
        this.handleError(error, cb);
      }
    );
  }

  getAllStudentsForAdmin(
    parentId,
    cb: (data: Student[]) => void
  ): Subscription {
    const observer = this.http.get(
      this.getUrl(
        `students?filter[where][isActive]=true&filter[where][parentId]=${parentId}`
      )
    );
    return observer.subscribe(
      (response) => {
        cb(response.json() as Student[]);
      },
      (error) => {
        this.handleError(error, cb);
      }
    );
  }

  private handleError(err: any, cb: any) {
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", err.error.message);
      var errorMsg = `'An error occurred:', ${err.error.message}`;
      cb(errorMsg);
      return errorMsg;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      var errorMsg =
        `Backend returned code ${err.status}, ` + `body was: ${err.error}`;
      console.error(errorMsg);
      cb(errorMsg);

      return `Backend returned code ${err.status}, ` + `body was: ${err.error}`;
    }
  }
}
