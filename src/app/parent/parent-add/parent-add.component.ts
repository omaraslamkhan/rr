import { Component, OnInit } from '@angular/core';
import { Constants } from './../../../assets/constants';
import {User} from '../../model/user.module';
import {ApiModule} from '../../api/api.module';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-parent-add',
  templateUrl: './parent-add.component.html',
  styleUrls: ['./parent-add.component.scss']
})
export class ParentAddComponent implements OnInit {
  public parents = new User();

  constructor(private api: ApiModule, private router: Router,private _location: Location,private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, null, {
      duration: 1000,
    });
  }

  saveTeacher() {
    this.parents.role = Constants.ROLE_PARENT;
    
    this.api.addClient(this.parents, (err, result) => {
      this.openSnackBar('Added',null)
      this._location.back();
    });
  }
}
