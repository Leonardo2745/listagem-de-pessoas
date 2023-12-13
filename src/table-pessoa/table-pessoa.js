const TablePessoa = ({pessoas})=>{
    return(
        <>
        <div className="m-5">
        <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Sobrenome</th>
            <th scope="col">Idade</th>
          </tr>
        </thead>
        <tbody>
            {pessoas.map((pessoa, index)=>(
                <tr>
                    <th id={index} scope="row">{index}</th>    
                    <td>{pessoa.nome}</td>
                    <td>{pessoa.sobrenome}</td>
                    <td>{pessoa.idade}</td>
                </tr>
            ))}
        </tbody>
        </table>
        </div>
        </>
    )
}

export default TablePessoa;
