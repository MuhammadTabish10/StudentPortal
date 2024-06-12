import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { LayoutService } from "./service/app.layout.service";

@Component({
  selector: "app-menu",
  templateUrl: "./app.menu.component.html",
})
export class AppMenuComponent implements OnInit {
  model: any[] = [];

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.model = [
      {
        items: [
          {
            label: "Dashboard",
            icon: "pi pi-fw pi-desktop",
            routerLink: ["/Dashboard"],
          },
          {
            label: "Course",
            icon: "pi pi-fw pi-book",
            childRoute: ["/course"],
            routerLink: ["/course"],
          },
          {
            label: "Class",
            icon: "pi pi-fw pi-inbox",
            childRoute: ["/class"],
            routerLink: ["/class"],
          },
          //   {
          //     label: "Engagement",
          //     icon: "pi pi-fw pi-id-card",
          //     childRoute: ["/engagement"],
          //     class: "custom",
          //     items: [
          //       {
          //         label: "Venue",
          //         // icon: "pi pi-fw pi-sign-in",
          //         routerLink: ["/engagement/venue"],
          //         class: "custom-submenu",
          //       },
          //       {
          //         label: "Contacts",
          //         // icon: "pi pi-fw pi-times-circle",
          //         routerLink: ["/engagement/contacts"],
          //         class: "custom-submenu",
          //       },
          //       {
          //         label: "Accounts",
          //         // icon: "pi pi-fw pi-lock",
          //         routerLink: ["/auth/access"],
          //         class: "custom-submenu",
          //       },
          //       {
          //         label: "Questions",
          //         // icon: "pi pi-fw pi-lock",
          //         routerLink: ["/engagement/questions"],
          //         class: "custom-submenu",
          //         hidden: "hide",
          //       },
          //     ],
          //   },

          //   {
          //     label: "Account Setting",
          //     icon: "pi pi-fw pi-cog",
          //     routerLink: ["/uikit/floatlabel"],
          //   },
        ],
      },
    ];
  }
}
