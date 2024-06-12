import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { LoginDesignComponent } from '../login-design/login-design.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: "app-new-password",
  standalone: true,
  imports: [
    LoginDesignComponent,
    CommonModule,
    PasswordModule,
    InputTextModule,
    ReactiveFormsModule,
    ToastModule,
    CheckboxModule,
    ButtonModule,
  ],
  templateUrl: "./new-password.component.html",
  styleUrl: "./new-password.component.scss",
  providers: [MessageService],
})
export class NewPasswordComponent {
  newPasswordForm!: FormGroup;

  ngOnInit() {
    this.newPasswordForm = new FormGroup({
      password: new FormControl(null, [Validators.required, Validators.email]),
      confirmPassword: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
    });
  }

  onResetPassword(data){}
}
