

const btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    let senha= document.getElementById("senha").value;
    if(senha.length<6){
        alert("a senha deve ter mais de 6 caracteres")
    }
    
});



