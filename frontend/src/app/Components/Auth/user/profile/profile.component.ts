import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MessageService } from "primeng/api";
import { AvatarModule } from "primeng/avatar";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { DialogModule } from "primeng/dialog";
import { DividerModule } from "primeng/divider";
import { DropdownModule } from "primeng/dropdown";
import { FileUploadModule } from "primeng/fileupload";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { PasswordModule } from "primeng/password";
import { RadioButtonModule } from "primeng/radiobutton";
import { RatingModule } from "primeng/rating";
import { RippleModule } from "primeng/ripple";
import { TableModule } from "primeng/table";
import { TagModule } from "primeng/tag";
import { ToastModule } from "primeng/toast";
import { ToolbarModule } from "primeng/toolbar";
import { TooltipModule } from "primeng/tooltip";

@Component({
  selector: "app-profile",
  standalone: true,
  imports: [
    AvatarModule,
    CommonModule,
    ReactiveFormsModule,
    DividerModule,
    ButtonModule,
    CommonModule,
    CheckboxModule,
    FormsModule,
    TableModule,
    FileUploadModule,
    RippleModule,
    ToastModule,
    ToolbarModule,
    RatingModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    DialogModule,
    TagModule,
    PasswordModule,
    TooltipModule,
  ],
  templateUrl: "./profile.component.html",
  styleUrl: "./profile.component.scss",
  providers: [MessageService],
})
export class ProfileComponent implements OnInit {
  userForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null),
      email: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      company: new FormControl(null, Validators.required),
    });
  }

  onSubmit(data: any){

  }
}
