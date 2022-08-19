function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora>=0 && hora<12){
        //bom dia
        img.src = 'img/manhã.png'
    }
    else if(hora>=12 && hora<18){
        //boa tarde
        img.src = 'img/tarde.png'
        document.body.style.background = '#A69D79'
    }
    else{
        //boa noite
        img.src = 'img/noite.png'
        document.body.style.background = '#055951'
    }
}

