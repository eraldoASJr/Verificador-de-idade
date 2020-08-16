function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res= document.querySelector ('div#res') 
    if (fano.value.length == 0 || Number( fano.value) > ano) {
        window.alert('verifique os dados e tente novamente')
    }else {
       var fsex = document.getElementsByName ('radsex')
       var idade= ano - Number (fano.value)
      var género= ''
      var img = document.createElement('img')
      img.setAttribute('id','foto')
      if (fsex [0].checked) { 
          género = 'Homem'
          if (idade >= 0 && idade <10){
            //cirança
            img.setAttribute('src', 'imagen/bebehomen.png')
          }else if (idade >= 10 && idade < 21){
              //jovem
              img.setAttribute('src', 'imagem/homenjovem.png')
          }else if (idade < 50){
            //Adulto
            img.setAttribute('src', 'imagem/homenadulto.png')
        }else {
            //idoso
            img.setAttribute('src', 'imagem/velhinho.png')
        }
          
    }else if (fsex[1].checked){
        género = 'Mulher'
        if (idade >= 0 && idade <10){
              //cirança
              img.setAttribute('src', 'imagem/bebemulher.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagem/jovemmulher.png')
            }else if (idade < 50){
              //Adulto
              img.setAttribute('src', 'imagem/mulheradulta.png')
          }else {
              //idoso
              img.setAttribute('src', 'imagem/velhinha.png')
          }
          
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${género} com ${idade} anos.`
      res.appendChild(img)

    }
}

