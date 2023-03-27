var DataTypes = require("sequelize").DataTypes;
var _Grade = require("./Grade");
var _OrderedProduct = require("./OrderedProduct");
var _Product = require("./Product");
var _ProductOrder = require("./ProductOrder");
var _ProductType = require("./ProductType");
var _SystemUser = require("./SystemUser");
var _UserType = require("./UserType");

function initModels(sequelize) {
  var Grade = _Grade(sequelize, DataTypes);
  var OrderedProduct = _OrderedProduct(sequelize, DataTypes);
  var Product = _Product(sequelize, DataTypes);
  var ProductOrder = _ProductOrder(sequelize, DataTypes);
  var ProductType = _ProductType(sequelize, DataTypes);
  var SystemUser = _SystemUser(sequelize, DataTypes);
  var UserType = _UserType(sequelize, DataTypes);

  Grade.belongsTo(Product, { as: "id_product_Product", foreignKey: "id_product"});
  Product.hasMany(Grade, { as: "Grades", foreignKey: "id_product"});
  OrderedProduct.belongsTo(Product, { as: "id_product_Product", foreignKey: "id_product"});
  Product.hasMany(OrderedProduct, { as: "OrderedProducts", foreignKey: "id_product"});
  OrderedProduct.belongsTo(ProductOrder, { as: "id_order_ProductOrder", foreignKey: "id_order"});
  ProductOrder.hasMany(OrderedProduct, { as: "OrderedProducts", foreignKey: "id_order"});
  Product.belongsTo(ProductType, { as: "id_type_ProductType", foreignKey: "id_type"});
  ProductType.hasMany(Product, { as: "Products", foreignKey: "id_type"});
  Grade.belongsTo(SystemUser, { as: "id_user_SystemUser", foreignKey: "id_user"});
  SystemUser.hasMany(Grade, { as: "Grades", foreignKey: "id_user"});
  ProductOrder.belongsTo(SystemUser, { as: "id_user_SystemUser", foreignKey: "id_user"});
  SystemUser.hasMany(ProductOrder, { as: "ProductOrders", foreignKey: "id_user"});
  SystemUser.belongsTo(UserType, { as: "id_type_UserType", foreignKey: "id_type"});
  UserType.hasMany(SystemUser, { as: "SystemUsers", foreignKey: "id_type"});

  return {
    Grade,
    OrderedProduct,
    Product,
    ProductOrder,
    ProductType,
    SystemUser,
    UserType,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
