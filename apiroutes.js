import { Router } from "express";

export default Router() //  export the whole module
    .get("/", (req, res) => res.render("index")) //  render the form on get
    .post("/", (req, res) => {
        const { nume, prenume } = req.body; //  extract the nume and prenume variables that were submitted

        if (req.is("json")) {
            //  if the request is JSON, return JSON
            res.json({
                message: `Am primit numele "${nume}" si prenumele "${prenume}"`,
            });
        } else {
            //  otherwise render a file
            res.render("result", { n: nume, p: prenume });
        }
    });
