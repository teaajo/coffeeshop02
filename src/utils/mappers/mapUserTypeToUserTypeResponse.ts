import {UserTypeResponse} from "../../dto/response/UserTypeResponse"
import {UserType} from "../../models/UserType"

export const mapUserTypeToUserTypeResponse = (userType: UserType): UserTypeResponse => ({
  type: userType.type,
});
