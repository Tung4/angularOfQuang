import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course} from '../Course';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // courses: Courses = new Courses();
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
  // deleteCourse (id){
  //   console.log(id);
  //   this.courseService.deleteCourse(id).subscribe(data =>{
  //     this.manyCourses = this.manyCourses.filter(item => item.id != data.id);
  //   })
  // }
  clickConfirm(id,name,title) {
    console.log(id)
    if(confirm(`Bạn có muốn xoá Khoá học ${title} của mentor: `+ name)) {
      this.courseService.deleteCourse(id).subscribe(data =>{
        this.manyCourses = this.manyCourses.filter(item => item.id != data.id);
      })
    }
  }

   // saveCourse(course){
  //   this.courseService.updateCourse(course).subscribe(data =>{
  //     this.router.navigateByUrl('/admin');
  //   })
  // }


}
