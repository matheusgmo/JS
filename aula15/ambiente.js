let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`A primeira posição do vetor é ${num[0]}`)
let pos = num.indexOf(7)
if(pos == -1){
    console.log(`Valor não encontrado`)
}
else{ 
console.log(`O valor esta na posição ${pos}`)
}