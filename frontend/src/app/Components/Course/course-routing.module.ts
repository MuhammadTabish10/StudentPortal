import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseViewComponent } from './course-view/course-view.component';

const routes: Route[] = [
  { path: "", component: CourseListComponent },
  {
    path: "create",
    component: CourseCreateComponent,
    data: { breadcrumb: "Add Course" },
  },
  {
    path: ":id",
    component: CourseViewComponent,
    data: { breadcrumb: "Course Details" },
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
