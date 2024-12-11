var moduloFuncoes = require('./modulo/funcoes.js')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Insira a tabuada inicial:', function(tabuada1){
    let inicial= tabuada1
    entradaDeDados.question('Insira a tabuada final:', function(tabuada2){
        let final = tabuada2
        entradaDeDados.question('Insira o número inicial da tabuada:', function(numero1){
            let primeiro = numero1
            entradaDeDados.question('Insira o numero final da tabuada:', function(numero2){
                let segundo = numero2
                let resultado

                console.log(moduloFuncoes.ValidarDados(inicial, final, primeiro, segundo)),
                console.log(moduloFuncoes.ValidarResultado(resultado))
            })
        })
    })
})     