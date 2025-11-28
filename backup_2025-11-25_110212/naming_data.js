// ===== PROFESSIONAL NAMING ANALYSIS DATA (SEONGMYEONGHAK) =====

// 1. HANGUL CONSONANT ELEMENTS (Sound Elements - Bal-eum O-haeng)
// Based on Hunminjeongeum Haerye (Original) vs. Unhae (Modern usage varies, usually M/B/P is Water or Earth)
// We will use the most common modern standard for naming:
// Wood (Mok): ㄱ, ㅋ
// Fire (Hwa): ㄴ, ㄷ, ㄹ, ㅌ
// Earth (To): ㅇ, ㅎ
// Metal (Geum): ㅅ, ㅈ, ㅊ
// Water (Su): ㅁ, ㅂ, ㅍ
// Note: Some schools swap Earth and Water mappings. We use the standard:
// ㄱ/ㅋ=Wood, ㄴ/ㄷ/ㄹ/ㅌ=Fire, ㅇ/ㅎ=Earth, ㅅ/ㅈ/ㅊ=Metal, ㅁ/ㅂ/ㅍ=Water

const soundElements = {
    'ㄱ': 'Wood', 'ㅋ': 'Wood', 'ㄲ': 'Wood',
    'ㄴ': 'Fire', 'ㄷ': 'Fire', 'ㄹ': 'Fire', 'ㅌ': 'Fire', 'ㄸ': 'Fire',
    'ㅇ': 'Earth', 'ㅎ': 'Earth',
    'ㅅ': 'Metal', 'ㅈ': 'Metal', 'ㅊ': 'Metal', 'ㅆ': 'Metal', 'ㅉ': 'Metal',
    'ㅁ': 'Water', 'ㅂ': 'Water', 'ㅍ': 'Water', 'ㅃ': 'Water'
};

const elementRelations = {
    'Wood': { generate: 'Fire', conquer: 'Earth' },
    'Fire': { generate: 'Earth', conquer: 'Metal' },
    'Earth': { generate: 'Metal', conquer: 'Water' },
    'Metal': { generate: 'Water', conquer: 'Wood' },
    'Water': { generate: 'Wood', conquer: 'Fire' }
};

// 2. 81 SPIRIT NUMBERS (Suri Seongmyeonghak)
// Interpretations for stroke counts 1-81
const spiritNumbers = {
    1: { type: 'Gil (Auspicous)', title: 'Beginning of Growth', desc: 'Symbolizes the start of all things. Great potential for success and prosperity.' },
    2: { type: 'Hyung (Inauspicious)', title: 'Separation & Solitude', desc: 'Suggests instability and separation. Requires great effort to overcome challenges.' },
    3: { type: 'Gil', title: 'Formation of Auspiciousness', desc: 'Talent and intellect lead to success. A leader\'s number.' },
    4: { type: 'Hyung', title: 'Failure & Destruction', desc: 'Indicates difficulties and setbacks. Needs caution and perseverance.' },
    5: { type: 'Gil', title: 'Success & Prosperity', desc: 'Good fortune, health, and longevity. A very lucky number.' },
    6: { type: 'Gil', title: 'Peace & Blessings', desc: 'Inherited luck and peaceful life. Success comes naturally.' },
    7: { type: 'Gil', title: 'Independence & Authority', desc: 'Strong will and determination lead to overcoming obstacles.' },
    8: { type: 'Gil', title: 'Perseverance & Success', desc: 'Success through hard work and endurance. Late bloomer.' },
    9: { type: 'Hyung', title: 'Great Disaster', desc: 'Symbolizes emptiness and poverty. Needs spiritual grounding.' },
    10: { type: 'Hyung', title: 'Void & Darkness', desc: 'Like the setting sun, energy is fading. Health caution needed.' },
    11: { type: 'Gil', title: 'Renewal & Prosperity', desc: 'Rising from the ashes. Great success after rebuilding.' },
    12: { type: 'Hyung', title: 'Weakness & Failure', desc: 'Lack of power and influence. Often feels helpless.' },
    13: { type: 'Gil', title: 'Wisdom & Talent', desc: 'Exceptional intelligence and creativity. Success in arts or academics.' },
    14: { type: 'Hyung', title: 'Separation & Loss', desc: 'Family troubles and financial loss. Needs careful planning.' },
    15: { type: 'Gil', title: 'Leadership & Virtue', desc: 'Respected by others. A natural leader with good fortune.' },
    16: { type: 'Gil', title: 'Virtue & Honor', desc: 'Gains fame and respect through benevolent actions.' },
    17: { type: 'Gil', title: 'Authority & Will', desc: 'Strong character leads to breakthrough success.' },
    18: { type: 'Gil', title: 'Development & Success', desc: 'Progressive and active. Success through enterprise.' },
    19: { type: 'Hyung', title: 'Disaster & Injury', desc: 'Unexpected accidents or failures. High intelligence but bad luck.' },
    20: { type: 'Hyung', title: 'Decay & Empty', desc: 'Things fall apart despite effort. Health issues likely.' },
    21: { type: 'Gil', title: 'Leadership & Independence', desc: 'A great leader like the head of a dragon. High status.' },
    22: { type: 'Hyung', title: 'Solitude & Weakness', desc: 'Talented but lacks opportunity. Often lonely.' },
    23: { type: 'Gil', title: 'Rising Sun', desc: 'Rapid rise to power and fame. Great energy and vitality.' },
    24: { type: 'Gil', title: 'Abundance & Wealth', desc: 'Accumulates great wealth starting from nothing. Financial success.' },
    25: { type: 'Gil', title: 'Stability & Wisdom', desc: 'Safe and sound. Success through prudent management.' },
    26: { type: 'Half-Gil', title: 'Heroic but Turbulent', desc: 'Great ability but life is full of ups and downs.' },
    27: { type: 'Half-Gil', title: 'Conflict & Ego', desc: 'Strong ego leads to friction. Success depends on humility.' },
    28: { type: 'Hyung', title: 'Disaster & Distress', desc: 'Like a boat in a storm. Constant struggle.' },
    29: { type: 'Gil', title: 'Success & Ambition', desc: 'Achieves great things through ambition. Energy is powerful.' },
    30: { type: 'Half-Gil', title: 'Ups & Downs', desc: 'Extreme success or extreme failure. Unpredictable.' },
    31: { type: 'Gil', title: 'Prosperity & Harmony', desc: 'Will, wisdom, and courage combined. A perfect leader.' },
    32: { type: 'Gil', title: 'Luck & Opportunity', desc: 'Unexpected help arrives. Success comes like a gentle wind.' },
    33: { type: 'Gil', title: 'Ascension & Power', desc: 'Rising to the top like a dragon. Great authority.' },
    34: { type: 'Hyung', title: 'Destruction & Chaos', desc: 'Family discord and bad luck. Needs spiritual protection.' },
    35: { type: 'Gil', title: 'Peace & Art', desc: 'Gentle and artistic. Success in peaceful professions.' },
    36: { type: 'Hyung', title: 'Heroism & Sacrifice', desc: 'Self-sacrifice for others. Noble but difficult life.' },
    37: { type: 'Gil', title: 'Authority & Loyalty', desc: 'Success through loyalty and diligence. Reliable.' },
    38: { type: 'Half-Gil', title: 'Weakness & Art', desc: 'Artistic talent but weak will. Needs a strong partner.' },
    39: { type: 'Gil', title: 'Wealth & Glory', desc: 'Great prosperity and long life. Everything goes well.' },
    40: { type: 'Half-Gil', title: 'Change & Void', desc: 'Talented but lacks perseverance. Good start, weak finish.' },
    41: { type: 'Gil', title: 'Great Leader', desc: 'Sound virtue and wisdom. A leader of the masses.' },
    42: { type: 'Half-Gil', title: 'Variety & Art', desc: 'Many talents but scattered focus. Needs concentration.' },
    43: { type: 'Half-Gil', title: 'Appearance vs Reality', desc: 'Looks good on outside, empty inside. Watch for deception.' },
    44: { type: 'Hyung', title: 'Failure & Grief', desc: 'Everything goes wrong. Mental stress is high.' },
    45: { type: 'Gil', title: 'Wisdom & Success', desc: 'Overcomes difficulties to achieve greatness. Smooth sailing.' },
    46: { type: 'Hyung', title: 'Darkness & Failure', desc: 'Hard to see the light. Struggles in darkness.' },
    47: { type: 'Gil', title: 'Prosperity & Bloom', desc: 'Flowers blooming in spring. Success and happiness.' },
    48: { type: 'Gil', title: 'Advisor & Virtue', desc: 'Wise counselor. Success through helping others.' },
    49: { type: 'Half-Gil', title: 'Change & Travel', desc: 'Constant movement. Success away from home.' },
    50: { type: 'Half-Gil', title: 'Success & Failure', desc: 'One success, one failure. Balance is key.' },
    // ... Simplified for 51-81 (Repeating patterns or specific meanings)
    // For brevity in this file, we will map > 50 to modulo 50 or specific logic in function
};

// 3. HANGUL STROKE COUNT (Simplified for Demo)
// In real Seongmyeonghak, Hanja strokes are used.
// Here we simulate "Virtual Strokes" based on Hangul to provide a consistent logic without Hanja input.
const hangulStrokes = {
    'ㄱ': 2, 'ㄴ': 2, 'ㄷ': 3, 'ㄹ': 5, 'ㅁ': 4, 'ㅂ': 4, 'ㅅ': 2, 'ㅇ': 1, 'ㅈ': 3, 'ㅊ': 4, 'ㅋ': 3, 'ㅌ': 4, 'ㅍ': 4, 'ㅎ': 3,
    'ㅏ': 2, 'ㅑ': 3, 'ㅓ': 2, 'ㅕ': 3, 'ㅗ': 2, 'ㅛ': 3, 'ㅜ': 2, 'ㅠ': 3, 'ㅡ': 1, 'ㅣ': 1,
    'ㅐ': 3, 'ㅒ': 4, 'ㅔ': 3, 'ㅖ': 4, 'ㅘ': 4, 'ㅙ': 5, 'ㅚ': 3, 'ㅝ': 4, 'ㅞ': 5, 'ㅟ': 3, 'ㅢ': 2
};

// Helper to decompose Hangul
function decomposeHangul(char) {
    const code = char.charCodeAt(0) - 0xAC00;
    if (code < 0 || code > 11171) return null;

    const choseong = Math.floor(code / 588);
    const jungseong = Math.floor((code % 588) / 28);
    const jongseong = code % 28;

    const choArr = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
    const jungArr = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
    const jongArr = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

    return {
        cho: choArr[choseong],
        jung: jungArr[jungseong],
        jong: jongArr[jongseong]
    };
}

// Main Analysis Function
function analyzeNameLogic(name) {
    let totalStrokes = 0;
    let soundFlow = [];
    let strokeDetails = [];

    for (let i = 0; i < name.length; i++) {
        const char = name[i];
        const decomposed = decomposeHangul(char);

        if (decomposed) {
            // 1. Sound Element (Based on Choseong)
            // Handle double consonants mapping to single for element lookup
            let soundKey = decomposed.cho;
            if (soundKey === 'ㄲ') soundKey = 'ㄱ';
            if (soundKey === 'ㄸ') soundKey = 'ㄷ';
            if (soundKey === 'ㅃ') soundKey = 'ㅂ';
            if (soundKey === 'ㅆ') soundKey = 'ㅅ';
            if (soundKey === 'ㅉ') soundKey = 'ㅈ';

            const element = soundElements[soundKey] || 'Unknown';
            soundFlow.push(element);

            // 2. Stroke Count (Virtual)
            // Simple sum of parts
            let charStrokes = (hangulStrokes[decomposed.cho] || 0) + (hangulStrokes[decomposed.jung] || 0);
            if (decomposed.jong) {
                // Jongseong mapping needs care, simplified here
                // Map complex jongseong to simple strokes if needed, or just count 1-2
                charStrokes += 2; // Average for jongseong
            }
            strokeDetails.push(charStrokes);
            totalStrokes += charStrokes;
        } else {
            // Non-Hangul (English/Space)
            // Use Numerology for English
            const upper = char.toUpperCase();
            if (upper >= 'A' && upper <= 'Z') {
                const num = (upper.charCodeAt(0) - 64) % 9 || 9;
                strokeDetails.push(num);
                totalStrokes += num;
                soundFlow.push('Mixed');
            }
        }
    }

    // 81 Spirit Analysis
    const spiritIndex = totalStrokes > 81 ? totalStrokes % 80 : totalStrokes;
    const spirit = spiritNumbers[spiritIndex] || spiritNumbers[1]; // Fallback

    // Sound Harmony Analysis
    let harmonyScore = 100;
    let harmonyDesc = "Flows well.";
    if (soundFlow.length >= 2) {
        const e1 = soundFlow[0];
        const e2 = soundFlow[1];
        if (elementRelations[e1] && elementRelations[e1].conquer === e2) {
            harmonyScore -= 30;
            harmonyDesc = `Clash detected: ${e1} conquers ${e2}.`;
        } else if (elementRelations[e2] && elementRelations[e2].conquer === e1) {
            harmonyScore -= 30;
            harmonyDesc = `Clash detected: ${e2} conquers ${e1}.`;
        } else if (elementRelations[e1] && elementRelations[e1].generate === e2) {
            harmonyDesc = `Excellent flow: ${e1} supports ${e2}.`;
        }
    }

    return {
        totalStrokes: totalStrokes,
        spirit: spirit,
        soundFlow: soundFlow,
        harmonyDesc: harmonyDesc,
        score: Math.min(100, Math.max(40, (spirit.type === 'Gil' ? 90 : (spirit.type === 'Hyung' ? 50 : 70)) + (harmonyScore === 100 ? 10 : -10)))
    };
}

// ===== NAMING ENGINE FOR AI NAMING CENTER =====
const NamingEngine = {
    elements: {
        wood: { name: '목(木)', color: '#2ecc71', trait: '성장, 창조, 인자함' },
        fire: { name: '화(火)', color: '#e74c3c', trait: '열정, 명예, 리더십' },
        earth: { name: '토(土)', color: '#f39c12', trait: '안정, 신뢰, 포용력' },
        metal: { name: '금(金)', color: '#ecf0f1', trait: '결단력, 정의, 명석함' },
        water: { name: '수(水)', color: '#3498db', trait: '지혜, 유연성, 깊이' }
    },

    premiumNames: {
        male: [
            { name: '건우', hanja: '建宇', meaning: '세상을 세우는 큰 집', element: 'wood', strokes: 20, score: 98 },
            { name: '민준', hanja: '敏俊', meaning: '민첩하고 준수함', element: 'water', strokes: 22, score: 97 },
            { name: '서준', hanja: '瑞俊', meaning: '상서롭고 준수함', element: 'metal', strokes: 23, score: 96 },
            { name: '예준', hanja: '睿俊', meaning: '슬기롭고 준수함', element: 'fire', strokes: 24, score: 95 },
            { name: '도윤', hanja: '道潤', meaning: '도를 윤택하게 함', element: 'earth', strokes: 25, score: 94 }
        ],
        female: [
            { name: '지아', hanja: '智雅', meaning: '지혜롭고 우아함', element: 'water', strokes: 24, score: 99 },
            { name: '서연', hanja: '瑞妍', meaning: '상서롭고 아름다움', element: 'metal', strokes: 23, score: 98 },
            { name: '민서', hanja: '敏瑞', meaning: '민첩하고 상서로움', element: 'water', strokes: 25, score: 97 },
            { name: '하은', hanja: '夏恩', meaning: '여름의 은혜', element: 'fire', strokes: 20, score: 96 },
            { name: '지우', hanja: '智優', meaning: '지혜롭고 우수함', element: 'wood', strokes: 29, score: 95 }
        ]
    },

    analyzeSaju: function (birthDate) {
        const date = new Date(birthDate);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;

        const yearElements = ['metal', 'water', 'wood', 'fire', 'earth'];
        const monthElements = ['water', 'earth', 'wood', 'fire', 'metal', 'earth', 'fire', 'metal', 'earth', 'metal', 'water', 'water'];

        const yearElement = yearElements[year % 5];
        const monthElement = monthElements[month - 1];

        const elementCycle = { wood: 'fire', fire: 'earth', earth: 'metal', metal: 'water', water: 'wood' };
        const weakElement = elementCycle[yearElement];

        return {
            yearElement,
            monthElement,
            weakElement,
            recommendation: `사주에서 ${this.elements[weakElement].name} 기운이 부족합니다. 이름으로 보충하면 좋습니다.`
        };
    },

    numerology81: {
        1: { type: '대길(大吉)', meaning: '태양의 수, 명예와 성공' },
        3: { type: '대길(大吉)', meaning: '발전의 수, 재능과 행운' },
        5: { type: '대길(大吉)', meaning: '복록의 수, 건강과 장수' },
        6: { type: '대길(大吉)', meaning: '평화의 수, 안정과 번영' },
        7: { type: '길(吉)', meaning: '독립의 수, 의지와 극복' },
        8: { type: '길(吉)', meaning: '인내의 수, 노력과 성공' },
        11: { type: '대길(大吉)', meaning: '부흥의 수, 재기와 번영' },
        13: { type: '대길(大吉)', meaning: '지혜의 수, 재능과 창조' },
        15: { type: '대길(大吉)', meaning: '덕망의 수, 리더십과 존경' },
        16: { type: '대길(大吉)', meaning: '명예의 수, 인덕과 성공' },
        17: { type: '길(吉)', meaning: '권위의 수, 의지와 돌파' },
        18: { type: '길(吉)', meaning: '발전의 수, 진취와 성공' },
        21: { type: '대길(大吉)', meaning: '통솔의 수, 리더십과 지위' },
        23: { type: '대길(大吉)', meaning: '융성의 수, 명예와 권력' },
        24: { type: '대길(大吉)', meaning: '풍요의 수, 재물과 성공' },
        25: { type: '길(吉)', meaning: '안정의 수, 지혜와 관리' },
        29: { type: '길(吉)', meaning: '성취의 수, 야망과 성공' },
        31: { type: '대길(大吉)', meaning: '번영의 수, 조화와 성공' },
        32: { type: '길(吉)', meaning: '행운의 수, 기회와 성공' },
        33: { type: '대길(大吉)', meaning: '승천의 수, 권력과 명예' },
        35: { type: '길(吉)', meaning: '평화의 수, 예술과 성공' },
        37: { type: '길(吉)', meaning: '권위의 수, 충성과 성실' },
        39: { type: '대길(大吉)', meaning: '부귀의 수, 재물과 장수' },
        41: { type: '대길(大吉)', meaning: '덕망의 수, 리더십과 지혜' },
        45: { type: '길(吉)', meaning: '지혜의 수, 극복과 성공' },
        47: { type: '대길(大吉)', meaning: '번영의 수, 성공과 행복' },
        48: { type: '길(吉)', meaning: '조언의 수, 덕망과 성공' },
        52: { type: '길(吉)', meaning: '선견의 수, 통찰과 성공' },
        57: { type: '길(吉)', meaning: '노력의 수, 인내와 성공' },
        63: { type: '길(吉)', meaning: '풍요의 수, 재물과 번영' },
        65: { type: '대길(大吉)', meaning: '장수의 수, 건강과 복록' },
        67: { type: '길(吉)', meaning: '성취의 수, 목표와 달성' },
        68: { type: '길(吉)', meaning: '발명의 수, 창조와 성공' },
        81: { type: '길(吉)', meaning: '환원의 수, 새로운 시작' }
    },

    calculateStrokes: function (surname) {
        const strokeMap = {
            '김': 8, '이': 7, '박': 5, '최': 11, '정': 9, '강': 11, '조': 10, '윤': 7,
            '장': 11, '임': 6, '한': 14, '오': 8, '서': 9, '신': 10, '권': 18, '황': 12,
            '안': 6, '송': 9, '전': 6, '홍': 10, '유': 6, '고': 10, '문': 4, '양': 13,
            '손': 10, '배': 11, '백': 11, '허': 11, '남': 9, '심': 13, '노': 19, '하': 9,
            '곽': 15, '성': 6, '차': 10
        };
        return strokeMap[surname] || 10;
    },

    generateNames: function (surname, birthDate, birthTime, gender) {
        const sajuAnalysis = this.analyzeSaju(birthDate);
        const targetElement = sajuAnalysis.weakElement;

        let namePool = this.premiumNames[gender === 'male' ? 'male' : 'female'];
        const matchingNames = namePool.filter(n => n.element === targetElement);
        const otherNames = namePool.filter(n => n.element !== targetElement);
        const selectedNames = [...matchingNames.slice(0, 3), ...otherNames.slice(0, 2)].slice(0, 5);

        return {
            sajuSummary: `생년월일: ${birthDate} | ${sajuAnalysis.recommendation}`,
            sajuDetail: {
                yearElement: this.elements[sajuAnalysis.yearElement].name,
                monthElement: this.elements[sajuAnalysis.monthElement].name,
                weakElement: this.elements[targetElement].name
            },
            recommendations: selectedNames.map(item => {
                const fullName = surname + item.name;
                const totalStrokes = this.calculateStrokes(surname) + item.strokes;
                const numerologyScore = this.numerology81[totalStrokes % 81] || { type: '중길(中吉)', meaning: '평범한 운' };

                return {
                    fullName: fullName,
                    hanja: surname + ' ' + item.hanja,
                    meaning: item.meaning,
                    element: this.elements[item.element].name,
                    elementTrait: this.elements[item.element].trait,
                    strokes: totalStrokes,
                    numerology: numerologyScore.type,
                    numerologyMeaning: numerologyScore.meaning,
                    score: item.score,
                    reason: `${this.elements[item.element].name} 기운으로 사주의 ${this.elements[targetElement].name}을 보충합니다. ${numerologyScore.meaning}의 기운을 가진 이름입니다.`
                };
            })
        };
    }
};
