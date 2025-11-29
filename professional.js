// ===== PROFESSIONAL MYSTIC AI - STABLE VERSION =====

// 1. TAROT DATA
const tarotCards = [
    { name: 'The Fool', emoji: '🃏', meaning: 'New Beginning', description: 'New beginnings, spontaneity, free spirit. Start your new journey with optimism.' },
    { name: 'The Magician', emoji: '🎩', meaning: 'Manifestation', description: 'You have all the tools needed for success. Use your willpower and focus.' },
    { name: 'The High Priestess', emoji: '🌙', meaning: 'Intuition', description: 'Listen to your inner voice. Trust your instincts and spiritual wisdom.' },
    { name: 'The Empress', emoji: '👑', meaning: 'Abundance', description: 'Growth and prosperity await. Creativity flows freely.' },
    { name: 'The Emperor', emoji: '⚜️', meaning: 'Authority', description: 'Take charge with confidence. Establish order and clear boundaries.' },
    { name: 'The Hierophant', emoji: '📿', meaning: 'Tradition', description: 'Seek guidance from mentors. Honor tradition while finding your path.' },
    { name: 'The Lovers', emoji: '💕', meaning: 'Love & Choice', description: 'Important relationships or decisions await. Follow your heart wisely.' },
    { name: 'The Chariot', emoji: '🏇', meaning: 'Victory', description: 'You are moving forward with control. Success is near.' },
    { name: 'Strength', emoji: '🦁', meaning: 'Inner Power', description: 'Face challenges with compassion. True strength comes from within.' },
    { name: 'The Hermit', emoji: '🕯️', meaning: 'Soul Searching', description: 'Take time for solitude and reflection. Seek wisdom within.' },
    { name: 'Wheel of Fortune', emoji: '☸️', meaning: 'Change', description: 'Life is constantly moving. Good fortune may be coming.' },
    { name: 'Justice', emoji: '⚖️', meaning: 'Fairness', description: 'Find balance and make fair decisions. Truth will prevail.' },
    { name: 'The Hanged Man', emoji: '🙃', meaning: 'New Perspective', description: 'Pause and see things differently. Surrender brings wisdom.' },
    { name: 'Death', emoji: '💀', meaning: 'Transformation', description: 'Something must end for new beginnings. Embrace profound change.' },
    { name: 'Temperance', emoji: '🍷', meaning: 'Balance', description: 'Find the middle path. Harmoniously blend opposing forces.' },
    { name: 'The Devil', emoji: '😈', meaning: 'Bondage', description: 'Examine what enslaves you. Break free from unhealthy attachments.' },
    { name: 'The Tower', emoji: '🗼', meaning: 'Sudden Change', description: 'Unexpected events shake foundations. Necessary change brings liberation.' },
    { name: 'The Star', emoji: '⭐', meaning: 'Hope', description: 'Light comes after darkness. Your wishes may come true.' },
    { name: 'The Moon', emoji: '🌙', meaning: 'Illusion', description: 'Not everything is as it seems. Trust intuition but verify facts.' },
    { name: 'The Sun', emoji: '☀️', meaning: 'Success', description: 'Positive energy shines. Success and happiness are yours.' },
    { name: 'Judgement', emoji: '📯', meaning: 'Rebirth', description: 'Time for judgement and reflection. Rise to higher consciousness.' },
    { name: 'The World', emoji: '🌍', meaning: 'Completion', description: 'You have achieved your goals. Celebrate success and fulfillment.' }
];

// 2. FORTUNE MESSAGES
const fortuneMessages = [
    { emoji: '⭐', title: '최고의 날', message: '특별한 기회가 기다립니다. 우주가 당신 편입니다.', advice: '과감하게 행동하세요. 자신감이 성공을 끌어당깁니다.' },
    { emoji: '🌟', title: '풍성한 축복', message: '즐거운 놀라움과 긍정적인 에너지가 가득한 하루입니다.', advice: '감사를 표현하고 행운을 나누세요.' },
    { emoji: '💫', title: '꾸준한 진전', message: '일관된 노력이 오늘 의미 있는 진전으로 이어집니다.', advice: '목표에 집중하세요. 작은 성취를 축하하세요.' },
    { emoji: '🌈', title: '창의적 영감', message: '오늘 창의력이 최고조에 달합니다. 혁신적인 아이디어가 자유롭게 흐릅니다.', advice: '창의적으로 표현하세요. 새로운 것을 시도하세요.' },
    { emoji: '✨', title: '마법 같은 우연', message: '신호에 주의를 기울이세요. 우주가 당신과 소통합니다.', advice: '직관을 믿으세요. 패턴과 신호를 알아차리세요.' }
];

// 3. SAJU DATA
const sajuElements = {
    upper: ['천(건)', '호수(태)', '불(리)', '우뢰(진)', '바람(손)', '물(감)', '산(간)', '때(곤)'],
    middle: ['번영', '갈등', '조화', '변화', '정체', '성장'],
    lower: ['기반', '사람', '자신']
};

const sajuInterpretations = {
    '천': { nature: '적극적, 창조적, 강함', advice: '주도권을 잡고 이끌어가세요.' },
    '호수': { nature: '기쁨, 표현력, 개방성', advice: '소통하고 다른 사람과 나누세요.' },
    '불': { nature: '열정적, 명확함, 가시성', advice: '재능을 보여주되 과로를 피하세요.' },
    '우뢰': { nature: '각성, 충격, 움직임', advice: '갑작스러운 변화를 용감하게 받아들이세요.' },
    '바람': { nature: '부드러움, 침투력, 유연성', advice: '상황에 원활하게 적응하세요.' },
    '물': { nature: '깊음, 위험, 흘름', advice: '조심하고 지혜를 구하세요.' },
    '산': { nature: '고요함, 안정, 휴식', advice: '멈춰서 얻은 것을 공고히 하세요.' },
    '때': { nature: '수용적, 순응, 지지', advice: '다른 사람을 지지하고 현실적으로 생각하세요.' }
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

    // 한글 키 매핑
    const upperKey = upperName.split('(')[0];
    const interp = sajuInterpretations[upperKey];

    const titles = [
        `${upperName}의 운명`,
        `괘상 ${hexagramCode}: ${upperName}와 ${sajuElements.middle[middleIdx]}`,
        `${interp.nature}의 길`
    ];

    const totals = [
        `올해는 ${upperName}의 기운이 당신의 삶을 지배합니다. ${interp.nature}의 에너지가 흐르는 시기입니다. ${sajuElements.middle[middleIdx]}의 영향과 결합하여 개인적 성장에 큰 변화를 경험할 것입니다.`,
        `${upperName}처럼 당신의 운은 광대하고 강력합니다. ${sajuElements.middle[middleIdx]}의 측면은 주변 환경에 주의를 기울여야 함을 시사합니다. ${interp.advice}`,
        `${upperName}으로 정의되는 ${sajuElements.middle[middleIdx]}의 해입니다. ${sajuElements.lower[lowerIdx]}에 대한 기반이 시험받겠지만, 자신에게 충실하면 결과는 긍정적일 것입니다.`
    ];

    const monthlies = [
        `봄은 ${sajuElements.lower[lowerIdx]}에서 새로운 시작을 가져옵니다. 여름은 ${upperName}의 에너지가 정점에 달하므로 인내가 필요합니다. 가을은 수확의 시기이고 겨울은 성찰의 시기입니다.`,
        `연초는 ${sajuElements.lower[lowerIdx]}에 유리합니다. 연중에는 ${sajuElements.middle[middleIdx]}와 관련된 도전이 있을 수 있습니다. 연말은 안정을 약속합니다.`,
        `상반기에는 ${sajuElements.lower[lowerIdx]}에 집중하세요. 하반기는 ${upperName}의 영향이 지배적이며 ${interp.nature}의 결과를 가져올 것입니다.`
    ];

    return {
        title: titles[year % 3],
        hexagram: `상: ${upperName} | 중: ${sajuElements.middle[middleIdx]} | 하: ${sajuElements.lower[lowerIdx]}`,
        total: totals[(year + month) % 3],
        monthly: monthlies[(month + day) % 3],
        advice: `${interp.advice} ${sajuElements.lower[lowerIdx]}를 개선하는 데 집중하여 행운을 극대화하세요.`
    };
}

function analyzeSaju() {
    const name = document.getElementById('sajuName').value.trim();
    const date = document.getElementById('sajuDate').value;

    if (!name || !date) {
        alert('이름과 생년월일을 입력해주세요!');
        return;
    }

    if (userCredits < 2) {
        alert('크레딧이 부족합니다! 2 크레딧이 필요합니다.');
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
        alert('모든 필수 항목을 입력해주세요!');
        return;
    }
    if (userCredits < 2) {
        alert('크레딧이 부족합니다! 2 크레딧이 필요합니다.');
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
            const strengths = ['깊은 감정적 유대', '자연스러운 이해', '공유된 가치관', '상호 보완적인 에너지'];
            const strength = strengths[combinedHash % strengths.length];
            description = `${name1}님과 ${name2}님은 뛰어난 ${strength}를 공유합니다! ${overallScore}%의 궁합도는 탁월한 잠재력을 나타냅니다. 별들이 이 관계를 아름답게 정렬시킵니다.`;
            advice = '이 귀한 인연을 소중히 가꾸세요. 열린 소통과 상호 지지를 통해 강한 기반을 계속 쌓아가세요.';
        } else if (overallScore >= 70) {
            const aspects = ['소통 방식', '인생 목표', '감정적 파장', '핵심 가치관'];
            const aspect = aspects[combinedHash % aspects.length];
            description = `${name1}님과 ${name2}님은 강한 궁합(${overallScore}%)을 가지고 있으며, 특히 ${aspect}에서 두드러집니다. 일부 어려움이 있을 수 있지만, 탄탄한 기반이 훌륭한 잠재력을 제공합니다.`;
            advice = '커플로서의 자연스러운 강점에 집중하세요. 차이점은 인내와 이해로 해결하세요.';
        } else if (overallScore >= 55) {
            const areas = ['상호 존중', '공유된 관심사', '감정적 지지', '삶의 균형'];
            const area = areas[combinedHash % areas.length];
            description = `${name1}님과 ${name2}님은 ${overallScore}%의 적당한 궁합을 보입니다. ${area}와 의식적인 노력을 통해 성공할 수 있습니다.`;
            advice = '차이를 성장의 기회로 받아들이세요. 소통과 타협이 핵심입니다.';
        } else {
            const challenges = ['다른 생활 리듬', '대조적인 소통 방식', '다양한 우선순위', '뚜렷한 감정적 욕구'];
            const challenge = challenges[combinedHash % challenges.length];
            description = `${name1}님과 ${name2}님은 ${overallScore}%의 궁합을 가지고 있으며, ${challenge}를 나타냅니다. 이는 추가적인 이해와 노력이 필요합니다.`;
            advice = '성공을 위해서는 의식적인 노력과 명확한 소통이 필요합니다. 공유된 경험을 통해 강한 기반을 구축하는 데 집중하세요.';
        }

        document.getElementById('compatDescription').textContent = description;
        document.getElementById('compatAdvice').textContent = advice;

        const resultDiv = document.getElementById('compatibilityResult');
        resultDiv.classList.remove('hidden');
        resultDiv.scrollIntoView({ behavior: 'smooth' });
    });
}

function getDailyFortune() {
    const birthDate = document.getElementById('todayBirthDate').value;
    const name = document.getElementById('todayName').value;

    if (!birthDate) {
        alert('생년월일을 입력해주세요.');
        return;
    }

    showLoading('운세를 계산하는 중...');

    setTimeout(() => {
        const today = new Date();
        const birth = new Date(birthDate);
        const seed = today.getDate() + today.getMonth() * 31;
        const birthSeed = birth.getDate() + birth.getMonth() * 31 + birth.getFullYear();

        const fortuneIndex = seed % fortuneMessages.length;
        const fortune = fortuneMessages[fortuneIndex];

        // 행운의 숫자 생성
        const luckyNums = [];
        for (let i = 0; i < 6; i++) {
            luckyNums.push(((seed * (i + 1) * 7) % 45) + 1);
        }

        // 오행 계산
        const elements = ['목(木)', '화(火)', '토(土)', '금(金)', '수(水)'];
        const elementTraits = ['성장, 창조', '열정, 명예', '안정, 신뢰', '결단력, 정의', '지혜, 유연성'];
        const userElementIndex = birthSeed % 5;
        const todayElementIndex = seed % 5;

        // 조화 계산
        const harmonyTypes = ['상생(相生)', '상극(相剋)', '비화(比和)'];
        let harmonyIndex = 2; // 기본값: 비화
        if ((userElementIndex + 1) % 5 === todayElementIndex) {
            harmonyIndex = 0; // 상생
        } else if ((userElementIndex + 2) % 5 === todayElementIndex) {
            harmonyIndex = 1; // 상극
        }

        // 행운의 색
        const colors = [
            { name: '초록색', hex: '#2ecc71' },
            { name: '빨간색', hex: '#e74c3c' },
            { name: '노란색', hex: '#f39c12' },
            { name: '흰색', hex: '#ecf0f1' },
            { name: '파란색', hex: '#3498db' }
        ];
        const luckyColor = colors[todayElementIndex];

        // 최고의 시간
        const times = ['오전 6-8시 (묘시)', '오전 9-11시 (사시)', '정오 12-2시 (오시)', '오후 3-5시 (신시)', '오후 6-8시 (유시)'];
        const bestTime = times[(seed + birthSeed) % 5];

        // 결과 표시
        document.getElementById('fortuneEmoji').textContent = fortune.emoji;
        document.getElementById('fortuneTitle').textContent = name ? `${name}님의 오늘의 운세` : '오늘의 운세';
        document.getElementById('fortuneDate').textContent = today.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
        document.getElementById('fortuneMessage').textContent = fortune.message;
        document.getElementById('luckyNumbers').textContent = luckyNums.join(', ');
        document.getElementById('todayAdvice').textContent = fortune.advice;

        // 오행 정보
        document.getElementById('userElement').textContent = `${elements[userElementIndex]} - ${elementTraits[userElementIndex]}`;
        document.getElementById('todayElement').textContent = `${elements[todayElementIndex]} - ${elementTraits[todayElementIndex]}`;
        document.getElementById('harmonyType').textContent = harmonyTypes[harmonyIndex];

        // 행운의 색
        document.getElementById('luckyColorBox').style.backgroundColor = luckyColor.hex;
        document.getElementById('luckyColorName').textContent = luckyColor.name;

        // 최고의 시간
        document.getElementById('bestTime').textContent = bestTime;

        hideLoading();

        const resultDiv = document.getElementById('todayResult');
        resultDiv.classList.remove('hidden');
        resultDiv.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
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

// ===== PAYMENT SYSTEM =====

let selectedPlan = null;

function openPaymentModal() {
    const modal = document.getElementById('paymentModal');
    if (modal) {
        modal.style.display = 'block';
        // Reset selection
        document.querySelectorAll('.price-card').forEach(c => {
            c.style.borderColor = 'rgba(255,255,255,0.1)';
            c.style.background = 'rgba(255,255,255,0.05)';
        });
        const popular = document.querySelector('.price-card.popular');
        if (popular) {
            popular.style.background = 'linear-gradient(135deg, var(--primary-purple), var(--secondary-pink))';
        }
        const paymentMethods = document.getElementById('paymentMethods');
        if (paymentMethods) {
            paymentMethods.classList.add('hidden');
        }
        selectedPlan = null;
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

function selectPlan(plan) {
    selectedPlan = plan;

    // Update UI
    document.querySelectorAll('.price-card').forEach(card => {
        if (card.dataset.plan === plan) {
            card.style.borderColor = 'var(--accent-gold)';
            card.style.background = 'rgba(255, 215, 0, 0.1)';
        } else {
            card.style.borderColor = 'rgba(255,255,255,0.1)';
            if (!card.classList.contains('popular')) {
                card.style.background = 'var(--card-bg)';
            }
        }
    });

    // Show payment methods
    const paymentMethods = document.getElementById('paymentMethods');
    if (paymentMethods) {
        paymentMethods.classList.remove('hidden');
    }
}

function processPayment(method) {
    if (!selectedPlan) {
        alert('Please select a plan first');
        return;
    }

    let creditsToAdd = 0;
    let amount = 0;

    switch (selectedPlan) {
        case 'starter': creditsToAdd = 10; amount = 1.99; break;
        case 'popular': creditsToAdd = 50; amount = 4.99; break;
        case 'premium': creditsToAdd = 120; amount = 9.99; break;
    }

    // Prepare payment data
    const paymentData = {
        plan: selectedPlan,
        credits: creditsToAdd,
        amount: amount,
        method: method
    };

    // Save to localStorage for return handling
    localStorage.setItem('pendingPayment', JSON.stringify(paymentData));

    if (method === 'stripe') {
        // Redirect to Stripe Checkout
        // TODO: Replace with your actual Stripe payment links
        const stripeUrls = {
            'starter': 'https://buy.stripe.com/test_starter_link',
            'popular': 'https://buy.stripe.com/test_popular_link',
            'premium': 'https://buy.stripe.com/test_premium_link'
        };

        // Show confirmation before redirect
        if (confirm(`Stripe 결제 페이지로 이동합니다.\n\n플랜: ${selectedPlan}\n금액: $${amount}\n크레딧: ${creditsToAdd}\n\n계속하시겠습니까?`)) {
            // Redirect to payment page
            window.location.href = stripeUrls[selectedPlan];
        }

    } else if (method === 'paypal') {
        // Redirect to PayPal
        // TODO: Replace with your actual PayPal payment links
        const paypalUrls = {
            'starter': 'https://www.paypal.com/paypalme/yourlink/1.99',
            'popular': 'https://www.paypal.com/paypalme/yourlink/4.99',
            'premium': 'https://www.paypal.com/paypalme/yourlink/9.99'
        };

        // Show confirmation before redirect
        if (confirm(`PayPal 결제 페이지로 이동합니다.\n\n플랜: ${selectedPlan}\n금액: $${amount}\n크레딧: ${creditsToAdd}\n\n계속하시겠습니까?`)) {
            // Redirect to payment page
            window.location.href = paypalUrls[selectedPlan];
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const upgradeBtn = document.querySelector('.upgrade-btn');
    if (upgradeBtn) {
        upgradeBtn.onclick = openPaymentModal;
    }

    // Load saved credits
    const savedCredits = localStorage.getItem('mysticUserCredits');
    if (savedCredits) {
        userCredits = parseInt(savedCredits);
        updateCreditsDisplay();
    }
});

// ===== DAILY FORTUNE =====

function getDailyFortune() {
    const name = document.getElementById('todayName').value.trim();
    const birthDate = document.getElementById('todayBirthDate').value;
    const gender = document.getElementById('todayGender').value;

    if (!birthDate) {
        alert('Please enter your birth date');
        return;
    }

    showLoading('Calculating your fortune...');

    setTimeout(() => {
        const birth = new Date(birthDate);
        const today = new Date();

        // Calculate elements
        const elements = ['목(木) 🌳', '화(火) 🔥', '토(土) 🌍', '금(金) ⚙️', '수(水) 💧'];
        const userElement = elements[birth.getMonth() % 5];
        const todayElement = elements[today.getMonth() % 5];

        // Calculate harmony
        const harmony = (birth.getMonth() + today.getMonth()) % 3;
        const harmonyTypes = ['최고 ⭐⭐⭐', '좋음 ⭐⭐', '보통 ⭐'];

        // Lucky numbers
        const luckyNums = [];
        for (let i = 0; i < 5; i++) {
            luckyNums.push(((birth.getDate() + today.getDate() + i * 7) % 45) + 1);
        }

        // Lucky color
        const colors = [
            { name: '황금색', hex: '#FFD700' },
            { name: '로열 퍼플', hex: '#9B59B6' },
            { name: '에메랄드 그린', hex: '#2ECC71' },
            { name: '스카이 블루', hex: '#3498DB' },
            { name: '루비 레드', hex: '#E74C3C' }
        ];
        const luckyColor = colors[today.getDay()];

        // Best time
        const times = ['오전 (6-9시)', '정오 (11시-2시)', '오후 (2-5시)', '저녁 (6-9시)', '밤 (9시-12시)'];
        const bestTime = times[today.getDay() % 5];

        // Fortune message
        const fortune = fortuneMessages[today.getDate() % fortuneMessages.length];

        // Update UI
        document.getElementById('fortuneEmoji').textContent = fortune.emoji;
        document.getElementById('fortuneTitle').textContent = fortune.title;
        document.getElementById('fortuneDate').textContent = today.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        document.getElementById('fortuneMessage').textContent = fortune.message;
        document.getElementById('userElement').textContent = userElement;
        document.getElementById('todayElement').textContent = todayElement;
        document.getElementById('harmonyType').textContent = harmonyTypes[harmony];
        document.getElementById('luckyNumbers').textContent = luckyNums.join('  •  ');
        document.getElementById('luckyColorBox').style.background = luckyColor.hex;
        document.getElementById('luckyColorName').textContent = luckyColor.name;
        document.getElementById('bestTime').textContent = bestTime;
        document.getElementById('todayAdvice').textContent = fortune.advice;

        hideLoading();

        document.getElementById('todayResult').classList.remove('hidden');
        document.getElementById('todayResult').scrollIntoView({ behavior: 'smooth' });
    }, 2000);
}
