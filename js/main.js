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
    calc.addEventListener("click", () => {
        p = new escola.Aluno(parseFloat(campoMat.value), (campoCPF.value), (campoEnd.value), (campoTel.value), parseInt(campoCurso.value), parseInt(notaUm.value), parseInt(notaDois.value), parseInt(notaTres.value), (notaQuatro.value));
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
    botaoMedia.addEventListener("click", () => {
        // alert(parseFloat(notas.value));
        document.getElementById("medias").textContent = p.notas.toString();
        p.Calcularmedia(parseFloat(notaUm.value));
        // document.getElementById("medias").textContent = p.Calcularmedia.toString();
    });
})(escola || (escola = {}));
