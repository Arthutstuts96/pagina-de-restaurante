const botaoSidebar = document.querySelector('.botao-sidebar');
const sidebar = document.querySelector('.sidebar');

const botaoAdicionar = document.querySelector('.botao__adicionar__comida');
const botaoCancelar = document.querySelector('.botao__cancelar');

botaoSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('escondido');
});
botaoAdicionar.addEventListener('click', () => {
    formulario.classList.toggle('escondido');
});
botaoCancelar.addEventListener('click', (evento) => {
    evento.preventDefault();

    resetFormulario(formulario);
    if(!formulario.classList.contains('escondido')){
        formulario.classList.add('escondido');
    }
});
/* *************** */
function resetFormulario(form){
    const elementos = form.getElementsByTagName('input');
    Array.from(elementos).forEach((elemento) => {elemento.value = ''});
}
