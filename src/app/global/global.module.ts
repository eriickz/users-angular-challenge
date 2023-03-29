import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "./button/button.component";
import { PageTitleComponent } from "./page-title/page-title.component";
import { RouterModule } from "@angular/router";
import { FormControlComponent } from "./form-control/form-control.component";

@NgModule({
  declarations: [ButtonComponent, PageTitleComponent, FormControlComponent],
  imports: [CommonModule, RouterModule],
  exports: [PageTitleComponent, ButtonComponent, FormControlComponent],
})
export class GlobalModule {}
