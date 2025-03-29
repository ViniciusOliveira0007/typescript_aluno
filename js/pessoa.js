"use strict";
var escola;
(function (escola) {
    class Pessoa {
        get nome() {
            return this._nome;
        }
        set nome(nome) {
            this._nome = nome;
        }
        get anoNasc() {
            return this._anoNasc;
        }
        set anoNasc(anoNasc) {
            this._anoNasc = anoNasc;
        }
        calcularIdade(anoAtual) {
            return anoAtual - this._anoNasc;
        }
    }
    escola.Pessoa = Pessoa;
})(escola || (escola = {}));
