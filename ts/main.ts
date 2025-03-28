namespace empresa{
    const calc= document.getElementById("calc") as HTMLButtonElement;
    const campoNome = document.getElementById("campoNome") as HTMLInputElement;
    const campoAno = document.getElementById("campoAno") as HTMLInputElement;


    const campoMat = document.getElementById("campoMat") as HTMLInputElement;
    const campoCPF = document.getElementById("campoCPF") as HTMLInputElement;
    const campoEnd = document.getElementById("campoEnd") as HTMLInputElement;
    const campoTel = document.getElementById("campoTel") as HTMLInputElement;

    

    const campomedia = document.getElementById("btnmedia") as HTMLInputElement;

    

    let p: Aluno;

    const campoCompra = document.getElementById("campoCompra") as HTMLButtonElement;
    const btnMedia = document.getElementById("media") as HTMLButtonElement;

    

    calc.addEventListener("click", ()=>{
    p = new Aluno(parseFloat(campoMat.value),(campoCPF.value),(campoEnd.value),(campoTel.value));
    p.nome = campoNome.value;
    p.anoNasc = parseInt(campoAno.value);
   
    
   


    document.getElementById("nome").textContent =p.nome;
    document.getElementById("ano").textContent =p.anoNasc.toString();
    document.getElementById("idade").textContent = p.calcularIdade(2025).toString();
    document.getElementById("matri").textContent = p.matricula.toString();
    document.getElementById("Telefone").textContent = p.tele.toString();
    document.getElementById("Cpf").textContent = p.cpf.toString();
    document.getElementById("ender").textContent = p.end.toString();


    });

    btnMedia.addEventListener("click", ()=>{
      
       p.Calcularmedia(parseFloat(campomedia.value));
       document.getElementById("medias").textContent = p.Calcularmedia.toString();
    });

   


   }