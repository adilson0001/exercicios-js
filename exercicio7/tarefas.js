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


//filtrar por nome da tarefa
let busca = document.getElementById("campoBusca");

busca.addEventListener("input", () => {
  let textoBusca = busca.value.toLowerCase();

  let tarefas = document.querySelectorAll(".linha");

  tarefas.forEach((tarefa) => {

    let textoTarefa = tarefa.querySelector("p").innerText.toLowerCase();


    if (textoTarefa.includes(textoBusca)) {
      tarefa.style.display = "flex";
    } else {
      tarefa.style.display = "none";
    }
  });
});


// filtrar por tarefas concluidas

let options = document.getElementById("fil-tarefa");


options.addEventListener("change", () => {
  let tarefas = document.querySelectorAll(".linha");
  
  // pra mostrar todas as tarefas 
  if (options.value == "todas") {

    tarefas.forEach(linha => {
      linha.style.display = "flex";
    });
  }

  //tarefas concluidas
  if (options.value == "concluidas") {
    let linhas = document.getElementsByClassName("linha");
    for (let linha of linhas) {
      let input = linha.querySelector('input[type="checkbox"]');
      if (input.checked) {
        linha.style.display = "flex";
      } else {
        linha.style.display = "none";
      }
    input.addEventListener("change", () => {
        if (options.value == "concluidas" && !input.checked) {
          linha.style.display = "none";
        }});
    }
     
  }

  //tarefas pendetes
  if (options.value == "pendentes") {
    let linhas = document.getElementsByClassName("linha");
    for (let linha of linhas) {
      let input = linha.querySelector('input[type="checkbox"]');
      if (!input.checked) {
        linha.style.display = "flex";
      } else {
        linha.style.display = "none";
      }
      input.addEventListener("change", () => {
        if (options.value == "pendentes") {
          linha.style.display = input.checked ? "none" : "flex";
        }
      });
    }
  }
});




// filtro por prioridade

const filPrioridade = document.getElementById("fil-prioridade");

filPrioridade.addEventListener("change", () => {
  const tarefas = document.querySelectorAll(".linha");
  const prioridadeSelecionada = filPrioridade.value; // valores: prioridades, urgente, media, baixa

  tarefas.forEach(tarefa => {
    // procura o elemento de prioridade dentro da tarefa
    const prioridade = tarefa.querySelector(".alto, .medio, .baixo");

    // mostrar todas
    if (prioridadeSelecionada === "prioridades") {
      tarefa.style.display = "flex";
    }
    // mostrar apenas as com a prioridade selecionada
    else if (
      (prioridadeSelecionada === "urgente" && prioridade.classList.contains("alto")) ||
      (prioridadeSelecionada === "media" && prioridade.classList.contains("medio")) ||
      (prioridadeSelecionada === "baixa" && prioridade.classList.contains("baixo"))
    ) {
      tarefa.style.display = "flex";
    } else {
      tarefa.style.display = "none";
    }
  });
});




