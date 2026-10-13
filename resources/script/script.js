// // Arrays
// let nomes = ["MIgual Ângelo ", "Maria Eduarda ", "João Pedro ","Ana Clara","Pedro Henrique","Maria Alice ","Luiz felipe, Ana Júlia, João miguel e Maria Cecilia"];
// // console.log(nomes[5],nomes[3]);
// let nomePesquisa= prompt("Digite o nome a pesquisar:");
// //para usar isso prescisa criar outra lista,nesse caso o "listaFiltrada"
// //.toLowerCase() transforma o texto para pesquisar em letra menuscula porem se escrever com maiuscula não aparece
// //.toUpperCase() transforma o texto para pesquisar em letra maiuscula  porem se escrever com menuscula não aparece
// // let listaFiltrada = nomes.filter(nome=>
// // nome.toLowerCase()=== nomePesquisa || nome.toUpperCase()=== nomePesquisa
// // );
// let listaFiltrada = nomes.filter(nome=>
// nome.toLowerCase() === nomePesquisa.toLowerCase().trim()
// );
// console.log(listaFiltrada);
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let numPar = numeros.filter(numeros => numeros % 2 == 0);
console.log(numPar);
// starswith
// endwith
// includes
 