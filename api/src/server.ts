import 'reflect-metadata';
import express from 'express';
import './database'


const app = express();

// 1 param => route
// 2 param => response

app.get("/users", (request, response) => {
    return response.json({ nome: "Dieferson" })
});

app.post("/users", (request, response) => {
    return response.json({ message: "Dados salvos com sucesso" });
});

app.listen(3333, () => console.log("SERVER IS RUNNING."));

