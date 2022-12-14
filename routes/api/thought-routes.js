const router = require("express").Router();

const {
  getAllThought,
  getThoughtById,
  addThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller.js");

// set up GET all at api/thoughts
router.route("/").get(getAllThought);

// /api/thoughts/user:id
router.route("/:userId").post(addThought);

// /api/thoughts/thoughtId/
router
  .route("/:thoughtId")
  .get(getThoughtById)
  //.put(addThought)
  .delete(removeThought);

// /api/thoughts/thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction).delete(removeReaction);

module.exports = router;
