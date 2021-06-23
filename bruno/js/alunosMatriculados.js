const catalogaAluno = ()=>{
    const arrayDeAlunos = getAluno()
    criaLinha(arrayDeAlunos)
    console.log(arrayDeAlunos)
}

const getAluno = async ()=>{    
    const resposta = await fetch(`http://localhost:3000/alunos`, {
    method: 'GET', 
    headers: {
        'Content-Type' : 'application/json'
    }})
    return await resposta.json()    
}

const criaLinha = (arrayDeAlunos)=>{
    const linha = document.createElement('tr')
    linha.innerHTML = 
        `<td class="td" data-td></td>
        <td</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td> 
        `
}


catalogaAluno()

