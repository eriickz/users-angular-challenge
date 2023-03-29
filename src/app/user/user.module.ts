import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserListComponent } from "./user-list/user-list.component";
import { UserFormComponent } from "./user-form/user-form.component";
import { GlobalModule } from "../global/global.module";
import { UserItemComponent } from "./user-item/user-item.component";

@NgModule({
  declarations: [UserListComponent, UserFormComponent, UserItemComponent],
  imports: [CommonModule, GlobalModule],
})
export class UserModule {}
