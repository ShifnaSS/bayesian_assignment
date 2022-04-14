import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userForm:any
  constructor(private router:Router,private fb:FormBuilder,private main:MainService) { 
    this.userForm = this.fb.group({
      username :'',
      password :''
    })
  }

  ngOnInit(): void {
  }
  submit_form(){
 
    this.main.login()
    .subscribe(data=>{
      console.log(data);
      alert(data)
      this.router.navigate(['/home']);
    })
  }
}
