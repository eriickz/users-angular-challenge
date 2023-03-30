import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "./button/button.component";
import { PageTitleComponent } from "./page-title/page-title.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [ButtonComponent, PageTitleComponent],
  imports: [CommonModule, RouterModule],
  exports: [PageTitleComponent, ButtonComponent],
})
export class GlobalModule {}
