import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
place:any
age:any
gender:any
  constructor(private r:ActivatedRoute) { }

  ngOnInit(): void {
    this.r.queryParams.subscribe(params => {
      this.place = params['place'];
      this.age = params['age'];
      this.gender = params['gender'];
   });
  }

}
