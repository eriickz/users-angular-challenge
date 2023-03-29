import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-page-title",
  templateUrl: "./page-title.component.html",
})
export class PageTitleComponent {
  @Input() title = "Page Title";
  @Input() description = "Page short description";
  @Input() buttonLabel = "";
  @Input() iconPositionClass = "right-[90px]";

  constructor(private router: Router) {}

  navigateToUserForm() {
    this.router.navigate(["/new-user"]);
  }
}
