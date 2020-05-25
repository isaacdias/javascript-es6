 /* 5.1 
 A partir do array: 
 const arr = [1, 2, 3, 4, 5, 6], 
 defina uma variável x que recebe a primeira posição do vetor e outra variável y 
 que recebe todo restante dos dados. */

 const arr = [1, 2, 3, 4, 5, 6];
 const [x, ...y] = arr;
 console.log(x);
 console.log(y);

// Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:
 function soma(...nums){
     return nums.reduce((a,b) => a + b);
 }
 console.log(soma(1,2,3,4,5,6));
 console.log(soma(1,2));

 /* 5.2
 A partir do objeto e utilizando o operador spread:
 Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel */

 const usuario = {
     nome: 'Diego',
     idade: 24,
     endereco: {
         cidade: 'Rio do Sul',
         uf: 'SC',
         pais: 'Brasil',
     }
 };

 const usuario2 = {...usuario, nome: "Gabriel"};
 console.log(usuario2);