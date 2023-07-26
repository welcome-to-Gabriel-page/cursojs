//fatorial de maneira recursiva
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(9)) //função recebendo o fatorial de 9 (9!) = 362.880 