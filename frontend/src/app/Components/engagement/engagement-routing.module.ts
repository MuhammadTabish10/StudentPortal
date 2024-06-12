import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactsComponent } from "./contact/contacts/contacts.component";
import { QuestionComponent } from "./questions/question/question.component";
import { Route, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "questions",
        component: QuestionComponent,
        data: { breadcrumb: "Questions" },
      },
      {
        path: "contacts",
        component: ContactsComponent,
        data: { breadcrumb: "Contacts" },
      },
      { path: "**", redirectTo: "/notfound" },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngagementRoutingModule {}
