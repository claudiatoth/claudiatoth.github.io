// ==================== TOGGLE FUNCTIONS ====================
function toggleMainSection(i) {
    const content = document.getElementById('main-section-' + i);
    const arrow = document.querySelectorAll('.arrow')[i];
    
    if (content && arrow) {
        content.classList.toggle('active');
        arrow.classList.toggle('rotated');
    }
}

function toggleSubSection(i) {
    const content = document.getElementById('sub-section-' + i);
    const arrows = document.querySelectorAll('.sub-arrow');
    
    if (content && arrows[i]) {
        content.classList.toggle('active');
        arrows[i].classList.toggle('rotated');
    }
}

function toggleSolution(i) {
    const content = document.getElementById('solution-' + i);
    const arrows = document.querySelectorAll('.solution-arrow');
    
    if (content && arrows[i]) {
        content.classList.toggle('active');
        arrows[i].classList.toggle('rotated');
    }
}

// ==================== CHECK ALL EXERCISES ====================
function checkAllExercises() {
    const ex1 = checkEx1();
    const ex2 = checkEx2();
    const ex3 = checkEx3();
    const ex4 = checkEx4();
    const ex5 = checkEx5();
    
    const totalCorrect = ex1.correct + ex2.correct + ex3.correct + ex4.correct + ex5.correct;
    const totalQuestions = ex1.total + ex2.total + ex3.total + ex4.total + ex5.total;
    const percentage = Math.round((totalCorrect / totalQuestions) * 100);
    
    const scoreDiv = document.getElementById('score');
    scoreDiv.className = 'score show';
    scoreDiv.innerHTML = `
        <div>Scorul tau: ${totalCorrect} / ${totalQuestions} (${percentage}%)</div>
        <div style="font-size: 1rem; margin-top: 10px;">
            Ex. 1: ${ex1.correct}/${ex1.total} | 
            Ex. 2: ${ex2.correct}/${ex2.total} | 
            Ex. 3: ${ex3.correct}/${ex3.total} | 
            Ex. 4: ${ex4.correct}/${ex4.total} | 
            Ex. 5: ${ex5.correct}/${ex5.total}
        </div>
        ${percentage >= 80 ? '<div style="margin-top: 15px; color: white;">Sehr gut! Excelent!</div>' : 
          percentage >= 60 ? '<div style="margin-top: 15px; color: white;">Gut! Continua sa exersezi!</div>' : 
          '<div style="margin-top: 15px; color: white;">Repeta teoria si incearca din nou!</div>'}
    `;
    
    scoreDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ==================== RESET ALL ====================
function resetAll() {
    const exercises = ['ex1', 'ex2', 'ex3', 'ex4', 'ex5'];
    const letters = ['a', 'b', 'c', 'd', 'e'];
    
    exercises.forEach(ex => {
        letters.forEach(letter => {
            const select = document.getElementById(`${ex}-${letter}`);
            const feedback = document.getElementById(`${ex}-f${letter}`);
            
            if (select) select.value = '';
            if (feedback) feedback.className = 'feedback';
        });
    });
    
    // Reset score
    const scoreDiv = document.getElementById('score');
    scoreDiv.className = 'score';
    
    // Reset flashcards
    if (typeof currentCardIndex !== 'undefined') {
        currentCardIndex = 0;
        updateFlashcard();
    }
}

// ==================== NAVBAR SCROLL FUNCTIONALITY ====================
document.addEventListener('DOMContentLoaded', function() {
    // Open section when clicking navbar link
    document.querySelectorAll('.navbar-menu a').forEach((link, index) => {
        if (index > 0 && index < 8) {
            link.addEventListener('click', function(e) {
                setTimeout(() => {
                    const sectionIndex = index - 1;
                    const content = document.getElementById('main-section-' + sectionIndex);
                    const arrow = document.querySelectorAll('.arrow')[sectionIndex];
                    
                    if (content && arrow && !content.classList.contains('active')) {
                        content.classList.add('active');
                        arrow.classList.add('rotated');
                    }
                }, 100);
            });
        }
    });
});

// ==================== HELPER FUNCTION ====================
function createElementFromHTML(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}
