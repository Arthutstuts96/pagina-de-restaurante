const formulario = document.querySelector('.formulario');
const lista = document.querySelector('.cardapio__opcoes');
const img = document.querySelector('.imagem__comida');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.querySelector('#nome').value;
    const preco = document.querySelector('#preco').value;
    const imagem = document.querySelector('#imagem').value;

    const temImagem = imagem? 'Foto colocada pelo usuário': 'Sem imagem';
    
    lista.innerHTML += `
        <li class="comida">
            <img src="${imagem}" alt="${temImagem}" class="imagem__comida">
            <div class="descricao__comida">
                <p class="nome__descricao">${nome}</p><hr>
                <p class="preco__descricao">R$${preco}</p>
            </div>
        </li>
        `;

    // imagem para testes
    /* https://images.unsplash.com/photo-15
    55939594-58d7cb561ad1?q=80&w=1374&auto=format&fi
    t=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG
    90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D */

    if(!formulario.classList.contains('escondido')){
        formulario.classList.add('escondido');
    }

    resetFormulario(formulario);
});

lista.addEventListener('dblclick', (evento) => {
    alert('Elemento removido com sucesso!');
    evento.target.parentNode.remove();
});