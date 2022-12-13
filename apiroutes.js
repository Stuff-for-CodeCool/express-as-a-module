import { Router } from "express";

export default Router()
    .get("/", (req, res) => res.render("index"))
    .post("/", (req, res) => {
        const { nume, prenume } = req.body;
        res.render("result", { n: nume, p: prenume });
    });
