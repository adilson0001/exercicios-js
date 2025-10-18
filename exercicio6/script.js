
const num = document.getElementById("valor");
const soma = document.getElementById("mais");
const menos = document.getElementById("menos");
const reset = document.getElementById("reset");
var cont = 0;
soma.addEventListener("click", ()=>{ 
        cont+=1;
        num.innerHTML=cont;  
});

menos.addEventListener("click", ()=>{ 
       //se eu quiser numeros negativos tira o if
       
        cont-=1;
        num.innerHTML=cont;  
});

reset.addEventListener("click", ()=>{
    cont=0;
    num.innerHTML=cont;
});

