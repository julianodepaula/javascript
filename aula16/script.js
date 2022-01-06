function gerarTab(){
    let n = document.getElementById('valor')
    let tab = document.getElementById('seltab')

    let v = Number(n.value)

    if(n.value.length == 0){
        tab.innerHTML = ''
        let item = document.createElement('option')
        item.text = `Digite um valor acima`
        tab.appendChild(item)
    }else{
        tab.innerHTML = ''
        for(var c=1; c <= 10; c++){
            let item = document.createElement('option')
            item.value = `tab${c}`
            item.text = `${v} * ${c} = ${c * v}`
            tab.appendChild(item)
        }
    }
}
