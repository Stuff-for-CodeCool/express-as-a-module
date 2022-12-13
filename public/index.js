const form = document.querySelector("form");

//  adds event listener only if form exists
form?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const req = await fetch("/api", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            nume: e.target.nume.value,
            prenume: e.target.prenume.value,
        }),
    });
    const res = await req.json();
    document.body.innerHTML = "<p>" + res.message + "</p>";
});
