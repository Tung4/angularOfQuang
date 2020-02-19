import { Component, OnInit } from '@angular/core';
import { Course } from '../Course';
import { CourseService } from '../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {
  course: Course = new Course();
  constructor(
    private courseService: CourseService,
    private route:ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }
  addCourse(){
    this.courseService.addCourse(this.course).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/admin');
    })
  }

}
