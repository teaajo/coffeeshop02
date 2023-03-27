const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OrderedProduct', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_product: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Product',
        key: 'id'
      }
    },
    id_order: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'ProductOrder',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'OrderedProduct',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_OrderedProduct",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
