// ==================== THEORY DATA ====================
const theoryData = {
    zahlen0to10: {
        title: "Zahlen von 0 bis 10",
        audioFile: "Zahlen_von_0_-10.mp3",
        data: [
            { num: "0", de: "null", ro: "zero" },
            { num: "1", de: "eins", ro: "unu" },
            { num: "2", de: "zwei", ro: "doi" },
            { num: "3", de: "drei", ro: "trei" },
            { num: "4", de: "vier", ro: "patru" },
            { num: "5", de: "fünf", ro: "cinci" },
            { num: "6", de: "sechs", ro: "sase" },
            { num: "7", de: "sieben", ro: "sapte" },
            { num: "8", de: "acht", ro: "opt" },
            { num: "9", de: "neun", ro: "noua" },
            { num: "10", de: "zehn", ro: "zece" }
        ]
    },
    
    zahlen11to20: {
        title: "Zahlen von 11 bis 20",
        audioFile: "Zahlen_von_11_-_20.mp3",
        specialNote: {
            text: "Atentie speciala:",
            rules: [
                "16 = <strong>sechzehn</strong> (nu \"sechszehn\")",
                "17 = <strong>siebzehn</strong> (nu \"siebenzehn\")"
            ]
        },
        data: [
            { num: "11", de: "elf", ro: "unsprezece" },
            { num: "12", de: "zwölf", ro: "doisprezece" },
            { num: "13", de: "dreizehn", ro: "treisprezece" },
            { num: "14", de: "vierzehn", ro: "paisprezece" },
            { num: "15", de: "fünfzehn", ro: "cincisprezece" },
            { num: "16", de: "sechzehn", ro: "saisprezece" },
            { num: "17", de: "siebzehn", ro: "saptesprezece" },
            { num: "18", de: "achtzehn", ro: "optsprezece" },
            { num: "19", de: "neunzehn", ro: "nouasprezece" },
            { num: "20", de: "zwanzig", ro: "douazeci" }
        ]
    },
    
    zahlen21to100: {
        title: "Zahlen von 21 bis 100",
        audioFile: "Zahlen_von_21_-_100.mp3",
        rule: {
            title: "REGULA IMPORTANTA:",
            formula: "unitatile + und + zecile",
            examples: [
                "35 = fünf + und + dreißig = <strong>fünfunddreißig</strong>",
                "47 = sieben + und + vierzig = <strong>siebenundvierzig</strong>",
                "82 = zwei + und + achtzig = <strong>zweiundachtzig</strong>",
                "99 = neun + und + neunzig = <strong>neunundneunzig</strong>"
            ]
        },
        dataLeft: [
            { num: "21", de: "einundzwanzig" },
            { num: "22", de: "zweiundzwanzig" },
            { num: "23", de: "dreiundzwanzig" },
            { num: "24", de: "vierundzwanzig" },
            { num: "25", de: "fünfundzwanzig" },
            { num: "26", de: "sechsundzwanzig" },
            { num: "27", de: "siebenundzwanzig" },
            { num: "28", de: "achtundzwanzig" },
            { num: "29", de: "neunundzwanzig" }
        ],
        dataRight: [
            { num: "30", de: "dreißig" },
            { num: "40", de: "vierzig" },
            { num: "50", de: "fünfzig" },
            { num: "60", de: "sechzig" },
            { num: "70", de: "siebzig" },
            { num: "80", de: "achtzig" },
            { num: "90", de: "neunzig" },
            { num: "100", de: "(ein)hundert" }
        ]
    }
};

// ==================== RENDER THEORY ====================
function renderTheory() {
    const theorieSection = document.getElementById('main-section-0');
    
    // Zahlen 0-10
    const section0 = `
        <div class="sub-section">
            <div class="sub-section-header" onclick="toggleSubSection(0)">
                <span>${theoryData.zahlen0to10.title}</span>
                <span class="sub-arrow">▼</span>
            </div>
            <div class="sub-section-content" id="sub-section-0">
                <button class="audio-btn" onclick="playTheoryAudio(0)">🔊 Asculta numerele 0-10</button>
                <table class="theory-table">
                    <tr><th>Cifra</th><th>Deutsch</th><th>Romana</th></tr>
                    ${theoryData.zahlen0to10.data.map(item => `
                        <tr><td>${item.num}</td><td><strong>${item.de}</strong></td><td>${item.ro}</td></tr>
                    `).join('')}
                </table>
            </div>
        </div>
    `;
    
    // Zahlen 11-20
    const section1 = `
        <div class="sub-section">
            <div class="sub-section-header" onclick="toggleSubSection(1)">
                <span>${theoryData.zahlen11to20.title}</span>
                <span class="sub-arrow">▼</span>
            </div>
            <div class="sub-section-content" id="sub-section-1">
                <button class="audio-btn" onclick="playTheoryAudio(1)">🔊 Asculta numerele 11-20</button>
                <div class="theory-box">
                    <p><strong>${theoryData.zahlen11to20.specialNote.text}</strong></p>
                    ${theoryData.zahlen11to20.specialNote.rules.map(rule => `<p>• ${rule}</p>`).join('')}
                </div>
                <table class="theory-table">
                    <tr><th>Cifra</th><th>Deutsch</th><th>Romana</th></tr>
                    ${theoryData.zahlen11to20.data.map(item => `
                        <tr><td>${item.num}</td><td><strong>${item.de}</strong></td><td>${item.ro}</td></tr>
                    `).join('')}
                </table>
            </div>
        </div>
    `;
    
    // Zahlen 21-100
    const section2 = `
        <div class="sub-section">
            <div class="sub-section-header" onclick="toggleSubSection(2)">
                <span>${theoryData.zahlen21to100.title}</span>
                <span class="sub-arrow">▼</span>
            </div>
            <div class="sub-section-content" id="sub-section-2">
                <button class="audio-btn" onclick="playTheoryAudio(2)">🔊 Asculta numerele 21-100</button>
                <div class="theory-box">
                    <p style="margin-bottom: 15px;"><strong>${theoryData.zahlen21to100.rule.title}</strong></p>
                    <p><strong>${theoryData.zahlen21to100.rule.formula}</strong></p>
                    <p style="margin-top: 10px;">Exemple de numere compuse:</p>
                    ${theoryData.zahlen21to100.rule.examples.map(ex => `<p>• ${ex}</p>`).join('')}
                </div>
                <table class="theory-table">
                    <tr><th colspan="2">21 - einundzwanzig</th><th colspan="2">30 - dreißig</th></tr>
                    ${Array.from({length: 8}, (_, i) => {
                        const left = theoryData.zahlen21to100.dataLeft[i];
                        const right = theoryData.zahlen21to100.dataRight[i];
                        return `<tr><td>${left.num}</td><td>${left.de}</td><td>${right ? right.num : ''}</td><td>${right ? right.de : ''}</td></tr>`;
                    }).join('')}
                    <tr><td>29</td><td>neunundzwanzig</td><td></td><td></td></tr>
                </table>
            </div>
        </div>
    `;
    
    theorieSection.innerHTML = section0 + section1 + section2;
}

// ==================== AUDIO FUNCTIONS ====================
const audioFiles = [
    'Zahlen_von_0_-10.mp3',
    'Zahlen_von_11_-_20.mp3',
    'Zahlen_von_21_-_100.mp3'
];

function playTheoryAudio(index) {
    const audio = new Audio(audioFiles[index]);
    audio.play().catch(err => {
        console.error('Audio playback failed:', err);
        alert('Eroare la redarea audio. Verifica daca fisierul exista.');
    });
}

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', function() {
    renderTheory();
});
