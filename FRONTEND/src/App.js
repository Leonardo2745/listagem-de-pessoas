import FormPessoa from "./form-entra-pessoa/form-pessoa";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import TablePessoa from "./table-pessoa/table-pessoa";

function App() {
const [dados, setDados] = useState([{}]);
const [pessoa, setPessoa] = useState({
  nome: "",
  sobrenome: "",
  idade: 0,

});

 
   useEffect(() =>{
    fetchPessoas();
   },{});


   const fetchPessoas = async () =>{
    const resultado = await getPessoas();
    setDados(resultado);

   };
   
  return (
    <div className="App">
      <FormPessoa pessoa={pessoa} setPessoa={setPessoa} />
      <TablePessoa pessoas={dados} />
    </div>
  );



}

export default App;
