import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiModule } from "../api/api.module";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public user;
  constructor(private route: Router, private api: ApiModule) {}

  ngOnInit() {
    this.user = this.api.getUserObject();
    console.log(this.user);
  }
  logout() {
    localStorage.removeItem(this.api.getLocalKey());
    this.route.navigate([`/session/login`]);
  }
}
