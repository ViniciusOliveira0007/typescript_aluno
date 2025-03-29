namespace escola{
    const calc= document.getElementById("calc") as HTMLButtonElement;
    const campoNome = document.getElementById("campoNome") as HTMLInputElement;
    const campoAno = document.getElementById("campoAno") as HTMLInputElement;


    const campoMat = document.getElementById("campoMat") as HTMLInputElement;
    const campoCurso = document.getElementById("campoCurso") as HTMLInputElement;
    const campoCPF = document.getElementById("campoCPF") as HTMLInputElement;
    const campoEnd = document.getElementById("campoEnd") as HTMLInputElement;
    const campoTel = document.getElementById("campoTel") as HTMLInputElement;

    const notaUm = document.getElementById("notaUm") as HTMLInputElement;
    const notaDois = document.getElementById("notaDois") as HTMLInputElement;
    const notaTres = document.getElementById("notaTres") as HTMLInputElement;
    const notaQuatro = document.getElementById("notaQuatro") as HTMLInputElement;

   

    

    let p: Aluno;

   
    const botaoMedia = document.getElementById("botaoMedia") as HTMLButtonElement;

    

    calc.addEventListener("click", (e)=>{
        e.preventDefault()
    p = new Aluno(
        parseFloat(campoMat.value),
        campoCPF.value,
        campoEnd.value,
        campoTel.value,
        parseFloat(notaUm.value),
        parseFloat(notaDois.value),
        parseFloat(notaTres.value),
        parseFloat(notaQuatro.value),
        campoCurso.value
        );
    p.nome = campoNome.value;
    p.anoNasc = parseInt(campoAno.value);
   
    
   


    document.getElementById("nome").textContent =p.nome;
    document.getElementById("ano").textContent =p.anoNasc.toString();
    document.getElementById("curso1").textContent=p.curso;
    document.getElementById("idade").textContent = p.calcularIdade(2025).toString();
    document.getElementById("matri").textContent = p.matricula.toString();
    document.getElementById("Telefone").textContent = p.tele.toString();
    document.getElementById("Cpf").textContent = p.cpf.toString();
    document.getElementById("ender").textContent = p.end.toString();


    })

    

    botaoMedia.addEventListener("click", (e)=>{
        e.preventDefault();
        
      
        if(!p) {
            alert("Cadastre o aluno primeiro!");
            return;
        }
        
       
        p = new Aluno(
            parseFloat(campoMat.value),
            campoCPF.value,
            campoEnd.value,
            campoTel.value,
            parseInt(notaUm.value),
            parseInt(notaDois.value),
            parseInt(notaTres.value),
            parseInt(notaQuatro.value),
            campoCurso.value
        );
        
      
        const media = p.Calcularmedia();
        document.getElementById("medias").textContent = media.toString();
    });


    

   


   }