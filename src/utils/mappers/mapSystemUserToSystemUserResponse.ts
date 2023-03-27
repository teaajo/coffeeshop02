import { SystemUserResponse } from "../../dto/response/SystemUserResponse";
import { SystemUser } from "../../models/SystemUser";


export const mapSystemUserToSystemUserResponse = (systemUser: SystemUser): SystemUserResponse => ({
  name: systemUser.name,
  surname: systemUser.surname,
  date_of_birth: systemUser.date_of_birth,
  email: systemUser.email,
  id_type: systemUser.id_type
});
