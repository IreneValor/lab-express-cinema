const express = require("express");
const router = express.Router();
const Movie = require("./../models/Movie.model");
const hbs = require("hbs");

//ruta home
router.get("/", (req, res, next) => res.render("index"));

//ruta movies
router.get("/movies", async (req, res, next) => {
  const movies = await Movie.find();
  console.log(movies);
  res.render("movies", { movies });
});

//--------

// Movie detalles (falta comprobar)
router.get("/movieDetails/:movies_id", (req, res) => {
  const { movies_id } = req.params;

  Movie.findById(movies_id)
    .then((moviesFromDB) => {
      res.render("movieDetails", moviesFromDB);
    })
    .catch((err) => console.log(err));
});
module.exports = router; //exporto el router
