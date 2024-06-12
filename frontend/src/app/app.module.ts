import { NgModule } from "@angular/core";
import { PathLocationStrategy, LocationStrategy } from "@angular/common";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppLayoutModule } from "./layout/app.layout.module";
import { NotfoundComponent } from "./Components/Auth/notfound/notfound.component";
import { LoginModule } from "./Components/Auth/login/login.module";
import { ResetPasswordComponent } from "./Components/Auth/reset-password/reset-password.component";
import { NewPasswordComponent } from "./Components/Auth/new-password/new-password.component";
import { VerificationComponent } from "./Components/Auth/verification/verification.component";
import { BreadcrumbComponent } from "./Components/breadcrumb/breadcrumb.component";
import { ProfileComponent } from "./Components/Auth/user/profile/profile.component";

@NgModule({
  declarations: [AppComponent, NotfoundComponent],
  imports: [
    AppRoutingModule,
    AppLayoutModule,
    LoginModule,
    ResetPasswordComponent,
    NewPasswordComponent,
    VerificationComponent,
    BreadcrumbComponent,
    ProfileComponent,
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
