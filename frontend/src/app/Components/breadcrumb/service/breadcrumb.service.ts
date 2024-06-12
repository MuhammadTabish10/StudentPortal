import { Injectable } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { MenuItem } from "primeng/api";
import { BehaviorSubject, filter } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BreadcrumbService {
  public breadcrumbsSubject = new BehaviorSubject<MenuItem[]>([]);
  breadcrumbs$ = this.breadcrumbsSubject.asObservable();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
        this.breadcrumbsSubject.next(breadcrumbs);
      });
  }

  private createBreadcrumbs(
    route: ActivatedRoute,
    url: string = "",
    breadcrumbs: MenuItem[] = []
  ): MenuItem[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const [index, child] of children.entries()) {
      const routeURL: string = child.snapshot.url
        .map((segment) => segment.path)
        .join("/");
      if (routeURL !== "") {
        url += `/${routeURL}`;
      }

      const label = child.snapshot.data?.["breadcrumb"];
      const shouldHaveRouterLink = child.snapshot.data?.["routerLink"] === true;

      const labelExists = breadcrumbs.some((crumb) => crumb.label === label);

      if (label && !labelExists) {
        const breadcrumb: MenuItem = { label };

        // Add routerLink only if the data has routerLink: true
        if (shouldHaveRouterLink) {
          breadcrumb.routerLink = url;
        }

        breadcrumbs.push(breadcrumb);
      }

      // Recursive call for child routes
      this.createBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
