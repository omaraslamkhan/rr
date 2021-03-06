import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { ApiModule } from "../../api/api.module";
import { User } from "../../model/user.module";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-parent-edit",
  templateUrl: "./parent-edit.component.html",
  styleUrls: ["./parent-edit.component.scss"],
})
export class ParentEditComponent implements OnInit {
  public parent = new User();
  constructor(
    private _snackBar: MatSnackBar,
    private api: ApiModule,
    private router: Router,
    public dialogRef: MatDialogRef<ParentEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.parent = data;
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, null, {
      duration: 1000,
    });
  }
  ngOnInit() {}
  updateParent() {
    this.api.updateClient(this.parent, (err, response) => {
      if (err) {
        this._snackBar.open("Failed to Update ", "", {
          duration: 1000,
        });
      } else {
        this._snackBar.open("Successfully Updated ", "", {
          duration: 1000,
        });
        this.dialogRef.close();
      }
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
