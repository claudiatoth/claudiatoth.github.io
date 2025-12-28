// ==================== FLASHCARDS DATA ====================
const flashcardsData = [
    { de: "zweiundvierzig", num: "42", ro: "patruzeci si doi" },
    { de: "fünfzehn", num: "15", ro: "cincisprezece" },
    { de: "siebenundachtzig", num: "87", ro: "optzeci si sapte" },
    { de: "dreiunddreißig", num: "33", ro: "treizeci si trei" },
    { de: "neunundfünfzig", num: "59", ro: "cincizeci si noua" },
    { de: "elf", num: "11", ro: "unsprezece" },
    { de: "vierundneunzig", num: "94", ro: "nouazeci si patru" },
    { de: "sechsundzwanzig", num: "26", ro: "douazeci si sase" },
    { de: "einundsiebzig", num: "71", ro: "saptezeci si unu" },
    { de: "achtundvierzig", num: "48", ro: "patruzeci si opt" },
    { de: "zwölf", num: "12", ro: "doisprezece" },
    { de: "fünfundachtzig", num: "85", ro: "optzeci si cinci" },
    { de: "neunzehn", num: "19", ro: "nouasprezece" },
    { de: "sechsundsechzig", num: "66", ro: "saizeci si sase" },
    { de: "dreiundvierzig", num: "43", ro: "patruzeci si trei" },
    { de: "neunundneunzig", num: "99", ro: "nouazeci si noua" },
    { de: "vierundfünfzig", num: "54", ro: "cincizeci si patru" },
    { de: "achtzehn", num: "18", ro: "optsprezece" },
    { de: "siebenundsiebzig", num: "77", ro: "saptezeci si sapte" },
    { de: "einunddreißig", num: "31", ro: "treizeci si unu" }
];

let currentCardIndex = 0;

// ==================== RENDER FLASHCARDS ====================
function renderFlashcards() {
    const flashcardsHTML = `
        <div class="section" id="flashcards">
            <div class="section-header" onclick="toggleMainSection(6)">
                <h3>🎴 FLASHCARDS - Exerseaza numerele</h3>
                <span class="arrow">▼</span>
            </div>
            <div class="section-content" id="main-section-6">
                <div class="flashcard-container">
                    <div class="flashcard-counter">
                        Card <span id="current-card">1</span> / 20
                    </div>
                    <div class="flashcard-wrapper">
                        <div class="flashcard" id="flashcard" onclick="flipCard()">
                            <div class="flashcard-face flashcard-front">
                                <div class="flashcard-text" id="flashcard-front-text">zweiundvierzig</div>
                                <button class="flashcard-audio" onclick="playFlashcardAudio(event)">🔊 Asculta</button>
                            </div>
                            <div class="flashcard-face flashcard-back">
                                <div class="flashcard-number" id="flashcard-number">42</div>
                                <div class="flashcard-text" id="flashcard-back-text">patruzeci si doi</div>
                            </div>
                        </div>
                    </div>
                    <div class="flashcard-controls">
                        <button class="flashcard-btn" onclick="previousCard()">← Anterior</button>
                        <button class="flashcard-btn" onclick="nextCard()">Urmator →</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    const container = document.querySelector('.container');
    const btnContainer = document.querySelector('.btn-container');
    container.insertBefore(createElementFromHTML(flashcardsHTML), btnContainer);
}

// ==================== FLASHCARD FUNCTIONS ====================
function updateFlashcard() {
    const card = flashcardsData[currentCardIndex];
    document.getElementById('flashcard-front-text').textContent = card.de;
    document.getElementById('flashcard-number').textContent = card.num;
    document.getElementById('flashcard-back-text').textContent = card.ro;
    document.getElementById('current-card').textContent = currentCardIndex + 1;
    
    // Reset flip
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.remove('flipped');
}

function flipCard() {
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.toggle('flipped');
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcardsData.length;
    updateFlashcard();
}

function previousCard() {
    currentCardIndex = (currentCardIndex - 1 + flashcardsData.length) % flashcardsData.length;
    updateFlashcard();
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    
    // Determine which audio file to use based on the number
    let audioFile;
    const num = parseInt(card.num);
    
    if (num <= 10) {
        audioFile = 'Zahlen_von_0_-10.mp3';
    } else if (num <= 20) {
        audioFile = 'Zahlen_von_11_-_20.mp3';
    } else {
        audioFile = 'Zahlen_von_21_-_100.mp3';
    }
    
    const audio = new Audio(audioFile);
    audio.play().catch(err => {
        console.error('Audio playback failed:', err);
        alert('Audio: ' + card.de);
    });
}

// Helper function
function createElementFromHTML(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', function() {
    renderFlashcards();
    updateFlashcard();
});
