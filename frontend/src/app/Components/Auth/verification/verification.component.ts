import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { LoginDesignComponent } from '../login-design/login-design.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: "app-verification",
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
  templateUrl: "./verification.component.html",
  styleUrl: "./verification.component.scss",
  providers: [MessageService],
})
export class VerificationComponent {
  verifyForm!: FormGroup;

  @ViewChild("input1") input1: ElementRef;
  @ViewChild("input2") input2: ElementRef;
  @ViewChild("input3") input3: ElementRef;
  @ViewChild("input4") input4: ElementRef;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.verifyForm = this.fb.group({
      input1: ["", Validators.required],
      input2: ["", Validators.required],
      input3: ["", Validators.required],
      input4: ["", Validators.required],
    });

    this.subscribeToInputChanges();
  }

  subscribeToInputChanges() {
    this.verifyForm
      .get("input1")
      .valueChanges.subscribe((value) =>
        this.onInput(value, this.input2, null,this.input1)
      );
    this.verifyForm
      .get("input2")
      .valueChanges.subscribe((value) =>
        this.onInput(value, this.input3, this.input1, this.input2)
      );
    this.verifyForm
      .get("input3")
      .valueChanges.subscribe((value) =>
        this.onInput(value, this.input4, this.input2, this.input3)
      );
    this.verifyForm
      .get("input4")
      .valueChanges.subscribe((value) =>
        this.onInput(value, null, this.input3, this.input4)
      );
  }

  onInput(
    value: string,
    nextInput: ElementRef | null,
    previousInput: ElementRef | null,
    currentInput: ElementRef
  ) {
    if (value !== "") {
      setTimeout(() => {
        if (nextInput) {
          nextInput.nativeElement.focus();
        }
      });
    } else if (previousInput) {
      setTimeout(() => {
        previousInput.nativeElement.focus();
      });
    }
  }

  onVerify(data) {}
}
