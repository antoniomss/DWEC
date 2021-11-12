
const flechaiz = document.getElementById('flechaizq');
const flechade = document.getElementById('flechader');
var imagen = 1

if (imagen=0){
    imagen = 5
}else if(imagen=5){
    imagen=1
}

flechaiz.onclick = function() {
    imagen -=1
    document.getElementById("miimagen").src=`img${imagen}.jpg`
  }

flechade.onclick = function() {
    imagen +=1
    document.getElementById("miimagen").src=`img${imagen}.jpg`
}
