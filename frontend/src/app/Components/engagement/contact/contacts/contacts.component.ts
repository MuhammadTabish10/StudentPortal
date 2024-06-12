import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Table } from "primeng/table";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrl: "./contacts.component.scss",
})
export class ContactsComponent implements OnInit {
  data = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe ",
      email: "johndoe@gmail.com",
      company: "company",
      jobTitle: "Job Title",
      contactType: "Type 1",
      noOfEventReg: "100",
      noOfEventAttended: "70",
    },
    {
      id: 1,
      firstName: "Adam",
      lastName: "Marcus",
      email: "adammarcus@gmail.com",
      company: "company",
      jobTitle: "Job Title",
      contactType: "Type 2",
      noOfEventReg: "50",
      noOfEventAttended: "20",
    },
  ];
  contactForm!: FormGroup;
  visible: boolean = false;
  jobTitle;
  companyType;
  country;

  uploadedImages: { file: File; url: string }[] = [];

  options = [5, 10, 20];
  rows = 5;

  @ViewChild("filter") filter!: ElementRef;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      jobTitle: [null, Validators.required],
      email: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      company: [null, Validators.required],
      companyType: [null, Validators.required],
      addressLine1: [null, Validators.required],
      addressLine2: [null, Validators.required],
      addressLine3: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      country: [null, Validators.required],
      profile: [null, Validators.required],
      description: [null, Validators.required],
      facebookUrl: [null, Validators.required],
      twitterUrl: [null, Validators.required],
      linkedinUrl: [null, Validators.required],
      threadUrl: [null, Validators.required],
      facebookSwitch: [false],
      linkedinSwitch: [false],
      threadSwitch: [false],
      twitterSwitch: [false],
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

  onCancel() {
    this.visible = false;
  }

  onInputSwitch(url, urlSwitch) {
    console.log(url, urlSwitch);

    const UrlControl = this.contactForm?.get(`${url}`);
    const UrlSwitch = this.contactForm?.get(`${urlSwitch}`);

    if (UrlControl.disabled) {
      UrlControl?.enable();
      urlSwitch.value == true;
    } else {
      UrlControl?.disable();
      urlSwitch.value == false;
    }
  }

  onFileSelected(event: any): void {
    const files: FileList = event.target.files;

    // Only accept a single file
    if (files.length === 1) {
      const file: File = files[0];

      // Check if the file type is an image
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          // Clear the existing uploadedImages array before adding the new file
          this.uploadedImages = [{ file, url: e.target.result }];
        };

        reader.readAsDataURL(file);
      } else {
        console.warn("Selected file is not an image.");
        // Optionally display an error message to the user
      }
    } else {
      console.warn("Please select a single file.");
      // Optionally display an error message to the user
    }
  }

  removeUploadedImage(){
    this.uploadedImages=[];
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, "contains");
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = "";
  }
}
