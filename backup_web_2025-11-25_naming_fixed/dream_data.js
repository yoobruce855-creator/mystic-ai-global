// Comprehensive Dream Dictionary Database
// Combining psychological (Freud/Jung) and traditional interpretations

const dreamDictionary = {
    // --- ANIMALS (동물) ---
    'snake': {
        keywords: ['snake', 'serpent', 'viper', 'cobra'],
        meaning: 'Transformation, Healing, Hidden Threats',
        interpretation: 'Snakes often symbolize transformation and healing (shedding skin). However, they can also represent hidden threats or betrayal. If the snake was friendly, it suggests healing; if aggressive, it warns of a toxic person or situation.',
        advice: 'Embrace the changes happening in your life, but stay alert to your surroundings.'
    },
    'cat': {
        keywords: ['cat', 'kitten', 'feline'],
        meaning: 'Independence, Intuition, Feminine Power',
        interpretation: 'Cats represent independence, intuition, and feminine energy. A healthy cat suggests you are in touch with your intuition. A sick or aggressive cat may indicate a disconnect from your inner voice.',
        advice: 'Trust your gut feelings and assert your independence.'
    },
    'dog': {
        keywords: ['dog', 'puppy', 'canine'],
        meaning: 'Loyalty, Friendship, Protection',
        interpretation: 'Dogs symbolize loyalty and protection. A happy dog indicates good relationships. An angry or biting dog suggests a feeling of betrayal or lack of trust in a close relationship.',
        advice: 'Cherish your loyal friends, but address any trust issues you may have.'
    },
    'bear': {
        keywords: ['bear', 'grizzly', 'polar bear'],
        meaning: 'Strength, Solitude, Motherhood',
        interpretation: 'Bears represent raw power, strength, and the cycle of hibernation (rest). It can also symbolize an overprotective mother figure.',
        advice: 'You may need to retreat and recharge your energy, or stand your ground with strength.'
    },
    'wolf': {
        keywords: ['wolf', 'wolves'],
        meaning: 'Survival, Instinct, Social Hierarchy',
        interpretation: 'Wolves symbolize survival instincts and your place in a social group. A lone wolf suggests isolation; a pack suggests community or feeling threatened by a group.',
        advice: 'Trust your survival instincts and evaluate your social circle.'
    },
    'bird': {
        keywords: ['bird', 'eagle', 'crow', 'owl'],
        meaning: 'Freedom, Perspective, Spiritual Message',
        interpretation: 'Birds represent freedom and higher perspective. Eagles symbolize success; owls symbolize wisdom; crows may symbolize transformation or bad news.',
        advice: 'Look at your situation from a higher perspective to find the answer.'
    },
    'fish': {
        keywords: ['fish', 'shark', 'whale'],
        meaning: 'Unconscious, Emotions, Fertility',
        interpretation: 'Fish swimming in water represent insights from your unconscious mind. Catching a fish suggests gaining a new insight. Sharks symbolize emotional threats.',
        advice: 'Pay attention to your deeper feelings and intuition.'
    },
    'spider': {
        keywords: ['spider', 'web', 'tarantula'],
        meaning: 'Creativity, Patience, Feeling Trapped',
        interpretation: 'Spiders weave webs, symbolizing creativity and patience. However, being caught in a web suggests feeling trapped in a sticky situation.',
        advice: 'Use your creativity to solve problems, but be careful not to get entangled in drama.'
    },

    // --- NATURE & ELEMENTS (자연) ---
    'water': {
        keywords: ['water', 'ocean', 'river', 'lake', 'rain'],
        meaning: 'Emotional State, Unconscious',
        interpretation: 'Water is the universal symbol for emotions. Clear water means peace; muddy or turbulent water means emotional confusion or distress. Drowning suggests being overwhelmed.',
        advice: 'Acknowledge your emotions. If the water was rough, seek calm and clarity.'
    },
    'fire': {
        keywords: ['fire', 'flame', 'burning', 'inferno'],
        meaning: 'Passion, Anger, Transformation',
        interpretation: 'Fire consumes and transforms. It can represent burning passion, creativity, or destructive anger. A controlled fire is good; a wildfire suggests loss of control.',
        advice: 'Channel your energy wisely. Don\'t let your temper or passion burn you out.'
    },
    'tree': {
        keywords: ['tree', 'forest', 'woods'],
        meaning: 'Growth, Stability, Family Roots',
        interpretation: 'Trees represent your life structure and growth. A healthy tree means stability. Falling trees suggest instability or a shake-up in your foundations.',
        advice: 'Focus on your personal growth and staying grounded.'
    },
    'mountain': {
        keywords: ['mountain', 'hill', 'climbing'],
        meaning: 'Obstacles, Achievement, Perspective',
        interpretation: 'Mountains are obstacles to overcome or goals to reach. Climbing suggests effort towards a goal; standing on top represents success.',
        advice: 'Keep climbing. The view from the top will be worth the effort.'
    },
    'storm': {
        keywords: ['storm', 'tornado', 'hurricane', 'thunder'],
        meaning: 'Emotional Turmoil, Conflict, Change',
        interpretation: 'Storms represent violent emotional outbursts or chaotic life changes. You may be going through a difficult period.',
        advice: 'Stay calm and find shelter. This turbulence will pass.'
    },

    // --- ACTIONS & EVENTS (행동) ---
    'flying': {
        keywords: ['flying', 'floating', 'soaring'],
        meaning: 'Freedom, Escape, Success',
        interpretation: 'Flying suggests you are rising above obstacles and feeling empowered. It represents a desire for freedom or a higher perspective.',
        advice: 'Enjoy this feeling of liberation. You have the power to overcome your limits.'
    },
    'falling': {
        keywords: ['falling', 'drop', 'cliff'],
        meaning: 'Insecurity, Loss of Control, Failure',
        interpretation: 'Falling is a classic sign of insecurity or fear of failure. You may feel like you are losing control of a situation in your waking life.',
        advice: 'Identify where you feel unsupported and ask for help. Trust that you can land safely.'
    },
    'chased': {
        keywords: ['chased', 'running away', 'pursued'],
        meaning: 'Avoidance, Fear, Pressure',
        interpretation: 'Being chased suggests you are running away from a problem, person, or aspect of yourself. The pursuer represents what you are avoiding.',
        advice: 'Stop running and face your fears. Confronting the problem is the only way to solve it.'
    },
    'naked': {
        keywords: ['naked', 'nude', 'undressed'],
        meaning: 'Vulnerability, Shame, Authenticity',
        interpretation: 'Being naked in public symbolizes vulnerability and fear of judgment. It can also mean you have nothing to hide and are being your authentic self.',
        advice: 'Embrace your vulnerability. You are enough just as you are.'
    },
    'dying': {
        keywords: ['dying', 'death', 'funeral', 'killed'],
        meaning: 'Endings, Transformation, New Beginnings',
        interpretation: 'Death in dreams rarely means physical death. It symbolizes the end of a phase, habit, or relationship. It makes room for something new.',
        advice: 'Let go of the past. A new chapter is waiting to begin.'
    },
    'teeth': {
        keywords: ['teeth', 'tooth', 'falling out'],
        meaning: 'Power, Confidence, Communication',
        interpretation: 'Losing teeth symbolizes a loss of power, confidence, or ability to communicate effectively. You may be worried about how others perceive you.',
        advice: 'Restore your confidence. Speak your truth without fear.'
    },
    'driving': {
        keywords: ['driving', 'car', 'vehicle'],
        meaning: 'Life Path, Control, Direction',
        interpretation: 'Driving represents your life\'s journey. If you are driving, you are in control. If someone else is driving, you may feel passive. Brakes failing means loss of control.',
        advice: 'Take the wheel of your own life. Ensure you are going in the direction you want.'
    },
    'test': {
        keywords: ['test', 'exam', 'school'],
        meaning: 'Self-Evaluation, Anxiety, Preparation',
        interpretation: 'Taking a test suggests you feel scrutinized or judged. Being unprepared symbolizes anxiety about a challenge in real life.',
        advice: 'Prepare well and trust your abilities. You are ready for the challenge.'
    },

    // --- OBJECTS & PLACES (사물/장소) ---
    'house': {
        keywords: ['house', 'home', 'room'],
        meaning: 'The Self, Mind, Psyche',
        interpretation: 'A house represents your mind. Different rooms are different aspects of your personality. A messy house suggests a cluttered mind.',
        advice: 'Clean up your mental space. Explore new "rooms" (talents) within yourself.'
    },
    'money': {
        keywords: ['money', 'cash', 'gold', 'coins'],
        meaning: 'Self-Worth, Value, Potential',
        interpretation: 'Money symbolizes self-worth and energy. Finding money means finding new value in yourself. Losing money means feeling drained or unworthy.',
        advice: 'Invest in yourself. Your true value comes from within.'
    },
    'mirror': {
        keywords: ['mirror', 'reflection'],
        meaning: 'Self-Image, Identity, Truth',
        interpretation: 'Mirrors show how you see yourself. A broken mirror suggests a distorted self-image. Looking in a mirror asks you to face the truth.',
        advice: 'Reflect on who you truly are, not who you pretend to be.'
    },
    'door': {
        keywords: ['door', 'gate', 'opening'],
        meaning: 'Opportunity, Transition, Secrets',
        interpretation: 'Doors represent opportunities and transitions. An open door is an invite; a locked door is an obstacle or a secret.',
        advice: 'Walk through the open doors. Don\'t be afraid of the unknown.'
    },
    'phone': {
        keywords: ['phone', 'calling', 'texting'],
        meaning: 'Communication, Connection',
        interpretation: 'Phones represent communication. A broken phone means a breakdown in communication. Missing a call means a missed opportunity.',
        advice: 'Reach out to someone. Clear up any misunderstandings.'
    }
};

// Advanced Analysis Logic
function analyzeDreamWithDatabase(text) {
    text = text.toLowerCase();
    let foundItems = [];

    // 1. Search for keywords in the database
    for (const [key, data] of Object.entries(dreamDictionary)) {
        // Check if the key itself or any of its keywords match
        if (text.includes(key) || data.keywords.some(k => text.includes(k))) {
            foundItems.push({ key: key, ...data });
        }
    }

    // 2. Sort by relevance (length of keyword match - longer is usually more specific)
    // (Simple implementation: just take the first few found)

    // 3. Construct Result
    if (foundItems.length === 0) {
        // Fallback for no matches
        return {
            symbol: '🌌',
            meaning: 'Deep Subconscious Mystery',
            interpretation: 'Your dream contains unique symbols that are deeply personal to you. The lack of common archetypes suggests this dream is processing very specific recent memories or subtle emotions.',
            advice: 'Focus on the *feeling* of the dream. Was it scary, peaceful, or confusing? That emotion is the key message.'
        };
    }

    const primary = foundItems[0];
    const secondary = foundItems.length > 1 ? foundItems[1] : null;
    const tertiary = foundItems.length > 2 ? foundItems[2] : null;

    let symbol = '🌙';
    if (primary.key === 'fire') symbol = '🔥';
    else if (primary.key === 'water') symbol = '💧';
    else if (primary.key === 'money') symbol = '💰';
    else if (primary.key === 'snake') symbol = '🐍';
    else if (primary.key === 'love') symbol = '💕';

    let interpretation = `<strong>Core Symbol: ${primary.meaning}</strong><br>${primary.interpretation}`;

    if (secondary) {
        interpretation += `<br><br><strong>Secondary Influence: ${secondary.meaning}</strong><br>The presence of ${secondary.keywords[0]} adds a layer of meaning. ${secondary.interpretation}`;
    }

    let advice = primary.advice;
    if (secondary) {
        advice += ` Also, ${secondary.advice.toLowerCase()}`;
    }

    return {
        symbol: symbol,
        meaning: primary.meaning,
        interpretation: interpretation,
        advice: advice
    };
}
