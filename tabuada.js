var sec = document.getElementById('sec')
sec.addEventListener('mouseout', sair)
function calcular(){
    const num = (document.getElementById('numero').value)
    let res = document.getElementById('res')  
    sec.style.background = '#9e22c3'
    sec.style.boxShadow = '30px 30px 10px black'

    var tabuada = ''
    for(var cont = 1; cont <= 10; cont++){
        tabuada += `${num} x ${cont} = ${num*cont}<br>`
        res.innerHTML = tabuada
    }


}