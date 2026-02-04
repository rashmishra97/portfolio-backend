import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Message", messageSchema);




// import mongoose from "mongoose";

// const MessageSchema = new mongoose.Schema(
//   {
//     name: String,
//     message: String
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Message", MessageSchema);

