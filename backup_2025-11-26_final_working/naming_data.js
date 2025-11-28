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

    // 이름 생성 함수 - 200개 이상의 다양한 이름 생성
    generateNamePool: function (gender) {
        const names = [];

        if (gender === 'male') {
            // 남자 이름 구성 요소
            const firstChars = ['건', '동', '재', '경', '태', '준', '현', '성', '영', '윤', '시', '우', '도', '서', '승', '주', '민', '지', '하', '정', '상', '형', '철', '병', '수', '창', '종', '인', '대', '명', '광', '선', '규', '석', '용', '호', '진', '원', '기', '혁'];
            const secondChars = ['우', '준', '민', '호', '현', '성', '진', '영', '수', '석', '철', '용', '규', '태', '원', '기', '혁', '훈', '재', '희', '찬', '욱', '환', '승', '윤', '하', '서', '도', '주', '경', '상', '형', '병', '창', '종', '인', '대', '명', '광', '선'];
            const elements = ['wood', 'fire', 'earth', 'metal', 'water'];
            const hanjaFirst = ['建', '東', '在', '京', '泰', '俊', '賢', '聖', '永', '潤', '時', '宇', '道', '瑞', '勝', '周', '敏', '智', '夏', '正', '尙', '亨', '哲', '炳', '秀', '昌', '鍾', '仁', '大', '明', '光', '善', '奎', '錫', '勇', '浩', '眞', '源', '基', '赫'];
            const hanjaSecond = ['宇', '俊', '民', '浩', '賢', '聖', '眞', '永', '秀', '錫', '哲', '勇', '奎', '泰', '源', '基', '赫', '勳', '在', '熙', '燦', '旭', '煥', '承', '潤', '夏', '瑞', '道', '周', '京', '尙', '亨', '炳', '昌', '鍾', '仁', '大', '明', '光', '善'];

            let idx = 0;
            for (let i = 0; i < firstChars.length; i++) {
                for (let j = 0; j < secondChars.length; j++) {
                    if (idx >= 200) break;
                    const element = elements[idx % 5];
                    names.push({
                        name: firstChars[i] + secondChars[j],
                        hanja: hanjaFirst[i] + hanjaSecond[j],
                        meaning: this.generateMeaning(firstChars[i], secondChars[j]),
                        element: element,
                        strokes: 10 + (idx % 30),
                        score: 70 + (idx % 31)  // 70-100점 범위
                    });
                    idx++;
                }
                if (idx >= 200) break;
            }
        } else {
            // 여자 이름 구성 요소
            const firstChars = ['지', '수', '예', '가', '채', '하', '다', '유', '윤', '서', '은', '소', '민', '하', '지', '다', '예', '지', '하', '다', '서', '유', '윤', '은', '소', '민', '지', '수', '예', '가', '채', '하', '다', '유', '윤', '서', '은', '소', '민', '하'];
            const secondChars = ['아', '연', '은', '원', '린', '영', '현', '진', '빈', '희', '주', '윤', '서', '지', '민', '인', '경', '나', '율', '우', '아', '연', '은', '원', '린', '영', '현', '진', '빈', '희', '주', '윤', '서', '지', '민', '인', '경', '나', '율', '우'];
            const elements = ['wood', 'fire', 'earth', 'metal', 'water'];
            const hanjaFirst = ['智', '秀', '藝', '佳', '采', '夏', '多', '有', '潤', '瑞', '恩', '昭', '敏', '夏', '智', '多', '睿', '智', '夏', '多', '瑞', '有', '潤', '恩', '昭', '敏', '智', '秀', '藝', '佳', '采', '夏', '多', '有', '潤', '瑞', '恩', '昭', '敏', '夏'];
            const hanjaSecond = ['雅', '妍', '恩', '園', '璘', '英', '賢', '眞', '彬', '姬', '珠', '潤', '瑞', '智', '敏', '仁', '京', '娜', '律', '優', '雅', '妍', '恩', '園', '璘', '英', '賢', '眞', '彬', '姬', '珠', '潤', '瑞', '智', '敏', '仁', '京', '娜', '律', '優'];

            let idx = 0;
            for (let i = 0; i < firstChars.length; i++) {
                for (let j = 0; j < secondChars.length; j++) {
                    if (idx >= 200) break;
                    const element = elements[idx % 5];
                    names.push({
                        name: firstChars[i] + secondChars[j],
                        hanja: hanjaFirst[i] + hanjaSecond[j],
                        meaning: this.generateMeaning(firstChars[i], secondChars[j]),
                        element: element,
                        strokes: 10 + (idx % 30),
                        score: 70 + (idx % 31)  // 70-100점 범위
                    });
                    idx++;
                }
                if (idx >= 200) break;
            }
        }

        return names;
    },

    generateMeaning: function (char1, char2) {
        const meanings = {
            '건': '세우다', '동': '동쪽', '재': '있다', '경': '서울', '태': '크다',
            '준': '준수하다', '현': '현명하다', '성': '성스럽다', '영': '영원하다', '윤': '윤택하다',
            '지': '지혜', '수': '빼어나다', '예': '예술', '가': '아름답다', '채': '가꾸다',
            '하': '여름', '다': '많다', '유': '가지다', '서': '상서롭다', '은': '은혜',
            '우': '집', '민': '백성', '호': '넓다', '진': '진실', '영': '빛나다',
            '아': '우아하다', '연': '아름답다', '원': '정원', '린': '옥', '빈': '빛나다'
        };
        return (meanings[char1] || '훌륭한') + ' ' + (meanings[char2] || '사람');
    },

    get premiumNames() {
        return {
            male: this.generateNamePool('male'),
            female: this.generateNamePool('female')
        };
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
            // 상위 20개 성씨 (인구 기준)
            '김': 8, '이': 7, '박': 6, '최': 11, '정': 19, '강': 9, '조': 14, '윤': 4,
            '장': 11, '임': 8, '한': 17, '오': 7, '서': 10, '신': 5, '권': 22, '황': 11,
            '안': 6, '송': 7, '전': 6, '홍': 9,

            // 21-50위 성씨
            '유': 9, '고': 10, '문': 4, '양': 11, '손': 10, '배': 14, '백': 5, '허': 11,
            '남': 9, '심': 7, '노': 16, '하': 8, '곽': 15, '성': 7, '차': 7,
            '주': 6, '우': 9, '구': 8, '임': 6, '진': 10, '지': 6, '엄': 20,
            '채': 14, '원': 4, '천': 3, '방': 4, '공': 4, '현': 5,

            // 51-100위 성씨
            '함': 9, '변': 18, '염': 13, '추': 9, '도': 11, '온': 13, '옥': 5,
            '갈': 13, '육': 11, '맹': 8, '복': 2, '봉': 8, '왕': 4, '피': 5,
            '계': 10, '탁': 8, '국': 17, '은': 10, '팽': 12, '명': 8, '용': 16,
            '어': 11, '간': 18, '나': 19, '반': 15, '시': 9, '상': 8, '마': 10,
            '표': 8, '모': 4, '설': 14, '기': 12, '석': 5, '선': 13, '소': 3,
            '설': 14, '제': 11, '좌': 10, '경': 13, '봉': 8, '사': 5, '부': 5,

            // 복성 (2자 성씨)
            '제갈': 22, '선우': 19, '남궁': 19, '독고': 18, '황보': 20, '사공': 9,
            '서문': 14, '동방': 12, '망절': 22, '장곡': 17, '선우': 19, '소봉': 11,
            '어금': 19, '평강': 13, '제': 11, '갈': 13,

            // 기타 희귀 성씨
            '뇌': 13, '류': 15, '빈': 11, '사': 5, '삼': 3, '서': 10, '소': 3,
            '순': 12, '시': 9, '신': 5, '아': 7, '애': 13, '야': 8, '양': 13,
            '여': 7, '연': 14, '예': 11, '오': 7, '옹': 13, '요': 8, '우': 9,
            '운': 12, '원': 4, '위': 12, '유': 9, '윤': 4, '은': 10, '음': 9,
            '이': 7, '인': 6, '임': 8, '자': 6, '장': 11, '저': 8, '전': 6,
            '정': 19, '제': 11, '조': 14, '종': 8, '좌': 10, '주': 6, '증': 15,
            '지': 6, '진': 10, '차': 7, '창': 12, '채': 14, '천': 3, '초': 12,
            '최': 11, '추': 9, '탁': 8, '탄': 9, '태': 9, '판': 15, '팽': 12,
            '편': 15, '평': 5, '포': 9, '표': 8, '피': 5, '하': 8, '한': 17,
            '함': 9, '해': 13, '허': 11, '현': 5, '형': 12, '호': 11, '홍': 9,
            '화': 8, '환': 13, '황': 11, '후': 9, '흥': 16
        };

        // 입력된 성씨가 strokeMap에 있으면 해당 획수 반환, 없으면 기본값 10
        return strokeMap[surname] || 10;
    },

    generateNames: function (surname, birthDate, birthTime, gender) {
        const sajuAnalysis = this.analyzeSaju(birthDate);
        const targetElement = sajuAnalysis.weakElement;
        const surnameStrokes = this.calculateStrokes(surname);

        // 성씨를 해시값으로 변환하여 시드로 사용
        let surnameHash = 0;
        for (let i = 0; i < surname.length; i++) {
            surnameHash = ((surnameHash << 5) - surnameHash) + surname.charCodeAt(i);
            surnameHash = surnameHash & surnameHash;
        }
        surnameHash = Math.abs(surnameHash);

        let namePool = this.premiumNames[gender === 'male' ? 'male' : 'female'];

        // 각 이름에 대해 성씨와의 궁합 점수 계산
        const scoredNames = namePool.map(item => {
            const totalStrokes = surnameStrokes + item.strokes;
            const numerologyScore = this.numerology81[totalStrokes % 81] || { type: '중길(中吉)', meaning: '평범한 운', score: 50 };

            // 궁합 점수 계산
            let compatibilityScore = item.score;

            // 오행 일치 보너스
            if (item.element === targetElement) {
                compatibilityScore += 30;
            }

            // 획수 길흉 보너스
            if (numerologyScore.type.includes('대길') || numerologyScore.type.includes('大吉')) {
                compatibilityScore += 25;
            } else if (numerologyScore.type.includes('길') || numerologyScore.type.includes('吉')) {
                compatibilityScore += 15;
            }

            // 성씨 해시 기반 랜덤 변동 (성씨마다 다른 결과)
            const nameHash = item.name.charCodeAt(0) + item.name.charCodeAt(item.name.length - 1);
            const randomBonus = ((surnameHash + nameHash) % 20) - 10; // -10 ~ +10
            compatibilityScore += randomBonus;

            return {
                ...item,
                totalStrokes: totalStrokes,
                numerologyScore: numerologyScore,
                compatibilityScore: compatibilityScore
            };
        });

        // 궁합 점수 순으로 정렬
        scoredNames.sort((a, b) => b.compatibilityScore - a.compatibilityScore);

        // 오행 다양성을 고려한 선택
        const selectedNames = [];
        const usedElements = new Set();
        const elements = ['wood', 'fire', 'earth', 'metal', 'water'];

        // 1차: 각 오행에서 최고 점수 1개씩 선택 (최대 5개)
        for (const element of elements) {
            const nameWithElement = scoredNames.find(n => n.element === element && !selectedNames.includes(n));
            if (nameWithElement) {
                selectedNames.push(nameWithElement);
                usedElements.add(element);
            }
        }

        // 2차: 5개가 안 되면 점수 순으로 추가
        if (selectedNames.length < 5) {
            for (const name of scoredNames) {
                if (!selectedNames.includes(name)) {
                    selectedNames.push(name);
                    if (selectedNames.length >= 5) break;
                }
            }
        }

        return {
            sajuSummary: `생년월일: ${birthDate} | ${sajuAnalysis.recommendation}`,
            sajuDetail: {
                yearElement: this.elements[sajuAnalysis.yearElement].name,
                monthElement: this.elements[sajuAnalysis.monthElement].name,
                weakElement: this.elements[targetElement].name
            },
            recommendations: selectedNames.map(item => {
                const fullName = surname + item.name;

                return {
                    fullName: fullName,
                    hanja: surname + ' ' + item.hanja,
                    meaning: item.meaning,
                    element: this.elements[item.element].name,
                    elementTrait: this.elements[item.element].trait,
                    strokes: item.totalStrokes,
                    numerology: item.numerologyScore.type,
                    numerologyMeaning: item.numerologyScore.meaning,
                    score: Math.round(item.compatibilityScore),
                    reason: `${this.elements[item.element].name} 기운으로 사주의 ${this.elements[targetElement].name}을 보충합니다. 총 ${item.totalStrokes}획으로 ${item.numerologyScore.meaning}의 기운을 가진 이름입니다.`
                };
            })
        };
    }
};
