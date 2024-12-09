import { User } from "@angular/fire/auth"
import { RoleType } from "./role-type.enum";

export type UserEntity = {
  userData: User;
  role: RoleType;
}
