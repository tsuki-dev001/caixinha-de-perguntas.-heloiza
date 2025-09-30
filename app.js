function CriaCartão(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartão = document.createElement('article')
    let respostaEstaVisivel = false
    function viraCartão() {
        respostaEstaVisivel = !respostaEstaVisivel
    }
    container.appendChild(cartão)
    let respostaEstaVisivel = true
    cartão.className = 'cartão'
    cartão.innerHTML =
        <div class="cartão_conteudo">
            <h3>Conhecimento gerais</h3>
            <div class="cartão_conteudo_pergunta">
                <p>qual a montanha mais alta do mundo</p>
            </div>
            <div class="cartão_conteudo_resposta">
                <p>monte everest</p>
            </div>
        </div>
        ,


        container.appendChild(cartão)
}
