function go() {
    const temp = Number(document.getElementById("temp").value);

    function conv(temp){
        let v= (temp*1.8)+32;
        return v;
    }
    document.getElementById("temp").value=conv(temp);
}


function limpar(){
    document.getElementById("temp").value="";
}