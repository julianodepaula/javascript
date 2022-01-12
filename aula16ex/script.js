let num = document.querySelector('input#ipt_valor')
let lista = document.querySelector('select#sel_lista')
let res = document.querySelector('div#div_res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}

function inserir(){
        if(isNumero(num.value) && !inLista(num.value, valores)){
            //res.innerHTML = "Tudo ok"
            valores.push(Number(num.value))
        }else{
            res.innerHTML = "Valor inválido ou já encontrado na lista."
        }
}

function finalizar(){
    let res = document.getElementById('div_res')

    res.innerHTML = `Resultado é Testando...`
}
