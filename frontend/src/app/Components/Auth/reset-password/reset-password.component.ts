import { Component, OnInit } from '@angular/core';
import { LoginDesignComponent } from '../login-design/login-design.component';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: "app-reset-password",
  standalone: true,
  imports: [
    LoginDesignComponent,
    CommonModule,
    PasswordModule,
    InputTextModule,
    ReactiveFormsModule,
    ToastModule,
    CheckboxModule,
    ButtonModule
  ],
  templateUrl: "./reset-password.component.html",
  styleUrl: "./reset-password.component.scss",
  providers:[MessageService]
})
export class ResetPasswordComponent implements OnInit {
  loginForm!: FormGroup;

  onLogin(data) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }
}
