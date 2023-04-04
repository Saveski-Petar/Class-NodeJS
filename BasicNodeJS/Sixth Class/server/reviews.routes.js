import express from "express";
import * as reviewsService from "./reviews.service.js";

const router = express.Router();

// /api

const reviewsRoute = "/reviews";

// method === GET
router.get(reviewsRoute, (req, res) => {
  try {
    // get data from the service
    const reviews = reviewsService.getReviews();
    // return data as response
    res.status(200).send(reviews);
  } catch (error) {
    // return error
    // res.sendStatus(500)
    res.status(500).send("Problem while fetching reviews");
  }
});

// method === POST
router.post(reviewsRoute, (req, res) => {
  // Prepare data
  const body = req.body;

  try {
    // Business logic (in service)
    const review = reviewsService.addReview(body);
    // Send response
    res.status(200).send(review);
  } catch (error) {
    // Send error
    res.status(500).send(error.message);
  }
});

// method === PUT
router.put(`${reviewsRoute}/:id`, (req, res) => {
  // prepare Data
  const id = req.params.id;
  const body = req.body;
  try {
    // send data to service
    const updatedReview = reviewsService.updateReview(body, id);
    // send res
    res.status(200).send(updatedReview);
  } catch (error) {
    // send Error
    res.status(500).send(error.message);
  }
});

// method === PATCH
router.patch(`${reviewsRoute}/:id`, (req, res) => {
  // prepare data
  const id = req.params.id;
  const body = req.body;
  try {
    // send data to service
    const patchedReview = reviewsService.editedReview(id, body);
    res.status(200).send(patchedReview);
    //send res
  } catch (error) {
    //send error
    res.status(400).send(error.message);
  }
});

// method === DELETE
router.delete(`${reviewsRoute}/:id`, (req, res) => {
  const id = req.params.id;
  try {
    reviewsService.deleteReview(id);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send("cannot delete review");
  }
});

export default router;
