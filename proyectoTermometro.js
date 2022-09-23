
function convertirFahrebheitCelsiu(){
let fahrenheit = document.getElementById("fahrenheit").value;
let resultado = ((fahrenheit - 32) * 5/9).toFixed(1)

document.getElementById('celsius').value=resultado
document.getElementById('mercurio').style.width=resultado+'px'

}



function reiniciarcontent(){
    document.getElementById("fahrenheit").value=''
    document.getElementById('celsius').value=''
    document.getElementById('mercurio').style.width=0
}

let btnconvertir=document.getElementById('resultado')
btnconvertir.addEventListener('click',convertirFahrebheitCelsiu)

let btnreiniciar=document.getElementById('reset')
btnreiniciar.addEventListener('click',reiniciarcontent)