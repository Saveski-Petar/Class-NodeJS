import { v4 as uuidv4 } from "uuid";
import fs from "fs";

export const getReviews = () => {
  // get reviews
  const json = fs.readFileSync("db.json", { encoding: "utf-8" });
  const reviews = JSON.parse(json);

  // return back reviews
  return reviews;

  // all of this above in a single line
  // return JSON.parse(fs.readFileSync('db.json', { encoding: 'utf-8' }))
};

export const addReview = (body) => {
  // get reviews
  const json = fs.readFileSync("db.json", { encoding: "utf-8" });
  const reviews = JSON.parse(json);

  // validate properties
  if (!body?.title || !body?.text || !body?.score) {
    throw new Error(`Bad request, review is not in proper form`);
  }

  // create the new review
  // -- without spread operator
  // const review = body;
  // review.id = uuidv4()
  // -- with spread operator
  const review = {
    ...body,
    id: uuidv4(),
  };

  // add the new review to the list of reviews
  reviews.push(review);
  // reviews = [...reviews, review]

  // save the updated reviews to the list of reviews
  const stringifiedReviews = JSON.stringify(reviews, null, 2);
  fs.writeFileSync("db.json", stringifiedReviews);

  // send back new review as a return
  return review;
};

export const updateReview = (body, id) => {
  // get all reviews
  const json = fs.readFileSync("db.json", { encoding: "utf-8" });
  const reviews = JSON.parse(json);
  // find existing review
  const index = reviews.findIndex((review) => review.id === id);

  if (index === -1) {
    throw new Error(`cant find review with id ${id}`);
  }
  // validate properties
  if (!body?.title || !body?.text || !body?.score) {
    throw new Error(`Bad request, review is not in proper form`);
  }
  // replace old review with new body
  reviews[index] = {
    ...body,
    id,
  };
  // save back to db
  const stringifiedUpdatedReviews = JSON.stringify(reviews, 0, 2);
  fs.writeFileSync("db.json", stringifiedUpdatedReviews);

  return reviews[index];
};

export const editedReview = (id, body) => {
  // get all reviews
  const json = fs.readFileSync("db.json", { encoding: "utf-8" });
  const reviews = JSON.parse(json);
  // find existing review
  const index = reviews.findIndex((review) => review.id === id);

  if (index === -1) {
    throw new Error(`cant find review with id ${id}`);
  }
  // validate properties
  if (!body?.title && !body?.text && !body?.score) {
    throw new Error(`Bad request, review is not in proper form`);
  }
  // replace old review with new body
  reviews[index] = {
    ...reviews[index], //take old review
    ...body, //add all from the new review(overwrite)
  };
  // save back to db
  const stringifiedUpdatedReviews = JSON.stringify(reviews, 0, 2);
  fs.writeFileSync("db.json", stringifiedUpdatedReviews);

  return reviews[index];
};

export const deleteReview = (id) => {
  // get all reviews
  const json = fs.readFileSync("db.json", { encoding: "utf-8" });
  const reviews = JSON.parse(json);
  // find existing review
  const filteredReview = reviews.filter((review) => review.id !== id);

  const stringifiedUpdatedReviews = JSON.stringify(filteredReview, 0, 2);
  fs.writeFileSync("db.json", stringifiedUpdatedReviews);
};
