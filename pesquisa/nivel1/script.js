

let txt = document.getElementById("campoBusca");
txt.addEventListener("input",()=>{
  
    let lista=document.getElementById("lista");
    let itens= lista.querySelectorAll("li");
    let texto = txt.value.toLowerCase();

    for(let i=0;i<itens.length;i++){
        if(itens[i].textContent.toLowerCase().includes(texto)){
            itens[i].style.display="block";
        }
     
        else{
            itens[i].style.display="none";
        }
        
    }

});


