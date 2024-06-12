import { Component } from "@angular/core";
import { MenuItem } from "primeng/api";
import { Subscription, debounceTime } from "rxjs";
import { LayoutService } from "src/app/layout/service/app.layout.service";

@Component({
  selector: "app-analytic",
  templateUrl: "./analytic.component.html",
  styleUrl: "./analytic.component.scss",
})
export class AnalyticComponent {
  eventData = [
    {
      eventName: "Event Name 1",
      date: "26/12/23",
      mode: "Online",
      status: "Active",
      checkIn: "80/100",
    },
    {
      eventName: "Event Name 2",
      date: "27/12/23",
      mode: "Offline",
      status: "Inactive",
      checkIn: "75/100",
    },
    {
      eventName: "Event Name 3",
      date: "28/12/23",
      mode: "Hybrid",
      status: "Canceled",
      checkIn: "60/100",
    },
    {
      eventName: "Event Name 4",
      date: "29/12/23",
      mode: "Online",
      status: "Active",
      checkIn: "90/100",
    },
    {
      eventName: "Event Name 5",
      date: "30/12/23",
      mode: "Offline",
      status: "Inactive",
      checkIn: "70/100",
    },
    {
      eventName: "Event Name 6",
      date: "31/12/23",
      mode: "Hybrid",
      status: "Active",
      checkIn: "85/100",
    },
    {
      eventName: "Event Name 7",
      date: "01/01/24",
      mode: "Online",
      status: "Canceled",
      checkIn: "50/100",
    },
    {
      eventName: "Event Name 8",
      date: "02/01/24",
      mode: "Offline",
      status: "Active",
      checkIn: "95/100",
    },
    {
      eventName: "Event Name 9",
      date: "03/01/24",
      mode: "Hybrid",
      status: "Inactive",
      checkIn: "65/100",
    },
    {
      eventName: "Event Name 10",
      date: "04/01/24",
      mode: "Online",
      status: "Active",
      checkIn: "88/100",
    },
    {
      eventName: "Event Name 11",
      date: "05/01/24",
      mode: "Offline",
      status: "Inactive",
      checkIn: "72/100",
    },
  ];

  items!: MenuItem[];

  chartData: any;

  chartOptions: any;

  subscription!: Subscription;

  chartData2;
  chartOptions2;

  constructor(
    public layoutService: LayoutService
  ) {
    this.subscription = this.layoutService.configUpdate$
      .pipe(debounceTime(25))
      .subscribe((config) => {
        this.initChart();
      });
  }

  ngOnInit() {
    this.initChart();

    this.items = [
      { label: "Add New", icon: "pi pi-fw pi-plus" },
      { label: "Remove", icon: "pi pi-fw pi-minus" },
    ];
  }

  initChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

    this.chartData = {
      labels: ["09:00", "11:00", "13:00", "15:00", "17:00", "19:00"],
      datasets: [
        {
          label: "Revenue",
          data: [140, 250, 220, 180, 280, 350],
          fill: false,
          backgroundColor: "rgba(78, 20, 191, 1)",
          borderColor: "rgba(78, 20, 191, 1)",
          tension: 0.4,
        },
        {
          label: "Time",
          data: [200, 300, 230, 334, 445, 300],
          fill: false,
          backgroundColor: "rgba(131, 91, 210, 1)",
          borderColor: "rgba(131, 91, 210, 1)",
          tension: 0.4,
        },
      ],
    };

    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            color: "rgba(78, 20, 191, 1)",
            usePointStyle: true,
            pointStyle: "circle",
            boxWidth: 5,
            boxHeight: 5,
            fontWeight: "bold",
            font: {
              size: 14,
              weight: "700",
            },
          },
          position: "top",
          align: "end",
          display: true,
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const labelIndex = context.dataIndex;
              const datasetIndex = context.datasetIndex;
              const value =
                this.chartData.datasets[datasetIndex].data[labelIndex];
              return `Revenue: $${value}`;
            },
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "rgba(78, 20, 191, 1)",
          },
          grid: {
            color: surfaceBorder,
            drawBorder: true,
            drawOnChartArea: false,
          },
          title: {
            display: true,
            text: "Time", // Display "Revenue" next to the Y-axis
            color: "rgba(78, 20, 191, 1)",
          },
        },
        y: {
          ticks: {
            color: "rgba(78, 20, 191, 1)",
            stepSize: 100, // Set the step size for the y-axis ticks
            // callback: (value) => `$${value}`, // Customize the y-axis tick labels
          },
          grid: {
            color: surfaceBorder,
            drawBorder: true,
            drawOnChartArea: false,
          },
          title: {
            display: true,
            text: "Revenue", // Display "Revenue" next to the Y-axis
            color: "rgba(78, 20, 191, 1)",
          },
          min: 0,
        },
      },
    };

    const gradientBackground = this.createGradientBackground([
      "#d736ff",
      "rgba(244, 180, 104, 0)",
      "#3e29d1",
    ]);

    const lineColor = this.createGradientBackground([
      "#d736ff",
      "rgba(244, 180, 104, 0)",
      "#3e29d1",
    ]);

    this.chartData2 = {
      labels: ["09:00", "11:00", "13:00", "15:00", "17:00", "19:00"],
      datasets: [
        {
          data: [140, 250, 220, 180, 280, 350],
          fill: false,
          backgroundColor: gradientBackground,
          borderColor: lineColor,
          tension: 0.4,
          pointRadius: 0,
          borderWidth: 4,
        },
      ],
    };

    this.chartOptions2 = {
      plugins: {
        legend: {
          display: false, // Hide the legend
        },
        tooltip: {
          enabled: false, // Disable tooltips
        },
      },
      scales: {
        x: {
          display: false, // Hide the x-axis
        },
        y: {
          display: false, // Hide the y-axis
        },
      },
    };


  }



  createGradientBackground(colors: string[]): CanvasGradient {
    const ctx = document.createElement("canvas").getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    colors.forEach((color, index) =>
      gradient.addColorStop(index / (colors.length - 1), color)
    );
    return gradient;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
