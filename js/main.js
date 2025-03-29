"use strict";
var escola;
(function (escola) {
    const calc = document.getElementById("calc");
    const campoNome = document.getElementById("campoNome");
    const campoAno = document.getElementById("campoAno");
    const campoMat = document.getElementById("campoMat");
    const campoCurso = document.getElementById("campoCurso");
    const campoCPF = document.getElementById("campoCPF");
    const campoEnd = document.getElementById("campoEnd");
    const campoTel = document.getElementById("campoTel");
    const notaUm = document.getElementById("notaUm");
    const notaDois = document.getElementById("notaDois");
    const notaTres = document.getElementById("notaTres");
    const notaQuatro = document.getElementById("notaQuatro");
    let p;
    const botaoMedia = document.getElementById("botaoMedia");
    calc.addEventListener("click", (e) => {
        e.preventDefault();
        p = new escola.Aluno(parseFloat(campoMat.value), campoCPF.value, campoEnd.value, campoTel.value, parseFloat(notaUm.value), parseFloat(notaDois.value), parseFloat(notaTres.value), parseFloat(notaQuatro.value), campoCurso.value);
        p.nome = campoNome.value;
        p.anoNasc = parseInt(campoAno.value);
        document.getElementById("nome").textContent = p.nome;
        document.getElementById("ano").textContent = p.anoNasc.toString();
        document.getElementById("curso1").textContent = p.curso;
        document.getElementById("idade").textContent = p.calcularIdade(2025).toString();
        document.getElementById("matri").textContent = p.matricula.toString();
        document.getElementById("Telefone").textContent = p.tele.toString();
        document.getElementById("Cpf").textContent = p.cpf.toString();
        document.getElementById("ender").textContent = p.end.toString();
    });
    botaoMedia.addEventListener("click", (e) => {
        e.preventDefault();
        if (!p) {
            alert("Cadastre o aluno primeiro!");
            return;
        }
        p = new escola.Aluno(parseFloat(campoMat.value), campoCPF.value, campoEnd.value, campoTel.value, parseInt(notaUm.value), parseInt(notaDois.value), parseInt(notaTres.value), parseInt(notaQuatro.value), campoCurso.value);
        const media = p.Calcularmedia();
        document.getElementById("medias").textContent = media.toString();
    });
})(escola || (escola = {}));
