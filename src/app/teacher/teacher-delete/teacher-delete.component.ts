import { Component, OnInit, Inject } from "@angular/core";
import { ApiModule } from "../../api/api.module";
import { MatSnackBar } from "@angular/material/snack-bar";
import { User } from "../../model/user.module";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
@Component({
  selector: "app-teacher-delete",
  templateUrl: "./teacher-delete.component.html",
  styleUrls: ["./teacher-delete.component.scss"],
})
export class TeacherDeleteComponent implements OnInit {
  public teacher = new User();

  constructor(
    private api: ApiModule,
    public dialogRef: MatDialogRef<TeacherDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar
  ) {
    this.teacher = data;
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, null, {
      duration: 1000,
    });
  }

  toDelete(answer) {
    if (answer == "Yes") {
      this.teacher.isActive = false;

      this.api.updateClient(this.teacher, (err, res) => {
        if (err) {
          this._snackBar.open("Failed to Delete ", "", {
            duration: 1000,
          });
        } else {
          this._snackBar.open("Successfully Deleted ", "", {
            duration: 1000,
          });
          this.dialogRef.close();
        }
      });
    } else {
      this.dialogRef.close();
    }
  }

  ngOnInit() {}
}
