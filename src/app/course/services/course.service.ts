import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CourseStore } from '../store/course.store';
import { Course } from '../model/course.model';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class CourseService {
  constructor(
    private httpClient: HttpClient,
    private courseStore: CourseStore
  ) {}

  getAllCourses() {
    return this.httpClient.get<Course[]>('/api/courses').pipe(
      tap(courses => {
        this.courseStore.loadCourses(courses, true)
      })
    );
  }

  createCourse(course: Course): Observable<Course> {
    return this.httpClient.post<Course>('api/courses', course).pipe(
      tap(course => {
        this.courseStore.add([course])
      })
    );
  }

  deleteCourse(courseId: string): Observable<any> {
    return this.httpClient.delete('api/courses/' + courseId).pipe(
      tap(result => {
        this.courseStore.remove(courseId);
      })
    )
  }

  updateCourse(courseId: string, course: Course): Observable<any> {
    return this.httpClient.put('api/courses/' + courseId, course).pipe(
      tap(result => {
        this.courseStore.update(courseId, course);
      })
    );
  }
}
