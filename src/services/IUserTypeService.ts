import { UserTypeRequest } from "../dto/request/UserTypeRequest";
import { UserTypeResponse } from "../dto/response/UserTypeResponse";

export interface IUserTypeService {
    getUserTypes: () => Promise<UserTypeResponse[]>;
    getById: (id: string) => Promise<UserTypeResponse>;
    // createCar: (userTypeRequest: UserTypeRequest) => Promise<UserTypeResponse>;
    // deleteCar: (id: string) => Promise<UserTypeResponse[]>;
  }
  