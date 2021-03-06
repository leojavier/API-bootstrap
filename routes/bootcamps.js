const express = require("express");
const {
  getBootcamps,
  getBootcamp,
  updateBootcamp,
  createBootcamp,
  deleteBootcamp,
  getBootcampsInRadius
} = require("../controllers/bootcamps");

// Includes other resources routers
const courseRouter = require("./courses");

const router = express.Router();

// Reroute into other resource routers
router.use("/:bootcampId/courses", courseRouter);

router.route("/radius/:zipcode/:distance").get(getBootcampsInRadius);

router
  .route("/")
  .get(getBootcamps)
  .post(createBootcamp);

router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
