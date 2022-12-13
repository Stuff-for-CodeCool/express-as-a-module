import express, { json, urlencoded, static as estatic } from "express";
import apiRouter from "./apiroutes.js";

express() //  get the app going
    .use(json()) //  process JSON data
    .use(urlencoded({ extended: true })) //  process forms
    .set("view engine", "pug") //  set the pug view engine
    .set("views", "./views") //  set the templates folder
    .use(estatic("public")) //  set the static folder
    .get("/", (req, res) => res.render("index")) //  render an index page
    .use("/api", apiRouter) //  render all api pages
    .listen(9000, () => console.log("http://localhost:9000/")); //  start the app
