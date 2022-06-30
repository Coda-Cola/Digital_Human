// https://github.com/vvo/iron-session
import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(
  async function loginRoute(req, res) {
    // get user from database then:
    // req.session.user = {
    //   id: 230,
    //   admin: true,
    // };
    await req.session.save();
    res.send({ ok: true });
  },
  {
    cookieName: "digital_human_likes_cookies",
    password: process.env.AUTH_PASSWORD as string,
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    // cookieOptions: {
    //   secure: process.env.NODE_ENV === "production",
    // },
  },
);