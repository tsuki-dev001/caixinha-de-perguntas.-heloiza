// Seleciona todos os cartões
const cartoes = document.querySelectorAll(".cartao");

// Adiciona o evento de clique em cada cartão
cartoes.forEach(cartao => {
  const conteudo = cartao.querySelector(".cartao_conteudo");

  // Quando clicar no cartão, vira ele
  cartao.addEventListener("click", () => {
    conteudo.classList.toggle("virado");
  });
});
