// 4.1 Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis
const empresa = {
    nome: "Rocketseat",
    endereco: {
        cidade: "Rio de Janeiro",
        estado: "SC",
    }
};

const {nome, endereco:{cidade, estado}} = empresa;
console.log(nome);
console.log(cidade);
console.log(estado);
