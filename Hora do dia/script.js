function carregar(){
    
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    var minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
    if (hora >= 0 && hora <= 6){
        img.src = "noite.png"
        document.body.style.background = '#01273a'

    } else if(hora >= 7 && hora <= 12){

        img.src = 'nascer.png'
        document.body.style.background = '#df7a6f'

    } else if (hora >= 12 && hora <= 18) {

        img.src = "tarde.png"
        document.body.style.background = '#ffaf5c'
    } else {

        img.src = "por.png"
        document.body.style.background = '#893057'
    }
}