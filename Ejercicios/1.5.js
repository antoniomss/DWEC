var date = new Date();

function reload() {
 	location.reload()
};

document.write('<table bgcolor="black"><tr bgcolor="white">')
document.write(`<th>${date.getHours()}</th><th>${date.getMinutes()}</th><th>${date.getSeconds()}</th>`)
document.write('</table></tr>')
setTimeout(reload,1000);