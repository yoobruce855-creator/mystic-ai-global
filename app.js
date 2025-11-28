// Tarot Cards Data
const tarotCards = [
    { name: 'The Fool', emoji: '🃏', meaning: 'New Beginning', description: 'Start your journey with pure heart and freedom. Embrace new opportunities with an open mind.' },
    { name: 'The Magician', emoji: '🎩', meaning: 'Creation & Will', description: 'You have all the tools you need. Believe in your abilities and manifest your desires.' },
    { name: 'The High Priestess', emoji: '🌙', meaning: 'Intuition & Mystery', description: 'Listen to your inner voice. Trust your intuition and explore the mysteries within.' },
    { name: 'The Empress', emoji: '👑', meaning: 'Abundance & Creation', description: 'A time full of abundance, creativity, and nurturing energy surrounds you.' },
    { name: 'The Emperor', emoji: '⚜️', meaning: 'Authority & Stability', description: 'Show leadership and establish order. Structure and discipline lead to success.' },
    { name: 'The Lovers', emoji: '💕', meaning: 'Love & Choice', description: 'An important choice awaits. Follow your heart and choose wisely.' },
    { name: 'The Chariot', emoji: '🏇', meaning: 'Victory & Will', description: 'Victory is within reach. Stay focused and determined on your path.' },
    { name: 'Strength', emoji: '🦁', meaning: 'Courage & Patience', description: 'Inner strength and courage will help you overcome any obstacle.' },
    { name: 'The Hermit', emoji: '🕯️', meaning: 'Reflection & Solitude', description: 'Take time for self-reflection. Wisdom comes from within.' },
    { name: 'Wheel of Fortune', emoji: '☸️', meaning: 'Change & Destiny', description: 'A turning point approaches. Embrace the cycles of change.' },
    { name: 'Justice', emoji: '⚖️', meaning: 'Fairness & Balance', description: 'Seek balance and fairness. Truth and justice will prevail.' },
    { name: 'The Star', emoji: '⭐', meaning: 'Hope & Inspiration', description: 'Hope shines bright. Your dreams are within reach.' },
    { name: 'The Sun', emoji: '☀️', meaning: 'Success & Joy', description: 'Success, joy, and vitality illuminate your path forward.' },
    { name: 'The World', emoji: '🌍', meaning: 'Completion & Achievement', description: 'Completion and fulfillment. Celebrate your achievements.' }
];

// Dream Symbols Database
const dreamSymbols = {
    'snake': { symbol: '🐍', meaning: 'Transformation & Wealth', interpretation: 'Snakes represent transformation, healing, and potential wealth. A large snake indicates significant opportunities ahead.' },
    'water': { symbol: '💧', meaning: 'Emotions & Wealth', interpretation: 'Clear water symbolizes wealth and good news. The state of water reflects your emotional clarity.' },
    'fire': { symbol: '🔥', meaning: 'Passion & Energy', interpretation: 'Fire represents strong passion and energy. A house fire paradoxically symbolizes incoming wealth.' },
    'flying': { symbol: '🦅', meaning: 'Freedom & Success', interpretation: 'Flying dreams indicate freedom, ambition, and rising above challenges. Success is on the horizon.' },
    'falling': { symbol: '💫', meaning: 'Loss of Control', interpretation: 'Falling suggests anxiety or feeling out of control. Take time to ground yourself.' },
    'death': { symbol: '💀', meaning: 'Transformation', interpretation: 'Death in dreams rarely means literal death. It symbolizes endings and new beginnings.' },
    'money': { symbol: '💰', meaning: 'Wealth & Value', interpretation: 'Finding or receiving money indicates incoming prosperity and recognition of your worth.' },
    'house': { symbol: '🏠', meaning: 'Self & Security', interpretation: 'Houses represent your sense of self. A new house means new beginnings.' },
    'cat': { symbol: '🐱', meaning: 'Independence', interpretation: 'Cats symbolize independence, intuition, and feminine energy.' },
    'dog': { symbol: '🐕', meaning: 'Loyalty & Protection', interpretation: 'Dogs represent loyalty, protection, and faithful friendships.' }
};

// Fortune Messages
const fortuneMessages = [
    { emoji: '⭐', title: 'Excellent Day Ahead!', message: 'Today brings wonderful opportunities. Stay positive and embrace new experiences. Your hard work will be recognized.' },
    { emoji: '🌟', title: 'Good Fortune Awaits', message: 'A day of pleasant surprises. Be open to unexpected blessings. Your kindness will be rewarded.' },
    { emoji: '💫', title: 'Steady Progress', message: 'Consistent effort leads to success. Focus on your goals and trust the process. Small steps lead to big achievements.' },
    { emoji: '🌈', title: 'Colorful Possibilities', message: 'Creativity flows freely today. Express yourself and explore new ideas. Beauty surrounds you.' },
    { emoji: '✨', title: 'Magical Moments', message: 'Pay attention to synchronicities. The universe is sending you signs. Trust your intuition.' }
];

let userCredits = 3;

// Screen Navigation
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateCreditsDisplay() {
    document.getElementById('userCredits').textContent = userCredits;
}

// Tarot Functions
function drawTarotCards() {
    if (userCredits < 1) {
        alert('Not enough credits! You need 1 credit to draw tarot cards.');
        return;
    }

    userCredits--;
    updateCreditsDisplay();

    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    const drawn = shuffled.slice(0, 3);

    document.getElementById('card1Emoji').textContent = drawn[0].emoji;
    document.getElementById('card1Name').textContent = drawn[0].name;
    document.getElementById('card1Meaning').textContent = drawn[0].meaning;
    document.getElementById('card1Description').textContent = drawn[0].description;

    document.getElementById('card2Emoji').textContent = drawn[1].emoji;
    document.getElementById('card2Name').textContent = drawn[1].name;
    document.getElementById('card2Meaning').textContent = drawn[1].meaning;
    document.getElementById('card2Description').textContent = drawn[1].description;

    document.getElementById('card3Emoji').textContent = drawn[2].emoji;
    document.getElementById('card3Name').textContent = drawn[2].name;
    document.getElementById('card3Meaning').textContent = drawn[2].meaning;
    document.getElementById('card3Description').textContent = drawn[2].description;

    document.getElementById('tarotResult').classList.remove('hidden');
}

// Dream Analysis Functions
function analyzeDream() {
    const dreamText = document.getElementById('dreamInput').value.trim().toLowerCase();

    if (!dreamText) {
        alert('Please describe your dream first!');
        return;
    }

    if (userCredits < 1) {
        alert('Not enough credits! You need 1 credit for dream analysis.');
        return;
    }

    userCredits--;
    updateCreditsDisplay();

    // Find matching symbol
    let matchedSymbol = null;
    for (const [key, value] of Object.entries(dreamSymbols)) {
        if (dreamText.includes(key)) {
            matchedSymbol = value;
            break;
        }
    }

    // Default interpretation if no match
    if (!matchedSymbol) {
        matchedSymbol = {
            symbol: '🌟',
            meaning: 'Unique Dream',
            interpretation: 'Your dream is unique and personal. It reflects your subconscious thoughts and desires. Pay attention to the emotions you felt during the dream for deeper insight.'
        };
    }

    document.getElementById('dreamSymbol').textContent = matchedSymbol.symbol;
    document.getElementById('dreamMeaning').textContent = matchedSymbol.meaning;
    document.getElementById('dreamInterpretation').textContent = matchedSymbol.interpretation;
    document.getElementById('dreamResult').classList.remove('hidden');
}

// Compatibility Functions
function checkCompatibility() {
    const name1 = document.getElementById('name1Input').value.trim();
    const name2 = document.getElementById('name2Input').value.trim();

    if (!name1 || !name2) {
        alert('Please enter both names!');
        return;
    }

    if (userCredits < 1) {
        alert('Not enough credits! You need 1 credit for compatibility check.');
        return;
    }

    userCredits--;
    updateCreditsDisplay();

    // Calculate compatibility score (based on name lengths and characters)
    const score = ((name1.length + name2.length) * 7 + name1.charCodeAt(0) + name2.charCodeAt(0)) % 100;
    const finalScore = Math.max(60, score); // Ensure minimum 60%

    let description = '';
    if (finalScore >= 90) {
        description = '🎉 Perfect Match! You two are incredibly compatible. Your energies align beautifully, creating harmony and understanding.';
    } else if (finalScore >= 80) {
        description = '💖 Excellent Compatibility! You share strong connection and mutual understanding. Great potential for a lasting relationship.';
    } else if (finalScore >= 70) {
        description = '💕 Good Match! You complement each other well. With effort and communication, this relationship can flourish.';
    } else {
        description = '💫 Moderate Compatibility. Every relationship requires work. Focus on communication and understanding each other\'s differences.';
    }

    document.getElementById('compatScore').textContent = finalScore + '%';
    document.getElementById('compatDescription').textContent = description;
    document.getElementById('compatibilityResult').classList.remove('hidden');
}

// Daily Fortune Functions
function getDailyFortune() {
    const randomFortune = fortuneMessages[Math.floor(Math.random() * fortuneMessages.length)];
    const luckyNums = Array.from({ length: 3 }, () => Math.floor(Math.random() * 50) + 1).sort((a, b) => a - b);

    document.getElementById('fortuneEmoji').textContent = randomFortune.emoji;
    document.getElementById('fortuneTitle').textContent = randomFortune.title;
    document.getElementById('fortuneMessage').textContent = randomFortune.message;
    document.getElementById('luckyNumbers').textContent = luckyNums.join(', ');
    document.getElementById('todayResult').classList.remove('hidden');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', function () {
            const service = this.getAttribute('data-service');
            switch (service) {
                case 'tarot':
                    showScreen('tarotScreen');
                    break;
                case 'dream':
                    showScreen('dreamScreen');
                    break;
                case 'compatibility':
                    showScreen('compatibilityScreen');
                    break;
                case 'today':
                    showScreen('todayScreen');
                    break;
                case 'saju':
                    showScreen('sajuScreen');
                    break;
                case 'naming':
                    showScreen('namingScreen');
                    break;
            }
        });
    });
});

// Naming Center Functions
function generateNamePreview() {
    // Gather inputs
    const surname = document.getElementById('namingSurname').value.trim();
    const gender = document.getElementById('namingGender').value;
    const calendar = document.getElementById('namingCalendar').value;
    const hour = document.getElementById('namingHour').value || '12';
    const minute = document.getElementById('namingMinute').value || '00';

    if (!surname) {
        alert('Please enter a surname.');
        return;
    }
    if (!gender) {
        alert('Please select a gender.');
        return;
    }

    // Simplified placeholder birth date (year/month/day) – using 2000-01-01 for preview
    const birthDate = `${calendar === 'solar' ? '2000-01-01' : '2000-01-01'}`;
    const birthTime = `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;

    // Call naming data (assumes global namingData object from naming_data.js)
    const result = namingData.generateNames(surname, birthDate, birthTime, gender);

    // Update preview UI
    const previewSummary = document.getElementById('namingPreviewSummary');
    if (previewSummary) previewSummary.textContent = result.sajuSummary;
    const previewList = document.getElementById('namingPreviewList');
    if (previewList) {
        previewList.innerHTML = '';
        result.recommendations.slice(0, 2).forEach(rec => {
            const li = document.createElement('li');
            li.textContent = `${rec.fullName} (${rec.element}) – Score: ${rec.score}`;
            previewList.appendChild(li);
        });
    }
    const previewDiv = document.getElementById('namingPreview');
    if (previewDiv) previewDiv.classList.remove('hidden');
}

function generateNameFull() {
    const surname = document.getElementById('namingSurname').value.trim();
    const gender = document.getElementById('namingGender').value;
    const calendar = document.getElementById('namingCalendar').value;
    const hour = document.getElementById('namingHour').value || '12';
    const minute = document.getElementById('namingMinute').value || '00';

    if (!surname) {
        alert('Please enter a surname.');
        return;
    }
    if (!gender) {
        alert('Please select a gender.');
        return;
    }

    const birthDate = `${calendar === 'solar' ? '2000-01-01' : '2000-01-01'}`;
    const birthTime = `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;

    const result = namingData.generateNames(surname, birthDate, birthTime, gender);

    // Update full result UI
    const sajuDetail = document.getElementById('namingSajuDetail');
    if (sajuDetail) sajuDetail.textContent = `${result.sajuDetail.yearElement} / ${result.sajuDetail.monthElement} – Weak: ${result.sajuDetail.weakElement}`;
    const fullList = document.getElementById('namingFullList');
    if (fullList) {
        fullList.innerHTML = '';
        result.recommendations.forEach(rec => {
            const div = document.createElement('div');
            div.style = 'margin-bottom:1.5rem; padding:1rem; background: var(--card-bg); border-radius:12px; border:1px solid var(--border-glow);';
            div.innerHTML = `<strong>${rec.fullName}</strong> (${rec.element}) - Score: ${rec.score}<br/>Reason: ${rec.reason}`;
            fullList.appendChild(div);
        });
    }
    const resultDiv = document.getElementById('namingResult');
    if (resultDiv) resultDiv.classList.remove('hidden');
}

