"use strict";
var escola;
(function (escola) {
    class Aluno extends escola.Pessoa {
        constructor(matricula, cpf, end, tele, nt1, nt2, nt3, nt4, curso) {
            super();
            this._matricula = matricula;
            this._cpf = cpf;
            this._end = end;
            this._tele = tele;
            this._nt1 = nt1;
            this._nt2 = nt2;
            this._nt3 = nt3;
            this._nt4 = nt4;
            this._curso = curso;
        }
        get matricula() {
            return this._matricula;
        }
        get curso() {
            return this._curso;
        }
        get tele() {
            return this._tele;
        }
        get cpf() {
            return this._cpf;
        }
        get end() {
            return this._end;
        }
        get nt1() {
            return this._nt1;
        }
        get nt2() {
            return this._nt2;
        }
        get nt3() {
            return this._nt3;
        }
        get nt4() {
            return this._nt4;
        }
        notas(valorTotal) {
            valorTotal = +this.nt1;
            valorTotal = +this.nt2;
            valorTotal = +this.nt3;
            valorTotal = +this.nt4;
        }
        Calcularmedia() {
            return (this.nt1 + this._nt2 + this._nt3 + this._nt4) / 4;
        }
    }
    escola.Aluno = Aluno;
})(escola || (escola = {}));
