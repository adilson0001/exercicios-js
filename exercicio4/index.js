function go() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    function sub (num1,num2){
        let v=num1-num2;
        
        if (v===""){
            return v=0;
        }
        else{
            return v;
        }
    }

    document.getElementById("soma").value = "Soma: "+ num1 + num2;
    document.getElementById("sub").value = "Subtração: "+ sub(num1,num2);
    document.getElementById("div").value = "Divisão: "+ num1 / num2;
    document.getElementById("mult").value = "Multiplicação: "+ num1 * num2;
}
