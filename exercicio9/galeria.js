


const principal = document.getElementById("imgPrincipal");
let imagens = document.querySelectorAll("img");

imagens.forEach((imagem) => {
    imagem.addEventListener("click",()=>{
        principal.src=imagem.src;
    })
});




