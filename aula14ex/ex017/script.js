function tabuada(){
    var num = document.getElementById('num')
    var n = Number(num.value)
    var res = document.getElementById('res')
    res.innerHTML = 'Calculando... <br>'
    for(var c = 1; c <= 10; c++){
        var r = n*c
        res.innerHTML += `${n} x ${c} = ${r} <br>`
    }
}