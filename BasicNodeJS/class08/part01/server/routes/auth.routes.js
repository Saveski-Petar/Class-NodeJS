import express from "express";
import { productsSession } from "../sessions/sessions.const.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(`<h1>Main Page</h1>`);
});

router.post("/login", productsSession, (req, res) => {
  const body = req.body;

  const dummyUser = {
    username: "User1",
    password: "password1",
  };

  if (
    body.username === dummyUser.username &&
    body.password === dummyUser.password
  ) {
    req.session.loggedIn = true;
    res.status(200).send(`You've logged in `);
    console.log(req.session);
  } else {
    req.session.loggedIn = false;
    res.status(400).send(`Wrong credentials `);
  }
});

router.post("/logout", productsSession, (req, res) => {
  req.session.destroy();
  console.log(req.session);
  res.status(200).send(`You've successfully logged out`);
});

export default router;
