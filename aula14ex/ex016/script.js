function contar(){
    var i = document.getElementById('inicio').value
    var f = document.getElementById('fim').value
    var p = document.getElementById('passo').value
    var res = document.getElementById('res')
    while(i<=f){
        res.innerHTML = `Contando...`
        res.innerHTML += i
        i+p
    }
}