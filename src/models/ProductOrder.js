const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductOrder', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    date_of_order: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    discount: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    number_of_order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_user: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'SystemUser',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'ProductOrder',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Order",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
