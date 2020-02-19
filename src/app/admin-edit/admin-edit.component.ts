import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
  course:{};
  constructor(
    private courseService: CourseService,
    private route:ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCourseDetail();
  }
  getCourseDetail(){
    this.route.params.subscribe(param =>{
      // console.log(param)
      const { id } = param;
      this.courseService.getCourseDetail(id).subscribe(data =>{
        this.course = data;
        console.log(this.course)
      })
    })
  }

   saveCourse(course){
    this.courseService.updateCourse(course).subscribe(data =>{
      this.router.navigateByUrl('/admin');
    })
  }
}
