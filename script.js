function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 18){
                //criança
                img.setAttribute('src', 'criançamasc.png')
            }else if(idade >= 18 && idade < 25){
                //jovem
                img.setAttribute('src', 'jovemmasc.png')
            }else if(idade >= 25 && idade < 50){
                //adulto
                img.setAttribute('src', 'adultomasc.png')
            }else{
                //idoso
                img.setAttribute('src', 'velho.png')
            }
        }else if (fsex[1]){
            genero = 'Mulher'
            if(idade >= 0 && idade <18){
                //criança
                img.setAttribute('src', 'criançafem.png')
            }else if(idade >=18 && idade <25){
                //jovem
                img.setAttribute('src', 'jovemfem.png')
            }else if(idade >=25 && idade <50){
                //adulto
                img.setAttribute('src', 'adultafem.png')
            }else{
                //idoso
                img.setAttribute('src', 'velha.png')
            }
        }
        res.innerHTML = `declaramos ${genero} de ${idade} anos`
        res.appendChild(img)
    }


} 