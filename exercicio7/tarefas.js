const form = document.getElementById("form");
const btn = document.getElementById("btn");
const campo = document.getElementById("campo");
const lista = document.getElementById("lista");


function addTarefa(){
    const txt = campo.value;
    return txt;  
};

form.addEventListener("submit", function(event) {
    event.preventDefault();
  
});

btn.addEventListener("click", ()=>{
    if(campo.value!=""){
        lista.innerHTML+=
    `<div class="linha">
                    <input type="checkbox">
                    <p>${addTarefa()}</p>
                    <div class="icons">
                        <p class="baixo">BAIXO</p>
                        <img src="imagens/edit.svg" alt="icone de editar">
                        <img src="imagens/delete.svg" alt="icone de excluir">
                    </div>
                </div>`;
    campo.value="";
    }
    else{
         alert("Adicione uma Tarefa!");
    };     
    

});







