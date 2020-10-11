import { Student } from "./../../../model/user.module";
import { Component, OnInit, Inject } from "@angular/core";
import { Constants } from "../../../../assets/constants";
import { User } from "../../../model/user.module";
import { ApiModule } from "../../../api/api.module";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { MatSnackBar } from "@angular/material/snack-bar";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";

@Component({
  selector: "app-children-add",
  templateUrl: "./children-add.component.html",
  styleUrls: ["./children-add.component.scss"],
})
export class ChildrenAddComponent implements OnInit {
  public student = new Student();
  loggedinUSer;
  constructor(
    private api: ApiModule,
    private router: Router,
    private _location: Location,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ChildrenAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.student.parentId = data.id;
  }

  ngOnInit() {}
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, null, {
      duration: 1000,
    });
  }

  saveChild() {
    this.student.role = Constants.ROLE_STUDENT;
    if (this.api.getUserObject().role === Constants.ROLE_ADMIN) {
    } else {
      this.loggedinUSer = this.api.getUserObject().id;
      this.student.parentId = this.loggedinUSer;
    }

    this.api.addChild(this.student, (err, result) => {
      this.openSnackBar("Added", null);
      this._location.back();
    });
  }
}
