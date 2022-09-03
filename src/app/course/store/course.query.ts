import { Injectable } from '@angular/core';
import { Order, QueryConfig, QueryEntity } from '@datorama/akita';
import { CourseState, CourseStore } from './course.store';

@QueryConfig({ sortBy: 'name', sortByOrder: Order.ASC })
@Injectable({ providedIn: 'root' })
export class CourseQuery extends QueryEntity<CourseState> {

  selectAreCoursesLoaded$ = this.select(state => state.areCoursesLoaded);

  constructor(protected store: CourseStore) {
    super(store);
  }
}
