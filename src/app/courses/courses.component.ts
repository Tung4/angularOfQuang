import { Component, OnInit } from '@angular/core';
import { Course} from '../Course';
// import { CoursesData } from  '../MockData';
import { CourseService } from '../services/course.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  manyCourses = [];
  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.getManyCourses();
  }
  getManyCourses() {
    //call den product nam trong service
    this.courseService.getManyCourses().subscribe(data => {
      //Neu thanh cong
      console.log(data);
      this.manyCourses = data;
    })
  }
}
