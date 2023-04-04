const sessionValidator = (req, res, next) => {
  if (req?.session?.loggedIn) {
    // user is logged in
    next();
  } else {
    // user is not logged in
    res.status(403).send(`You need to be logged in to access this page`);
  }
};

export default sessionValidator;
