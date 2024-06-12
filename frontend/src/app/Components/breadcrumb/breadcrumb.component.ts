import { Component } from "@angular/core";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { BreadcrumbService } from "./service/breadcrumb.service";
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { delay, filter } from "rxjs";
import { MenuItem } from "primeng/api";
@Component({
  selector: "app-breadcrumb",
  standalone: true,
  imports: [CommonModule, BrowserModule, BreadcrumbModule],
  templateUrl: "./breadcrumb.component.html",
  styleUrl: "./breadcrumb.component.scss",
  providers: [BreadcrumbService],
})
export class BreadcrumbComponent {
  breadcrumbs: MenuItem[] = [];

  constructor(
    private breadcrumbService: BreadcrumbService,
  ) {
    this.breadcrumbService.breadcrumbs$.subscribe((breadcrumbs) => {
      this.breadcrumbs = breadcrumbs;
    });

  }


}
