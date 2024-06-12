import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { AutoCompleteModule } from "primeng/autocomplete";
import { BadgeModule } from "primeng/badge";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { ChipsModule } from "primeng/chips";
import { DialogModule } from "primeng/dialog";
import { DividerModule } from "primeng/divider";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { MultiSelectModule } from "primeng/multiselect";
import { ProgressBarModule } from "primeng/progressbar";
import { RadioButtonModule } from "primeng/radiobutton";
import { RatingModule } from "primeng/rating";
import { RippleModule } from "primeng/ripple";
import { SliderModule } from "primeng/slider";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { ToggleButtonModule } from "primeng/togglebutton";
import { TooltipModule } from "primeng/tooltip";

@Component({
  selector: "app-ticket-list",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ReactiveFormsModule,
    RatingModule,
    ButtonModule,
    SliderModule,
    InputTextModule,
    ToggleButtonModule,
    RippleModule,
    MultiSelectModule,
    DropdownModule,
    ProgressBarModule,
    ToastModule,
    DialogModule,
    AutoCompleteModule,
    CalendarModule,
    ChipsModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    InputTextareaModule,
    RadioButtonModule,
    TooltipModule,
    DividerModule,
    BadgeModule,
    MultiSelectModule,
  ],
  templateUrl: "./ticket-list.component.html",
  styleUrl: "./ticket-list.component.scss",
})
export class TicketListComponent {
  ticketForm!: FormGroup;
  visible: boolean = false;
  ticketType;
  status;
  futureEvents = ["Christmas Event", "New Year Era"];
  data = [
    {
      ticketType: "individual",
      price: "19000",
      isAddOn: "Yes",
      type: "31/12/2023",
      noOfReg: "100",
      revenue: "19000",
      checkIn: "100",
      status: "Active",
    },
    {
      ticketType: "Member Full",
      price: "23000",
      isAddOn: "No",
      type: "31/12/2023",
      noOfReg: "100",
      revenue: "23000",
      checkIn: "80",
      status: "Completed",
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.ticketForm = this.fb.group({
      ticketName: [null, Validators.required],
      ticketType: [null, Validators.required],
      description: [null, Validators.required],
      isTable: [null, Validators.required],
      maxSeats: [null, Validators.required],
      ticketPrice: [null, Validators.required],
      ticketFeePassToCustomer: [null, Validators.required],
      enterFee: [null, Validators.required],
      finalPrice: [null, Validators.required],
      status: [null, Validators.required],
      isAddOn: [null, Validators.required],
      futureEvents: [null, Validators.required],
      minimumQuantity: [null, Validators.required],
      maximumQuantity: [null, Validators.required],
      maxTickets: [null, Validators.required],
      datePairs: this.fb.array([]),
    });

    this.addDatePair();
  }

  onSubmit() {
    console.log(this.ticketForm.value);
  }

  get datePairsArray(): FormArray {
    return this.ticketForm.get("datePairs") as FormArray;
  }

  addDatePair() {
    const datePair = this.fb.group({
      fromDate: ["", Validators.required],
      toDate: ["", Validators.required],
    });

    this.datePairsArray.push(datePair);
  }

  removeDatePair(index: number) {
    this.datePairsArray.removeAt(index);
  }

  onCancel() {
    this.visible = false;
  }

  setDialog() {
    this.visible = true;
    console.log("hello");
    
  }
}
