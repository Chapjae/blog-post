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