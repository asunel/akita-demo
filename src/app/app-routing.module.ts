import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course/components/course-list/course-list.component';
import { CreateCourseComponent } from './course/components/create-course/create-course.component';
import { CourseModule } from './course/course.module';

const routes = [
  {
    path: 'courses',
    component: CourseListComponent,
  },
  { path: 'create-course', component: CreateCourseComponent },
  { path: '**', redirectTo: 'courses' },
];

@NgModule({
  imports: [CourseModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
