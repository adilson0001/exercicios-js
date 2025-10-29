const form = document.getElementById("form");
const btn = document.getElementById("btn");
const campo = document.getElementById("campo");
const lista = document.getElementById("lista");

function total(){
    let qtd = document.querySelectorAll(".linha").length;
if(qtd!=0){
    document.getElementById("total").innerHTML=qtd;
}
else
{
    document.getElementById("total").innerHTML=0;
};
}

total();

// adicionar
function addTarefa() {
  return campo.value;
}

// cancelar carregamento
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

// adicionar linha
btn.addEventListener("click", () => {
  if (campo.value != "") {
    lista.innerHTML += `
      <div class="linha">
        <input type="checkbox">
        <p>${addTarefa()}</p>
        <div class="icons">
          <p class="baixo">BAIXO</p>
          <img src="imagens/edit.svg" alt="icone de editar">
          <img src="imagens/delete.svg" alt="icone de excluir" class="lixo">
        </div>
      </div>`;
    campo.value = "";

  } else {
    alert("Adicione uma Tarefa!");
  }

  total();
});

//estudar isso que é a exclusão
lista.addEventListener("click", (event) => {
  if (event.target.classList.contains("lixo")) {
    const linha = event.target.closest(".linha");
    linha.remove();
  }
  total();
});




