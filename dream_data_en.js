// Advanced Dream Analysis Engine - English Version
// Context-aware interpretation logic

const dreamPatterns = {
    // === SCENARIOS ===
    scenarios: [
        {
            keywords: ['stranger', 'sleep', 'sex', 'intimate', 'bed'],
            required: 2,
            symbol: '💞',
            meaning: 'New contract or psychological desire',
            interpretation: 'Dreaming of intimacy with a stranger suggests new business opportunities or contracts coming your way. It may also reflect a desire for new experiences or deeper connections in your waking life.',
            advice: 'Be open to new proposals. Maintain an open mind in relationships.'
        },
        {
            keywords: ['teeth', 'tooth', 'fall', 'loose', 'break'],
            required: 2,
            symbol: '🦷',
            meaning: 'Family concerns or psychological anxiety',
            interpretation: 'Losing teeth in dreams traditionally warns of potential family troubles. Psychologically, it often occurs when you feel your position is unstable or your confidence is shaken.',
            advice: 'Check on your family members. Be careful with your words and actions.'
        },
        {
            keywords: ['ancestor', 'grandmother', 'grandfather', 'deceased', 'money', 'gift'],
            required: 2,
            symbol: '🙏',
            meaning: 'Great fortune or warning',
            interpretation: 'When deceased ancestors appear cheerfully or give you something, it\'s an excellent omen. Great wealth or family celebrations are coming. However, if they look troubled, it may be a warning.',
            advice: 'Consider buying a lottery ticket. If they looked worried, be cautious in all matters.'
        },
        {
            keywords: ['poop', 'feces', 'toilet', 'overflow', 'dirty'],
            required: 2,
            symbol: '💩',
            meaning: 'Enormous wealth and wish fulfillment',
            interpretation: 'Dreams of overflowing feces or getting dirty with it indicate explosive financial luck. The dirtier and more abundant, the greater the wealth coming your way.',
            advice: 'Good time for investments or business expansion.'
        },
        {
            keywords: ['chase', 'run', 'monster', 'killer', 'ghost', 'scary'],
            required: 2,
            symbol: '🏃',
            meaning: 'Psychological pressure and stress',
            interpretation: 'Being chased reflects overwhelming stress or a desire to escape from problems. Your anxiety is manifesting in dreams.',
            advice: 'Don\'t struggle alone. Seek help or take time to rest and calm your mind.'
        }
    ],

    // === SUBJECTS ===
    subjects: {
        'snake': { keywords: ['snake', 'cobra', 'viper', 'serpent'], name: 'Snake', meaning: 'Wisdom and wealth', core: 'power' },
        'dog': { keywords: ['dog', 'puppy', 'canine'], name: 'Dog', meaning: 'Relationships and loyalty', core: 'relationship' },
        'cat': { keywords: ['cat', 'kitten', 'feline'], name: 'Cat', meaning: 'Secrets and intuition', core: 'intuition' },
        'pig': { keywords: ['pig', 'boar', 'swine'], name: 'Pig', meaning: 'Great wealth and fortune', core: 'wealth' },
        'dragon': { keywords: ['dragon'], name: 'Dragon', meaning: 'Supreme authority and honor', core: 'success' },
        'tiger': { keywords: ['tiger'], name: 'Tiger', meaning: 'Power and prestige', core: 'power' },
        'fish': { keywords: ['fish', 'carp'], name: 'Fish', meaning: 'Achievement and wealth', core: 'wealth' },
        'ghost': { keywords: ['ghost', 'spirit', 'phantom'], name: 'Spirit', meaning: 'Psychological anxiety or revelation', core: 'spirit' },
        'blood': { keywords: ['blood', 'bleeding'], name: 'Blood', meaning: 'Vitality and wealth', core: 'wealth' },
        'poop': { keywords: ['poop', 'feces', 'dung', 'excrement'], name: 'Feces', meaning: 'Windfall', core: 'wealth' },
        'fire': { keywords: ['fire', 'flame', 'burn'], name: 'Fire', meaning: 'Prosperity and passion', core: 'success' },
        'water': { keywords: ['water', 'river', 'sea', 'ocean'], name: 'Water', meaning: 'Emotions and health', core: 'emotion' },
        'teeth': { keywords: ['teeth', 'tooth', 'dental'], name: 'Teeth', meaning: 'Family and health', core: 'health' },
        'money': { keywords: ['money', 'cash', 'coin', 'dollar'], name: 'Money', meaning: 'Wealth and value', core: 'wealth' },
        'car': { keywords: ['car', 'drive', 'vehicle'], name: 'Car', meaning: 'Your work and momentum', core: 'career' },
        'shoes': { keywords: ['shoes', 'boots'], name: 'Shoes', meaning: 'Support or helpers', core: 'help' }
    },

    // === ACTIONS ===
    actions: {
        'bite': { keywords: ['bite', 'bitten', 'attack'], name: 'Being Bitten', type: 'mixed', desc: 'Being influenced or contracts being made' },
        'run': { keywords: ['run', 'flee', 'chase', 'escape'], name: 'Running/Chasing', type: 'negative', desc: 'Psychological pressure or avoidance' },
        'kill': { keywords: ['kill', 'die', 'dead', 'death'], name: 'Death', type: 'positive', desc: 'Perfect achievement and new beginning' },
        'fly': { keywords: ['fly', 'soar', 'flying'], name: 'Flying', type: 'positive', desc: 'Status elevation and showing off' },
        'fall': { keywords: ['fall', 'drop', 'falling'], name: 'Falling', type: 'negative', desc: 'Frustration or anxiety' },
        'eat': { keywords: ['eat', 'food', 'eating'], name: 'Eating', type: 'positive', desc: 'Acquiring work or wealth' },
        'lose': { keywords: ['lose', 'lost', 'missing'], name: 'Loss', type: 'negative', desc: 'Loss of rights or wealth' },
        'get': { keywords: ['get', 'find', 'receive', 'obtain'], name: 'Obtaining', type: 'positive', desc: 'Acquiring benefits or wealth' },
        'cry': { keywords: ['cry', 'weep', 'tears'], name: 'Crying', type: 'positive', desc: 'Stress relief and good news' },
        'laugh': { keywords: ['laugh', 'smile', 'laughing'], name: 'Laughing', type: 'mixed', desc: 'Satisfaction or gossip' }
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
                    interpretation: `<strong>[Detailed Analysis]</strong> ${scenario.interpretation}`,
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
            break;
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

    // Case A: Subject + Action
    if (foundSubject && foundAction) {
        symbol = getSymbol(foundSubject.key);
        meaning = `${foundSubject.name} and ${foundAction.name}`;

        if (foundAction.key === 'bite') {
            if (['snake', 'dog', 'tiger', 'dragon'].includes(foundSubject.key)) {
                interpretation = `<strong>Being bitten by a ${foundSubject.name}</strong> is a good omen. You will strongly receive the energy of ${foundSubject.meaning} and gain significant rights or benefits. Could also be a pregnancy dream.`;
                advice = 'Seize opportunities actively. A benefactor may appear.';
            } else {
                interpretation = `Being bitten by a ${foundSubject.name} means you will be influenced by unexpected events related to ${foundSubject.meaning}.`;
                advice = 'Pay attention to changes in your surroundings.';
            }
        } else if (foundAction.key === 'run') {
            interpretation = `<strong>Running from a ${foundSubject.name}</strong> indicates psychological pressure. You may be stressed about issues related to ${foundSubject.meaning}, or avoiding opportunities due to lack of preparation.`;
            advice = 'Face problems head-on rather than avoiding them.';
        } else if (foundAction.key === 'kill') {
            interpretation = `<strong>Killing a ${foundSubject.name} or seeing it die</strong> is a very auspicious dream. Troublesome problems related to ${foundSubject.meaning} will be completely resolved, and you will achieve your desires.`;
            advice = 'Blocked matters will clear up. Have confidence.';
        } else if (foundAction.key === 'get') {
            interpretation = `<strong>Obtaining or picking up a ${foundSubject.name}</strong> indicates that ${foundSubject.meaning} will come to you. Likely to lead to practical benefits.`;
            advice = 'Cherish even small fortunes. They return as greater blessings.';
        } else {
            interpretation = `${foundSubject.name} symbolizes ${foundSubject.meaning}. Combined with '${foundAction.desc}', this suggests ${foundAction.type === 'positive' ? 'positive' : 'cautious'} changes in your life.`;
            advice = foundAction.type === 'positive' ? 'The flow is good. Gain momentum.' : 'Exercise caution in all matters.';
        }
    }
    // Case B: Only Subject
    else if (foundSubject) {
        symbol = getSymbol(foundSubject.key);
        meaning = `Symbol of ${foundSubject.name}`;
        interpretation = `<strong>${foundSubject.name}</strong> in dreams symbolizes ${foundSubject.meaning}. This dream shows that ${foundSubject.core === 'wealth' ? 'financial luck' : (foundSubject.core === 'relationship' ? 'relationships' : 'psychological state')} is playing an important role in your current situation.`;
        advice = `Focus on ${foundSubject.meaning} to find balance.`;
    }
    // Case C: Only Action
    else if (foundAction) {
        symbol = '⚡';
        meaning = `Psychology of ${foundAction.name}`;
        interpretation = `<strong>${foundAction.name}</strong> in dreams reflects that your current psychological state is '${foundAction.desc}'. ${foundAction.type === 'positive' ? 'Your energy is rising.' : 'You need mental space.'}`;
        advice = foundAction.type === 'positive' ? 'Ride this momentum toward your goals.' : 'Take time to pause and reflect on yourself.';
    }
    // Case D: No Match
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
        { s: '🔮', m: 'Inner Voice', i: 'This dream is a special signal from your unconscious. The \'emotion\' you felt in the dream is the key to interpretation, rather than specific images.' },
        { s: '✨', m: 'Hidden Potential', i: 'Opportunities or talents not yet clearly revealed are stirring. New inspiration will soon emerge.' },
        { s: '🌀', m: 'Psychological Processing', i: 'Complex thoughts are being organized through dreams. Though it seems chaotic, this is your mind finding stability.' }
    ];

    const t = themes[hash % themes.length];

    return {
        symbol: t.s,
        meaning: t.m,
        interpretation: t.i + ' (Unique analysis based on your input)',
        advice: 'Record your dream and pay attention to small coincidences you encounter today.'
    };
}
