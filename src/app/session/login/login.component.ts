import { Component, OnInit } from "@angular/core";
import { ApiModule } from "../../api/api.module";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  role: string;
  constructor(
    private api: ApiModule,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    if (localStorage.getItem("authentication") != null) {
      this.router.navigate(["main/dashboard"]);
    } else {
      this.router.navigate(["session/login"]);
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, null, {
      duration: 1000,
    });
  }
  login() {
    var sub = this.api.login(this.role,this.email, this.password, (err, result) => {
      if (err) {
        this.openSnackBar("Login Failed", null);
      } else {
        result = JSON.parse(result._body);
        this.openSnackBar("Login Successfull", null);
      }
      this.router.navigate(["main/dashboard"]);
    });
    // this.api.login('admin@gmail.com','abc123',(err,res)=>{
    //   console.log('response ', res)
    // })
  }
}
