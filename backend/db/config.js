const mongoose = require("mongoose");
const uri =
  // "mongodb+srv://harshkr5247:sgDapfEl3fYHMPMV@cluster0.1zulvry.mongodb.net/e-commerce?retryWrites=true&w=majority";
  "mongodb://0.0.0.0:27017/e-commerce";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("Could not connect", err);
  });
