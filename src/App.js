import FormPessoa from "./form-entra-pessoa/form-pessoa";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import TablePessoa from "./table-pessoa/table-pessoa";

function App() {
  const [dados, setDados] = useState([
    { nome: "Iveto", sobrenome: "Olivero", idade: 17 },
    { nome: "Netflixo", sobrenome: "Silvestre", idade: 29 },
    { nome: "Calabreso", sobrenome: "Defumado", idade: 33 },
    { nome: "Iço", sobrenome: "Crimo", idade: 23 },
    { nome: "Doutoro", sobrenome: "Deolano", idade: 45 },
  ]);



  const salvar =(novaPessoa) =>{
    setDados([...dados,novaPessoa])

  }


  return (
    <div className="App">
      <FormPessoa method={salvar}/>
      <TablePessoa pessoas={dados} />
    </div>
  );



}

export default App;
