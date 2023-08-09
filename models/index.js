// No Many-to-Many relationships. All One-to-Many relationships.

// User 
 // Users have many Comments
 // Users have many Blogs
 // User will not have any foreign keys

// Blog
 // Blogs belong to one User
 // Blogs can have many Comments
 // Will have foreign key that points to the User

// Comment
 // Comment belongs to one User
 // Comment belongs to one Blog
 // Will have foreign key for User
 // Will have foreign key for Blog

const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

User.hasMany(Blog, {
 foreignKey: "username",
 onDelete: "CASCADE"
});

User.hasMany(Comment, {
 foreignKey:"username",
 onDelete: "CASCADE"
});

Blog.hasOne(User, {
 foreignKey: "username",
 onDelete: "CASCADE"
});

Blog.hasMany(Comment, {
 foreignKey: "id",
 onDelete: "CASCADE"
});

Comment.belongsTo(User, {
 foreignKey: "username"
});

Comment.belongsTo(Blog, {
 foreignKey: "id"
});

module.exports = { User, Blog, Comment };