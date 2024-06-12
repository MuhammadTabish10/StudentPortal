import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { LoginComponent } from './login.component';
import { CheckboxModule } from "primeng/checkbox";
import { LoginDesignComponent } from '../login-design/login-design.component';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    PasswordModule,
    InputTextModule,
    ReactiveFormsModule,
    ToastModule,
    CheckboxModule,
    LoginDesignComponent,
  ],
})
export class LoginModule {}
