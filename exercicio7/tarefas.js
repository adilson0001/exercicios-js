const form = document.getElementById("form");
const btn = document.getElementById("btn");
const campo = document.getElementById("campo");
const lista = document.getElementById("lista");


function atualizarQTD(){
    let qtd = document.querySelectorAll(".linha").length;
if(qtd!=0){
    document.getElementById("total").innerHTML=qtd;
}
else
{
    document.getElementById("total").innerHTML=0;
};

//conta a a quantidade de checkbox pendentes e concluidos
const checkboxes = document.querySelectorAll(".linha input[type='checkbox']");
  let completas = 0;
  let pendentes = 0;

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      completas++;
    } else {
      pendentes++;
    }
  }

  // mostra na tela
  document.getElementById("completo").textContent = completas;
  document.getElementById("pendente").textContent = pendentes;
}

atualizarQTD();

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

  atualizarQTD();
});


lista.addEventListener("click", (event) => {
  if (event.target.classList.contains("lixo")) {
    const linha = event.target.closest(".linha");
    linha.remove();
  }
  atualizarQTD();
});

let busca = document.getElementById("campoBusca");

busca.addEventListener("input", () => {
  // 1. Captura o texto digitado e converte pra minúsculas
  let textoBusca = busca.value.toLowerCase();

  // 2. Seleciona todas as tarefas (as divs com classe .linha)
  let tarefas = document.querySelectorAll(".linha");

  // 3. Percorre cada tarefa
  tarefas.forEach((tarefa) => {
    // 4. Pega o texto dentro do <p> da tarefa
    let textoTarefa = tarefa.querySelector("p").innerText.toLowerCase();

    // 5. Verifica se o texto da tarefa contém o texto buscado
    if (textoTarefa.includes(textoBusca)) {
      tarefa.style.display = "flex"; // mostra a tarefa
    } else {
      tarefa.style.display = "none"; // esconde a tarefa
    }
  });
});





