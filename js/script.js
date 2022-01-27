var txtForm = document.querySelector(".text-input");
var txtBox = document.querySelector("#msg");
var btnBox = document.querySelector("#btn-cripto");
var btn2Box = document.querySelector("#btn-descripto");
var limpah2 = document.querySelector(".limpa-h2");
var btnCopy = document.querySelector("#btn-copy");
var divContainer = document.querySelector("#container");
var footerExtended = document.querySelector("footer");



/*FUNÇÃO ANÔNIMA PARA A CRIPTOGRAFIA */
btnBox.addEventListener("click", function (event) {
    event.preventDefault();

    var txtCripto = txtForm.value.toLowerCase();
    var txtCriptoReplaced = "";


    if (txtCripto.includes("à") || txtCripto.includes("á") || txtCripto.includes("ã") || txtCripto.includes("õ") || txtCripto.includes("é") || txtCripto.includes("í") || txtCripto.includes("ó") || txtCripto.includes("ú") || txtCripto.includes("ü") || txtCripto.includes("â") || txtCripto.includes("ê") || txtCripto.includes("ô")) {

        alert("Não pode haver acentuação nas palavras!"); 
        txtBox.textContent = "Digite um texto que você deseja criptografar ou descriptografar, com o recomendável de 130 caracteres por vez para a criptografia e o máximo de 270 caracteres por vez para a descriptografia."; 
        limpah2.textContent = "Nenhuma mensagem encontrada"; 
        btnCopy.style.display = "none"; 
        divContainer.style.height = "206px"; 
        footerExtended.style.marginTop = "5px";

    }

    else if (txtCripto.includes("a") || txtCripto.includes("e") || txtCripto.includes("i") || txtCripto.includes("o") || txtCripto.includes("u")) {

        txtCriptoReplaced = txtCripto.replace(/a/g, "al").replace(/e/g, "emjgr").replace(/i/g, "ihnq").replace(/o/g, "oxkl").replace(/u/g, "uwtz");
        txtBox.textContent = txtCriptoReplaced;
        limpah2.textContent = "Mensagem criptografada!";
        btnCopy.style.display = "block";
        divContainer.style.height = "296px";
        btnCopy.style.marginTop = "180px";
        footerExtended.style.marginTop = "100px";
    
    }

    else {

        txtBox.innerHTML = "<br>" + txtCripto;
        limpah2.textContent = "Novas implementações em breve!";
        btnCopy.style.display = "none";
        divContainer.style.height = "206px"; 
        footerExtended.style.marginTop = "5px";

    }

});


/* FUNÇÃO ANÔNIMA PARA A DESCRIPTOGRAFIA */
btn2Box.addEventListener("click", function (event) {
    event.preventDefault();

    var txtDescripto = txtForm.value.toLowerCase();
    var txtDescriptoReplaced = "";

    if (txtDescripto.includes("à") || txtDescripto.includes("á") || txtDescripto.includes("ã") || txtDescripto.includes("õ") || txtDescripto.includes("é") || txtDescripto.includes("í") || txtDescripto.includes("ó") || txtDescripto.includes("ú") || txtDescripto.includes("ü") || txtDescripto.includes("â") || txtDescripto.includes("ê") || txtDescripto.includes("ô")) {

        alert("Não pode haver acentuação nas palavras!"); 
        txtBox.textContent = "Digite um texto que você deseja criptografar ou descriptografar, com o recomendável de 130 caracteres por vez para a criptografia e o máximo de 270 caracteres por vez para a descriptografia."; 
        limpah2.textContent = "Nenhuma mensagem encontrada"; 
        btnCopy.style.display = "none";
        divContainer.style.height = "206px"; 
        footerExtended.style.marginTop = "5px";
        
    }

    else if (txtDescripto.includes("al") || txtDescripto.includes("emjgr") || txtDescripto.includes("ihnq") || txtDescripto.includes("oxkl") || txtDescripto.includes("uwtz")) {

        txtDescriptoReplaced = txtDescripto.replace(/al/g, "a").replace(/emjgr/g, "e").replace(/ihnq/g, "i").replace(/oxkl/g, "o").replace(/uwtz/g, "u");
        txtBox.textContent = txtDescriptoReplaced;
        limpah2.textContent = "Mensagem descriptografada!";
        btnCopy.style.display = "block";
        divContainer.style.height = "296px";
        btnCopy.style.marginTop = "180px";
        footerExtended.style.marginTop = "100px";

    }

    else {

        txtBox.innerHTML = "<br>" + txtDescripto;
        limpah2.textContent = "Novas implementações em breve!";
        btnCopy.style.display = "none";
        divContainer.style.height = "206px"; 
        footerExtended.style.marginTop = "5px";
        
    }

});


/* FUNÇÃO ANÔNIMA - COPIAR PARA O CLIPBOARD */
btnCopy.addEventListener("click", function () {
    navigator.clipboard.writeText(txtBox.textContent);
    alert("Mensagem copiada para a área de transferência!");
});


/* FUNÇÃO NOMEADA - LIMPAR OS CAMPOS DE TEXTO AO RECARREGAR A PÁGINA */
function limpaTextos() {
    var fReset = document.querySelector("#theform");
    fReset.reset();
    btnCopy.style.display = "none";
}



/* Regras Codificador: 
"e" é convertido para "emjgr" 
"i" é convertido para "ihnq"
"a" é convertido para "al"
"o" é convertido para "oxkl"
"u" é convertido para "uwtz"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"emjgr" é convertido para "e" 
"ihnq" é convertido para "i"
"al" é convertido para "a"
"oxkl" é convertido para "o"
"uwtz" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/


