const ValidarDados = function(tabuada1, tabuada2, numero1, numero2){
    let inicial = tabuada1
    let final = tabuada2
    let primeiro = numero1
    let segundo = numero2
    let status = true


    if(inicial == '' || final == '' || primeiro == '' || segundo == ''){
        console.log('ERRO: É obrigatório todas as entradas de dados.')
        status = false

    }else if(isNaN(inicial) == true || isNaN(final) == true || isNaN(primeiro) == true || isNaN(segundo) == true){
            console.log('ERRO: É obrigatório somente a entrada de valores numéricos.')
            status = false            

        }else{
            if(primeiro <2 || primeiro > 50 || segundo <2 || segundo >50){
                console.log('ERRO: É obrigatório a entrada de valores entre 1 e 50.')
                status = false
            }else{
                if(inicial < 2 || inicial > 100 || final < 2 || final > 100){
                    console.log('ERRO: É obrigatório a entrada de valores entre 2 e 100.')
                    status = false
                }
            }
        }
    return status 
}


const ValidarResultado = function(tabuada1, tabuada2, numero1, numero2){
    let inicial = tabuada1
    let final = tabuada2
    let primeiro = numero1
    let segundo = numero2
    let status = false

        while(numero1 <= numero2){
            let resultado = numero1*numero2
            console.log(numero2 + 'x' + numero1 + '=' + (resultado))
            contador+=1  
            console.log(`A tabuada inicial é:${tabuada1}`)
            status = true 

            
        }  
    return status

    //OBS: Eu fiz a tentativa de retornar resultado, mas dá erro
}

module.exports = {
    ValidarDados,
ValidarResultado
}
