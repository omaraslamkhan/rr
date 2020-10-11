import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

export class User {
  id: string;
  isActive:boolean;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  mobile: string;
  emailVerified: boolean;
  role: string;
  dob: string;
  gender: string;
  address: string;
  qualification: string;
  institute: string;
  cv: string;
}

export class Student {
  id: string;
  isActive:boolean;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  mobile: string;
  emailVerified: boolean;
  role: string;
  dob: string;
  gender: string;
  address: string;
  class: string;
  rollNumber: string;
  section: string;
  parentId: string;
  teacherId: string;
}
