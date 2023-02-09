var namescoiso = [];
function enviar(){
var guescoiso = document.getElementById("name1").value;
namescoiso.push(guescoiso);
var comprimento = namescoiso.length;
document.getElementById("displayname").innerHTML= namescoiso.toString();
}
function organiza(){
    namescoiso.sort();
    var i = namescoiso.join("<br>");
    document.getElementById("organizado").innerHTML = i.toString();
}
function Show() {
    var cleiton= namescoiso.join("<br>");
    document.getElementById("p1").innerHTML = cleiton.toString();
}
function pesquisar() {
    var josé= document.getElementById("s1").value;
    var jorge= 0;
    var juliano;
    for (juliano=0;juliano<namescoiso.length;juliano ++) {
        if (josé==namescoiso[juliano]) {
            jorge=jorge+1;
        }
    }
    document.getElementById("p2").innerHTML="coiso encontrado" +jorge+" vezes";
}