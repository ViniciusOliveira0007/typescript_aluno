namespace empresa{
    export class Aluno extends Pessoa{
        private _matricula: number;
        private _tele: string;
        private _nt1: number = 0;
        private _nt2: number = 0;
        private _nt3: number = 0;
        private _nt4: number = 0;
        private _cpf: string;
        private _end: string;

        constructor(matricula:number,cpf:string,end:string,tele:string){
            super();
            this._matricula = matricula;
            this._cpf = cpf;
            this._end = end;
            this._tele = tele;
                        
        }

        get matricula(){
            return this._matricula;
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

       

      

        public Calcularmedia(valorTotal:number){
        
                valorTotal = (this._nt1 + this._nt2 + this._nt3 + this._nt4)/ 4 ;
                
            
        }

    }
}