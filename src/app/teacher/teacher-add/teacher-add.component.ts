import { Constants } from './../../../assets/constants';
import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user.module';
import {ApiModule} from '../../api/api.module';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.scss']
})

export class TeacherAddComponent implements OnInit {
  public teacher = new User();

  constructor(private api: ApiModule, private router: Router,private _location: Location,private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, null, {
      duration: 1000,
    });
  }
  saveTeacher() {
    this.teacher.role = Constants.ROLE_TEACHER;
    
    this.api.addClient(this.teacher, (err, result) => {
      this.openSnackBar('Added',null)
      this._location.back();
    });
  }
}
