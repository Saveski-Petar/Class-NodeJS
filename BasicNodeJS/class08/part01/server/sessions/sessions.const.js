import session from "express-session";

export const productsSession = session({
  secret: "our_secret_123",
  name: "products_session",
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
  },

  saveUninitialized: true,
  resave: true,
});

export const fruitSession = session({
  secret: "our_secret_Fruits",
  name: "fruits_session",
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
  },

  saveUninitialized: true,
  resave: true,
});
