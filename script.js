// const card = document.querySelector('.card');
// const overlay = document.getElementById('overlay');
// const expandedCard = document.getElementById('expandedCard');

// card.addEventListener('click', function() {
//     // Copia o conteúdo do card clicado para o card expandido
//     const cardContent = this.querySelector('.card-content').innerHTML;
//     expandedCard.querySelector('.expanded-content').innerHTML = cardContent;

//     // Mostra a overlay e o card expandido
//     overlay.style.display = 'flex';
// });

// function closeExpandedCard() {
//     overlay.style.display = 'none';
// }

// // Fecha o card expandido se o usuário clicar fora dele (na overlay)
// overlay.addEventListener('click', function(event) {
//     if (event.target === this) {
//         closeExpandedCard();
//     }
// });

const button = document.querySelector('.card');
const modal = document.querySelector('dialog')

button.onclick = function() {
    modal.showModal();
}

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}


