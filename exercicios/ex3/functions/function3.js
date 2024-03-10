/* ler propriedades dentro de um objeto 
criar um método para ler propriedades de um objeto e exibir somente as propriedades do tipo string que estão nesse objeto */
const filme = {
    titulo: 'Segurando as pontas',
    ano: 2014,
    diretor: 'Sthepen Rogen',
    personagem: 'Judeu'
}
let = exibirPropriedades(filme);
function exibirPropriedades(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop, obj[prop])
}
