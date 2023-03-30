import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import User from "../types";

@Component({
  selector: "app-user-item",
  templateUrl: "./user-item.component.html",
})
export class UserItemComponent {
  constructor(private router: Router) {}

  @Input() user!: User;
  @Output() deleteUserEvent = new EventEmitter<number>();

  goToUserForm(id: number) {
    this.router.navigate(["/update-user", id]);
  }

  deleteUser(id: number): void {
    this.deleteUserEvent.emit(id);
  }
}
