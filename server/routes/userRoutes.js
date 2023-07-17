import express from "express";
import {
  createUser,
  loginUser,
  logoutUser,
  updateUser,
  deleteUserById,
} from "../controllers/userController.js";

const router = express.Router();
router.post("/create", createUser);
router.patch("/update/:id", updateUser);
router.delete("/delete/:id", deleteUserById);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

export default router;
