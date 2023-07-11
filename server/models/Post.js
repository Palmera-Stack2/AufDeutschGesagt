import { Schema, model } from "mongoose";

const postSchema = new Schema({
  dateCreated: { type: Date, default: Date.now },
  content: { type: String, required: true },
});

const Post = model("post", postSchema);

export default Post;
