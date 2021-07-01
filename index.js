const express = require("express");
const app = express();
const fetch = require("node-fetch");
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

app.get('/everything/:query', (req, res) => {
  const searchValue = req.params.query
  fetch(`https://newsapi.org/v2/everything?q=${searchValue}&apiKey=4528ed13b69744e581384c6fa39e00de`)
    .then(response => response.json())
    .then(data => res.send(data))
})

app.get('/headlines/:category/:countryCode', (req, res) => {
  const category = req.params.category
  const countryCode = req.params.countryCode
  fetch(`https://newsapi.org/v2/top-headlines?category=${category}&country=${countryCode}&apiKey=4528ed13b69744e581384c6fa39e00de`)
    .then(response => response.json())
    .then(data => res.send(data))
})