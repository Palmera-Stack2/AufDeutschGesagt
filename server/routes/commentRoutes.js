import express from "express";
import {
  createComment,
  deleteCommentById,
  ListComment,
  OwnerListComment,
  rating,
} from "../controllers/commentController.js";
const router = express.Router();
router.get("/owner/list", OwnerListComment),
  router.delete("/owner/:id", deleteCommentById),
  router.post("/user/create", createComment),
  router.get("/user/list", ListComment),
  router.get("user/rating", rating);
export default router;
