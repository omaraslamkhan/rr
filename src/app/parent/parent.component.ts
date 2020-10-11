import { ChildrenComponent } from './children/children.component';
import { ChildrenAddComponent } from "./children/children-add/children-add.component";
import { ParentDeleteComponent } from "./parent-delete/parent-delete.component";
import { ParentEditComponent } from "./parent-edit/parent-edit.component";
import { Component, OnInit } from "@angular/core";
import { User } from "../model/user.module";
import { ApiModule } from "../api/api.module";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { Constants } from "./../../assets/constants";
@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.scss"],
})
export class ParentComponent implements OnInit {
  public parents: User[] = [];
  public isProgress: boolean;

  constructor(private api: ApiModule, public dialog: MatDialog) {}

  ngOnInit() {
    this.isProgress = true;

    this.getParents();
  }
  getParents() {
    this.api.getAllClients(Constants.ROLE_PARENT, (res) => {
      this.parents = res;
      this.isProgress = false;
    });
  }

  openDeleteDialog(teacherData): void {
    const dialogRef = this.dialog.open(ParentDeleteComponent, {
      width: "auto",
      data: teacherData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getParents();
    });
  }

  openAddChildDialog(data): void {
    const dialogRef = this.dialog.open(ChildrenAddComponent, {
      width: "auto",
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getParents();
    });
  }

  openDialog(parentData): void {
    const dialogRef = this.dialog.open(ParentEditComponent, {
      width: "auto",
      data: parentData,
    });
  }

  openChildrenList(data): void {
    const dialogRef = this.dialog.open(ChildrenComponent, {
      width: "auto",
      data: data.id,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }
}
