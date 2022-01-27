var txtForm = document.querySelector(".text-input");
var txtBox = document.querySelector("#msg");
var btnBox = document.querySelector("#btn-cripto");
var btn2Box = document.querySelector("#btn-descripto");


/*FUNÇÃO ANÔNIMA PARA A CRIPTOGRAFIA */
btnBox.addEventListener("click", function (event) {
    event.preventDefault();

    var txtCripto = txtForm.value.toLowerCase();
    var txtCriptoReplaced = "";


    if (txtCripto.includes("à") || txtCripto.includes("á") || txtCripto.includes("ã") || txtCripto.includes("õ") || txtCripto.includes("é") || txtCripto.includes("í") || txtCripto.includes("ó") || txtCripto.includes("ú") || txtCripto.includes("ü") || txtCripto.includes("â") || txtCripto.includes("ê") || txtCripto.includes("ô")) {

        alert("Não pode haver acentuação nas palavras!"); txtBox.value = "";

    }

    else if (txtCripto.includes("a") || txtCripto.includes("e") || txtCripto.includes("i") || txtCripto.includes("o") || txtCripto.includes("u")) {

        txtCriptoReplaced = txtCripto.replace(/a/g, "al").replace(/e/g, "emjgr").replace(/i/g, "ihnq").replace(/o/g, "oxkl").replace(/u/g, "uwtz");
        txtBox.value = txtCriptoReplaced;

    }

    else {

        txtBox.value = txtCripto;

    }

});


/* FUNÇÃO ANÔNIMA PARA A DESCRIPTOGRAFIA */
btn2Box.addEventListener("click", function (event) {
    event.preventDefault();

    var txtDescripto = txtForm.value.toLowerCase();
    var txtDescriptoReplaced = "";

    if (txtDescripto.includes("à") || txtDescripto.includes("á") || txtDescripto.includes("ã") || txtDescripto.includes("õ") || txtDescripto.includes("é") || txtDescripto.includes("í") || txtDescripto.includes("ó") || txtDescripto.includes("ú") || txtDescripto.includes("ü") || txtDescripto.includes("â") || txtDescripto.includes("ê") || txtDescripto.includes("ô")) {

        alert("Não pode haver acentuação nas palavras!"); txtBox.value = "";

    }

    else if (txtDescripto.includes("al") || txtDescripto.includes("emjgr") || txtDescripto.includes("ihnq") || txtDescripto.includes("oxkl") || txtDescripto.includes("uwtz")) {

        txtDescriptoReplaced = txtDescripto.replace(/al/g, "a").replace(/emjgr/g, "e").replace(/ihnq/g, "i").replace(/oxkl/g, "o").replace(/uwtz/g, "u");
        txtBox.value = txtDescriptoReplaced;

    }

    else {

        txtBox.value = txtDescripto;

    }

});


/* FUNÇÃO ANÔNIMA - COPIAR PARA O CLIPBOARD */
var btnCopy = document.querySelector("#btn-copy");
btnCopy.addEventListener("click", function () {
    navigator.clipboard.writeText(txtBox.value);
    alert("Mensagem copiada para a área de transferência!");
});


/* FUNÇÃO NOMEADA - LIMPAR OS CAMPOS DE TEXTO AO RECARREGAR A PÁGINA */
function limpaTextos() {
    var fReset = document.querySelector("#theform");
    fReset.reset();
    txtBox.value = "";
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


