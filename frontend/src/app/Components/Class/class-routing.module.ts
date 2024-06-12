import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassUpdateComponent } from './class-update/class-update.component';
import { ClassListComponent } from './class-list/class-list.component';
import { Route, RouterModule } from '@angular/router';
import { ClassViewComponent } from './class-view/class-view.component';

const routes: Route[] = [
  { path: "", component: ClassListComponent },
  {
    path: "create",
    component: ClassUpdateComponent,
    data: { breadcrumb: "Add Class" },
  },
  {
    path: ":id",
    component: ClassViewComponent,
    data: { breadcrumb: "Class Details" },
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassRoutingModule {}
