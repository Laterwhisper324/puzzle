const input = document.getElementById('senha') || document.querySelector('input');
const btnAmarelo = document.getElementById('btn-amarelo');

// Função de criptografia SHA-256 para não exibir as respostas em texto plano
async function hash(str) {
    const buffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
    return Array.from(new Uint8Array(buffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

// Hashes criptografados das palavras-chave
const _k1 = "e75347ef52f677d59b319a9b1d3d3ab13754bd70edd8d0ffcae6741e2f4c72a8"; 
const _k2 = "0877c1dd3621b1ff6cace1d409c654b03e48b5e956778b985c49b5a38124af81"; 

// Monitora o que o usuário digita em tempo real:
input.addEventListener('input', async function() {
    const valor = input.value.trim().toLowerCase();
    const h = await hash(valor);
    if (h === _k2) {
        btnAmarelo.classList.remove('hidden');
    } else {
        btnAmarelo.classList.add('hidden');
    }
});

// Ao pressionar Enter no input:
input.addEventListener('keydown', async function(event) {
    if (event.key === 'Enter') {
        const resposta = input.value.trim().toLowerCase();
        const h = await hash(resposta);

        if (h === _k1) {
            window.location.href = atob("c2FsYTMuaHRtbA==");
        } else if (h === _k2) {
            btnAmarelo.classList.remove('hidden');
        } else {
            // Efeito visual caso erre a senha
            input.value = "";
            input.placeholder = "Incorreto";
            input.style.borderColor = "#ff4444";
            setTimeout(() => {  
                input.style.borderColor = "#ccc";
                input.placeholder = "";
            }, 1000);
        }
    }
});

// Ação ao clicar no botão amarelo (visível no console da sala2):
btnAmarelo.addEventListener('click', function() {
    console.log("6F 63 65 69 72 6F 73");
});
