const express = require("express");
const { adminUserController } = require("../controllers/adminUserController");

const adminUserRoutes = express.Router();

adminUserRoutes.post("/", adminUserController.add);
adminUserRoutes.get("/", adminUserController.getAll);
adminUserRoutes.delete("/:id", adminUserController.delete);

module.exports = {
  adminUserRoutes,
};
