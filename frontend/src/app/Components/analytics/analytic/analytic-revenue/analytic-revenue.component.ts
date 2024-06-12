import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AutoCompleteModule } from "primeng/autocomplete";
import { AvatarModule } from "primeng/avatar";
import { AvatarGroupModule } from "primeng/avatargroup";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { ChartModule } from "primeng/chart";
import { CheckboxModule } from "primeng/checkbox";
import { DialogModule } from "primeng/dialog";
import { DividerModule } from "primeng/divider";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { MenuModule } from "primeng/menu";
import { PanelMenuModule } from "primeng/panelmenu";
import { RadioButtonModule } from "primeng/radiobutton";
import { StyleClassModule } from "primeng/styleclass";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { ToggleButtonModule } from "primeng/togglebutton";

@Component({
  selector: "app-analytic-revenue",
  standalone: true,
  imports: [
    CommonModule,
    RadioButtonModule,
    DropdownModule,
    FormsModule,
    ChartModule,
    MenuModule,
    CheckboxModule,
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
    DividerModule,
    ChartModule,
  ],
  templateUrl: "./analytic-revenue.component.html",
  styleUrl: "./analytic-revenue.component.scss",
})
export class AnalyticRevenueComponent {
  revenueOptions = ["Month", "Year"];
  revenueType = "Month";
  revenue: string[] = ["Revenue Received"];
  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

    this.data = {
      labels: [
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
      datasets: [
        {
          type: "bar",
          label: "Dataset 1",
          backgroundColor: "rgba(78, 20, 191, 1)",
          borderColor: "rgba(0, 0, 0,)", // Border color for filled dataset
          borderRadius: 10, // Border radius for filled dataset
          data: [50, 25, 12, 48, 90, 76, 42, 48, 67, 33, 100, 89],
          order: 1, // Set the order for stacking
        },
        {
          type: "bar",
          label: "Dataset 2",
          backgroundColor: "rgba(242, 239, 255, 1)", // Transparent background for unfilled datasets
          borderColor: "rgba(0, 0, 0)", // Border color for unfilled dataset
          borderRadius: 10, // Border radius for unfilled dataset
          data: [21, 84, 24, 75, 37, 65, 34, 54, 80, 45, 120, 99],
          order: 2,
        },
      ],
    };

  this.options = {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
        callbacks: {
          label: function (context) {
            return `$${context.formattedValue}`;
          },
        },
      },
      legend: {
        display: false, // Hide legends
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
          drawBorder: false,
          borderDash: [5, 5],
          borderDashOffset: 0,
          display: false,
        },
      },
      y: {
        stacked: true,
        ticks: {
          color: textColorSecondary,
          callback: function (value: any) {
            return "$" + value.toFixed(0);
          },
        },
        grid: {
          color: surfaceBorder,
          drawBorder: false,
          borderDash: [5, 5],
          borderDashOffset: 0,
        },
        title: {
          display: true,
          text: "Revenue",
          font: {
            size: 12, 
          },
        },
      },
    },
  };
  }
}
