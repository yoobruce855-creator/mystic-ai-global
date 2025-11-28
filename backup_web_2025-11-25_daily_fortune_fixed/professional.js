// ===== PROFESSIONAL MYSTIC AI - STABLE VERSION =====

// 1. TAROT DATA
const tarotCards = [
    { name: 'The Fool', emoji: '🃏', meaning: 'New Beginning', description: 'New beginnings, spontaneity, and a free spirit. Embrace new journeys with optimism.' },
    { name: 'The Magician', emoji: '🎩', meaning: 'Manifestation', description: 'You have all the tools needed to succeed. Channel your willpower and focus.' },
    { name: 'The High Priestess', emoji: '🌙', meaning: 'Intuition', description: 'Listen to your inner voice. Trust your instincts and spiritual wisdom.' },
    { name: 'The Empress', emoji: '👑', meaning: 'Abundance', description: 'Growth and prosperity await. Creativity flows freely in your life.' },
    { name: 'The Emperor', emoji: '⚜️', meaning: 'Authority', description: 'Take charge with confidence. Establish order and clear boundaries.' },
    { name: 'The Hierophant', emoji: '📿', meaning: 'Tradition', description: 'Seek guidance from mentors. Honor traditions while finding your path.' },
    { name: 'The Lovers', emoji: '💕', meaning: 'Love & Choices', description: 'Significant relationships or decisions await. Follow your heart wisely.' },
    { name: 'The Chariot', emoji: '🏇', meaning: 'Victory', description: 'You are in control and moving forward. Success is within reach.' },
    { name: 'Strength', emoji: '🦁', meaning: 'Inner Power', description: 'Face challenges with compassion. True strength comes from within.' },
    { name: 'The Hermit', emoji: '🕯️', meaning: 'Soul Searching', description: 'Take time for solitude and reflection. Seek wisdom from within.' },
    { name: 'Wheel of Fortune', emoji: '☸️', meaning: 'Change', description: 'Life is in constant motion. Good fortune may be coming your way.' },
    { name: 'Justice', emoji: '⚖️', meaning: 'Fairness', description: 'Seek balance and make fair decisions. Truth will prevail.' },
    { name: 'The Hanged Man', emoji: '🙃', meaning: 'New Perspective', description: 'Pause and see things differently. Surrender brings wisdom.' },
    { name: 'Death', emoji: '💀', meaning: 'Transformation', description: 'Something must end for new beginnings. Embrace profound change.' },
    { name: 'Temperance', emoji: '🍷', meaning: 'Balance', description: 'Find the middle path. Blend opposing forces harmoniously.' },
    { name: 'The Devil', emoji: '😈', meaning: 'Bondage', description: 'Examine what enslaves you. Break free from unhealthy attachments.' },
    { name: 'The Tower', emoji: '🗼', meaning: 'Sudden Change', description: 'Unexpected events shake foundations. Necessary change brings liberation.' },
    { name: 'The Star', emoji: '⭐', meaning: 'Hope', description: 'After darkness comes light. Your wishes may come true.' },
    { name: 'The Moon', emoji: '🌙', meaning: 'Illusion', description: 'Things may not be as they seem. Trust intuition but verify facts.' },
    { name: 'The Sun', emoji: '☀️', meaning: 'Success', description: 'Positivity radiates from you. Success and happiness are yours.' },
    { name: 'Judgement', emoji: '📯', meaning: 'Rebirth', description: 'Time of reckoning and reflection. Rise to higher consciousness.' },
    { name: 'The World', emoji: '🌍', meaning: 'Completion', description: 'You have achieved your goals. Celebrate your success and fulfillment.' }
];

// 2. FORTUNE MESSAGES
const fortuneMessages = [
    { emoji: '⭐', title: 'Exceptional Day', message: 'Extraordinary opportunities await. The universe aligns in your favor.', advice: 'Take bold action. Your confidence will attract success.' },
    { emoji: '🌟', title: 'Abundant Blessings', message: 'Pleasant surprises and positive energy fill your day.', advice: 'Express gratitude and share your good fortune.' },
    { emoji: '💫', title: 'Steady Progress', message: 'Consistent effort leads to meaningful progress today.', advice: 'Stay focused on goals. Celebrate small wins.' },
    { emoji: '🌈', title: 'Creative Inspiration', message: 'Your creativity peaks today. Innovative ideas flow freely.', advice: 'Express yourself creatively. Try something new.' },
    { emoji: '✨', title: 'Magical Synchronicities', message: 'Pay attention to signs. The universe communicates with you.', advice: 'Trust your intuition. Notice patterns and signs.' }
];

// 3. SAJU DATA
const sajuElements = {
    upper: ['Sky (Geon)', 'Lake (Tae)', 'Fire (Ri)', 'Thunder (Jin)', 'Wind (Son)', 'Water (Gam)', 'Mountain (Gan)', 'Earth (Gon)'],
    middle: ['Prosperity', 'Conflict', 'Harmony', 'Change', 'Stagnation', 'Growth'],
    lower: ['Foundation', 'People', 'Self']
};

const sajuInterpretations = {
    sky: { nature: 'Active, Creative, Strong', advice: 'Take initiative and lead.' },
    lake: { nature: 'Joyful, Expressive, Open', advice: 'Communicate and share with others.' },
    fire: { nature: 'Passionate, Clear, Visible', advice: 'Show your talents but avoid burnout.' },
    thunder: { nature: 'Arousing, Shocking, Moving', advice: 'Embrace sudden changes bravely.' },
    wind: { nature: 'Gentle, Penetrating, Flexible', advice: 'Adapt to circumstances smoothly.' },
    water: { nature: 'Deep, Dangerous, Flowing', advice: 'Be cautious and seek wisdom.' },
    mountain: { nature: 'Still, Stable, Resting', advice: 'Pause and consolidate your gains.' },
    earth: { nature: 'Receptive, Yielding, Supportive', advice: 'Support others and stay grounded.' }
};

// ===== CORE FUNCTIONS =====

let userCredits = 3;

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    updateCreditsDisplay();
    console.log("Mystic AI Professional Engine Loaded");
});

function updateCreditsDisplay() {
    const el = document.getElementById('userCredits');
    if (el) el.textContent = userCredits;
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const screen = document.getElementById(screenId);
    if (screen) {
        screen.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        console.error("Screen not found: " + screenId);
    }
}

function showLoading(arg) {
    const overlay = document.getElementById('loadingOverlay');
    const textElement = document.getElementById('loadingText');

    if (overlay) overlay.classList.add('active');

    // Case 1: Legacy callback usage (runs for 2.5s then executes callback)
    if (typeof arg === 'function') {
        const messages = [
            "Consulting the Stars...",
            "Reading Ancient Patterns...",
            "Aligning Cosmic Energies...",
            "Decoding Your Destiny...",
            "Whispering to the Spirits...",
            "Analyzing Celestial Maps..."
        ];

        if (textElement) textElement.textContent = messages[0];

        const interval = setInterval(() => {
            if (textElement) textElement.textContent = messages[Math.floor(Math.random() * messages.length)];
        }, 800);

        setTimeout(() => {
            clearInterval(interval);
            if (overlay) overlay.classList.remove('active');
            arg();
        }, 2500);
    }
    // Case 2: Message string usage (stays open until hideLoading is called)
    else if (typeof arg === 'string') {
        if (textElement) textElement.textContent = arg;
    }
    // Case 3: Default usage
    else {
        if (textElement) textElement.textContent = "Processing...";
    }
}

function hideLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) overlay.classList.remove('active');
}

// --- SERVICE FUNCTIONS ---

function drawTarotCards() {
    if (userCredits < 1) {
        alert('Not enough credits! You need 1 credit.');
        return;
    }

    showLoading(() => {
        userCredits--;
        updateCreditsDisplay();

        const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
        const drawn = shuffled.slice(0, 3);

        for (let i = 0; i < 3; i++) {
            const emojiEl = document.getElementById(`card${i + 1}Emoji`);
            const nameEl = document.getElementById(`card${i + 1}Name`);
            const meaningEl = document.getElementById(`card${i + 1}Meaning`);
            const descEl = document.getElementById(`card${i + 1}Description`);

            if (emojiEl) emojiEl.textContent = drawn[i].emoji;
            if (nameEl) nameEl.textContent = drawn[i].name;
            if (meaningEl) meaningEl.textContent = drawn[i].meaning;
            if (descEl) descEl.textContent = drawn[i].description;
        }

        const resultDiv = document.getElementById('tarotResult');
        if (resultDiv) {
            resultDiv.classList.remove('hidden');
            resultDiv.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

function generateSajuResult(year, month, day) {
    const upperIdx = (year % 8);
    const middleIdx = (month % 6);
    const lowerIdx = (day % 3);

    const hexagramCode = `${upperIdx + 1}${middleIdx + 1}${lowerIdx + 1}`;
    const upperName = sajuElements.upper[upperIdx];
    const upperKey = upperName.split(' ')[0].toLowerCase();
    const interp = sajuInterpretations[upperKey];

    const titles = [
        `The Destiny of ${upperName}`,
        `Hexagram ${hexagramCode}: ${upperName} over ${sajuElements.middle[middleIdx]}`,
        `The Path of ${interp.nature}`
    ];

    const totals = [
        `This year, the energy of the ${upperName} dominates your life. It is a time of ${interp.nature.toLowerCase()} energy. Combined with the influence of ${sajuElements.middle[middleIdx]}, you will experience significant shifts in your personal growth.`,
        `Like the ${upperName}, your fortune is vast and powerful. The ${sajuElements.middle[middleIdx]} aspect suggests that you must pay attention to your environment. ${interp.advice}`,
        `A year of ${sajuElements.middle[middleIdx]} defined by the ${upperName}. Your foundation in ${sajuElements.lower[lowerIdx]} will be tested, but the outcome looks promising if you remain true to yourself.`
    ];

    const monthlies = [
        `Spring brings new beginnings in ${sajuElements.lower[lowerIdx]}. Summer requires patience as the ${upperName} energy peaks. Autumn is the time for harvest, and Winter for reflection.`,
        `Early year is favorable for ${sajuElements.lower[lowerIdx]}. Mid-year might bring challenges related to ${sajuElements.middle[middleIdx]}. The end of the year promises stability.`,
        `Focus on ${sajuElements.lower[lowerIdx]} in the first half. The second half will be dominated by the ${upperName}'s influence, bringing ${interp.nature.toLowerCase()} outcomes.`
    ];

    return {
        title: titles[year % 3],
        hexagram: `Upper: ${upperName} | Middle: ${sajuElements.middle[middleIdx]} | Lower: ${sajuElements.lower[lowerIdx]}`,
        total: totals[(year + month) % 3],
        monthly: monthlies[(month + day) % 3],
        advice: `${interp.advice} Focus on improving your ${sajuElements.lower[lowerIdx]} to maximize good fortune.`
    };
}

function analyzeSaju() {
    const name = document.getElementById('sajuName').value.trim();
    const date = document.getElementById('sajuDate').value;

    if (!name || !date) {
        alert('Please enter your name and birth date!');
        return;
    }

    if (userCredits < 2) {
        alert('Not enough credits! You need 2 credits.');
        return;
    }

    showLoading(() => {
        userCredits -= 2;
        updateCreditsDisplay();

        const birthDate = new Date(date);
        const year = birthDate.getFullYear();
        const month = birthDate.getMonth() + 1;
        const day = birthDate.getDate();

        const result = generateSajuResult(year, month, day);

        document.getElementById('sajuTitle').textContent = result.title;
        document.getElementById('sajuHexagram').textContent = result.hexagram;
        document.getElementById('sajuTotal').textContent = result.total;
        document.getElementById('sajuMonthly').textContent = result.monthly;
        document.getElementById('sajuAdvice').textContent = result.advice;

        const resultDiv = document.getElementById('sajuResult');
        resultDiv.classList.remove('hidden');
        resultDiv.scrollIntoView({ behavior: 'smooth' });
    });
}

function analyzeDream() {
    const dreamText = document.getElementById('dreamInput').value.trim();
    if (!dreamText) {
        alert('Please describe your dream first!');
        return;
    }
    if (userCredits < 1) {
        alert('Not enough credits! You need 1 credit.');
        return;
    }

    if (typeof analyzeDreamWithDatabase !== 'function') {
        console.error("Dream database not loaded!");
        alert("System error: Dream database missing. Please refresh.");
        return;
    }

    showLoading(() => {
        userCredits--;
        updateCreditsDisplay();

        const result = analyzeDreamWithDatabase(dreamText);

        document.getElementById('dreamSymbol').textContent = result.symbol;
        document.getElementById('dreamMeaning').textContent = result.meaning;
        document.getElementById('dreamInterpretation').innerHTML = result.interpretation;
        document.getElementById('dreamAdvice').textContent = result.advice;

        const resultDiv = document.getElementById('dreamResult');
        resultDiv.classList.remove('hidden');
        resultDiv.scrollIntoView({ behavior: 'smooth' });
    });
}

function checkCompatibility() {
    const name1 = document.getElementById('person1Name').value.trim();
    const date1 = document.getElementById('person1Date').value;
    const name2 = document.getElementById('person2Name').value.trim();
    const date2 = document.getElementById('person2Date').value;
    const time1 = document.getElementById('person1Time').value || '12:00';
    const gender1 = document.getElementById('person1Gender').value;
    const time2 = document.getElementById('person2Time').value || '12:00';
    const gender2 = document.getElementById('person2Gender').value;

    if (!name1 || !date1 || !name2 || !date2) {
        alert('Please fill in all required fields!');
        return;
    }
    if (userCredits < 2) {
        alert('Not enough credits! You need 2 credits.');
        return;
    }

    showLoading(() => {
        userCredits -= 2;
        updateCreditsDisplay();

        const createHash = (str) => {
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                const char = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + char;
                hash = hash & hash;
            }
            return Math.abs(hash);
        };

        const person1Data = `${name1}|${date1}|${time1}|${gender1}`.toLowerCase();
        const person2Data = `${name2}|${date2}|${time2}|${gender2}`.toLowerCase();
        const combinedData = person1Data + person2Data;

        const hash1 = createHash(person1Data);
        const hash2 = createHash(person2Data);
        const combinedHash = createHash(combinedData);

        const birth1 = new Date(date1 + 'T' + time1);
        const birth2 = new Date(date2 + 'T' + time2);

        const getNameValue = (name) => {
            let value = 0;
            for (let i = 0; i < name.length; i++) {
                value += name.charCodeAt(i) * (i + 1);
            }
            return value;
        };

        const name1Value = getNameValue(name1.toLowerCase());
        const name2Value = getNameValue(name2.toLowerCase());
        const nameInteraction = (name1Value * name2Value) % 10000;

        const totalMinutes1 = birth1.getHours() * 60 + birth1.getMinutes();
        const totalMinutes2 = birth2.getHours() * 60 + birth2.getMinutes();
        const timeFactor = Math.abs(totalMinutes1 - totalMinutes2);

        const dayOfYear1 = Math.floor((birth1 - new Date(birth1.getFullYear(), 0, 0)) / 86400000);
        const dayOfYear2 = Math.floor((birth2 - new Date(birth2.getFullYear(), 0, 0)) / 86400000);
        const seasonalHarmony = 100 - Math.abs(dayOfYear1 - dayOfYear2) / 3.65;

        const genderBonus = (gender1 !== gender2) ? 8 : 5;

        const loveRaw = (hash1 % 40) + (hash2 % 40) + (nameInteraction % 30) + (birth1.getDate() + birth2.getDate()) / 2 + genderBonus;
        const loveScore = Math.min(100, Math.max(35, Math.round(loveRaw)));

        const commRaw = (combinedHash % 50) + (50 - timeFactor / 10) + ((12 - Math.abs(birth1.getMonth() - birth2.getMonth())) * 3) + (name1.length + name2.length);
        const commScore = Math.min(100, Math.max(30, Math.round(commRaw)));

        const yearSum = birth1.getFullYear() + birth2.getFullYear();
        const trustRaw = (yearSum % 45) + seasonalHarmony * 0.4 + ((365 - Math.abs(dayOfYear1 - dayOfYear2)) / 10) + (hash1 % 20);
        const trustScore = Math.min(100, Math.max(35, Math.round(trustRaw)));

        const baseOverall = (loveScore * 0.4) + (commScore * 0.3) + (trustScore * 0.3);
        const uniqueAdjustment = (combinedHash % 15) - 7;
        const overallScore = Math.min(100, Math.max(30, Math.round(baseOverall + uniqueAdjustment)));

        document.getElementById('compatScore').textContent = overallScore + '%';
        document.getElementById('loveScore').textContent = loveScore + '%';
        document.getElementById('commScore').textContent = commScore + '%';
        document.getElementById('trustScore').textContent = trustScore + '%';

        let description, advice;
        if (overallScore >= 85) {
            const strengths = ['deep emotional connection', 'natural understanding', 'shared values', 'complementary energies'];
            const strength = strengths[combinedHash % strengths.length];
            description = `${name1} and ${name2} share an exceptional ${strength}! Your compatibility score of ${overallScore}% indicates outstanding potential. The stars align beautifully for this relationship.`;
            advice = 'This rare connection deserves nurturing. Continue building on your strong foundation through open communication and mutual support.';
        } else if (overallScore >= 70) {
            const aspects = ['communication style', 'life goals', 'emotional wavelength', 'core values'];
            const aspect = aspects[combinedHash % aspects.length];
            description = `${name1} and ${name2} have strong compatibility (${overallScore}%), particularly in ${aspect}. While some challenges may arise, your solid foundation provides excellent potential.`;
            advice = 'Focus on your natural strengths as a couple. Address differences with patience and understanding.';
        } else if (overallScore >= 55) {
            const areas = ['mutual respect', 'shared interests', 'emotional support', 'life balance'];
            const area = areas[combinedHash % areas.length];
            description = `${name1} and ${name2} show moderate compatibility at ${overallScore}%. Success will come through ${area} and conscious effort.`;
            advice = 'Embrace differences as opportunities for growth. Communication and compromise are key.';
        } else {
            const challenges = ['different life rhythms', 'contrasting communication styles', 'varied priorities', 'distinct emotional needs'];
            const challenge = challenges[combinedHash % challenges.length];
            description = `${name1} and ${name2} have ${overallScore}% compatibility, indicating ${challenge}. This requires extra understanding and effort.`;
            advice = 'Success requires conscious effort and clear communication. Focus on building strong foundations through shared experiences.';
        }

        document.getElementById('compatDescription').textContent = description;
        document.getElementById('compatAdvice').textContent = advice;

        const resultDiv = document.getElementById('compatibilityResult');
        resultDiv.classList.remove('hidden');
        resultDiv.scrollIntoView({ behavior: 'smooth' });
    });
}

// ===== DAILY FORTUNE (TOJEONGBIGYEOL STYLE) =====

// Element data for daily fortune
const dailyElements = {
    wood: { name: '목(木)', color: '#2ecc71', trait: '성장, 창조', time: '새벽 (03:00-07:00)' },
    fire: { name: '화(火)', color: '#e74c3c', trait: '열정, 명예', time: '오전 (09:00-13:00)' },
    earth: { name: '토(土)', color: '#f39c12', trait: '안정, 신뢰', time: '오후 (13:00-17:00)' },
    metal: { name: '금(金)', color: '#ecf0f1', trait: '결단력, 정의', time: '저녁 (17:00-21:00)' },
    water: { name: '수(水)', color: '#3498db', trait: '지혜, 유연성', time: '밤 (21:00-01:00)' }
};

// Fortune messages by harmony type
const fortuneByHarmony = {
    generating: [  // 상생 (Your element generates today's element)
        { emoji: '⭐', title: '대길한 날', message: '오늘은 당신의 기운이 세상과 완벽하게 조화를 이룹니다. 하고자 하는 일이 순조롭게 풀릴 것입니다.', advice: '적극적으로 행동하세요. 새로운 시도를 하기에 최적의 날입니다.' },
        { emoji: '🌟', title: '행운의 날', message: '당신의 에너지가 우주의 흐름과 하나가 되는 날입니다. 중요한 결정을 내리기 좋습니다.', advice: '직감을 믿으세요. 오늘의 선택이 미래를 밝게 만들 것입니다.' }
    ],
    generated: [  // 상생 (Today's element generates your element)
        { emoji: '💫', title: '성장의 날', message: '오늘은 당신에게 에너지가 흘러들어오는 날입니다. 배움과 성장의 기회가 찾아옵니다.', advice: '새로운 것을 배우고 경험하세요. 오늘의 노력이 큰 결실을 맺을 것입니다.' },
        { emoji: '🌈', title: '발전의 날', message: '우주가 당신을 돕는 날입니다. 주변의 도움을 받아 한 단계 성장할 수 있습니다.', advice: '겸손하게 배우고 감사하세요. 좋은 인연이 당신을 이끌 것입니다.' }
    ],
    same: [  // 동일 (Same element)
        { emoji: '✨', title: '안정의 날', message: '오늘은 당신의 본질이 그대로 드러나는 날입니다. 자신감을 가지고 행동하세요.', advice: '자신의 강점을 발휘하세요. 평소의 스타일대로 하면 좋은 결과가 있을 것입니다.' },
        { emoji: '🌸', title: '조화의 날', message: '내면의 평화를 느낄 수 있는 날입니다. 자신을 돌아보고 정리하기 좋습니다.', advice: '명상이나 휴식을 취하세요. 내면의 소리에 귀 기울이는 시간을 가지세요.' }
    ],
    conquering: [  // 상극 (Your element conquers today's element)
        { emoji: '⚡', title: '도전의 날', message: '오늘은 당신의 의지가 시험받는 날입니다. 어려움이 있을 수 있지만 극복할 수 있습니다.', advice: '인내심을 가지세요. 작은 성공에도 감사하며 한 걸음씩 나아가세요.' },
        { emoji: '🔥', title: '극복의 날', message: '장애물이 있을 수 있지만 당신의 힘으로 이겨낼 수 있습니다. 포기하지 마세요.', advice: '긍정적인 마음가짐을 유지하세요. 어려움은 성장의 기회입니다.' }
    ],
    conquered: [  // 상극 (Today's element conquers your element)
        { emoji: '🌙', title: '신중의 날', message: '오늘은 조심스럽게 행동해야 하는 날입니다. 무리하지 말고 현상 유지에 집중하세요.', advice: '중요한 결정은 미루세요. 휴식을 취하고 에너지를 보존하는 것이 좋습니다.' },
        { emoji: '🍃', title: '준비의 날', message: '오늘은 앞으로 나아가기보다 내실을 다지는 날입니다. 계획을 세우고 준비하세요.', advice: '서두르지 마세요. 차분하게 준비하면 다음 기회에 큰 성과를 거둘 수 있습니다.' }
    ]
};

function calculateUserElement(birthDate) {
    const date = new Date(birthDate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    // Simplified Saju element calculation (based on year)
    const yearElements = ['metal', 'water', 'wood', 'fire', 'earth'];
    const yearElement = yearElements[year % 5];

    return yearElement;
}

function calculateTodayElement() {
    const today = new Date();
    const month = today.getMonth() + 1;

    // Month to element mapping
    const monthElements = {
        1: 'water', 2: 'water',  // Winter
        3: 'wood', 4: 'wood', 5: 'wood',  // Spring
        6: 'fire', 7: 'fire', 8: 'fire',  // Summer
        9: 'metal', 10: 'metal',  // Autumn
        11: 'earth', 12: 'earth'  // Transition
    };

    return monthElements[month];
}

function analyzeElementHarmony(userElement, todayElement) {
    const cycle = { wood: 'fire', fire: 'earth', earth: 'metal', metal: 'water', water: 'wood' };
    const conquer = { wood: 'earth', earth: 'water', water: 'fire', fire: 'metal', metal: 'wood' };

    if (userElement === todayElement) {
        return { type: 'same', name: '동일 (Same)' };
    } else if (cycle[userElement] === todayElement) {
        return { type: 'generating', name: '상생 (Generating)' };
    } else if (cycle[todayElement] === userElement) {
        return { type: 'generated', name: '상생 (Generated)' };
    } else if (conquer[userElement] === todayElement) {
        return { type: 'conquering', name: '상극 (Conquering)' };
    } else if (conquer[todayElement] === userElement) {
        return { type: 'conquered', name: '상극 (Conquered)' };
    }

    return { type: 'same', name: '중립 (Neutral)' };
}

function getDailyFortune() {
    const name = document.getElementById('todayName').value.trim();
    const birthDate = document.getElementById('todayBirthDate').value;

    if (!birthDate) {
        alert('Please enter your birth date!');
        return;
    }

    showLoading(() => {
        const today = new Date();
        const userElement = calculateUserElement(birthDate);
        const todayElement = calculateTodayElement();
        const harmony = analyzeElementHarmony(userElement, todayElement);

        // Get fortune message based on harmony
        const fortuneList = fortuneByHarmony[harmony.type] || fortuneByHarmony.same;
        const fortune = fortuneList[Math.floor(Math.random() * fortuneList.length)];

        // Calculate lucky numbers (based on birth date + today)
        const birthSeed = new Date(birthDate).getTime();
        const todaySeed = today.getDate() + today.getMonth() * 31;
        const combinedSeed = (birthSeed % 10000) + todaySeed;

        const luckyNums = [];
        for (let i = 0; i < 6; i++) {
            luckyNums.push(((combinedSeed * (i + 1) * 7) % 45) + 1);
        }

        // Display results
        document.getElementById('fortuneEmoji').textContent = fortune.emoji;
        document.getElementById('fortuneTitle').textContent = fortune.title;
        document.getElementById('fortuneDate').textContent = today.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
        document.getElementById('fortuneMessage').textContent = fortune.message;

        document.getElementById('userElement').textContent = dailyElements[userElement].name;
        document.getElementById('todayElement').textContent = dailyElements[todayElement].name;
        document.getElementById('harmonyType').textContent = harmony.name;

        document.getElementById('luckyNumbers').textContent = luckyNums.join(', ');

        document.getElementById('luckyColorBox').style.backgroundColor = dailyElements[userElement].color;
        document.getElementById('luckyColorName').textContent = dailyElements[userElement].name;

        document.getElementById('bestTime').textContent = dailyElements[userElement].time;
        document.getElementById('todayAdvice').textContent = fortune.advice;

        const resultDiv = document.getElementById('todayResult');
        resultDiv.classList.remove('hidden');
        resultDiv.scrollIntoView({ behavior: 'smooth' });
    });
}

function analyzeName() {
    const nameInput = document.getElementById('namingInput');
    const name = nameInput.value.trim();

    if (!name) {
        alert('Please enter a name to analyze!');
        return;
    }

    // Check for Hangul
    const hasHangul = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(name);
    if (!hasHangul) {
        alert('For accurate Seongmyeonghak analysis, please enter a Korean name (Hangul). English names will be analyzed using basic Numerology.');
    }

    if (userCredits < 1) {
        alert('Not enough credits! You need 1 credit.');
        return;
    }

    if (typeof analyzeNameLogic !== 'function') {
        console.error("Naming database not loaded!");
        alert("System error: Naming database missing. Please refresh.");
        return;
    }

    showLoading(() => {
        userCredits--;
        updateCreditsDisplay();

        const result = analyzeNameLogic(name);

        document.getElementById('nameScore').textContent = result.score;
        document.getElementById('nameSpiritTitle').textContent = result.spirit.title;
        document.getElementById('nameSpiritType').textContent = result.spirit.type;
        document.getElementById('nameSpiritType').className = result.spirit.type.includes('Gil') ? 'good-fortune' : 'bad-fortune';
        document.getElementById('nameSpiritDesc').textContent = result.spirit.desc;

        const flowContainer = document.getElementById('nameSoundFlow');
        flowContainer.innerHTML = '';
        result.soundFlow.forEach((elem, index) => {
            const span = document.createElement('span');
            span.className = `element-tag element-${elem.toLowerCase()}`;
            span.textContent = elem;
            flowContainer.appendChild(span);
            if (index < result.soundFlow.length - 1) {
                const arrow = document.createElement('span');
                arrow.textContent = ' → ';
                arrow.style.color = 'var(--text-secondary)';
                flowContainer.appendChild(arrow);
            }
        });

        document.getElementById('nameHarmonyDesc').textContent = result.harmonyDesc;

        const resultDiv = document.getElementById('namingResult');
        resultDiv.classList.remove('hidden');
        resultDiv.scrollIntoView({ behavior: 'smooth' });
    });

}

// ===== AI NAMING CENTER FUNCTIONS =====

// 무료 미리보기 (2개 이름)
function generateNamePreview() {
    const surname = document.getElementById('namingSurname').value.trim();
    const gender = document.getElementById('namingGender').value;
    const year = document.getElementById('namingYear').value;
    const month = document.getElementById('namingMonth').value;
    const day = document.getElementById('namingDay').value;
    const calendar = document.getElementById('namingCalendar').value;
    const hour = document.getElementById('namingHour').value || '12';
    const minute = document.getElementById('namingMinute').value || '0';

    // 입력 검증
    if (!surname || !gender || !year || !month || !day) {
        alert('모든 필수 항목을 입력해주세요!');
        return;
    }

    if (typeof NamingEngine === 'undefined') {
        alert('작명 엔진이 로드되지 않았습니다. 페이지를 새로고침해주세요.');
        console.error('NamingEngine is undefined');
        return;
    }

    showLoading('사주를 분석하고 최고의 이름을 찾는 중...');

    setTimeout(() => {
        try {
            const birthDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
            const birthTime = `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;

            // NamingEngine 사용
            const result = NamingEngine.generateNames(surname, birthDate, birthTime, gender);

            if (!result || !result.recommendations) {
                throw new Error("작명 결과를 생성하지 못했습니다.");
            }

            // 미리보기는 2개만
            const previewNames = result.recommendations.slice(0, 2);

            // 사주 분석 요약 표시
            const summaryEl = document.getElementById('namingPreviewSummary');
            if (summaryEl) summaryEl.textContent = result.sajuSummary;

            // 미리보기 이름 목록 생성
            const previewList = document.getElementById('namingPreviewList');
            if (previewList) {
                previewList.innerHTML = previewNames.map((name, index) => `
                    <div style="background: hsla(270, 70%, 30%, 0.3); padding: 2rem; border-radius: 15px; margin-bottom: 1.5rem; border-left: 4px solid var(--accent-gold);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                            <h3 style="color: var(--accent-gold); font-size: 1.8rem; margin: 0;">${name.fullName}</h3>
                            <span style="background: var(--accent-gold); color: var(--bg-dark); padding: 0.3rem 0.8rem; border-radius: 20px; font-weight: bold;">${name.score}점</span>
                        </div>
                        <p style="color: var(--text-secondary); font-size: 1.1rem; margin-bottom: 0.5rem;">한자: ${name.hanja}</p>
                        <p style="color: var(--text-primary); line-height: 1.6; margin-bottom: 1rem;">${name.meaning}</p>
                        <div style="background: rgba(0,0,0,0.2); padding: 1rem; border-radius: 10px;">
                            <p style="color: var(--primary-purple-light); margin: 0; font-size: 0.95rem;">🔒 전체 결과에서 상세 분석을 확인하세요</p>
                        </div>
                    </div>
                `).join('');
            }

            hideLoading();

            // 미리보기 결과 표시
            const previewScreen = document.getElementById('namingPreview');
            if (previewScreen) {
                previewScreen.classList.remove('hidden');
                previewScreen.scrollIntoView({ behavior: 'smooth' });
            }
        } catch (error) {
            hideLoading();
            console.error(error);
            alert('오류가 발생했습니다: ' + error.message);
        }
    }, 2000);
}

// 유료 전체 결과 (5개 이름)
function generateNameFull() {
    if (userCredits < 3) {
        alert('크레딧이 부족합니다! 3 크레딧이 필요합니다.');
        return;
    }

    showLoading('전체 이름 분석 중...');

    setTimeout(() => {
        try {
            const surname = document.getElementById('namingSurname').value.trim();
            const gender = document.getElementById('namingGender').value;
            const year = document.getElementById('namingYear').value;
            const month = document.getElementById('namingMonth').value;
            const day = document.getElementById('namingDay').value;
            const hour = document.getElementById('namingHour').value || '12';
            const minute = document.getElementById('namingMinute').value || '0';

            const birthDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
            const birthTime = `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;

            // NamingEngine 사용
            const result = NamingEngine.generateNames(surname, birthDate, birthTime, gender);

            if (!result || !result.recommendations) {
                throw new Error("작명 결과를 생성하지 못했습니다.");
            }

            // 사주 분석 상세 표시
            const summaryEl = document.getElementById('namingFullSummary');
            if (summaryEl) summaryEl.textContent = result.sajuSummary;

            // 사주 오행 상세 정보
            const sajuDetail = document.getElementById('namingSajuDetail');
            if (sajuDetail) {
                sajuDetail.innerHTML = `
                    <div style="background: hsla(120, 70%, 40%, 0.2); padding: 0.8rem 1.2rem; border-radius: 10px;">
                        <span style="color: var(--accent-green);">년주: ${result.sajuDetail.yearElement}</span>
                    </div>
                    <div style="background: hsla(0, 70%, 50%, 0.2); padding: 0.8rem 1.2rem; border-radius: 10px;">
                        <span style="color: var(--secondary-pink);">월주: ${result.sajuDetail.monthElement}</span>
                    </div>
                    <div style="background: hsla(45, 100%, 50%, 0.2); padding: 0.8rem 1.2rem; border-radius: 10px;">
                        <span style="color: var(--accent-gold);">보충: ${result.sajuDetail.weakElement}</span>
                    </div>
                `;
            }

            // 전체 이름 목록 (5개)
            const namingList = document.getElementById('namingFullList');
            if (namingList) {
                namingList.innerHTML = result.recommendations.map((name, index) => `
                    <div style="background: hsla(270, 70%, 30%, 0.3); padding: 2.5rem; border-radius: 15px; margin-bottom: 2rem; border-left: 4px solid var(--accent-gold);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                            <div>
                                <span style="background: var(--primary-purple); color: white; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.9rem; margin-right: 0.5rem;">추천 ${index + 1}</span>
                                <h3 style="color: var(--accent-gold); font-size: 2rem; margin: 0.5rem 0; display: inline-block;">${name.fullName}</h3>
                            </div>
                            <span style="background: var(--accent-gold); color: var(--bg-dark); padding: 0.5rem 1.2rem; border-radius: 20px; font-weight: bold; font-size: 1.2rem;">${name.score}점</span>
                        </div>
                        
                        <div style="margin-bottom: 1.5rem;">
                            <p style="color: var(--text-secondary); font-size: 1.2rem; margin-bottom: 0.5rem;">📝 한자: <span style="color: var(--text-primary); font-weight: 600;">${name.hanja}</span></p>
                            <p style="color: var(--text-secondary); font-size: 1.1rem;">💎 의미: <span style="color: var(--text-primary);">${name.meaning}</span></p>
                        </div>
                        
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
                            <div style="background: rgba(0,0,0,0.2); padding: 1rem; border-radius: 10px;">
                                <p style="color: var(--primary-purple-light); font-size: 0.9rem; margin-bottom: 0.3rem;">오행 기운</p>
                                <p style="color: var(--accent-gold); font-weight: 600; margin: 0;">${name.element}</p>
                                <p style="color: var(--text-secondary); font-size: 0.85rem; margin-top: 0.3rem;">${name.elementTrait}</p>
                            </div>
                            <div style="background: rgba(0,0,0,0.2); padding: 1rem; border-radius: 10px;">
                                <p style="color: var(--primary-purple-light); font-size: 0.9rem; margin-bottom: 0.3rem;">수리 길흉</p>
                                <p style="color: var(--accent-gold); font-weight: 600; margin: 0;">${name.numerology}</p>
                                <p style="color: var(--text-secondary); font-size: 0.85rem; margin-top: 0.3rem;">총 ${name.strokes}획</p>
                            </div>
                        </div>
                        
                        <div style="background: hsla(45, 100%, 60%, 0.1); padding: 1.5rem; border-radius: 10px; border-left: 3px solid var(--accent-gold);">
                            <h4 style="color: var(--accent-gold); margin-bottom: 0.8rem; display: flex; align-items: center; gap: 0.5rem;">
                                <span>💡</span> 추천 이유
                            </h4>
                            <p style="color: var(--text-primary); line-height: 1.8; margin: 0;">${name.reason}</p>
                            <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 0.8rem; font-style: italic;">"${name.numerologyMeaning}"</p>
                        </div>
                    </div>
                `).join('');
            }

            // 크레딧 차감
            userCredits -= 3;
            updateCreditsDisplay();

            hideLoading();

            // 미리보기 숨기고 전체 결과 표시
            const previewScreen = document.getElementById('namingPreview');
            if (previewScreen) previewScreen.classList.add('hidden');

            const resultScreen = document.getElementById('namingResult');
            if (resultScreen) {
                resultScreen.classList.remove('hidden');
                resultScreen.scrollIntoView({ behavior: 'smooth' });
            }
        } catch (error) {
            hideLoading();
            console.error(error);
            alert('오류가 발생했습니다: ' + error.message);
        }
    }, 2500);
}
