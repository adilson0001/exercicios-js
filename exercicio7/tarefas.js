const form = document.getElementById("form");
const btn = document.getElementById("btn");
const campo = document.getElementById("campo");
const lista = document.getElementById("lista");


function atualizarQTD() {
  let qtd = document.querySelectorAll(".linha").length;
  if (qtd != 0) {
    document.getElementById("total").innerHTML = qtd;
  }
  else {
    document.getElementById("total").innerHTML = 0;
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
        <input type="checkbox" id="check">
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


//excluir tarefa
lista.addEventListener("click", (event) => {
  if (event.target.classList.contains("lixo")) {
    const linha = event.target.closest(".linha");
    linha.remove();
  }
  atualizarQTD();
});


const busca = document.getElementById("campoBusca");
const filStatus = document.getElementById("fil-tarefa");
const filPrioridade = document.getElementById("fil-prioridade");

// Função única para aplicar todos os filtros
function aplicarFiltros() {
  const textoBusca = busca.value.toLowerCase();
  const status = filStatus.value;        // "todas", "concluidas", "pendentes"
  const prioridadeSelecionada = filPrioridade.value; // "prioridades", "urgente", "media", "baixa"

  const tarefas = document.querySelectorAll(".linha");

  tarefas.forEach(tarefa => {
    const textoTarefa = tarefa.querySelector("p").innerText.toLowerCase();
    const input = tarefa.querySelector('input[type="checkbox"]');
    const prioridade = tarefa.querySelector(".alto, .medio, .baixo");

    // Verifica condições individualmente
    const condBusca = textoTarefa.includes(textoBusca) || textoBusca === "";
    const condStatus =
      status === "todas" ||
      (status === "concluidas" && input.checked) ||
      (status === "pendentes" && !input.checked);
    const condPrioridade =
      prioridadeSelecionada === "prioridades" ||
      (prioridadeSelecionada === "urgente" && prioridade.classList.contains("alto")) ||
      (prioridadeSelecionada === "media" && prioridade.classList.contains("medio")) ||
      (prioridadeSelecionada === "baixa" && prioridade.classList.contains("baixo"));

    // Mostrar só se atender todos os filtros
    if (condBusca && condStatus && condPrioridade) {
      tarefa.style.display = "flex";
    } else {
      tarefa.style.display = "none";
    }
  });
}

// Escuta mudanças em todos os filtros
busca.addEventListener("input", aplicarFiltros);
filStatus.addEventListener("change", aplicarFiltros);
filPrioridade.addEventListener("change", aplicarFiltros);

// Também reage quando marca/desmarca tarefas
document.addEventListener("change", (e) => {
  if (e.target.type === "checkbox") {
    aplicarFiltros();
  }
});





