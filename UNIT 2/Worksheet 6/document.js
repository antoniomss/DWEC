/*
2. Crea una pagina que contenga varios enlaces, imagenes y anclas de ejemplo
y añade una serie de enlaces que realicen lo siguiente: 
c) Muestra el numero de imagenes del documento 
d) Muestra el id de la primera imagen
e) Muestra el numero de enlaces del documento 
f) Cambia el titulo del documento.
*/

// c)

var imageCollection = document.images.length;

console.log(imageCollection)

// d)

var id_img = document.getElementsByClassName("anchors").id;
console.log(id_img)

// e)

lista_links = document.links
console.log(lista_links)

// f)

// alert(document.title); 
// document.title = "Ejercicio hecho con exito";
// alert(document.title); 
