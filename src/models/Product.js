const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Product', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    id_type: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'ProductType',
        key: 'id'
      }
    },
    product_image: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    average_grade: {
      type: DataTypes.DECIMAL(2,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Product',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_P\roduct",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
