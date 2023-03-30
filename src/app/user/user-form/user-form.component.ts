import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormControlProps } from "../../global/types";
import { FormBuilder } from "@angular/forms";
import { SwalComponent } from "@sweetalert2/ngx-sweetalert2/public-api";
import { UserService } from "../user-service.service";
import User from "../types";
import { HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
})
export class UserFormComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private userService: UserService) {}

  isUpdateForm = false;
  userIdFromRoute = 0;

  formControlsProps: FormControlProps[] = [
    {
      id: "firstname",
      type: "text",
      label: "Firstname",
      isFull: false,
    },
    {
      id: "lastname",
      type: "text",
      label: "Lastname",
      isFull: false,
    },
    {
      id: "email",
      type: "email",
      label: "Email",
      isFull: true,
    },
  ];

  userForm = this.formBuilder.group({
    firstname: "",
    lastname: "",
    email: "",
  });

  @ViewChild("errorPopup")
  public readonly errorPopup!: SwalComponent;

  @ViewChild("confirmPopup")
  public readonly confirmPopup!: SwalComponent;

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.userIdFromRoute = Number(routeParams.get("id"));

    this.isUpdateForm = this.userIdFromRoute > 0;

    if (this.isUpdateForm) {
      this.loadUserForm(this.userIdFromRoute);
    }
  }

  goToUserList() {
    this.router.navigate(["/user-list"]);
  }

  loadUserForm(id: number) {
    const userObservable = this.userService.getUserById(id);

    userObservable.subscribe({
      next: (user) => {
        this.userForm.setValue({
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
        });
      },
      error: (errorResponse: HttpErrorResponse) => {
        this.errorPopup.text = errorResponse.error;
        this.errorPopup.fire();
      },
    });
  }

  deleteUser() {
    const userObservable = this.userService.deleteUser(this.userIdFromRoute);

    userObservable.subscribe({
      next: () => {
        this.userForm.reset();
        this.confirmPopup.text = "The user was successfully deleted.";
        this.confirmPopup.fire();
      },
      error: (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse);
        this.errorPopup.text = errorResponse.error;
        this.errorPopup.fire();
      },
    });
  }

  onSubmit() {
    let userObservable: Observable<User | String>;

    if (this.isUpdateForm) {
      const updatedUser: User = {
        id: this.userIdFromRoute,
        firstname: this.userForm.get("firstname")!.value as string,
        lastname: this.userForm.get("lastname")!.value as string,
        email: this.userForm.get("email")!.value as string,
      };

      userObservable = this.userService.updateUser(updatedUser);
    } else {
      userObservable = this.userService.createUser(this.userForm.value as User);
    }

    userObservable.subscribe({
      next: () => {
        this.userForm.reset();
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
