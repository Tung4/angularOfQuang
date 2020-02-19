import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from '../services/course.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../Course';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css']
})
export class CoursesDetailComponent implements OnInit {
  // @Input('data') course: Course;
  course:{};
  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.getManyCourse();
  }
  getManyCourse() {
    this.route.params.subscribe(param =>{
      this.courseService.getCourseDetail(param.id).subscribe(data =>{
        this.course = data;
      })
    })
  }

}
