import passportJwt from "passport-jwt";
import User from "../models/User.js";

export function configureJwtStrategy(passport) {
  passport.use(
    "jwt",
    new passportJwt.Strategy(
      {
        secretOrKey: process.env.JWT_SECRET,
        jwtFromRequest: (req) => req.cookies.jwt,
      },
      async (jwtPayload, done) => {
        const user = await User.findById(jwtPayload.sub);

        console.log(jwtPayload);
        return done(null, user);
      }
    )
  );
}
