
const num = document.getElementById("valor");
const soma = document.getElementById("mais");
const menos = document.getElementById("menos");
const reset = document.getElementById("reset");

var cont = Number(localStorage.getItem("cont"));
num.textContent=cont; 
fundo(cont); 


soma.addEventListener("click", ()=>{ 
        cont+=1;
        num.textContent=cont;         
        fundo(cont);      
      
});

menos.addEventListener("click", ()=>{ 
   
        cont-=1;
        num.textContent=cont; 
        fundo(cont);      
        
        
        
});

reset.addEventListener("click", ()=>{
    cont=0;
    num.innerHTML=cont;
    fundo(cont);


});



function fundo(cont){

      if(cont>0){
                num.classList.remove("vermelho")
                num.classList.add("verde")
            
                localStorage.setItem("cont", `${cont}`);

        }

        if(cont<0){
                num.classList.remove("verde")
                num.classList.add("vermelho")
              
                localStorage.setItem("cont", `${cont}`);
        }

        if(cont===0){
                num.classList.remove("verde")
                num.classList.remove("vermelho")
                
                localStorage.setItem("cont", `${cont}`);

        }


};








