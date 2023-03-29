import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
})
export class ButtonComponent implements OnInit {
  @Input() buttonType = "new";
  classes?: string;

  setCurrentColor() {
    const colorVariants: { [key: string]: string } = {
      new: "bg-button-new",
      cancel: "bg-button-cancel",
      save: "bg-button-save",
      delete: "bg-button-delete",
      update: "bg-button-update",
    };

    this.classes = `font-serif font-semibold text-white text-center text-xs py-2.5 px-8 rounded hover:opacity-75 ${colorVariants[this.buttonType]}`;
  }

  ngOnInit() {
    this.setCurrentColor();
  }
}
