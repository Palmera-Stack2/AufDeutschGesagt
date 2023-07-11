import express from "express";
import {
  createPost,
  deletePostId,
  ListPost,
  OwnerListPost,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/owner/list", OwnerListPost),
  router.delete("/owner/:id", deletePostId),
  router.post("/owner/create", createPost),
  router.get("/user/list", ListPost);

export default router;
