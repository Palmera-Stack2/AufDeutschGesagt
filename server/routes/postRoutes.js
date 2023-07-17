import express from "express";
import passport from "passport";
import {
  createPost,
  deletePostById,
  ListPost,
  OwnerListPost,
} from "../controllers/postController.js";

const router = express.Router();

router.get(
  "/owner/list",
  passport.authenticate("jwt", { session: false }),
  OwnerListPost
),
  router.delete(
    "/owner/delete/:id",
    passport.authenticate("jwt", { session: false }),
    deletePostById
  ),
  router.post(
    "/owner/create",
    passport.authenticate("jwt", { session: false }),
    createPost
  ),
  router.get("/user/list", ListPost);

export default router;
