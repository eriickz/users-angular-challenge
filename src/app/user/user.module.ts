import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserListComponent } from "./user-list/user-list.component";
import { UserFormComponent } from "./user-form/user-form.component";
import { GlobalModule } from "../global/global.module";
import { UserItemComponent } from "./user-item/user-item.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";

@NgModule({
  declarations: [UserListComponent, UserFormComponent, UserItemComponent],
  imports: [CommonModule, GlobalModule, RouterModule, HttpClientModule, ReactiveFormsModule, SweetAlert2Module.forRoot()],
})
export class UserModule {}
