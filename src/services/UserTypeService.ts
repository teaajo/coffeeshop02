import { error } from "console";
import { Model } from "sequelize";
import { UserTypeResponse } from "../dto/response/UserTypeResponse";
import { UserType, UserTypeModel } from "../models/UserType";
import { mapUserTypeToUserTypeResponse } from "../utils/mappers/mapUserTypeToUserTypeResponse"
import { IUserTypeService } from "./IUserTypeService";

const getUserTypes = async (): Promise<UserTypeResponse[]> => {
    const userTypeModels: UserTypeModel[] = await UserTypeModel.findAll();
    const users: UserType[] = userTypeModels.map(userTypeModel => userTypeModel.get({ plain: true }));
    return users.map(mapUserTypeToUserTypeResponse)
   
  };

  
  const getById = async (id: string): Promise<UserTypeResponse> => {

    const findUser : Model<UserType, UserType> = await UserTypeModel.findOne({ where: { id: id } });
    if(!findUser)
    {
     return null
    }
    const userObject = findUser.get({ plain: true });
    const user = userObject as UserType;
    return mapUserTypeToUserTypeResponse(user)
  
  };
//   const getWithLowerPrice = async (price: number): Promise<CarResponse[]> => {
//     const car = await CarModel.find({ price: { $lte: price } });
//     return car.map(mapCarToCarResponse);
//   };
//   const createCar = async (request: CreateCarRequest): Promise<CarResponse> => {
//     const car = await CarModel.create(request);
//     return mapCarToCarResponse(car);
//   };
//   const deleteCar = async (name: string): Promise<CarResponse[]> => {
//     await CarModel.deleteOne({ name: name });
//     return;
//   };
  
  export const UserTypeService: IUserTypeService = {
    getUserTypes, 
    getById,
  };
  