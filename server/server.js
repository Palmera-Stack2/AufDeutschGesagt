import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";
import cookieParser from "cookie-parser";
import passport from "passport";
import { configureJwtStrategy } from "./routes/passport-config.js";
import userRoutes from "./routes/userRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();

const app = express();
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(express.json());
app.use(cookieParser());

configureJwtStrategy(passport);

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database connected! 😃");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("🤨");
  });

app.use("/api/user", userRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/post", postRoutes);

app.all("*", (req, res) => {
  return res.status(StatusCodes.NOT_FOUND).json({ message: "Invalid path" });
});

app.listen(3001, () => {
  console.log("The server is listening for requests....");
});
