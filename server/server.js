const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())


mongoose.connect('mongodb://127.0.0.1:27017/react-mishop')
.then(() => {
  console.log("mongodb connected");
}).catch( () => {
  console.log("failed")
})

