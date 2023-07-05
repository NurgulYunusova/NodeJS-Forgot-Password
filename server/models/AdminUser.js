const { default: mongoose, Schema } = require("mongoose");

const AdminUserSchema = new Schema({
  email: String,
  password: String,
});

const AdminUser = mongoose.model("AdminUser", AdminUserSchema);

module.exports = {
  AdminUser,
};
