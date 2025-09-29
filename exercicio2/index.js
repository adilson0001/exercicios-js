function go() {
    // Pega os valores dos inputs
    const valor1 = document.getElementById("valor1").value;
    const valor2 = document.getElementById("valor2").value;

    // Troca os valores usando uma variável temporária
    document.getElementById("valor1").value = valor2;
    document.getElementById("valor2").value = valor1;
}
