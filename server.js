import express, { json, urlencoded } from "express";
import apiRouter from "./apiroutes.js";

express()
    .use(json())
    .use(urlencoded({ extended: true }))
    .set("view engine", "pug")
    .set("views", "./views")
    .get("/", (req, res) => res.render("index"))
    .use("/api", apiRouter)
    .listen(9000, () => console.log("http://localhost:9000/"));
