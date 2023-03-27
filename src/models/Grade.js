const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Grade', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    grade: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    id_user: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'SystemUser',
        key: 'id'
      }
    },
    id_product: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Product',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Grade',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Grade",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
