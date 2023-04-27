let checkbox = document.getElementById('checkbox')

checkbox.addEventListener('change', function(){
    let menu = document.getElementById('menu')
    if(menu.classList.contains('check')){
        menu.classList.remove('check')
    } else{
        menu.classList.add('check')
    }
})

let header = document.getElementsByTagName(header)

function abrirMenu(){
    if(menu.classList.contains('check')){
        header.classList.add('aberto')
    } else{}
}