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
