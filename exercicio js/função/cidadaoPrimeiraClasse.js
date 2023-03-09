//forma literal
function fun1() {}

//armazenar em variavel
const fun2 = function() {}

//armazenar em array
const array = [function (a, b) {return a + b}]
console.log(array[0](2, 3))

//armazenar em objeto
const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

//função como parametro
function run(fun){
    fun()
}
run(function(){console.log('Executando...')})

///função pode retornar
function soma(a, b){
    return function (c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)