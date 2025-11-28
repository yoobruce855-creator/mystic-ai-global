// Advanced Dream Analysis Engine
// Context-aware interpretation logic

const dreamPatterns = {
    // === SCENARIOS (구체적 상황 패턴) ===
    scenarios: [
        {
            keywords: ['낯선', '여자', '남자', '잠', '섹스', '관계', '성관계', '동침'],
            required: 2, // 최소 2개 키워드 일치 필요
            symbol: '💞',
            meaning: '새로운 계약, 일거리, 혹은 심리적 욕구',
            interpretation: '낯선 사람과 잠자리를 갖는 꿈은 현실에서 새로운 일거리나 계약을 맺게 될 것을 암시합니다. 혹은 현재의 일상에서 벗어나 새로운 자극을 원하거나, 누군가와 깊은 소통을 하고 싶은 심리적 욕구가 반영된 것일 수 있습니다.',
            advice: '새로운 제안이 들어온다면 긍정적으로 검토해보세요. 대인관계에서는 열린 마음을 가지는 것이 좋습니다.'
        },
        {
            keywords: ['이빨', '치아', '빠지', '우수수', '흔들'],
            required: 2,
            symbol: '🦷',
            meaning: '가족의 우환 또는 심리적 불안',
            interpretation: '이빨이 빠지는 꿈은 전통적으로 가족이나 친척에게 우환이 생길 수 있음을 경고합니다. 심리적으로는 자신의 입지가 흔들리거나 자신감이 떨어졌을 때 자주 꾸는 꿈입니다.',
            advice: '가족들의 안부를 챙기고, 매사에 언행을 조심하는 것이 좋습니다.'
        },
        {
            keywords: ['조상', '할머니', '할아버지', '돌아가신', '돈', '보물', '주시는'],
            required: 2,
            symbol: '🙏',
            meaning: '큰 행운, 횡재수, 혹은 경고',
            interpretation: '돌아가신 조상님이 밝은 모습으로 나타나거나 무언가를 주는 꿈은 최고의 길몽입니다. 큰 재물이 들어오거나 집안에 경사가 생길 징조입니다. 단, 조상님의 표정이 어둡다면 경고의 메시지일 수 있습니다.',
            advice: '로또를 사보셔도 좋습니다. 다만 조상님의 표정이 어두웠다면 매사에 조심하세요.'
        },
        {
            keywords: ['똥', '대변', '변기', '넘치', '묻으', '싸는'],
            required: 2,
            symbol: '💩',
            meaning: '막대한 재물운, 소원 성취',
            interpretation: '똥이 넘치거나 몸에 묻는 꿈은 재물운이 폭발하는 꿈입니다. 더러울수록, 양이 많을수록 더 큰 재물이 들어옵니다. 하고 있는 일이 크게 번창할 징조입니다.',
            advice: '적극적으로 투자를 하거나 사업을 확장하기 좋은 시기입니다.'
        },
        {
            keywords: ['쫓기', '도망', '괴물', '살인마', '귀신', '무서운'],
            required: 2,
            symbol: '🏃',
            meaning: '심리적 압박, 스트레스, 죄책감',
            interpretation: '무언가에 쫓기는 꿈은 현재 감당하기 힘든 스트레스를 받고 있거나, 해결해야 할 문제로부터 도망치고 싶은 심리를 반영합니다. 불안감이 꿈으로 표출된 것입니다.',
            advice: '혼자 끙끙 앓지 말고 주변에 도움을 요청하거나, 휴식을 취하며 마음을 다스리세요.'
        }
    ],

    // === SUBJECTS (꿈의 대상) ===
    subjects: {
        'snake': { keywords: ['snake', 'cobra', 'viper', '뱀', '구렁이', '독사'], name: '뱀', meaning: '지혜와 재물', core: 'power' },
        'dog': { keywords: ['dog', 'puppy', '개', '강아지', '멍멍이'], name: '개', meaning: '대인관계와 충성', core: 'relationship' },
        'cat': { keywords: ['cat', 'kitten', '고양이', '야옹이'], name: '고양이', meaning: '비밀과 직관', core: 'intuition' },
        'pig': { keywords: ['pig', 'boar', '돼지', '멧돼지'], name: '돼지', meaning: '큰 재물과 행운', core: 'wealth' },
        'dragon': { keywords: ['dragon', '용', '미르'], name: '용', meaning: '최고의 권위와 명예', core: 'success' },
        'tiger': { keywords: ['tiger', '호랑이', '범'], name: '호랑이', meaning: '권세와 명예', core: 'power' },
        'fish': { keywords: ['fish', 'carp', '물고기', '잉어'], name: '물고기', meaning: '성취와 재물', core: 'wealth' },
        'ghost': { keywords: ['ghost', 'spirit', '귀신', '유령', '조상'], name: '영적인 존재', meaning: '심리적 불안 또는 계시', core: 'spirit' },
        'blood': { keywords: ['blood', 'red', '피', '혈액'], name: '피', meaning: '생명력과 재물', core: 'wealth' },
        'poop': { keywords: ['poop', 'feces', 'dung', '똥', '대변'], name: '똥', meaning: '횡재수', core: 'wealth' },
        'fire': { keywords: ['fire', 'flame', '불', '화재'], name: '불', meaning: '번창과 열정', core: 'success' },
        'water': { keywords: ['water', 'river', 'sea', '물', '강', '바다'], name: '물', meaning: '감정과 건강', core: 'emotion' },
        'teeth': { keywords: ['teeth', 'tooth', '이빨', '치아'], name: '이빨', meaning: '가족과 건강', core: 'health' },
        'money': { keywords: ['money', 'cash', 'coin', '돈', '지폐', '동전'], name: '돈', meaning: '재물과 가치', core: 'wealth' },
        'car': { keywords: ['car', 'drive', '차', '자동차', '운전'], name: '자동차', meaning: '자신의 일과 추진력', core: 'career' },
        'shoes': { keywords: ['shoes', '신발', '구두'], name: '신발', meaning: '의지할 곳이나 협조자', core: 'help' }
    },

    // === ACTIONS (행동/상황) ===
    actions: {
        'bite': { keywords: ['bite', 'bitten', '물리다', '물다', '공격'], name: '물림', type: 'mixed', desc: '영향을 받거나 계약이 성사됨' },
        'run': { keywords: ['run', 'flee', 'chase', '도망', '쫓기다', '달리다'], name: '도망/추격', type: 'negative', desc: '심리적 압박이나 회피' },
        'kill': { keywords: ['kill', 'die', 'dead', '죽이다', '죽다', '사망'], name: '죽음', type: 'positive', desc: '완벽한 성취와 새로운 시작' },
        'fly': { keywords: ['fly', 'soar', '날다', '비행'], name: '비행', type: 'positive', desc: '신분 상승과 과시' },
        'fall': { keywords: ['fall', 'drop', '떨어지다', '추락'], name: '추락', type: 'negative', desc: '좌절이나 불안감' },
        'eat': { keywords: ['eat', 'food', '먹다', '식사'], name: '섭취', type: 'positive', desc: '일거리나 재물의 획득' },
        'lose': { keywords: ['lose', 'lost', '잃어버리다', '분실'], name: '상실', type: 'negative', desc: '권리나 재물의 손실' },
        'get': { keywords: ['get', 'find', 'receive', '줍다', '받다', '얻다'], name: '획득', type: 'positive', desc: '이권이나 재물의 획득' },
        'cry': { keywords: ['cry', 'weep', '울다', '통곡'], name: '울음', type: 'positive', desc: '스트레스 해소와 기쁜 소식' },
        'laugh': { keywords: ['laugh', 'smile', '웃다'], name: '웃음', type: 'mixed', desc: '만족 혹은 구설수' }
    }
};

function analyzeDreamWithDatabase(text) {
    text = text.toLowerCase();

    // 0. Check Scenarios (Priority 1)
    if (dreamPatterns.scenarios) {
        for (const scenario of dreamPatterns.scenarios) {
            const matchCount = scenario.keywords.filter(k => text.includes(k)).length;
            if (matchCount >= scenario.required) {
                return {
                    symbol: scenario.symbol,
                    meaning: scenario.meaning,
                    interpretation: `<strong>[정밀 분석]</strong> ${scenario.interpretation}`,
                    advice: scenario.advice
                };
            }
        }
    }

    let foundSubject = null;
    let foundAction = null;

    // 1. Find Subject
    for (const [key, data] of Object.entries(dreamPatterns.subjects)) {
        if (data.keywords.some(k => text.includes(k))) {
            foundSubject = { key, ...data };
            break; // Take the first matching subject
        }
    }

    // 2. Find Action
    for (const [key, data] of Object.entries(dreamPatterns.actions)) {
        if (data.keywords.some(k => text.includes(k))) {
            foundAction = { key, ...data };
            break;
        }
    }

    // 3. Generate Interpretation
    let symbol = '🌙';
    let meaning = '';
    let interpretation = '';
    let advice = '';

    // Case A: Subject + Action (Specific Context)
    if (foundSubject && foundAction) {
        symbol = getSymbol(foundSubject.key);
        meaning = `${foundSubject.name}와(과) ${foundAction.name}`;

        // Dynamic Interpretation Logic
        if (foundAction.key === 'bite') {
            if (['snake', 'dog', 'tiger', 'dragon'].includes(foundSubject.key)) {
                interpretation = `<strong>${foundSubject.name}에게 물리는 꿈</strong>은 길몽입니다. ${foundSubject.meaning}의 기운을 강하게 받아들여 큰 권리나 이권을 얻게 될 징조입니다. 태몽일 가능성도 높습니다.`;
                advice = '적극적으로 기회를 잡으세요. 귀인이 찾아올 수 있습니다.';
            } else {
                interpretation = `${foundSubject.name}에게 물리는 것은 뜻밖의 일로 인해 ${foundSubject.meaning}에 관련된 영향을 받게 됨을 의미합니다.`;
                advice = '주변 상황 변화에 주의를 기울이세요.';
            }
        } else if (foundAction.key === 'run') {
            interpretation = `<strong>${foundSubject.name}에게서 도망치는 꿈</strong>은 심리적인 압박감을 나타냅니다. ${foundSubject.meaning}와 관련된 문제로 스트레스를 받고 있거나, 기회가 왔음에도 준비가 되지 않아 피하고 싶은 심리일 수 있습니다.`;
            advice = '문제를 회피하기보다 정면으로 마주하는 용기가 필요합니다.';
        } else if (foundAction.key === 'kill') {
            interpretation = `<strong>${foundSubject.name}을(를) 죽이거나 죽는 것을 보는 꿈</strong>은 대길몽입니다. ${foundSubject.meaning}와 관련된 골치 아픈 문제가 완전히 해결되고, 원하는 바를 성취하게 됩니다.`;
            advice = '막혔던 일이 시원하게 뚫릴 것입니다. 자신감을 가지세요.';
        } else if (foundAction.key === 'get') {
            interpretation = `<strong>${foundSubject.name}을(를) 얻거나 줍는 꿈</strong>은 ${foundSubject.meaning}이(가) 당신에게 들어올 징조입니다. 현실적인 이득으로 이어질 가능성이 큽니다.`;
            advice = '작은 행운도 소중히 여기세요. 더 큰 복으로 돌아옵니다.';
        } else {
            // General combination
            interpretation = `${foundSubject.name}은(는) ${foundSubject.meaning}을(를) 상징합니다. 여기에 '${foundAction.desc}'라는 행동이 더해져, 당신의 삶에 ${foundAction.type === 'positive' ? '긍정적인' : '주의가 필요한'} 변화가 생길 것임을 암시합니다.`;
            advice = foundAction.type === 'positive' ? '흐름이 좋습니다. 추진력을 얻으세요.' : '매사에 신중을 기하는 것이 좋습니다.';
        }
    }
    // Case B: Only Subject
    else if (foundSubject) {
        symbol = getSymbol(foundSubject.key);
        meaning = `${foundSubject.name}의 상징`;
        interpretation = `꿈속의 <strong>${foundSubject.name}</strong>은(는) ${foundSubject.meaning}을(를) 상징합니다. 이 꿈은 당신의 현재 상황에서 ${foundSubject.core === 'wealth' ? '재물운' : (foundSubject.core === 'relationship' ? '대인관계' : '심리 상태')}가 중요하게 작용하고 있음을 보여줍니다.`;
        advice = `${foundSubject.meaning}에 집중하여 균형을 잡으세요.`;
    }
    // Case C: Only Action
    else if (foundAction) {
        symbol = '⚡';
        meaning = `${foundAction.name}의 심리`;
        interpretation = `꿈에서 <strong>${foundAction.name}</strong>하는 행동은 현재 당신의 심리 상태가 '${foundAction.desc}'임을 반영합니다. ${foundAction.type === 'positive' ? '에너지가 상승하고 있습니다.' : '마음의 여유가 필요합니다.'}`;
        advice = foundAction.type === 'positive' ? '지금의 기세를 몰아 목표를 향해 나아가세요.' : '잠시 멈춰서 자신을 돌아보는 시간을 가지세요.';
    }
    // Case D: No Match (Hash-based Fallback)
    else {
        return generateFallbackResult(text);
    }

    return {
        symbol: symbol,
        meaning: meaning,
        interpretation: interpretation,
        advice: advice
    };
}

function getSymbol(key) {
    const map = {
        'fire': '🔥', 'water': '💧', 'money': '💰', 'snake': '🐍', 'love': '💕',
        'dog': '🐕', 'cat': '🐈', 'pig': '🐷', 'dragon': '🐉', 'tiger': '🐯',
        'poop': '💩', 'ghost': '👻', 'blood': '🩸', 'car': '🚗'
    };
    return map[key] || '🌙';
}

function generateFallbackResult(text) {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
        hash = ((hash << 5) - hash) + text.charCodeAt(i);
        hash = hash & hash;
    }
    hash = Math.abs(hash);

    const themes = [
        { s: '🔮', m: '내면의 목소리', i: '이 꿈은 당신의 무의식이 보내는 특별한 신호입니다. 구체적인 형상보다는 꿈에서 느꼈던 \'감정\'이 해석의 열쇠입니다.' },
        { s: '✨', m: '잠재된 가능성', i: '아직 뚜렷하게 드러나지 않은 기회나 재능이 꿈틀거리고 있습니다. 조만간 새로운 영감이 떠오를 것입니다.' },
        { s: '🌀', m: '심리적 정리', i: '복잡한 생각들이 꿈을 통해 정리되고 있습니다. 혼란스러워 보이지만, 이는 마음이 안정을 찾아가는 과정입니다.' }
    ];

    const t = themes[hash % themes.length];

    return {
        symbol: t.s,
        meaning: t.m,
        interpretation: t.i + ' (입력하신 내용에 대한 고유 분석 결과입니다)',
        advice: '꿈의 내용을 기록해두고, 오늘 하루 마주칠 작은 우연들에 주목하세요.'
    };
}
