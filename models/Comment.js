const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
 {
  id: {
   type: DataTypes.INTEGER,
   allowNull: false,
   primaryKey: true,
   autoIncrement: true
  },
  content: {
   type: DataTypes.STRING,
  },
  replied_to: {
   type: DataTypes.INTEGER,
   allowNull: false,
   references: {
    model: "blog",
    key: "id"
   }
  },
  posted_by: {
   type: DataTypes.STRING,
   allowNull: false,
   references: {
    model: 'user',
    key: "id"
   }
  }
 },
 {
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: "comment"
 }
)