//Imports de Componentes
// import Titulo from "./titulo/titulo";
import FormPessoa from "./form-entrada-pessoa/form-pessoa";
import TablePessoa from "./table-lista-pessoas/table-pessoa";
//Etilos CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Outros imports
import { useEffect, useState } from "react";
import {apiGetPessoas, apiAddPessoa} from "./api/pessoa.service";

function App() {
  const [dados, setDados] = useState([{}]);
  const [onAction, setAction] = useState(false);
  const [selected, setSelected] = useState({nome:null,sobrenome:null,idade:null})

  useEffect(() => {
    fetchPessoas();
  }, [onAction]);

  const fetchPessoas = async () => {
    const resultado = await apiGetPessoas();
    setDados(resultado);
  };

  const handleSubmit = async (novoDado) =>{
    await apiAddPessoa(novoDado)
    setAction(!onAction)
  }
  
  const handleClick = (e, pessoa) =>{
    console.log(pessoa)
    if(e.type === 'click'){
      const confirmarUpdate = window.confirm(
        `Você quer atualizar os dados de ${pessoa.nome}`
      )

      if (confirmarUpdate) {
        setSelected(pessoa)
      }

    } else if (e.type === 'contextmenu'){
      e.preventDefault();
      if(e.button === 2) {
        console.log(`${pessoa.nome} será deletado`)
      }
    }
  }

  return (
    <div className="App">
      <FormPessoa selected={selected} handleSubmit={handleSubmit} />
      <TablePessoa pessoas={dados} handleClick={handleClick}/>
    </div>
  );
  }



export default App;
