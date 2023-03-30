import { Component, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs";
import User from "../types";
import { UserService } from "../user-service.service";
import { SwalComponent } from "@sweetalert2/ngx-sweetalert2/public-api";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
})
export class UserListComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  users!: Observable<User[]>;

  @ViewChild("confirmPopup")
  public readonly confirmPopup!: SwalComponent;

  @ViewChild("errorPopup")
  public readonly errorPopup!: SwalComponent;

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  refetchUsers() {
    this.users = this.userService.getUsers();
  }

  deleteUserById(id: number) {
    const userObservable = this.userService.deleteUser(id);

    userObservable.subscribe({
      next: () => {
        this.confirmPopup.text = "The user has been saved.";
        this.confirmPopup.fire();
      },
      error: (errorResponse: HttpErrorResponse) => {
        this.errorPopup.text = errorResponse.error;
        this.errorPopup.fire();
      },
    });
  }
}
