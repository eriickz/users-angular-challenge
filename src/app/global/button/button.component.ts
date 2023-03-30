import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styles: [
    `
      :host() {
        width: fit-content;
      }
    `,
  ],
})
export class ButtonComponent implements OnInit {
  @Input() buttonType = "new";
  @Input() type = "button";
  classes?: string;

  setCurrentColor() {
    const colorVariants: { [key: string]: string } = {
      new: "bg-button-new",
      cancel: "bg-button-cancel",
      save: "bg-button-save",
      delete: "bg-button-delete",
      update: "bg-button-update",
    };

    this.classes = `font-serif font-semibold text-white text-center text-xs py-2.5 px-8 rounded w-fit hover:opacity-75 ${colorVariants[this.buttonType]}`;
  }

  ngOnInit() {
    this.setCurrentColor();
  }
}
