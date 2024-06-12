import { CommonModule } from "@angular/common";
import { Component, Inject, LOCALE_ID } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PrimeNGConfig } from "primeng/api";
import { AutoCompleteModule } from "primeng/autocomplete";
import { AvatarModule } from "primeng/avatar";
import { AvatarGroupModule } from "primeng/avatargroup";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { ChartModule } from "primeng/chart";
import { DialogModule } from "primeng/dialog";
import { DividerModule } from "primeng/divider";
import { InputTextModule } from "primeng/inputtext";
import { MenuModule } from "primeng/menu";
import { PanelMenuModule } from "primeng/panelmenu";
import { StyleClassModule } from "primeng/styleclass";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { ToggleButtonModule } from "primeng/togglebutton";

@Component({
  selector: "app-events-calender",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ChartModule,
    MenuModule,
    TableModule,
    StyleClassModule,
    PanelMenuModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    ToggleButtonModule,
    ToastModule,
    DialogModule,
    AutoCompleteModule,
    CalendarModule,
    AvatarGroupModule,
    AvatarModule,
    CalendarModule,
    DividerModule
  ],
  templateUrl: "./events-calender.component.html",
  styleUrl: "./events-calender.component.scss",
})
export class EventsCalenderComponent {
  date: Date = new Date("2019-07-30");
  eventList = [
    {
      eventName: "Event Name 1",
      status:"Active",
      date:"22/12/2023",
      mode:"In-Person",
      attendees:"89/100"
    },
    {
      eventName: "Event Name 5",
      status:"Active",
      date:"22/09/2024",
      mode:"Online",
      attendees:"34/100"
    },
  ];
  constructor(
    @Inject(LOCALE_ID) private locale: string,
    private primengConfig: PrimeNGConfig
  ) {
    // Set the locale for the PrimeNG Calendar component
    this.primengConfig.setTranslation({
      dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      monthNamesShort: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    });
  }
}
