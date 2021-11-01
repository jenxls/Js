let txtnum = document.getElementById('txtnum')
let ntabela = document.getElementById('ntabela')
let res = document.getElementById('resultado')
var v_tabela = []
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    } 
}
function adicionar() {
    if(isNumero(txtnum.value) && !inLista(txtnum.value, v_tabela)){
        v_tabela.push(Number(txtnum.value))
        let item = document.createElement('option')
        item.text = `Valor ${txtnum.value} adicionado`
        ntabela.appendChild(item)
        res.innerText = ''
    }else{
        alert('Valor invalido, ou já está na lista!')
    }
    txtnum.value = ''
    txtnum.focus()
}
function verificar(){
    if(v_tabela.length == 0) {
        alert('Adicionar valores antes de vericar')
    }else{
        let total = v_tabela.length
        let maior = v_tabela[0]
        let menor = v_tabela[0]
        let soma = 0
        let media = 0
        for(let pos in v_tabela){
            soma += v_tabela[pos]
            if(v_tabela[pos] > maior)
                maior = v_tabela[pos]
            if(v_tabela[pos] < menor)
                menor = v_tabela[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Temos ${total} números ao todo.</p>`
        res.innerHTML += `<p>O maior valor informado é ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado é ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os números é ${soma}</p>`
        res.innerHTML += `<p>A média é ${media}`
    }
}