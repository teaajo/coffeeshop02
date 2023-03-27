import { Sequelize, DataTypes, Model } from "sequelize";

export interface SystemUser {
  id: string;
  name: string;
  surname: string;
  date_of_birth: Date;
  email: string;
  password: string;
  salt: string; 
  id_type: string;
}
export class SystemUserModel extends Model<SystemUser> {
}
const sequelize = new Sequelize(process.env.DATABASE, process.env.NAME, process.env.PASSWORD, {
  host: 'localhost',
  dialect: 'mssql'
});
SystemUserModel.init( {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    surname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    salt: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    id_type: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'UserType',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'SystemUser',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SystemUser",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
