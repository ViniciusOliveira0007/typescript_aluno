"use strict";
var empresa;
(function (empresa) {
    const calc = document.getElementById("calc");
    const campoNome = document.getElementById("campoNome");
    const campoAno = document.getElementById("campoAno");
    const campoMat = document.getElementById("campoMat");
    const campoCPF = document.getElementById("campoCPF");
    const campoEnd = document.getElementById("campoEnd");
    const campoTel = document.getElementById("campoTel");
    const campomedia = document.getElementById("btnmedia");
    let p;
    const campoCompra = document.getElementById("campoCompra");
    const btnMedia = document.getElementById("media");
    calc.addEventListener("click", () => {
        p = new empresa.Aluno(parseFloat(campoMat.value), (campoCPF.value), (campoEnd.value), (campoTel.value));
        p.nome = campoNome.value;
        p.anoNasc = parseInt(campoAno.value);
        document.getElementById("nome").textContent = p.nome;
        document.getElementById("ano").textContent = p.anoNasc.toString();
        document.getElementById("idade").textContent = p.calcularIdade(2025).toString();
        document.getElementById("matri").textContent = p.matricula.toString();
        document.getElementById("Telefone").textContent = p.tele.toString();
        document.getElementById("Cpf").textContent = p.cpf.toString();
        document.getElementById("ender").textContent = p.end.toString();
    });
    btnMedia.addEventListener("click", () => {
        p.Calcularmedia(parseFloat(campomedia.value));
        document.getElementById("medias").textContent = p.Calcularmedia.toString();
    });
})(empresa || (empresa = {}));
