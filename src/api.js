const express = require("express");
const serverless = require("serverless-http");
const fetch = require("node-fetch");

const app = express();

// Local development and port selection
// const port = process.env.PORT || 4000;
// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });

// Router
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    "Hi": "Welcome to the Channel 7 News API"
  });
});

router.get("/everything/:query", (req, res) => {
  const searchValue = req.params.query;
  fetch(
    `https://newsapi.org/v2/everything?q=${searchValue}&apiKey=4528ed13b69744e581384c6fa39e00de`
  )
    .then((response) => response.json())
    .then((data) => res.send(data));
});

router.get("/headlines/:category/:countryCode", (req, res) => {
  const category = req.params.category;
  const countryCode = req.params.countryCode;
  fetch(
    `https://newsapi.org/v2/top-headlines?category=${category}&country=${countryCode}&apiKey=4528ed13b69744e581384c6fa39e00de`
  )
    .then((response) => response.json())
    .then((data) => res.send(data));
});

// Tell the Netlify app to use the Router
app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
