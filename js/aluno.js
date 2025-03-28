"use strict";
var empresa;
(function (empresa) {
    class Aluno extends empresa.Pessoa {
        constructor(matricula, cpf, end, tele) {
            super();
            this._nt1 = 0;
            this._nt2 = 0;
            this._nt3 = 0;
            this._nt4 = 0;
            this._matricula = matricula;
            this._cpf = cpf;
            this._end = end;
            this._tele = tele;
        }
        get matricula() {
            return this._matricula;
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
        Calcularmedia(valorTotal) {
            valorTotal = (this._nt1 + this._nt2 + this._nt3 + this._nt4) / 4;
        }
    }
    empresa.Aluno = Aluno;
})(empresa || (empresa = {}));
