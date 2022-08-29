function contar(){
    var i = document.getElementById('inicio').value
    var f = document.getElementById('fim').value
    var p = document.getElementById('passo').value
    var res = document.getElementById('res')

    if(i.length == 0 || f.length == 0 || p.length == 0){
        window.alert('[ERRO] Faltam dados')
    }
    else{
        res.innerHTML = 'Contando... <br>'
        var iN = Number(i)
        var fN = Number(f)
        var pN = Number(p)

        if(p <= 0){
            window.alert ('[ERRO] Passo Invalido')
        }

        if(iN < fN){
            for(var c = iN; c <= fN; c += pN){
                res.innerHTML += ` ${c} \u{1f449}`
            }
    
            res.innerHTML += `\u{1f3c1}`
        }
        else{
            for(var c = iN; c >= fN; c -= pN){
                res.innerHTML += ` ${c} \u{1f449}`
            }
    
            res.innerHTML += `\u{1f3c1}`
        }
    }
}