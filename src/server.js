const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
const uri =
  "mongodb://localhost:27017/?readPreference=primary&appname=myApp&ssl=false";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const runMongo = async () => {
  try {
    await client.connect();
  } catch (error) {
    console.log(error);
  }
};

runMongo();

app.options("*", cors());

app.get("/all/:id", async (req, res) => {
  res.type("json");
  res.header("Access-Control-Allow-Origin", "*");
  console.log(":page");
  console.log(req.params.id);
  const database = client.db("storedb");
  const current_page = req.params.id;
  const limit = 10;
  const cursor = database
    .collection("all")
    .find()
    .skip(current_page * limit)
    .limit(limit);
  let counter = await cursor.count();
  console.log("result:", counter, "\n\n\n\n");
  let resultArr = await cursor.toArray();
  res.json(resultArr);
});

app.get("/all", async (req, res) => {
  res.type("json");
  res.header("Access-Control-Allow-Origin", "*");
  console.log("default");
  const database = client.db("storedb");
  const current_page = 1;
  const limit = 10;
  const cursor = database
    .collection("all")
    .find()
    .skip(current_page * limit)
    .limit(limit);
  let counter = await cursor.count();
  console.log("result:", counter, "\n\n\n\n");
  let resultArr = await cursor.toArray();
  res.json(resultArr);
});

app.listen(5000, () => {
  console.log("server running...");
});
