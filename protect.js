// Desabilita clique direito (menu de contexto)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

// Bloqueia atalhos de inspeção e desenvolvedor
document.addEventListener('keydown', function(e) {
    // F12
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    // Ctrl+Shift+I (Inspecionar), Ctrl+Shift+J (Console), Ctrl+Shift+C (Selecionar elemento)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    // Ctrl+U (Exibir código-fonte), Ctrl+S (Salvar página)
    if (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.key === 'S' || e.key === 's')) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
});
