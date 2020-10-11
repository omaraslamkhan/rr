import { Constants } from "./../../../assets/constants";
import { Student } from "./../../model/user.module";
import { Component, OnInit,Inject } from "@angular/core";
import { User } from "../../model/user.module";
import { ApiModule } from "../../api/api.module";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ParentDeleteComponent } from "../parent-delete/parent-delete.component";
import { ParentEditComponent } from "../parent-edit/parent-edit.component";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
@Component({
  selector: "app-children",
  templateUrl: "./children.component.html",
  styleUrls: ["./children.component.scss"],
})
export class ChildrenComponent implements OnInit {
  public students: Student[] = [];
  public isProgress: boolean;
  parentId;
  
  constructor(private api: ApiModule) {
    // , public dialog: MatDialog, public dialogRef: MatDialogRef<ChildrenComponent>, @Inject(MAT_DIALOG_DATA) public data: any
    // this.parentId = data;
  }

  ngOnInit() {
    debugger;
    console.log(this.parentId);
    
    this.isProgress = true;

    this.getStudents();
  }
  getStudents() {
    if (this.api.getUserObject().role === Constants.ROLE_ADMIN) {
      this.api.getAllStudentsForAdmin(this.parentId,(res) => {
        this.students = res;
        this.isProgress = false;
      });
    } else {
      this.api.getAllStudents((res) => {
        this.students = res;
        this.isProgress = false;
      });
    }
  }

  // openDeleteDialog(teacherData): void {
  //   const dialogRef = this.dialog.open(ParentDeleteComponent, {
  //     width: "auto",
  //     data: teacherData,
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     this.getStudents();
  //   });
  // }

  // openDialog(parentData): void {
  //   const dialogRef = this.dialog.open(ParentEditComponent, {
  //     width: "auto",
  //     data: parentData,
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log("The dialog was closed");
  //   });
  // }
}
