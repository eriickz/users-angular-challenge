import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "./button/button.component";
import { PageTitleComponent } from "./page-title/page-title.component";

@NgModule({
  declarations: [ButtonComponent, PageTitleComponent],
  imports: [CommonModule],
  exports: [PageTitleComponent],
})
export class GlobalModule {}
