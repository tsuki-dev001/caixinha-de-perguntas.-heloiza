function CriaCartão(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartão = document.createElement('article')
    cartão.className = 'cartão'

    cartão.InnerHTML = `
    <div class="cartão_conteudo">
    <h3>${categoria}</h3>
    <div class="cartão_conteudo_pergunta">
        <p>${pergunta}</p>
</div>
<div class='cartão_conteudo_respota">
<p>${resposta}
</div>
<div/>
`
container.appendChild(cartão)

let respotaEstaVisiel= false
function viraCartã(){
    respotaEstaVisiel = !respotaEstaVisiel
    cartão.classList.toggle('ative', respotaEstaVisiel)
}
cartão.addEventListener('click', viraCartão)
}
e