const { Schema, model } = require("mongoose");

//  TODO
//  add thoughts to user schema
//  add friends to user schama CHECK CHALLENGE PAGE
//

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // email must be unique
    },
    thoughts: [
      // {
      //   type: Schema.Types.ObjectId,
      //   ref: "Thought",
      // },
    ],
    friends: [],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
//get total count of thoughts and reactions on retrieval
// UserSchema.virtual("thoughtCount").get(function () {
//   return this.thoughts.reduce(
//     (total, thought) => total + thought.reactions.length + 1,
//     0
//   );
// });
UserSchema.virtual("thoughtCount").get(function () {
  return this.thoughts.length;
});

UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

//create the User model using the UserSchema
const User = model("User", UserSchema);

// export the User model
module.exports = User;
