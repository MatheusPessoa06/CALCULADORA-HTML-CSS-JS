const resultado = document.getElementById('resultado')

const insert = (num) => {
    
    resultado.innerHTML += `${num}`}

const apagar = () => {resultado.innerHTML = ''}

function back(){
    
    let recebe = document.getElementById('resultado').innerHTML
    resultado.innerHTML = recebe.substring(0, recebe.length - 1)
    
    
    
}

function valorf(){
    //textContent verifica se tem texto
    if(resultado.textContent){
        resultado.innerHTML = eval(resultado.innerHTML)
    }
}
