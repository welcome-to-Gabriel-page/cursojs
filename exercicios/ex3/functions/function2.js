let = exibirTipo(5);
function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++) {
    if (i % 2 === 0)
        console.log(`O número ${i} é PAR.`);
    else 
        console.log(`O número ${i} é IMPAR.`)
}

}