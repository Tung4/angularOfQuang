import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course} from '../Course';
import {Observable,of, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private manyCourses = 'http://5de4ab3a712f9b0014513d7e.mockapi.io/manyCourses'
  constructor(
    private http: HttpClient
  ) { }
  getManyCourses() : Observable<Course[]>{
    return this.http.get<Course[]>(this.manyCourses);
  }
  getCourseDetail(id) : Observable<Course>{
    return this.http.get<Course>(`${this.manyCourses}/${id}`);
  }
  deleteCourse(id) : Observable<Course>{
    return this.http.delete<Course>(`${this.manyCourses}/${id}`);
  }
  addCourse(course) : Observable<Course>{
    return this.http.post<Course>(`${this.manyCourses}`, course);
  }
  updateCourse(course) : Observable<Course>{
    return this.http.put<Course>(`${this.manyCourses}/${course.id}`, course);
  }
}
