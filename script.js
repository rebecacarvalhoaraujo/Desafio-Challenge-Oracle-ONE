let msgPronta = "";
let msg = "";

function retornaFrase() {
msg = document.getElementById("msgParaCriptografar").value;
return msg;
}

function msgCriptografada() {
var text = document.getElementById("text");
var msgInput = retornaFrase();

msgInicial = msgInput;
msg = msgInput;

if (msgInput === "") {
alert("Digite um texto");
} else {
var msgCriptografada = msgInput.split("");
for (var i = 0; i < msgCriptografada.length; i++) {
   if (msgCriptografada[i] == "e") {
      msgCriptografada[i] = "enter";
   }

   if (msgCriptografada[i] == "i") {
      msgCriptografada[i] = "imes";
   }

   if (msgCriptografada[i] == "a") {
      msgCriptografada[i] = "ai";
   }
   if (msgCriptografada[i] == "o") {
      msgCriptografada[i] = "ober";
   }
   if (msgCriptografada[i] == "u") {
      msgCriptografada[i] = "ufat";
   }
}

msgInput = msgCriptografada.join("");
document.querySelector("#btnTextoCopiado").style.display = "none";
document.querySelector("#escondeMsg").style.display = "none";
document.querySelector("#btnCopiar").style.display = "block";
document.getElementById("msgParaCriptografar").value = "";
text.innerHTML = msgInput;
msgPronta = msgInput;}
}

function copiaTexto() {
navigator.clipboard.writeText(msgPronta).then(() => { });
document.querySelector("#btnCopiar").style.display = "none";
document.querySelector("#btnTextoCopiado").style.display = "block";
}

function descriptografar() {
var msg = retornaFrase();
var msgDescriptografada;
var text = document.getElementById("text");

if (msgPronta === "") {
alert("Não existe texto para ser descriptografado ainda");
} else if (msg === "") {
alert("Copie e cole o texto que foi criptografado");
} else {
msgDescriptografada = msgPronta
.replace(/enter/g, "e")
.replace(/imes/g, "i")
.replace(/ai/g, "a")
.replace(/ober/g, "o")
.replace(/ufat/g, "u");
text.innerHTML = msgDescriptografada;
}
}

function showText(campoParaDigitacao, text, interval) {
var char = text.split("").reverse();

var typer = setInterval(function () {
if (!char.length) {
return clearInterval(typer);
}
}, interval);
}

