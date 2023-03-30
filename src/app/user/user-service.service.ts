import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environment";
import User from "./types";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(`${environment.apiUrl}/user/getUsers`);
  }

  createUser(user: User) {
    return this.http.post<String>(`${environment.apiUrl}/user/create`, { ...user });
  }

  getUserById(id: number) {
    return this.http.get<User>(`${environment.apiUrl}/user/getUserById?id=${id}`);
  }

  updateUser(user: User) {
    return this.http.put<User>(`${environment.apiUrl}/user/updateUser`, { ...user });
  }

  deleteUser(id: number) {
    return this.http.delete(`${environment.apiUrl}/user/deleteUserById?id=${id}`, { observe: "response", responseType: "text" });
  }
}
