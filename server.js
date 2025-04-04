const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/petlandia", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const PetSchema = new mongoose.Schema({
    nome: String,
    categoria: String,
    descricao: String,
    contato: String
});

const Pet = mongoose.model("Pet", PetSchema);

app.post("/cadastro", async (req, res) => {
    try {
        const novoPet = new Pet(req.body);
        await novoPet.save();
        res.status(201).send("Cadastro realizado com sucesso!");
    } catch (error) {
        res.status(500).send("Erro ao cadastrar pet.");
    }
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
