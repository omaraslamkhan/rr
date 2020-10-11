import { Component, OnInit ,Inject} from '@angular/core';
import { ApiModule } from "../../api/api.module";
import { MatSnackBar } from "@angular/material/snack-bar";
import { User } from "../../model/user.module";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
@Component({
  selector: 'app-parent-delete',
  templateUrl: './parent-delete.component.html',
  styleUrls: ['./parent-delete.component.scss']
})
export class ParentDeleteComponent implements OnInit {
  public parent = new User();

  constructor(  private api: ApiModule,
    public dialogRef: MatDialogRef<ParentDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar) { 
      this.parent = data;
    }
    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, null, {
        duration: 1000,
      });
    }

    toDelete(answer) {
      if (answer == "Yes") {
        this.parent.isActive = false;
  
        this.api.updateClient(this.parent, (err, res) => {
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
  
  
  ngOnInit() {
  }

}
