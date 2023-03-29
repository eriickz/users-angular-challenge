import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FormControlProps } from "../types";

@Component({
  selector: "app-form-control",
  templateUrl: "./form-control.component.html",
  styles: [
    `
      :host() div.w-full {
        width: 100%;
      }
    `,
  ],
})
export class FormControlComponent {
  @Input() formControlProps!: FormControlProps;
  @Input() formControl?: FormControl;
}
