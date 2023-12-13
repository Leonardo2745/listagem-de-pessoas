const getPessoas = async () =>{
    try {
        const resposta = await fetch(`${URL_API}/pessoa`);

        if(!resposta.ok) {
            throw new Error('Falha na requisição')
        }
        return await resposta.json
    } catch (error) {

    }

}

export default getPessoas;