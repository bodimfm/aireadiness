document.getElementById('submit-button').addEventListener('click', calculateResults);

function calculateResults() {
    const form = document.getElementById('assessment-form');
    const resultsDiv = document.getElementById('results');
    const radarChartCanvas = document.getElementById('radar-chart');
    const overallScoreDisplay = document.getElementById('overall-score'); // Elemento de pontuação
    const recommendationsDisplay = document.getElementById('recommendations'); // Elemento de recomendações


    // 1. Coleta as respostas do formulário.
    const answers = {};
    for (let i = 1; i <= 11; i++) {
        const answer = form.querySelector(`input[name="q${i}"]:checked`);
        answers[`q${i}`] = answer ? parseInt(answer.value) : 0; // Valor padrão 0 se não respondido.
    }

    // 2. Calcula as pontuações por seção (máximo 3 pontos por questão).
     const sectionScores = {
        governance: (answers.q1 + answers.q2 + answers.q3),
        dataQuality: (answers.q4 + answers.q5),
        transparency: (answers.q6 + answers.q7),
        security: (answers.q8 + answers.q9),
        accountability: (
