// ===== WESTERN BABY NAME GENERATOR DATA =====

// Popular American/Western Names Database
const westernNames = {
    male: {
        first: [
            'Liam', 'Noah', 'Oliver', 'James', 'Elijah', 'William', 'Henry', 'Lucas', 'Benjamin', 'Theodore',
            'Mateo', 'Levi', 'Sebastian', 'Daniel', 'Jack', 'Michael', 'Alexander', 'Owen', 'Asher', 'Samuel',
            'Ethan', 'Leo', 'Jackson', 'Mason', 'Ezra', 'John', 'Hudson', 'Luca', 'Aiden', 'Joseph',
            'David', 'Jacob', 'Logan', 'Luke', 'Julian', 'Gabriel', 'Grayson', 'Wyatt', 'Matthew', 'Maverick',
            'Dylan', 'Isaac', 'Elias', 'Anthony', 'Thomas', 'Jayden', 'Carter', 'Santiago', 'Ezekiel', 'Charles'
        ],
        middle: [
            'James', 'Alexander', 'Michael', 'William', 'Joseph', 'David', 'Thomas', 'Christopher', 'Daniel', 'Matthew',
            'John', 'Robert', 'Lee', 'Andrew', 'Ryan', 'Benjamin', 'Samuel', 'Nicholas', 'Anthony', 'Charles',
            'Edward', 'Henry', 'Paul', 'Mark', 'Steven', 'George', 'Kenneth', 'Joshua', 'Kevin', 'Brian',
            'Timothy', 'Ronald', 'Jason', 'Jeffrey', 'Jacob', 'Gary', 'Eric', 'Stephen', 'Larry', 'Scott'
        ]
    },
    female: {
        first: [
            'Olivia', 'Emma', 'Charlotte', 'Amelia', 'Sophia', 'Isabella', 'Ava', 'Mia', 'Evelyn', 'Luna',
            'Harper', 'Camila', 'Sofia', 'Scarlett', 'Elizabeth', 'Eleanor', 'Emily', 'Chloe', 'Mila', 'Violet',
            'Penelope', 'Gianna', 'Aria', 'Abigail', 'Ella', 'Avery', 'Hazel', 'Nora', 'Layla', 'Lily',
            'Aurora', 'Nova', 'Ellie', 'Madison', 'Grace', 'Isla', 'Willow', 'Zoe', 'Riley', 'Stella',
            'Eliana', 'Ivy', 'Victoria', 'Emilia', 'Lucy', 'Aaliyah', 'Everly', 'Lillian', 'Addison', 'Natalie'
        ],
        middle: [
            'Rose', 'Grace', 'Marie', 'Elizabeth', 'Ann', 'Mae', 'Jane', 'Louise', 'Claire', 'Faith',
            'Hope', 'Joy', 'Nicole', 'Lynn', 'Renee', 'Michelle', 'Christine', 'Catherine', 'Victoria', 'Sophia',
            'Isabella', 'Olivia', 'Emma', 'Ava', 'Mia', 'Charlotte', 'Amelia', 'Harper', 'Evelyn', 'Abigail',
            'Emily', 'Ella', 'Scarlett', 'Madison', 'Aria', 'Lily', 'Chloe', 'Violet', 'Hannah', 'Lillian'
        ]
    }
};

// Name meanings and origins
const nameMeanings = {
    'Liam': { meaning: 'Strong-willed warrior', origin: 'Irish' },
    'Noah': { meaning: 'Rest, comfort', origin: 'Hebrew' },
    'Oliver': { meaning: 'Olive tree', origin: 'Latin' },
    'Olivia': { meaning: 'Olive tree', origin: 'Latin' },
    'Emma': { meaning: 'Universal', origin: 'German' },
    'Charlotte': { meaning: 'Free woman', origin: 'French' },
    'Amelia': { meaning: 'Work', origin: 'German' },
    'Sophia': { meaning: 'Wisdom', origin: 'Greek' },
    'Isabella': { meaning: 'Devoted to God', origin: 'Hebrew' },
    'Ava': { meaning: 'Life', origin: 'Latin' },
    'James': { meaning: 'Supplanter', origin: 'Hebrew' },
    'Alexander': { meaning: 'Defender of men', origin: 'Greek' },
    'Michael': { meaning: 'Who is like God', origin: 'Hebrew' },
    'Rose': { meaning: 'Flower', origin: 'Latin' },
    'Grace': { meaning: 'Elegance', origin: 'Latin' },
    'Marie': { meaning: 'Star of the sea', origin: 'French' }
};

// Numerology calculation (Pythagorean system)
const numerologyValues = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
    'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
    'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
};

const numerologyMeanings = {
    1: { trait: 'Leadership', description: 'Independent, ambitious, and pioneering' },
    2: { trait: 'Harmony', description: 'Cooperative, diplomatic, and sensitive' },
    3: { trait: 'Creativity', description: 'Expressive, optimistic, and artistic' },
    4: { trait: 'Stability', description: 'Practical, organized, and hardworking' },
    5: { trait: 'Freedom', description: 'Adventurous, versatile, and dynamic' },
    6: { trait: 'Nurturing', description: 'Responsible, caring, and protective' },
    7: { trait: 'Wisdom', description: 'Analytical, spiritual, and introspective' },
    8: { trait: 'Success', description: 'Ambitious, powerful, and goal-oriented' },
    9: { trait: 'Compassion', description: 'Humanitarian, generous, and idealistic' }
};

// Zodiac compatibility
const zodiacSigns = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

function calculateNumerology(name) {
    let sum = 0;
    for (let char of name.toUpperCase()) {
        if (numerologyValues[char]) {
            sum += numerologyValues[char];
        }
    }
    // Reduce to single digit
    while (sum > 9) {
        sum = sum.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }
    return sum;
}

function getZodiacSign(month, day) {
    const zodiacDates = [
        { sign: 'Capricorn', start: [12, 22], end: [1, 19] },
        { sign: 'Aquarius', start: [1, 20], end: [2, 18] },
        { sign: 'Pisces', start: [2, 19], end: [3, 20] },
        { sign: 'Aries', start: [3, 21], end: [4, 19] },
        { sign: 'Taurus', start: [4, 20], end: [5, 20] },
        { sign: 'Gemini', start: [5, 21], end: [6, 20] },
        { sign: 'Cancer', start: [6, 21], end: [7, 22] },
        { sign: 'Leo', start: [7, 23], end: [8, 22] },
        { sign: 'Virgo', start: [8, 23], end: [9, 22] },
        { sign: 'Libra', start: [9, 23], end: [10, 22] },
        { sign: 'Scorpio', start: [10, 23], end: [11, 21] },
        { sign: 'Sagittarius', start: [11, 22], end: [12, 21] }
    ];

    for (let zodiac of zodiacDates) {
        const [startMonth, startDay] = zodiac.start;
        const [endMonth, endDay] = zodiac.end;

        if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
            return zodiac.sign;
        }
    }
    return 'Capricorn';
}

function generateBabyNames(gender, birthDate) {
    const names = westernNames[gender === 'male' ? 'male' : 'female'];
    const suggestions = [];

    // Get zodiac sign
    const date = new Date(birthDate);
    const zodiac = getZodiacSign(date.getMonth() + 1, date.getDate());

    // Generate 5 name combinations
    for (let i = 0; i < 5; i++) {
        const firstName = names.first[Math.floor(Math.random() * names.first.length)];
        const middleName = names.middle[Math.floor(Math.random() * names.middle.length)];
        const fullName = `${firstName} ${middleName}`;

        const numerology = calculateNumerology(fullName);
        const meaning = nameMeanings[firstName] || { meaning: 'Beautiful name', origin: 'Various' };

        suggestions.push({
            firstName: firstName,
            middleName: middleName,
            fullName: fullName,
            meaning: meaning.meaning,
            origin: meaning.origin,
            numerology: numerology,
            numerologyTrait: numerologyMeanings[numerology].trait,
            numerologyDesc: numerologyMeanings[numerology].description,
            zodiac: zodiac,
            score: 70 + Math.floor(Math.random() * 31) // 70-100
        });
    }

    // Sort by score
    suggestions.sort((a, b) => b.score - a.score);

    return {
        suggestions: suggestions,
        zodiac: zodiac,
        summary: `Based on ${zodiac} zodiac sign and numerology analysis`
    };
}

console.log('Western baby name generator loaded');
