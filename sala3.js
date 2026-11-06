const cards = document.querySelectorAll('.card-personagem');
const btnPerfeito = document.getElementById('btn-perfeito');

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('selecionado');

        const totalSelecionados = document.querySelectorAll('.card-personagem.selecionado').length;

        if (totalSelecionados === cards.length) {
            btnPerfeito.classList.remove('hidden');
        } else {
            btnPerfeito.classList.add('hidden');
        }
    });
});

btnPerfeito.addEventListener('click', () => {
    window.location.href = atob("dGVsZWZvbmUuaHRtbA==");
});
