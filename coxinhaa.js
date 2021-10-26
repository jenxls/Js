function calcular(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let txt = document.getElementById('res')

    if (ini.value.length <= 0 || fim.value.length <= 0 || pas.value.length <= 0){
        alert('[ERRO]')
        
    }else{
        txt.innerText = 'calculando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)

        for(let c = i; c <= f; c += p){
            txt.innerText += ` ${c} \u{1f449}`
        }
    }

    
}