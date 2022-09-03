import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from '../../model/course.model';
import { CourseService } from '../../services/course.service';
import { CourseStore } from '../../store/course.store';
import * as uuid from 'uuid';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  createCourseSub: Subscription;

  constructor(
    private store: CourseStore,
    private courseService: CourseService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    console.log(submittedForm.value);

    if (submittedForm.invalid) {
      return;
    }

    const course: Course = {id: uuid.v4(), name: submittedForm.value.name, description: submittedForm.value.description};
    this.createCourseSub = this.courseService.createCourse(course).subscribe(result => {
      this.router.navigateByUrl('/courses');
    });
  }
}
