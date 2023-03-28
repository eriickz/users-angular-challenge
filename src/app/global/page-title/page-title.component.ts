import { Component, Input } from "@angular/core";

@Component({
  selector: "app-page-title",
  templateUrl: "./page-title.component.html",
})
export class PageTitleComponent {
  @Input() title = "Page Title";
  @Input() description = "Page short description";
  @Input("button-label") buttonLabel = "Add User";
}
