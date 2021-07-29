// Dados Iniciais
let currentColor = 'black';
let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');

// Eventos
document.querySelectorAll('.colorArea .color').forEach(item =>{
    item.addEventListener('click', colorClickEvent);
});

// Funções
function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color');
    currentColor = color;

    // remove quem estava ativo(cor)
    document.querySelector('.color.active').classList.remove('active');
    // adiciona nova cor selecionada
    e.target.classList.add('active');    
};