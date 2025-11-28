const SajuEngine = {
    // 천간 (Heavenly Stems)
    stems: ['갑(Wood+)', '을(Wood-)', '병(Fire+)', '정(Fire-)', '무(Earth+)', '기(Earth-)', '경(Metal+)', '신(Metal-)', '임(Water+)', '계(Water-)'],
    // 지지 (Earthly Branches)
    branches: ['자(Rat/Water)', '축(Ox/Earth)', '인(Tiger/Wood)', '묘(Rabbit/Wood)', '진(Dragon/Earth)', '사(Snake/Fire)', '오(Horse/Fire)', '미(Sheep/Earth)', '신(Monkey/Metal)', '유(Rooster/Metal)', '술(Dog/Earth)', '해(Pig/Water)'],

    // 오행 설명
    elements: {
        wood: { name: 'Wood (목)', traits: 'Growth, Creativity, Flexibility', color: '#4caf50' },
        fire: { name: 'Fire (화)', traits: 'Passion, Energy, Dynamism', color: '#f44336' },
        earth: { name: 'Earth (토)', traits: 'Stability, Reliability, Patience', color: '#ff9800' },
        metal: { name: 'Metal (금)', traits: 'Determination, Precision, Justice', color: '#9e9e9e' },
        water: { name: 'Water (수)', traits: 'Wisdom, Adaptability, Flow', color: '#2196f3' }
    },

    // 육십갑자 계산 (간략화된 알고리즘)
    calculatePillars: function (year, month, day, hour) {
        const baseYear = 1900; // 경자년(Metal Rat)
        const stemIndex = (year - baseYear + 6) % 10;
        const branchIndex = (year - baseYear) % 12;

        const yearPillar = {
            stem: this.stems[stemIndex],
            branch: this.branches[branchIndex],
            element: this.getElementFromStem(stemIndex)
        };

        const monthStemIndex = (year * 12 + month) % 10;
        const monthBranchIndex = month % 12;

        const dayStemIndex = (year * 365 + day) % 10;
        const dayBranchIndex = day % 12;

        return {
            year: yearPillar,
            month: { stem: this.stems[monthStemIndex], branch: this.branches[monthBranchIndex], element: this.getElementFromStem(monthStemIndex) },
            day: { stem: this.stems[dayStemIndex], branch: this.branches[dayBranchIndex], element: this.getElementFromStem(dayStemIndex) },
        };
    },

    getElementFromStem: function (index) {
        if (index <= 1) return 'wood';
        if (index <= 3) return 'fire';
        if (index <= 5) return 'earth';
        if (index <= 7) return 'metal';
        return 'water';
    },

    // 오행 분석 리포트 생성
    analyzeElements: function (pillars) {
        const counts = { wood: 0, fire: 0, earth: 0, metal: 0, water: 0 };
        [pillars.year, pillars.month, pillars.day].forEach(p => {
            counts[p.element]++;
        });

        let dominant = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);

        return {
            counts: counts,
            dominant: this.elements[dominant],
            missing: Object.keys(counts).filter(k => counts[k] === 0)
        };
    },

    // 상세 운세 생성 (Generative Logic)
    generateReport: function (name, gender, birthDate) {
        const date = new Date(birthDate);
        const pillars = this.calculatePillars(date.getFullYear(), date.getMonth() + 1, date.getDate());
        const analysis = this.analyzeElements(pillars);

        const yearStem = pillars.year.stem.split('(')[0];
        const yearBranch = pillars.year.branch.split('(')[0];
        const animal = pillars.year.branch.split('/')[0].split('(')[1]; // e.g. Rat
        const dayStem = pillars.day.stem.split('(')[0]; // 일간 (나 자신)
        const dayElement = pillars.day.element; // 일간의 오행

        // 동적 텍스트 생성 (조합형 로직)
        let report = {
            title: `사주 명식 분석 (Four Pillars Analysis)`,
            summary: `${name}님은 ${yearStem}${yearBranch}년, 지혜로운 ${animal}띠입니다.\n당신의 본원(Day Master)은 '${dayStem}'으로, ${this.elements[dayElement].name}의 기운을 타고났습니다.`,
            personality: this.getPersonalityText(dayElement, animal, analysis.dominant.name),
            wealth: this.getWealthText(dayElement, analysis.dominant.name),
            career: this.getCareerText(dayElement, animal),
            love: this.getLoveText(dayElement, gender),
            advice: this.getAdviceText(analysis.missing, animal)
        };

        return report;
    },

    getPersonalityText: function (dayElement, animal, dominantElement) {
        const traits = {
            wood: ["창의적이고 진취적", "성장 욕구가 강함", "인자하고 부드러움"],
            fire: ["열정적이고 예의 바름", "화려함을 추구", "추진력이 강함"],
            earth: ["신용을 중시함", "포용력이 넓음", "현실적이고 안정적"],
            metal: ["결단력이 있고 냉철함", "의리가 강함", "완벽주의 성향"],
            water: ["지혜롭고 유연함", "통찰력이 뛰어남", "적응력이 좋음"]
        };

        const animalTraits = {
            Rat: "눈치가 빠르고 적응력이 뛰어난",
            Ox: "우직하고 성실하며 끈기 있는",
            Tiger: "용감하고 리더십이 넘치는",
            Rabbit: "상냥하고 평화주의적인",
            Dragon: "이상적이고 야망이 큰",
            Snake: "지적이고 신비로운 매력의",
            Horse: "자유롭고 활동적인",
            Sheep: "온순하고 배려심이 깊은",
            Monkey: "재주가 많고 유머러스한",
            Rooster: "꼼꼼하고 예리한",
            Dog: "충직하고 책임감이 강한",
            Pig: "솔직하고 낙천적인"
        };

        const coreTrait = traits[dayElement][Math.floor(Math.random() * traits[dayElement].length)];
        const subTrait = dominantElement.includes(dayElement) ? "더욱 강화되어 뚜렷한 주관을 보여줍니다." : `하지만 ${dominantElement}의 영향으로 다채로운 면모를 가집니다.`;

        return `당신은 ${animalTraits[animal] || '특별한'} 기질을 바탕으로, ${coreTrait}인 성향을 가지고 있습니다. ${subTrait} 주변 사람들에게는 ${this.elements[dayElement].traits}한 사람으로 인식됩니다.`;
    },

    getWealthText: function (dayElement, dominantElement) {
        const wealthTypes = {
            wood: "꾸준히 성장하는 '나무'와 같은 재물운입니다. 초기에는 작게 시작하더라도 시간이 지날수록 풍성한 결실을 맺습니다.",
            fire: "확 타오르는 '불'과 같은 재물운입니다. 단기간에 큰 수익을 낼 수 있는 폭발력이 있으나, 지출 관리에도 신경 써야 합니다.",
            earth: "차곡차곡 쌓이는 '흙'과 같은 재물운입니다. 부동산이나 저축 등 안정적인 자산 증식이 가장 유리합니다.",
            metal: "날카로운 '금'과 같은 재물운입니다. 정확한 판단과 전문성을 통해 확실한 수익을 창출하는 스타일입니다.",
            water: "흐르는 '물'과 같은 재물운입니다. 유통, 무역, 혹은 지식 산업을 통해 돈이 끊임없이 순환하는 구조가 좋습니다."
        };

        return `${wealthTypes[dayElement]} 특히 사주 내에 ${dominantElement}의 기운이 강하여, 이를 활용한 분야(예: ${dominantElement.includes('Fire') ? 'IT, 미디어' : dominantElement.includes('Water') ? '유통, 요식업' : '전문직'})에서 성공할 확률이 높습니다.`;
    },

    getCareerText: function (dayElement, animal) {
        const careers = {
            wood: "교육, 예술, 기획, 건축",
            fire: "방송, 연예, IT, 요리",
            earth: "부동산, 농업, 컨설팅, 종교",
            metal: "금융, 의료, 법조, 군인",
            water: "유통, 무역, 연구, 서비스"
        };
        return `${animal}띠 특유의 기질을 살려, ${careers[dayElement]} 분야나 이와 관련된 직종에서 두각을 나타낼 수 있습니다. 조직 생활보다는 자신의 전문성을 인정받는 곳이 좋습니다.`;
    },

    getLoveText: function (dayElement, gender) {
        const styles = {
            wood: "친구처럼 편안하고 성장하는 연애",
            fire: "뜨겁고 열정적인 로맨스",
            earth: "신뢰를 바탕으로 한 안정적인 사랑",
            metal: "서로의 영역을 존중하는 쿨한 연애",
            water: "감성적이고 깊은 교감을 나누는 사랑"
        };
        return `당신은 ${styles[dayElement]}를 지향합니다. ${gender === 'male' ? '여성' : '남성'}에게 어필할 때는 당신의 ${this.elements[dayElement].traits.split(',')[0]}한 매력을 강조하세요.`;
    },

    getAdviceText: function (missingElements, animal) {
        const adviceList = [
            `올해는 ${animal}띠의 에너지를 받아 새로운 도전을 하기에 좋습니다.`,
            "주변 사람들과의 협력이 큰 행운을 가져다 줄 것입니다.",
            "자신의 직관을 믿고 밀고 나가세요.",
            "잠시 멈추어 내면을 돌아보는 시간이 필요합니다.",
            "작은 성공들이 모여 큰 성취를 이룰 것입니다."
        ];

        const baseAdvice = adviceList[Math.floor(Math.random() * adviceList.length)];

        if (missingElements.length === 0) return `${baseAdvice} 오행이 조화로워 평탄한 운세가 예상됩니다.`;

        const missing = missingElements.map(e => SajuEngine.elements[e].name.split(' ')[0]).join(', ');
        return `${baseAdvice} 다만, 사주에 [${missing}] 기운이 부족하니, 이를 보완하는 색상(옷, 액세서리)을 가까이하면 운이 트입니다.`;
    }
};
