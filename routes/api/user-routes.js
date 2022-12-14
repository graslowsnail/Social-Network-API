const router = require("express").Router();

const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller.js");

//set up GET all and POST at api/users
router.route("/").get(getAllUser).post(createUser);
//all work right

//set up GET one, PUT, and DELETE at api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);
//done

// get up POST new and DELETE friend
router.route("/:id/friends/:friendId").post(addFriend).delete(removeFriend);
//done

module.exports = router;
