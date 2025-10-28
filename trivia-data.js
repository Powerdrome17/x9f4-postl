/* ========================================
   DADOS DA TRIVIA - FÁCIL DE EDITAR
   ======================================== */

// INSTRUÇÕES PARA PERSONALIZAR:
// 1. Adicione ou remova perguntas neste array
// 2. Para cada pergunta, defina:
//    - hint: Dica sobre a pessoa (ex: "conhece-te há muito tempo")
//    - options: Array com 3 opções (nomes das pessoas)
//    - correctAnswer: O índice da resposta correta (0, 1 ou 2)
//    - wrongMessage: Mensagem engraçada quando erra
//    - personPhoto: Nome do arquivo da foto da pessoa (deve estar em assets/people/)
//    - congratsMessage: Mensagem de parabéns personalizada

const triviaQuestions = [
    {
        hint: "Esta pessoa que te vai desejar os parabéns conhece-te há muito tempo.",
        options: [
            { name: "Maria", photo: "maria.jpg" },
            { name: "João", photo: "joao.jpg" },
            { name: "Ana", photo: "ana.jpg" }
        ],
        correctAnswer: 1, // João (índice 1)
        wrongMessage: "Mensagem quando erra",
        personPhoto: "joao.jpg",
        congratsMessage: "Mensagem de Parabéns e Foto"
    },
    {
        hint: "Esta pessoa adora passar tempo contigo e faz-te rir sempre!",
        options: [
            { name: "Pedro", photo: "pedro.jpg" },
            { name: "Sofia", photo: "sofia.jpg" },
            { name: "Carlos", photo: "carlos.jpg" }
        ],
        correctAnswer: 1, // Sofia (índice 1)
        wrongMessage: "Mensagem quando erra",
        personPhoto: "sofia.jpg",
        congratsMessage: "Mensagem de Parabéns e Foto"
    },
    {
        hint: "Esta pessoa é super criativa e está sempre a planear coisas fixes!",
        options: [
            { name: "Rita", photo: "rita.jpg" },
            { name: "Miguel", photo: "miguel.jpg" },
            { name: "Beatriz", photo: "beatriz.jpg" }
        ],
        correctAnswer: 2, // Beatriz (índice 2)
        wrongMessage: "Mensagem quando erra",
        personPhoto: "beatriz.jpg",
        congratsMessage: "Mensagem de Parabéns e Foto"
    }
];

// INSTRUÇÕES PARA ADICIONAR MAIS PERGUNTAS:
// Basta copiar o bloco acima e colar aqui, alterando os dados:
/*
    {
        hint: "Dica sobre a pessoa aqui",
        options: [
            { name: "Nome1", photo: "foto1.jpg" },
            { name: "Nome2", photo: "foto2.jpg" },
            { name: "Nome3", photo: "foto3.jpg" }
        ],
        correctAnswer: 0, // Índice da resposta correta
        wrongMessage: "Mensagem engraçada quando erra",
        personPhoto: "foto-correta.jpg",
        congratsMessage: "Mensagem de parabéns personalizada"
    }
*/

// INSTRUÇÕES PARA ADICIONAR MAIS PERGUNTAS:
// Basta copiar o bloco acima e colar aqui, alterando os dados:
/*
    {
        question: "Sua nova pergunta aqui?",
        options: [
            { name: "Nome1", photo: "foto1.jpg" },
            { name: "Nome2", photo: "foto2.jpg" },
            { name: "Nome3", photo: "foto3.jpg" }
        ],
        correctAnswer: 0, // Índice da resposta correta
        wrongMessage: "Mensagem engraçada quando erra",
        personPhoto: "foto-correta.jpg",
        congratsMessage: "Mensagem de parabéns personalizada"
    }
*/