function go() {
    const idade1 = Number(document.getElementById("idade1").value);
    const idade2 = Number(document.getElementById("idade2").value);

    document.getElementById("soma").value = idade1 + idade2;
    document.getElementById("media").value = (idade1 + idade2) / 2;
}
