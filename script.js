// Script para alternar entre modo claro e escuro

// Seleciona o botão de alternância
const themeToggle = document.getElementById('theme-toggle');

// Adiciona um ouvinte de evento para o clique no botão
themeToggle.addEventListener('click', () => {
    // Alterna a classe 'light-mode' no elemento root (document.documentElement)
    document.documentElement.classList.toggle('light-mode');

    // Atualiza o ícone do botão com base no modo atual
    if (document.documentElement.classList.contains('light-mode')) {
        themeToggle.textContent = '☀️'; // Ícone de sol para modo claro
    } else {
        themeToggle.textContent = '🌙'; // Ícone de lua para modo escuro
    }
});

// Define o ícone inicial do botão baseado no modo padrão (escuro)
themeToggle.textContent = '🌙';

// Armazenamento do perfil ativo no localStorage
// Seleciona todos os links dos perfis
const profileLinks = document.querySelectorAll('.profile a');

// Adiciona ouvinte de evento para cada link de perfil
profileLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Previne a navegação padrão para armazenar os dados primeiro
        e.preventDefault();

        // Encontra o elemento li pai
        const profileLi = link.closest('li');

        // Pega o nome do perfil (do <p>)
        const nome = profileLi.querySelector('p').textContent;

        // Pega a src da imagem
        const imgSrc = profileLi.querySelector('img').src;

        // Armazena no localStorage como JSON
        const perfilAtivo = { nome, imgSrc };
        localStorage.setItem('perfilAtivo', JSON.stringify(perfilAtivo));

        // Agora navega para a página do perfil
        window.location.href = link.href;
    });
});


