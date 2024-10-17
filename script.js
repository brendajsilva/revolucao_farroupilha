document.getElementById('quiz-form').addEventListener('submit', function(event) {  
    event.preventDefault();  

    let score = 0;  
    const answers = {  
        q1: '1835',                // Resposta correta da pergunta 1  
        q2: 'Aumento de Impostos', // Resposta correta da pergunta 2  
        q3: 'Bento Gonçalves',     // Resposta correta da pergunta 3  
        q4: 'República Rio-Grandense', // Resposta correta da pergunta 4  
        q5: '1845'                 // Resposta correta da pergunta 5  
    };  

    for (const [key, value] of Object.entries(answers)) {  
        const selectedOption = document.querySelector(`input[name="${key}"]:checked`);  
        if (selectedOption && selectedOption.value === value) {  
            score++;  
        }  
    }  

    document.getElementById('quiz').classList.add('hidden');  
    document.getElementById('result').classList.remove('hidden');  
    document.getElementById('score').innerText = `Você acertou ${score} de ${Object.keys(answers).length} perguntas.`;  
});  

document.getElementById('restart-quiz').addEventListener('click', function() {  
    document.getElementById('quiz-form').reset();  
    document.getElementById('result').classList.add('hidden');  
    document.getElementById('quiz').classList.remove('hidden');  
});