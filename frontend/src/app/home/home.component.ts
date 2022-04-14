import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
userForm:any
  constructor(private router:Router,private fb:FormBuilder,private main:MainService) { 
    this.userForm = this.fb.group({
      place : '',
      age :'',
      gender:''
    })
  }

  ngOnInit(): void {
  }
 user_form(){
  console.log(this.userForm)
  this.router.navigate(['/detail'],{
    queryParams:{'place':this.userForm.value.place,'age':this.userForm.value.age,'gender':this.userForm.value.gender}
  })
 }
}
