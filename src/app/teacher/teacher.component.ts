import { Component, OnInit, Inject } from "@angular/core";
import { User } from "../model/user.module";
import { Router } from "@angular/router";
import { ApiModule } from "../api/api.module";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { TeacherEditComponent } from "../teacher/teacher-edit/teacher-edit.component";
import { TeacherDeleteComponent } from "./teacher-delete/teacher-delete.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Constants } from "./../../assets/constants";

@Component({
  selector: "app-teacher",
  templateUrl: "./teacher.component.html",
  styleUrls: ["./teacher.component.scss"],
})
export class TeacherComponent implements OnInit {
  public teachers: User[] = [];
  public isProgress: boolean;
  constructor(private api: ApiModule, public dialog: MatDialog) {}

  ngOnInit() {
    this.isProgress = true;
    this.getTeachers();
  }

  openDialog(teacherData): void {
    const dialogRef = this.dialog.open(TeacherEditComponent, {
      width: "auto",
      data: teacherData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }

  openDeleteDialog(teacherData): void {
    const dialogRef = this.dialog.open(TeacherDeleteComponent, {
      width: "auto",
      data: teacherData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getTeachers();
    });
  }

  getTeachers() {
    this.api.getAllClients(Constants.ROLE_TEACHER, (res) => {
      this.teachers = res;
      this.isProgress = false;
    });
  }
}
