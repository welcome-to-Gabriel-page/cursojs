let valores = [8, 1, 7, 4, 9]
for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} // código TRADICIONAL do percurso em vetores, para exibir quantos índices e qual o valor de cada um

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} //código reduzido do percurso em vetores, para exibir quantos índices e qual o valor de cada um 

let pos = valores.indexOf(7)
if(pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)

} //encontrar valores dentro do vetor