import express from "express";

const app = express();
app.listen(3000, () => {
    console.log("Servidor escutando...")
});

app.get("/livro", (req, res) =>{
    res.status(200).send({
        titulo: "O Senhor dos Aneis",
        autor: "J.R.R Tolkien",
        ano: 1954,
        genero: "Fantasia",
    });
}); 