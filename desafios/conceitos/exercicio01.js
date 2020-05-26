/*
Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", 
essa classe deveextender uma segunda classe chamada "Usuario".A classe usuário deve 
receber dois parâmetros no método construtor, e-mail e senha, e anotá-losem propriedades da classe. 
A classe "Admin" por sua vez não recebe parâmetros mas deve repassar os parâmetros de e-mail e senha 
à classe pai e marcar uma propriedade "admin" comotrue na classe.Agora com suas classes formatadas, 
adicione um método na classe Usuario chamado isAdmin queretorna se o usuário é administrador ou não
baseado na propriedade admin ser true ou não.
*/

// const User1 = new Usuario('email@teste.com', 'senha123');
// const Adm1 = new Admin('email@teste.com', 'senha123');
// console.log(User1.isAdmin()) // false
// console.log(Adm1.isAdmin()) // true

class Usuario{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    isAdmin (){
        return this.admin === true;
    }
}

class Admin extends Usuario {
    constructor(email, password){
        super(email, password);
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', '123456');
const Adm1 = new Admin('email@teste.com', '123456');

console.log(User1.isAdmin()) 
console.log(Adm1.isAdmin())