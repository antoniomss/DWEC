const btn = document.querySelector('button');
const p = document.querySelector('p');
const div = document.querySelector('div');
const h2 = document.querySelector('h2');
const img = document.querySelector('img');



function random(number) {
  return Math.floor(Math.random() * (number+1));
}

// btn.onclick = function() {
// // 	alert(`Esta saltando evento`)
//   const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//   document.body.style.backgroundColor = rndCol;
// }


function bgChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

// btn.addEventListener("click", bgChange);
// btn.onclick = bgChange;
p.onclick = bgChange;
div.onclick = bgChange;
h2.onclick = bgChange;
img.onclick = bgChange;
btn.onfocus = bgChange;