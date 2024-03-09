document.getElementById("botao").addEventListener("click", function() {
    var mensagemElement = document.getElementById("mensagem");
    mensagemElement.innerHTML = "Você clicou no botão!";
    mensagemElement.style.color = "blue";
});
