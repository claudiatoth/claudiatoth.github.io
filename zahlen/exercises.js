// ==================== EXERCISES DATA ====================
const exercisesData = {
    ex1: {
        title: "Übung 1: Alege forma corecta",
        questions: [
            { letter: 'a', question: '8 = ?', options: ['Alege...', 'acht', 'elf', 'zehn'], answer: 'acht' },
            { letter: 'b', question: '17 = ?', options: ['Alege...', 'sechzehn', 'siebzehn', 'achtzehn'], answer: 'siebzehn' },
            { letter: 'c', question: '35 = ?', options: ['Alege...', 'dreiundfünfzig', 'fünfunddreißig', 'dreiundvierzig'], answer: 'fünfunddreißig' },
            { letter: 'd', question: '60 = ?', options: ['Alege...', 'sechzig', 'siebzig', 'achtzig'], answer: 'sechzig' },
            { letter: 'e', question: '84 = ?', options: ['Alege...', 'vierundachtzig', 'achtundvierzig', 'vierundsechzig'], answer: 'vierundachtzig' }
        ]
    },
    ex2: {
        title: "Übung 2: Din cuvinte in cifre",
        questions: [
            { letter: 'a', question: 'siebenunddreißig = ?', options: ['Alege...', '37', '73', '27'], answer: '37' },
            { letter: 'b', question: 'fünfundachtzig = ?', options: ['Alege...', '58', '85', '75'], answer: '85' },
            { letter: 'c', question: 'neunzehn = ?', options: ['Alege...', '9', '19', '90'], answer: '19' },
            { letter: 'd', question: 'dreiundsiebzig = ?', options: ['Alege...', '37', '73', '63'], answer: '73' },
            { letter: 'e', question: 'einundneunzig = ?', options: ['Alege...', '19', '91', '81'], answer: '91' }
        ]
    },
    ex3: {
        title: "Übung 3: Operatii matematice",
        model: "Model: 3 + 4 = 7 → Drei plus vier ist sieben.",
        questions: [
            { letter: 'a', question: '9 + 1 = 10 → Neun plus eins ist ___.', options: ['Alege...', 'zehn', 'neun', 'elf'], answer: 'zehn' },
            { letter: 'b', question: '2 + 7 = 9 → Zwei ___ sieben ist neun.', options: ['Alege...', 'plus', 'minus', 'mal'], answer: 'plus' },
            { letter: 'c', question: '3 - 1 = 2 → Drei minus eins ist ___.', options: ['Alege...', 'eins', 'zwei', 'drei'], answer: 'zwei' },
            { letter: 'd', question: '5 + 3 = 8 → ___ plus drei ist acht.', options: ['Alege...', 'Drei', 'Fünf', 'Acht'], answer: 'Fünf' },
            { letter: 'e', question: '10 - 5 = 5 → Zehn minus fünf ___ fünf.', options: ['Alege...', 'sind', 'ist', 'hat'], answer: 'ist' }
        ]
    },
    ex4: {
        title: "Übung 4: Varsta persoanelor",
        questions: [
            { letter: 'a', question: 'Claudia - 34 ani = ?', options: ['Alege...', 'vierunddreißig', 'dreißigvier', 'dreiundvierzig'], answer: 'vierunddreißig' },
            { letter: 'b', question: 'Anna - 28 ani = ?', options: ['Alege...', 'zweiundachtzig', 'achtundzwanzig', 'achtzehn'], answer: 'achtundzwanzig' },
            { letter: 'c', question: 'Andreas - 41 ani = ?', options: ['Alege...', 'vierzehn', 'einundvierzig', 'vierundvierzig'], answer: 'einundvierzig' },
            { letter: 'd', question: 'Roland - 32 ani = ?', options: ['Alege...', 'zweiunddreißig', 'dreiundzwanzig', 'dreiunddreißig'], answer: 'zweiunddreißig' },
            { letter: 'e', question: 'Sabine - 38 ani = ?', options: ['Alege...', 'dreiundachtzig', 'achtunddreißig', 'achtunddrei'], answer: 'achtunddreißig' }
        ]
    },
    ex5: {
        title: "Übung 5: Numere mari",
        questions: [
            { letter: 'a', question: '67 = ?', options: ['Alege...', 'sechsundsiebzig', 'siebenundsechzig', 'siebundsechzig'], answer: 'siebenundsechzig' },
            { letter: 'b', question: '93 = ?', options: ['Alege...', 'dreiundneunzig', 'neununddreizig', 'dreiunddreißig'], answer: 'dreiundneunzig' },
            { letter: 'c', question: '56 = ?', options: ['Alege...', 'sechsundfünfzig', 'fünfundsechzig', 'fünfundsechszig'], answer: 'sechsundfünfzig' },
            { letter: 'd', question: '79 = ?', options: ['Alege...', 'neunundsiebzig', 'siebenundneunzig', 'neunundsieben'], answer: 'neunundsiebzig' },
            { letter: 'e', question: '100 = ?', options: ['Alege...', 'zehnzig', 'hundert', 'tausend'], answer: 'hundert' }
        ]
    }
};

// ==================== RENDER EXERCISES ====================
function renderExercises() {
    const exercises = ['ex1', 'ex2', 'ex3', 'ex4', 'ex5'];
    const container = document.querySelector('.container');
    const btnContainer = document.querySelector('.btn-container');
    
    exercises.forEach((exId, sectionIndex) => {
        const ex = exercisesData[exId];
        const sectionNum = sectionIndex + 1;
        
        let exerciseHTML = `
            <div class="section" id="${exId}">
                <div class="section-header" onclick="toggleMainSection(${sectionNum})">
                    <h3>${ex.title}</h3>
                    <span class="arrow">▼</span>
                </div>
                <div class="section-content" id="main-section-${sectionNum}">
        `;
        
        // Add model if exists (for ex3)
        if (ex.model) {
            exerciseHTML += `
                <div class="theory-box">
                    <p><strong>${ex.model}</strong></p>
                </div>
            `;
        }
        
        // Add questions
        ex.questions.forEach((q, i) => {
            exerciseHTML += `
                <div class="exercise-item">
                    <span class="exercise-number">${q.letter}</span>
                    <div class="input-group">
                        <label>${q.question}</label>
                        <select id="${exId}-${q.letter}">
                            ${q.options.map(opt => `<option value="${opt === 'Alege...' ? '' : opt}">${opt}</option>`).join('')}
                        </select>
                        <div class="feedback" id="${exId}-f${q.letter}"></div>
                    </div>
                </div>
            `;
        });
        
        // Add solutions dropdown
        exerciseHTML += `
                    <div class="solutions-dropdown">
                        <div class="solutions-header" onclick="toggleSolution(${sectionIndex})">
                            <span>📖 Vezi rezolvarile</span>
                            <span class="solution-arrow">▼</span>
                        </div>
                        <div class="solutions-content" id="solution-${sectionIndex}">
                            ${ex.questions.map(q => `
                                <div class="solution-item">
                                    ${q.letter}) ${q.question.split('→')[0].trim()} → <strong>${q.answer}</strong>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Insert into container BEFORE btn-container
        container.insertBefore(createElementFromHTML(exerciseHTML), btnContainer);
    });
}

// Helper function to create element from HTML string
function createElementFromHTML(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}

// ==================== CHECK FUNCTIONS ====================
function checkEx1() {
    return checkExercise('ex1', exercisesData.ex1.questions);
}

function checkEx2() {
    return checkExercise('ex2', exercisesData.ex2.questions);
}

function checkEx3() {
    return checkExercise('ex3', exercisesData.ex3.questions);
}

function checkEx4() {
    return checkExercise('ex4', exercisesData.ex4.questions);
}

function checkEx5() {
    return checkExercise('ex5', exercisesData.ex5.questions);
}

function checkExercise(exId, questions) {
    let correct = 0;
    questions.forEach(q => {
        const val = document.getElementById(`${exId}-${q.letter}`).value;
        const feedback = document.getElementById(`${exId}-f${q.letter}`);
        
        if (val === q.answer) {
            feedback.className = 'feedback correct';
            feedback.textContent = '✓ Corect!';
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `✗ Raspuns corect: ${q.answer}`;
        }
    });
    
    return { correct, total: questions.length };
}

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', function() {
    renderExercises();
});
