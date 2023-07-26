function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    if (hora >= 6 && hora < 12) {
        img.src = 'img/manha.jpg'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = `Bom dia! Agora são ${hora} horas e ${min} minutos.`
    } else if (hora >=12 && hora <= 14) {
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#b9846f'
        msg.innerHTML = `Boa tarde. Agora são ${hora} horas e ${min} minutos.`
    } else if (hora >= 15 && hora < 16) {
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#b9846f'
        msg.innerHTML = `São ${hora}, hora do café!`
    } else if (hora >=16 && hora <= 18) {
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#b9846f'
        msg.innerHTML = `Boa tarde. Agora são ${hora} horas e ${min} minutos.`
    } else if (hora >= 19 && hora <= 23) {
    img.src = 'img/noite.jpg'
    document.body.style.background = '#252546'
    msg.innerHTML = `Boa noite. Agora são ${hora} horas e ${min} minutos.`
    } else {
    img.src = 'img/noite.jpg'
    document.body.style.background = '#252546'
    msg.innerHTML = `Já são ${hora} horas e ${min} minutos, vá dormir!` 
    }
}