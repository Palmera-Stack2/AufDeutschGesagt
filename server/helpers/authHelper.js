import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  const payload = { sub: user._id };

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};
