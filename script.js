
var titleElement = document.getElementById("mainTitle");

// pegar o elemento com  ID "link1"
var linkElement = document.getElementById("link1");

// exemplo de como mudar o conteudo do titulo do elemento
titleElement.innerHTML = "New Title";

// exeplo de como mudar a cor da fonte do titulo do elemento 
titleElement.style.color = "vermelho";

// exemplo de como mudar o tamanho da fonte do titulo do elemento
titleElement.style.fontSize = "24px";

// Exemplo de como adicionar um evento "click" para o link do elemento
linkElement.addEventListener("click", function() {
    // Example: Change the background color of the clicked link
    linkElement.style.backgroundColor = "yellow";
});
