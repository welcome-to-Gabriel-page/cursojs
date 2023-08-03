
let = verificarVelocidade(70);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMaxima) {
        console.log('Tudo certo, dirija com cuidado!'); 
    } else {
        const pontos = Math.floor (((velocidade - velocidadeMaxima) / kmPorPonto));
        if (pontos >= 12)
            console.log('Carteira suspensa!');
        else 
            console.log(`Você tem ${pontos} pontos!`)
    }
}