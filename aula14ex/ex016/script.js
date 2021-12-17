function contar() {
    let ini = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let pas = document.getElementById('pas')
    let res = document.querySelector('div#res')
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(pas.value)

    if (i <= 0 || f <= 0 || p <= 0) {
        res.innerHTML = "Campos não podem ser menor ou igual a 0!"
    } else {
        res.innerHTML = ""

        let c = i
        while(c <= f){
            res.innerHTML += ` ${c} ` + String.fromCodePoint(0x1F476 ,0x1F3FB)
            c += p
        }
        res.innerHTML += "Fim"
    }
}