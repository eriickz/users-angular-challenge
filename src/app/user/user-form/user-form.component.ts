import { Component, OnInit } from "@angular/core";
import { FormControlProps } from "../../global/types";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
})
export class UserFormComponent implements OnInit {
  formControlsProps: FormControlProps[] = [];

  ngOnInit() {
    this.formControlsProps = [
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

    console.log(this.formControlsProps);
  }
}
