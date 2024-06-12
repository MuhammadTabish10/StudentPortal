import { Router, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { NotfoundComponent } from "./Components/Auth/notfound/notfound.component";
import { AppLayoutComponent } from "./layout/app.layout.component";
import { LoginComponent } from "./Components/Auth/login/login.component";
import { ResetPasswordComponent } from "./Components/Auth/reset-password/reset-password.component";
import { NewPasswordComponent } from "./Components/Auth/new-password/new-password.component";
import { VerificationComponent } from "./Components/Auth/verification/verification.component";
import { ProfileComponent } from "./Components/Auth/user/profile/profile.component";

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: "",
          component: AppLayoutComponent,
          children: [
            {
              path: "Dashboard",
              loadChildren: () =>
                import("./Components/dashboard/dashboard.module").then(
                  (m) => m.DashboardModule
                ),
            },
            {
              path: "course",
              loadChildren: () =>
                import("./Components/Course/course.module").then(
                  (m) => m.CourseModule
                ),
              data: { breadcrumb: "Course", routerLink: true },
            },
            {
              path: "class",
              loadChildren: () =>
                import("./Components/Class/class.module").then(
                  (m) => m.ClassModule
                ),
              data: { breadcrumb: "Class", routerLink: true },
            },
            {
              path: "student",
              loadChildren: () =>
                import("./Components/Course/course.module").then(
                  (m) => m.CourseModule
                ),
              data: { breadcrumb: "Course", routerLink: true },
            },
            {
              path: "profile",
              component: ProfileComponent,
              data: { breadcrumb: "Profile" },
            },
          ],
        },
        { path: "login", component: LoginComponent },
        { path: "reset-password", component: ResetPasswordComponent },
        { path: "new-password", component: NewPasswordComponent },
        { path: "verification", component: VerificationComponent },
        { path: "notfound", component: NotfoundComponent },
        { path: "**", redirectTo: "/notfound" },
      ],
      {
        scrollPositionRestoration: "enabled",
        anchorScrolling: "enabled",
        onSameUrlNavigation: "reload",
      }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
