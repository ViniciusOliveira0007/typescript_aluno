namespace escola{
    export class Aluno extends Pessoa{
        private _matricula: number;
        private _curso:string;
        private _tele: string;
        private _nt1: number;
        private _nt2: number;
        private _nt3: number;
        private _nt4: number;
        private _cpf: string;
        private _end: string;
        private _notas:number[];

        constructor(matricula:number,cpf:string,end:string,tele:string,nt1:number,nt2:number,nt3:number,nt4:number,curso:string){
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

        get matricula(){
            return this._matricula;
        }

       

        get curso(){
            return this._curso;
        }


        get tele(){
            return this._tele;
        }

        

        get cpf(){
            return this._cpf;
        }

        get end(){
            return this._end;
        }

        get nt1():number{
            return this._nt1
        }
        get nt2(){
            return this._nt2
        }
        get nt3(){
            return this._nt3
        }
        get nt4(){
            return this._nt4
        }

       
        public notas(valorTotal:number){
            valorTotal =+ this.nt1;
            valorTotal =+ this.nt2;
            valorTotal =+ this.nt3;
            valorTotal =+ this.nt4;

        }
      

      
        public Calcularmedia(): number {
            return (this.nt1 + this._nt2 + this._nt3 + this._nt4) / 4;
        }

    }
}