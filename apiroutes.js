import { Router } from "express";

export default Router()
    .get("/", (req, res) => res.send("get pe api"))
    .post("/", (req, res) => res.send("post pe api"))
