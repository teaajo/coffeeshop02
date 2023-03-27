import { config } from "dotenv";
import {Sequelize, DataTypes, Model } from "sequelize";

export interface UserType {
  id: string;
  type: string;
}

export class UserTypeModel extends Model<UserType> {
}

const sequelize = new Sequelize('CoffeeShop2', 'tea', 'ivona', {
  host: 'localhost',
  dialect: 'mssql'
});
UserTypeModel.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'UserType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_UserType",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });

