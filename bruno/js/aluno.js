export class Aluno {  
    static numeroDeAlunos = 0  
    _usuario    
    _senha
    email

    set usuario(nomeDeUsuario){
        if(nomeDeUsuario = Aluno._usuario)
        return
    }

    get usuario(){
        return this._usuario
    }

    constructor (usuario, senha, email){
        this._usuario = usuario
        this._senha = senha
        this.email = email
        Aluno.numeroDeAlunos++
    }

}
