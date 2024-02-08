/*

objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma 

        passo 1 - pegar o botão de seleção de plataformas no js pra poder verificar 
        quando o usuário clicar em cima dele

        passo 2 - pegar o elemento do conteúdo que precisa ser mostrado

        passo 3 - pegar o clique do usuário no js

        passo 4 - quando o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão pra que o conteúdo apareça

objetivo 2 - caso a lista do botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido

        passo 1 - verificar se o botão já está aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente

*/

const botao = document.querySelector(".btn-plataforma");

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
        elementoPlataformas.classList.toggle("ativo");
} );
