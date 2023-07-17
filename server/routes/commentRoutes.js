import express from "express";
import passport from "passport";
import {
  createComment,
  deleteCommentById,
  ListComment,
  OwnerListComment,
  OwnerUnReadComment,
  rating,
} from "../controllers/commentController.js";
const router = express.Router();
router.get(
  "/owner/list",
  passport.authenticate("jwt", { session: false }),
  OwnerListComment
),
  router.get(
    "/owner/list/unread",
    passport.authenticate("jwt", { session: false }),
    OwnerUnReadComment
  );
router.delete(
  "/owner/delete/:id",
  passport.authenticate("jwt", { session: false }),
  deleteCommentById
),
  router.post("/user/create", createComment),
  router.get("/user/list", ListComment),
  router.get("/user/rating", rating);
export default router;
