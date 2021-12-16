function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        alert('[Erro] Verifique os dados!')
    } else {
        //alert('Tudo OK')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
            img.setAttribute('id', 'foto')


        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Crianca
                img.setAttribute('src', 'bebe_m.png')
            } else if (idade < 21) { 
                // Jovem
                img.setAttribute('src', 'jovem_m.png')
            } else if (idade < 50) { 
                // Adulto
                img.setAttribute('src', 'adulto_m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Crianca
                img.setAttribute('src', 'bebe_f.png')
            } else if (idade < 21) { 
                // Jovem
                img.setAttribute('src', 'jovem_f.png')
            } else if (idade < 50) { 
                // Adulto
                img.setAttribute('src', 'adulto_f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }

        //res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img)

    }
}