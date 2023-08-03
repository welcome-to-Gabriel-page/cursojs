// função para calcular multiplos de 10 e de 20 ate o limite (200)

somar(200);
function somar(limite) {
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;
    for (i = 0; i <= limite; i++) {
        if (i % 10 === 0)
            multiplosDe3 += i;
        //if (i % 20 === 0) 
            //multiplosDe5 += i;
    }
    console.log(multiplosDe3 + multiplosDe5);
}