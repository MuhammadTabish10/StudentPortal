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
  selector: "app-analytic-individual-revenue",
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
  templateUrl: "./analytic-individual-revenue.component.html",
  styleUrl: "./analytic-individual-revenue.component.scss",
})
export class AnalyticIndividualRevenueComponent {
  donutChartData;
  donutChartOption;

  ngOnInit() {
    this.donutChartData = {
      labels: [
        "Event Name 1",
        "Event Name 2",
        "Event Name 3",
        "Event Name 4",
        "Event Name 5",
      ],
      datasets: [
        {
          data: [300, 70, 100, 120, 454],
          backgroundColor: [
            "rgba(10, 148, 255, 1)",
            "rgba(220, 96, 239, 1)",
            "rgba(137, 91, 241, 1)",
            "rgba(153, 178, 198, 1)",
            "rgba(243, 101, 74, 1)",
          ],
          hoverBackgroundColor: [
            "rgba(10, 148, 255, 0.9)",
            "rgba(220, 96, 239, 0.9)",
            "rgba(137, 91, 241, 0.9)",
            "rgba(153, 178, 198, 0.9)",
            "rgba(243, 101, 74, 0.9)",
          ],
        },
      ],
    };

    this.donutChartOption = {
      cutout: "50%",
      plugins: {
        legend: {
          display: false,
          position: "bottom",
          align: "start",
          padding: {
            top: 10, // Adjust the top padding as needed
            bottom: 10, // Adjust the bottom padding as needed
          },
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const labelIndex = context.dataIndex;
              const datasetIndex = context.datasetIndex;
              const value =
                this.donutChartData.datasets[datasetIndex].data[labelIndex];
              return `${context.label}:   $${value}`;
            },
          },
        },
      },
    };
  }
}
