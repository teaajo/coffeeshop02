const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductType', {
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
    tableName: 'ProductType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ProductType",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
