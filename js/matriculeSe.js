
const form = document.querySelector('form')
const submit = document.querySelector('[data-input-submit]')

submit.addEventListener('click', ()=>{
    const aluno = montaAluno(form) 
    const alunoValidado = (aluno)=>{
        if (validaAluno(aluno) == false){
            return
        }else{
            return aluno
        }
    }
    const alunoOk = alunoValidado(aluno)
    salvar(alunoOk.nome, alunoOk.email) 
})

function montaAluno (form){
    const aluno = {
        nome: form.nomeDoAluno.value,
        email: form.email.value
    }
    return aluno
}

const salvar = (nome, email)=>{
    const resposta = fetch('http://localhost:3000/alunos', {
        method: 'POST',
        headers: {  
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email:email
        })})
    return resposta.body    
}

const validaAluno = (aluno) => {  

    if (validaEmail(aluno) || validaNome(aluno) == false){
        return false
    }
    return aluno
}

const validaNome = (aluno) =>{
    const nome = aluno.nome
    if(nome.length < 1) {
        console.log('nome inválido')
        return  false
    }
} 

const validaEmail = (aluno) =>{
    const email = aluno.email
    if(email.length < 1) {        
        console.log('email inválido')
        return false
    }
}