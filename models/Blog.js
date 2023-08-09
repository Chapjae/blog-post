const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Blog extends Model {}

Blog.init(
 {
  id: {
   type: DataTypes.INTEGER,
   allowNull: false,
   primaryKey: true,
   autoIncrement: true,
  },
  title: {
   type: DataTypes.STRING
  },
  content: {
   type: DataTypes.STRING
  }
 },
 {
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: "blog"
 }
);

module.exports = Blog