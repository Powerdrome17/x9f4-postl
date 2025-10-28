/* ========================================
   SCRIPT PRINCIPAL - POSTAL DE ANIVERSÁRIO
   ======================================== */

// Variável global para controlar o progresso da trivia
let currentQuestionIndex = 0;

/* ========================================
   FUNÇÕES DE NAVEGAÇÃO
   ======================================== */

// Inicia a jornada do postal
function startJourney() {
    window.location.href = 'page1.html';
}

// Navega para a próxima página
function nextPage(pageUrl) {
    window.location.href = pageUrl;
}

/* ========================================
   FUNÇÕES DA TRIVIA
   ======================================== */

// Carrega a pergunta da trivia
function loadTrivia() {
    const container = document.getElementById('triviaContainer');
    
    if (!container) return;
    
    // Verifica se ainda há perguntas
    if (currentQuestionIndex >= triviaQuestions.length) {
        showFinalMessage();
        return;
    }
    
    const question = triviaQuestions[currentQuestionIndex];
    
    // Monta o HTML da pergunta com a dica
    let html = `
        <h2 class="trivia-question">Quem te vai dar os parabéns a seguir?</h2>
        <div class="hint-box">
            💡 <strong>Dica:</strong> ${question.hint}
        </div>
        <div class="options-container">
    `;
    
    // Adiciona as opções
    question.options.forEach((option, index) => {
        const photoPath = `assets/people/${option.photo}`;
        html += `
            <button class="option-button" onclick="checkAnswer(${index})">
                <img src="${photoPath}" alt="${option.name}" class="option-image"
                     onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2245%22 fill=%22%23ffc5d9%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2240%22 text-anchor=%22middle%22 dy=%22.3em%22%3E👤%3C/text%3E%3C/svg%3E'">
                <div>${option.name}</div>
            </button>
        `;
    });
    
    html += `</div>`;
    container.innerHTML = html;
}

// Verifica a resposta selecionada
function checkAnswer(selectedIndex) {
    const question = triviaQuestions[currentQuestionIndex];
    const container = document.getElementById('triviaContainer');
    
    if (selectedIndex === question.correctAnswer) {
        // Resposta correta!
        showCorrectAnswer(question);
    } else {
        // Resposta errada
        showWrongAnswer(question);
    }
}

// Mostra feedback de resposta errada
function showWrongAnswer(question) {
    const container = document.getElementById('triviaContainer');
    
    const html = `
        <div class="feedback-container feedback-wrong">
            <div class="feedback-message">
                ${question.wrongMessage}
            </div>
            <button class="nav-button retry-button" onclick="loadTrivia()">
                Tentar Novamente 🔄
            </button>
        </div>
    `;
    
    container.innerHTML = html;
}

// Mostra feedback de resposta correta
function showCorrectAnswer(question) {
    const container = document.getElementById('triviaContainer');
    const photoPath = `assets/people/${question.personPhoto}`;
    
    const html = `
        <div class="feedback-container feedback-correct">
            <div class="feedback-message">
                🎉 Acertaste! 🎉
            </div>
            <img src="${photoPath}" alt="Pessoa" class="person-photo"
                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Ccircle cx=%22100%22 cy=%22100%22 r=%2295%22 fill=%22%23ffd700%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%22100%22 text-anchor=%22middle%22 dy=%22.3em%22%3E🎊%3C/text%3E%3C/svg%3E'">
            <div class="congratulations-text">
                ${question.congratsMessage}
            </div>
            <button class="nav-button" onclick="nextQuestion()">
                Continuar 🎈
            </button>
        </div>
    `;
    
    container.innerHTML = html;
}

// Avança para a próxima pergunta
function nextQuestion() {
    currentQuestionIndex++;
    loadTrivia();
}

// Mostra mensagem final quando todas as perguntas foram respondidas
function showFinalMessage() {
    const container = document.getElementById('triviaContainer');
    
    const html = `
        <div class="feedback-container feedback-correct">
            <h2 class="trivia-question">🎊 Parabéns! 🎊</h2>
            <div class="congratulations-text">
                <p style="font-size: 1.5em; margin: 30px 0;">
                    Completaste todas as surpresas!<br><br>
                    Esperamos que tenhas gostado desta celebração especial! 💖
                </p>
                <div style="font-size: 3em; margin: 20px 0;">🎂✨🎉</div>
                <p style="font-size: 1.3em; color: #ff6b9d; font-weight: 700;">
                    FELIZ 31º ANIVERSÁRIO!
                </p>
            </div>
            <button class="nav-button" onclick="window.location.href='index.html'">
                Voltar ao Início 🏠
            </button>
        </div>
    `;
    
    container.innerHTML = html;
}

/* ========================================
   EFEITOS ESPECIAIS
   ======================================== */

// Anima o personagem flutuante com mensagens diferentes
function animateCharacter() {
    const messages = [
        'Vamos lá! 🎉',
        'Quem será? 🤔',
        'Pensa bem! 💭',
        'Estás quase! ✨',
        'Consegues! 💪',
        'Surpresa! 🎊'
    ];
    
    const bubble = document.querySelector('.floating-bubble');
    if (!bubble) return;
    
    let messageIndex = 0;
    setInterval(() => {
        messageIndex = (messageIndex + 1) % messages.length;
        bubble.textContent = messages[messageIndex];
    }, 5000); // Muda a mensagem a cada 5 segundos
}

// Adiciona confetti animado (opcional)
function createConfetti() {
    const confettiColors = ['#ff6b9d', '#ffc5d9', '#d4a5f6', '#a8d8ea', '#ffd700'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.opacity = Math.random();
        confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        
        document.body.appendChild(confetti);
        
        // Animação de queda
        let top = -10;
        const fall = setInterval(() => {
            top += 2;
            confetti.style.top = top + 'px';
            
            if (top > window.innerHeight) {
                clearInterval(fall);
                confetti.remove();
            }
        }, 20);
    }
}

/* ========================================
   INSTRUÇÕES PARA PERSONALIZAÇÃO:
   
   1. ADICIONAR MAIS PÁGINAS:
      - Crie novos arquivos pageX.html
      - Copie a estrutura de page1.html ou page2.html
      - Altere as mensagens e imagens
      - Atualize os botões "Continuar" para a próxima página
   
   2. MODIFICAR A TRIVIA:
      - Edite o arquivo trivia-data.js
      - Adicione ou remova perguntas
      - Altere nomes, fotos e mensagens
   
   3. MUDAR CORES E ESTILOS:
      - Edite as variáveis CSS em style.css
      - Procure por :root no início do arquivo
   
   4. ADICIONAR FOTOS:
      - Coloque as fotos em assets/images/ (personagem)
      - Coloque as fotos em assets/people/ (pessoas da trivia)
   ======================================== */