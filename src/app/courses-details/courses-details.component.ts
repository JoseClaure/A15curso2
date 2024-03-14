import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.css']
})
export class CoursesDetailsComponent {

  course:string = '';

  constructor (private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe ( params => {
      this.course = params ['courseName'] 
    });
  }
  
}