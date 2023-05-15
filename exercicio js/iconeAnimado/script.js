const iconeMenu = document.getElementById('iconeMenu')
const menu = document.getElementById('menu')

iconeMenu.addEventListener('click', () => {
    if(iconeMenu.classList.contains('active')){
        iconeMenu.classList.remove('active')
        menu.classList.remove('active')
    }else{
        iconeMenu.classList.add('active')
        menu.classList.add('active')
    }
})