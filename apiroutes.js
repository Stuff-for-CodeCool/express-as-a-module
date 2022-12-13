import { Router } from "express";

export default Router()
    .get("/", (req, res) => res.render("index"))
    .post("/", (req, res) => {
        const { nume, prenume } = req.body;

        if (req.is("json")) {
            //  if the request is JSON, return JSON
            res.json({ message: `Am primit numele "${nume}" si prenumele "${prenume}"`, });
        } else {
            //  otherwise render a file
            res.render("result", { n: nume, p: prenume });
        }
    });
