let iconeMenu = document.getElementById('iconeMenu')
let barra1 = document.getElementById('barra1')
let barra2 = document.getElementById('barra2')
let barra3 = document.getElementById('barra3')
let menu = document.getElementById('menu')
iconeMenu.addEventListener('click', function(){
    if(iconeMenu.classList.contains('active')){
        iconeMenu.classList.remove('active')
        barra1.classList.remove('active')
        barra2.classList.remove('active')
        barra3.classList.remove('active')
        menu.classList.remove('active')
        .classList.remove('active')
    }else{
        iconeMenu.classList.add('active')
        barra1.classList.add('active')
        barra2.classList.add('active')
        barra3.classList.add('active')
        menu.classList.add('active')
        .classList.add('active')
    }
})