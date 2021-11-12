
const flechaiz = document.getElementById('flechaizq');
const flechade = document.getElementById('flechader');
var imagen = 1
if (imagen=0){
    imagen = 3
}else if(imagen=4){
    imagen=1
}

flechaiz.onclick = function() {
    imagen -=1
    document.getElementById("miimagen").src=`${imagen}.jpg`
  }

flechade.onclick = function() {
    imagen +=1
    document.getElementById("miimagen").src=`${imagen}.jpg`
}
