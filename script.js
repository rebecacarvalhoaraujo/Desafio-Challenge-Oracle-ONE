let textoPronto = "";
let texto = "";

function retornaFrase() {
texto = document.getElementById("textoParaCriptografar").value;
return texto;
}

function textoCriptografado() {
var text = document.getElementById("text");
var textoInput = retornaFrase();

textoInicial = textoInput;
texto = textoInput;

if (textoInput === "") {
alert("Digite um texto");
} else {
var textoCriptografado = textoInput.split("");
for (var i = 0; i < textoCriptografado.length; i++) {
if (textoCriptografado[i] == "e") {
textoCriptografado[i] = "enter";
}

if (textoCriptografado[i] == "i") {
textoCriptografado[i] = "imes";
}

if (textoCriptografado[i] == "a") {
textoCriptografado[i] = "ai";
}
if (textoCriptografado[i] == "o") {
textoCriptografado[i] = "ober";
}
if (textoCriptografado[i] == "u") {
textoCriptografado[i] = "ufat";
}
}

textoInput = textoCriptografado.join("");
document.querySelector("#btnTextoCopiado").style.display = "none";
document.querySelector("#escondeTexto").style.display = "none";
document.querySelector("#btnCopiar").style.display = "block";
document.getElementById("textoParaCriptografar").value = "";
text.innerHTML = textoInput;
textoPronto = textoInput;}
}

function copiaTexto() {
navigator.clipboard.writeText(textoPronto).then(() => { });
document.querySelector("#btnCopiar").style.display = "none";
document.querySelector("#btnTextoCopiado").style.display = "block";
}

function descriptografar() {
var texto = retornaFrase();
var textoDescriptografado;
var text = document.getElementById("text");

if (textoPronto === "") {
alert("Não existe texto para ser descriptografado ainda");
} else if (texto === "") {
alert("Copie e cole o texto que foi criptografado");
} else {
textoDescriptografado = textoPronto
.replace(/enter/g, "e")
.replace(/imes/g, "i")
.replace(/ai/g, "a")
.replace(/ober/g, "o")
.replace(/ufat/g, "u");
text.innerHTML = textoDescriptografado;
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