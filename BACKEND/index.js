const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());

const pessoaRoutes = require('./src/routes/pessoaRoutes');
server.use('/api/pessoa', pessoaRoutes);

const PORT = process.env.PORT || 7000;

server.listen(PORT, () => {
    console.log(`Seu BACKEND está rodando na porta http://localhost:${PORT}`);
});