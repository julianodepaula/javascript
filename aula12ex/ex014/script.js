function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')  
    var data = new Date()
    //var hora = data.getHours()
    hora = 10
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        document.body.style.background = '#c2f7eb'
        img.src = "manha_c.png"
        

    }else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = "tarde_c.png"
        document.body.style.background = '#ffd27e'
    }else {
        // BOA NOITE!
        img.src = "noite_c.png"
        document.body.style.background = '#4b4d53'
    }
}
