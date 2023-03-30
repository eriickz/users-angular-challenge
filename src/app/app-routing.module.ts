import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserListComponent } from "./user/user-list/user-list.component";
import { UserFormComponent } from "./user/user-form/user-form.component";
import { GlobalModule } from "./global/global.module";
import { UserModule } from "./user/user.module";

const routes: Routes = [
  { path: "", redirectTo: "/user-list", pathMatch: "full" },
  { path: "user-list", component: UserListComponent },
  { path: "new-user", component: UserFormComponent },
  { path: "update-user/:id", component: UserFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" }), GlobalModule, UserModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
