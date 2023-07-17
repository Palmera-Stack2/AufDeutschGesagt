import { Schema, model } from "mongoose";

const fileSchema = new Schema({
  dateCreated: { type: Date, default: Date.now },
  originalname: { type: String },
  filename: { type: String },
  filePath: { type: String },
  fileMimetype: { type: String },
  size: { type: Number },
});

const File = model("file", fileSchema);

export default File;
