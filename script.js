// ===== Global State =====
let userCredits = 3; // Free credits
let isPremium = false;

// Major Arcana Tarot Cards
const tarotCards = [
    { name: '바보 (The Fool)', emoji: '🃏', meaning: '새로운 시작', description: '순수함과 자유로움으로 새로운 여정을 시작하세요.' },
    { name: '마법사 (The Magician)', emoji: '🎩', meaning: '창조와 의지', description: '당신의 능력을 믿고 목표를 향해 나아가세요.' },
    { name: '여사제 (The High Priestess)', emoji: '🌙', meaning: '직관과 신비', description: '내면의 목소리에 귀 기울이세요.' },
    { name: '여제 (The Empress)', emoji: '👑', meaning: '풍요와 창조', description: '풍요로움과 사랑이 가득한 시기입니다.' },
    { name: '황제 (The Emperor)', emoji: '⚜️', meaning: '권위와 안정', description: '리더십을 발휘하고 질서를 세우세요.' },
    { name: '교황 (The Hierophant)', emoji: '📿', meaning: '전통과 지혜', description: '전통적인 가치와 지혜를 존중하세요.' },
    { name: '연인 (The Lovers)', emoji: '💕', meaning: '사랑과 선택', description: '중요한 선택의 순간입니다. 마음을 따르세요.' },
    { name: '전차 (The Chariot)', emoji: '🏇', meaning: '승리와 의지', description: '강한 의지로 목표를 달성할 것입니다.' },
    { name: '힘 (Strength)', emoji: '🦁', meaning: '용기와 인내', description: '내면의 힘으로 어려움을 극복하세요.' },
    { name: '은둔자 (The Hermit)', emoji: '🕯️', meaning: '성찰과 고독', description: '혼자만의 시간을 통해 깨달음을 얻으세요.' },
    { name: '운명의 수레바퀴 (Wheel of Fortune)', emoji: '☸️', meaning: '변화와 운명', description: '인생의 전환점이 다가오고 있습니다.' },
    { name: '정의 (Justice)', emoji: '⚖️', meaning: '공정과 균형', description: '공정한 판단과 균형이 필요한 시기입니다.' },
    { name: '매달린 사람 (The Hanged Man)', emoji: '🙃', meaning: '희생과 관점', description: '새로운 관점에서 상황을 바라보세요.' },
    { name: '죽음 (Death)', emoji: '💀', meaning: '변화와 재생', description: '끝은 새로운 시작을 의미합니다.' },
    { name: '절제 (Temperance)', emoji: '🍷', meaning: '조화와 균형', description: '중용과 조화를 추구하세요.' },
    { name: '악마 (The Devil)', emoji: '😈', meaning: '유혹과 속박', description: '자신을 구속하는 것에서 벗어나세요.' },
    { name: '탑 (The Tower)', emoji: '🗼', meaning: '파괴와 해방', description: '급격한 변화가 새로운 기회를 가져옵니다.' },
    { name: '별 (The Star)', emoji: '⭐', meaning: '희망과 영감', description: '희망을 가지고 꿈을 향해 나아가세요.' },
    { name: '달 (The Moon)', emoji: '🌙', meaning: '환상과 불안', description: '불확실함 속에서 직관을 믿으세요.' },
    { name: '태양 (The Sun)', emoji: '☀️', meaning: '성공과 기쁨', description: '밝은 미래와 성공이 기다리고 있습니다.' },
    { name: '심판 (Judgement)', emoji: '📯', meaning: '각성과 부활', description: '과거를 정리하고 새롭게 시작하세요.' },
    { name: '세계 (The World)', emoji: '🌍', meaning: '완성과 성취', description: '목표를 달성하고 완성의 기쁨을 누리세요.' }
];

// Dream interpretations database
const dreamDatabase = {
    '뱀': { symbol: '🐍', meaning: '재물과 변화', interpretation: '뱀은 재물운과 변화를 상징합니다. 큰 뱀일수록 큰 재물을, 여러 마리는 다양한 기회를 의미합니다.', lucky: true },
    '돼지': { symbol: '🐷', meaning: '재물과 행운', interpretation: '돼지는 재물운과 풍요를 상징합니다. 특히 새끼 돼지는 예상치 못한 횡재를 의미할 수 있습니다.', lucky: true },
    '물': { symbol: '💧', meaning: '재물과 감정', interpretation: '맑은 물은 재물과 좋은 소식을, 흐린 물은 감정적 혼란을 의미합니다. 물의 상태가 중요합니다.', lucky: true },
    '불': { symbol: '🔥', meaning: '열정과 변화', interpretation: '불은 강한 열정과 에너지를 의미합니다. 집에 불이 나는 꿈은 역설적으로 재물운을 상징합니다.', lucky: true },
    '임신': { symbol: '🤰', meaning: '새로운 시작', interpretation: '임신은 새로운 프로젝트나 아이디어의 시작을 의미합니다. 창조적 에너지가 높은 시기입니다.', lucky: true },
    '죽음': { symbol: '💀', meaning: '변화와 재생', interpretation: '죽음은 끝이 아닌 새로운 시작을 의미합니다. 큰 변화와 재생의 시기가 다가옵니다.', lucky: false },
    '돈': { symbol: '💰', meaning: '재물운', interpretation: '돈을 줍거나 받는 꿈은 실제 재물운 상승을 의미할 수 있습니다. 금액이 클수록 좋습니다.', lucky: true },
    '집': { symbol: '🏠', meaning: '안정과 가족', interpretation: '집은 안정과 가족을 의미합니다. 새 집은 새로운 시작을, 큰 집은 발전을 상징합니다.', lucky: true },
    '용': { symbol: '🐉', meaning: '권력과 성공', interpretation: '용은 최고의 길몽입니다. 큰 성공과 권력, 명예를 상징합니다.', lucky: true },
    '호랑이': { symbol: '🐯', meaning: '권위와 보호', interpretation: '호랑이는 강력한 보호자나 권위를 상징합니다. 사업이나 승진운이 좋습니다.', lucky: true },
    '새': { symbol: '🦅', meaning: '자유와 소식', interpretation: '새는 좋은 소식이나 자유를 상징합니다. 날아가는 새는 기회를 의미합니다.', lucky: true },
    '꽃': { symbol: '🌸', meaning: '사랑과 아름다움', interpretation: '꽃은 사랑과 행복을 상징합니다. 만개한 꽃은 성공을, 시든 꽃은 주의를 의미합니다.', lucky: true },
    '산': { symbol: '⛰️', meaning: '목표와 도전', interpretation: '산은 극복해야 할 목표나 도전을 의미합니다. 정상에 오르면 성공을 상징합니다.', lucky: true },
    '바다': { symbol: '🌊', meaning: '무의식과 감정', interpretation: '바다는 깊은 감정과 무의식을 상징합니다. 잔잔한 바다는 평온을, 거친 바다는 감정의 동요를 의미합니다.', lucky: false },
    '비': { symbol: '🌧️', meaning: '정화와 슬픔', interpretation: '비는 정화와 새로운 시작을 의미하지만, 때로는 슬픔이나 우울함을 나타낼 수 있습니다.', lucky: false }
};

// ===== Screen Navigation =====
function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));

    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function updateCreditsDisplay() {
    document.getElementById('userCredits').textContent = userCredits;
}

function checkCredits(required) {
    if (isPremium) return true;
    if (userCredits >= required) return true;

    // Show credit warning modal
    document.getElementById('requiredCredits').textContent = required;
    document.getElementById('currentCredits').textContent = userCredits;
    showModal('creditWarningModal');
    return false;
}

function useCredits(amount) {
    if (isPremium) return true;
    if (userCredits >= amount) {
        userCredits -= amount;
        updateCreditsDisplay();
        return true;
    }
    return false;
}

// ===== Modal Management =====
function showModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
}

function hideModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

// ===== Initialization =====
document.addEventListener('DOMContentLoaded', () => {
    updateCreditsDisplay();

    // Service card navigation
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const service = card.dataset.service;
            if (service) {
                showScreen(`${service}Screen`);
            }
        });
    });

    // Back button navigation
    const backButtons = document.querySelectorAll('.back-button');
    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            const backTo = button.dataset.back;
            showScreen(`${backTo}Screen`);
        });
    });

    // Premium buttons
    document.getElementById('upgradeBtn').addEventListener('click', () => showModal('premiumModal'));
    document.getElementById('premiumCTA').addEventListener('click', () => showModal('premiumModal'));

    const upgradeResultBtns = document.querySelectorAll('.upgrade-result-btn');
    upgradeResultBtns.forEach(btn => {
        btn.addEventListener('click', () => showModal('premiumModal'));
    });

    // Modal close buttons
    const modalCloses = document.querySelectorAll('.modal-close');
    modalCloses.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            if (modal) modal.classList.add('hidden');
        });
    });

    // Modal overlay clicks
    const modalOverlays = document.querySelectorAll('.modal-overlay');
    modalOverlays.forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            if (modal) modal.classList.add('hidden');
        });
    });

    // Plan selection
    const planButtons = document.querySelectorAll('.select-plan-btn');
    planButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const plan = btn.dataset.plan;
            alert(`${plan} 플랜이 선택되었습니다! 실제 결제 시스템과 연동이 필요합니다.`);
            if (plan === 'monthly' || plan === 'yearly') {
                isPremium = true;
                alert('프리미엄 회원이 되셨습니다! 모든 기능을 무제한으로 이용하세요.');
                hideModal('premiumModal');
            } else if (plan === 'credits') {
                userCredits += 10;
                updateCreditsDisplay();
                alert('10 크레딧이 충전되었습니다!');
                hideModal('premiumModal');
            }
        });
    });

    // Buy credits from warning modal
    document.getElementById('buyCreditsBtn').addEventListener('click', () => {
        hideModal('creditWarningModal');
        showModal('premiumModal');
    });

    // Dream keyword tags
    const keywordTags = document.querySelectorAll('.keyword-tag');
    keywordTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const keyword = tag.textContent;
            const dreamContent = document.getElementById('dreamContent');
            dreamContent.value = keyword + '이(가) 나오는 꿈을 꿨어요. ';
            dreamContent.focus();
        });
    });

    // Initialize services
    initTarot();
    initSaju();
    initDream();
    initCompatibility();
    initNaming();
    initToday();
});

// ===== Tarot Service =====
function initTarot() {
    const drawButton = document.getElementById('drawTarotBtn');
    const tarotInput = document.getElementById('tarotInput');
    const tarotCardsDiv = document.getElementById('tarotCards');
    const tarotResult = document.getElementById('tarotResult');

    drawButton.addEventListener('click', () => {
        const question = document.getElementById('tarotQuestion').value.trim();

        if (!question) {
            alert('질문을 입력해주세요.');
            return;
        }

        if (!checkCredits(1)) return;

        if (!useCredits(1)) {
            alert('크레딧이 부족합니다.');
            return;
        }

        // Hide input, show cards
        tarotInput.classList.add('hidden');
        tarotCardsDiv.classList.remove('hidden');
        tarotResult.classList.add('hidden');

        // Reset cards
        const cards = document.querySelectorAll('.tarot-card');
        cards.forEach(card => {
            card.classList.remove('flipped');
            card.style.pointerEvents = 'auto';
        });

        // Shuffle and select random cards
        const selectedCardIndices = [];
        while (selectedCardIndices.length < 3) {
            const randomIndex = Math.floor(Math.random() * tarotCards.length);
            if (!selectedCardIndices.includes(randomIndex)) {
                selectedCardIndices.push(randomIndex);
            }
        }

        // Card selection handler
        let selectedCards = [];
        cards.forEach((card, index) => {
            const newHandler = function () {
                if (!this.classList.contains('flipped')) {
                    this.classList.add('flipped');
                    const cardData = tarotCards[selectedCardIndices[selectedCards.length]];
                    this.querySelector('.card-front').textContent = cardData.emoji;
                    selectedCards.push(cardData);
                    this.style.pointerEvents = 'none';

                    if (selectedCards.length === 3) {
                        setTimeout(() => {
                            showTarotReading(question, selectedCards);
                        }, 1000);
                    }
                }
            };

            // Remove old listeners by cloning
            const newCard = card.cloneNode(true);
            card.parentNode.replaceChild(newCard, card);
            newCard.addEventListener('click', newHandler);
        });
    });
}

function showTarotReading(question, selectedCards) {
    const tarotCardsDiv = document.getElementById('tarotCards');
    const tarotResult = document.getElementById('tarotResult');
    const resultContent = tarotResult.querySelector('.result-content');

    const positions = ['과거', '현재', '미래'];

    let resultHTML = `<h3>🎴 타로 리딩 결과</h3>`;
    resultHTML += `<p style="color: var(--text-primary); margin-bottom: 2rem;"><strong>질문:</strong> ${question}</p>`;

    selectedCards.forEach((card, i) => {
        resultHTML += `
            <div style="margin-bottom: 2rem; padding: 1.5rem; background: hsla(240, 30%, 10%, 0.5); border-radius: 12px; border-left: 4px solid var(--primary-purple);">
                <h4 style="color: var(--accent-gold); font-size: 1.5rem; margin-bottom: 0.5rem;">
                    ${card.emoji} ${positions[i]}: ${card.name}
                </h4>
                <p style="color: var(--secondary-pink); margin-bottom: 0.5rem;"><strong>${card.meaning}</strong></p>
                <p>${card.description}</p>
            </div>
        `;
    });

    resultHTML += `
        <div style="margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, hsla(270, 70%, 30%, 0.3), hsla(320, 70%, 30%, 0.3)); border-radius: 12px;">
            <h4 style="color: var(--secondary-pink); margin-bottom: 1rem;">✨ 종합 해석</h4>
            <p>카드들은 당신의 과거 경험이 현재에 영향을 미치고 있으며, 이를 바탕으로 긍정적인 미래를 만들어갈 수 있음을 보여줍니다. ${selectedCards[2].meaning}의 에너지를 받아들이고, 자신의 직관을 믿으세요.</p>
        </div>
    `;

    if (!isPremium) {
        resultHTML += `
            <div style="margin-top: 1.5rem; padding: 1rem; background: hsla(45, 100%, 30%, 0.1); border: 2px dashed var(--accent-gold); border-radius: 12px; text-align: center;">
                <p style="color: var(--accent-gold);">🔒 프리미엄 회원은 AI가 당신의 상황에 맞춘 구체적인 행동 지침을 제공합니다.</p>
            </div>
        `;
    }

    resultContent.innerHTML = resultHTML;
    tarotCardsDiv.classList.add('hidden');
    tarotResult.classList.remove('hidden');
}

// ===== Saju Service =====
function initSaju() {
    const getSajuBtn = document.getElementById('getSajuBtn');

    getSajuBtn.addEventListener('click', () => {
        const birthDate = document.getElementById('birthDate').value;
        const gender = document.getElementById('gender').value;
        const birthTime = document.getElementById('birthTime').value;

        if (!birthDate || !gender) {
            alert('생년월일과 성별을 모두 입력해주세요.');
            return;
        }

        if (!checkCredits(2)) return;

        if (!useCredits(2)) {
            alert('크레딧이 부족합니다.');
            return;
        }

        showSajuReading(birthDate, gender, birthTime);
    });
}

function showSajuReading(birthDate, gender, birthTime) {
    const sajuInput = document.getElementById('sajuInput');
    const sajuResult = document.getElementById('sajuResult');
    const resultContent = sajuResult.querySelector('.result-content');

    const date = new Date(birthDate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;

    // Calculate zodiac sign
    const yearMod = year % 12;
    const zodiacAnimals = ['원숭이', '닭', '개', '돼지', '쥐', '소', '호랑이', '토끼', '용', '뱀', '말', '양'];
    const zodiacAnimal = zodiacAnimals[yearMod];

    // Heavenly stems and Earthly branches (simplified)
    const heavenlyStems = ['갑(甲)', '을(乙)', '병(丙)', '정(丁)', '무(戊)', '기(己)', '경(庚)', '신(辛)', '임(壬)', '계(癸)'];
    const earthlyBranches = ['자(子)', '축(丑)', '인(寅)', '묘(卯)', '진(辰)', '사(巳)', '오(午)', '미(未)', '신(申)', '유(酉)', '술(戌)', '해(亥)'];

    const yearStem = heavenlyStems[year % 10];
    const yearBranch = earthlyBranches[year % 12];

    // Fortune ratings (randomized for demo)
    const fortunes = {
        wealth: Math.floor(Math.random() * 5) + 1,
        love: Math.floor(Math.random() * 5) + 1,
        career: Math.floor(Math.random() * 5) + 1,
        health: Math.floor(Math.random() * 5) + 1,
        study: Math.floor(Math.random() * 5) + 1
    };

    let resultHTML = `
        <h3>📿 ${currentYear}년 사주팔자</h3>
        <div style="text-align: center; margin: 2rem 0; padding: 2rem; background: hsla(270, 70%, 30%, 0.2); border-radius: 16px;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">🐉</div>
            <h4 style="font-size: 1.8rem; color: var(--accent-gold); margin-bottom: 0.5rem;">${zodiacAnimal}띠</h4>
            <p style="color: var(--text-secondary); margin-bottom: 1rem;">만 ${age}세 (${year}년생)</p>
            <p style="font-size: 1.2rem; color: var(--primary-purple-light);">${yearStem}${yearBranch}년</p>
            ${birthTime ? `<p style="color: var(--text-secondary); margin-top: 0.5rem;">출생 시간: ${birthTime}</p>` : ''}
        </div>

        <div style="margin-bottom: 2rem; padding: 2rem; background: hsla(240, 30%, 10%, 0.5); border-radius: 12px;">
            <h4 style="color: var(--primary-purple-light); margin-bottom: 1.5rem; font-size: 1.5rem;">🌟 ${currentYear}년 운세</h4>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
                <div style="text-align: center; padding: 1.5rem; background: hsla(270, 70%, 30%, 0.2); border-radius: 12px;">
                    <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">💰</div>
                    <h5 style="color: var(--accent-gold); margin-bottom: 0.5rem;">재물운</h5>
                    <p style="font-size: 1.2rem;">${'★'.repeat(fortunes.wealth)}${'☆'.repeat(5 - fortunes.wealth)}</p>
                </div>
                <div style="text-align: center; padding: 1.5rem; background: hsla(320, 70%, 30%, 0.2); border-radius: 12px;">
                    <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">❤️</div>
                    <h5 style="color: var(--secondary-pink); margin-bottom: 0.5rem;">연애운</h5>
                    <p style="font-size: 1.2rem;">${'★'.repeat(fortunes.love)}${'☆'.repeat(5 - fortunes.love)}</p>
                </div>
                <div style="text-align: center; padding: 1.5rem; background: hsla(270, 70%, 30%, 0.2); border-radius: 12px;">
                    <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">💼</div>
                    <h5 style="color: var(--primary-purple-light); margin-bottom: 0.5rem;">사업운</h5>
                    <p style="font-size: 1.2rem;">${'★'.repeat(fortunes.career)}${'☆'.repeat(5 - fortunes.career)}</p>
                </div>
                <div style="text-align: center; padding: 1.5rem; background: hsla(320, 70%, 30%, 0.2); border-radius: 12px;">
                    <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🏥</div>
                    <h5 style="color: var(--accent-gold); margin-bottom: 0.5rem;">건강운</h5>
                    <p style="font-size: 1.2rem;">${'★'.repeat(fortunes.health)}${'☆'.repeat(5 - fortunes.health)}</p>
                </div>
                <div style="text-align: center; padding: 1.5rem; background: hsla(270, 70%, 30%, 0.2); border-radius: 12px;">
                    <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📚</div>
                    <h5 style="color: var(--secondary-pink); margin-bottom: 0.5rem;">학업운</h5>
                    <p style="font-size: 1.2rem;">${'★'.repeat(fortunes.study)}${'☆'.repeat(5 - fortunes.study)}</p>
                </div>
            </div>

            <div style="padding: 1.5rem; background: hsla(270, 70%, 20%, 0.3); border-radius: 12px; border-left: 4px solid var(--accent-gold);">
                <h5 style="color: var(--accent-gold); margin-bottom: 1rem;">💡 올해의 조언</h5>
                <p>올해는 ${zodiacAnimal}띠에게 ${fortunes.career >= 4 ? '매우 좋은' : fortunes.career >= 3 ? '괜찮은' : '주의가 필요한'} 해입니다. 
                특히 ${fortunes.wealth >= 4 ? '재물운이 상승' : '재물 관리에 신중'}하고, 
                ${fortunes.love >= 4 ? '연애운이 좋아 새로운 인연을 만날 수 있습니다' : '인간관계에 신경 쓰세요'}. 
                건강 관리를 소홀히 하지 말고, 꾸준한 노력으로 목표를 향해 나아가세요.</p>
            </div>
        </div>

        <div style="padding: 1.5rem; background: linear-gradient(135deg, hsla(270, 70%, 30%, 0.3), hsla(320, 70%, 30%, 0.3)); border-radius: 12px;">
            <h4 style="color: var(--secondary-pink); margin-bottom: 1rem;">✨ 행운의 요소</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                <div>
                    <strong style="color: var(--accent-gold);">행운의 색:</strong>
                    <p>${['빨강', '파랑', '노랑', '초록', '보라'][Math.floor(Math.random() * 5)]}</p>
                </div>
                <div>
                    <strong style="color: var(--accent-gold);">행운의 숫자:</strong>
                    <p>${Math.floor(Math.random() * 9) + 1}, ${Math.floor(Math.random() * 90) + 10}</p>
                </div>
                <div>
                    <strong style="color: var(--accent-gold);">행운의 방향:</strong>
                    <p>${['동쪽', '서쪽', '남쪽', '북쪽'][Math.floor(Math.random() * 4)]}</p>
                </div>
            </div>
        </div>
    `;

    if (!isPremium) {
        resultHTML += `
            <div style="margin-top: 1.5rem; padding: 1rem; background: hsla(45, 100%, 30%, 0.1); border: 2px dashed var(--accent-gold); border-radius: 12px; text-align: center;">
                <p style="color: var(--accent-gold);">🔒 프리미엄 회원은 평생 대운, 10년 세운, 월별 운세까지 상세하게 확인할 수 있습니다.</p>
            </div>
        `;
    }

    resultContent.innerHTML = resultHTML;
    sajuInput.classList.add('hidden');
    sajuResult.classList.remove('hidden');
}

// ===== Dream Interpretation Service =====
function initDream() {
    const interpretBtn = document.getElementById('interpretDreamBtn');

    interpretBtn.addEventListener('click', () => {
        const dreamContent = document.getElementById('dreamContent').value.trim();

        if (!dreamContent) {
            alert('꿈의 내용을 입력해주세요.');
            return;
        }

        if (!checkCredits(1)) return;

        if (!useCredits(1)) {
            alert('크레딧이 부족합니다.');
            return;
        }

        showDreamInterpretation(dreamContent);
    });
}

function showDreamInterpretation(dreamContent) {
    const dreamInput = document.getElementById('dreamInput');
    const dreamResult = document.getElementById('dreamResult');
    const resultContent = dreamResult.querySelector('.result-content');

    // Find keywords in dream
    let foundKeywords = [];
    for (let keyword in dreamDatabase) {
        if (dreamContent.includes(keyword)) {
            foundKeywords.push({ keyword, ...dreamDatabase[keyword] });
        }
    }

    // Determine if it's a lucky dream
    const isLuckyDream = foundKeywords.some(k => k.lucky);
    const luckyCount = foundKeywords.filter(k => k.lucky).length;
    const unluckyCount = foundKeywords.filter(k => !k.lucky).length;

    let resultHTML = `<h3>🌙 꿈해몽 결과</h3>`;
    resultHTML += `<div style="padding: 1.5rem; background: hsla(240, 30%, 10%, 0.5); border-radius: 12px; margin-bottom: 2rem;">
        <h4 style="color: var(--text-secondary); margin-bottom: 1rem;">당신의 꿈</h4>
        <p style="color: var(--text-primary); line-height: 1.8;">${dreamContent}</p>
    </div>`;

    // Lucky/Unlucky indicator
    if (foundKeywords.length > 0) {
        const overallLuck = luckyCount > unluckyCount ? '길몽' : luckyCount < unluckyCount ? '흉몽' : '중립적인 꿈';
        const luckColor = luckyCount > unluckyCount ? 'var(--accent-gold)' : luckyCount < unluckyCount ? 'var(--secondary-pink)' : 'var(--text-secondary)';

        resultHTML += `
            <div style="text-align: center; padding: 1.5rem; background: linear-gradient(135deg, hsla(270, 70%, 30%, 0.3), hsla(320, 70%, 30%, 0.3)); border-radius: 12px; margin-bottom: 2rem;">
                <h4 style="color: ${luckColor}; font-size: 1.8rem; margin-bottom: 0.5rem;">${overallLuck}</h4>
                <p style="color: var(--text-secondary);">발견된 상징: ${foundKeywords.length}개</p>
            </div>
        `;
    }

    if (foundKeywords.length > 0) {
        resultHTML += `<h4 style="color: var(--primary-purple-light); margin-bottom: 1.5rem;">🔍 주요 상징 분석</h4>`;

        foundKeywords.forEach(item => {
            const borderColor = item.lucky ? 'var(--accent-gold)' : 'var(--secondary-pink)';
            resultHTML += `
                <div style="margin-bottom: 1.5rem; padding: 1.5rem; background: hsla(240, 30%, 10%, 0.5); border-radius: 12px; border-left: 4px solid ${borderColor};">
                    <h5 style="color: var(--accent-gold); font-size: 1.3rem; margin-bottom: 0.5rem;">
                        ${item.symbol} ${item.keyword} - ${item.meaning}
                    </h5>
                    <p style="margin-bottom: 0.5rem;">${item.interpretation}</p>
                    <span style="display: inline-block; padding: 0.3rem 0.8rem; background: ${item.lucky ? 'hsla(140, 70%, 30%, 0.3)' : 'hsla(0, 70%, 30%, 0.3)'}; border-radius: 12px; font-size: 0.85rem; color: ${item.lucky ? 'var(--accent-green)' : 'var(--secondary-pink)'};">
                        ${item.lucky ? '✓ 길몽' : '⚠ 주의'}
                    </span>
                </div>
            `;
        });
    } else {
        resultHTML += `
            <div style="padding: 1.5rem; background: hsla(240, 30%, 10%, 0.5); border-radius: 12px; margin-bottom: 2rem;">
                <h4 style="color: var(--primary-purple-light); margin-bottom: 1rem;">🔍 일반적인 해석</h4>
                <p>당신의 꿈은 무의식의 메시지를 담고 있습니다. 꿈 속의 감정과 상황을 잘 기억해두세요. 반복되는 꿈이라면 특히 주의 깊게 살펴볼 필요가 있습니다. 꿈에서 느낀 감정이 긍정적이었다면 좋은 징조로, 부정적이었다면 주의가 필요한 신호로 해석할 수 있습니다.</p>
            </div>
        `;
    }

    resultHTML += `
        <div style="margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, hsla(270, 70%, 30%, 0.3), hsla(320, 70%, 30%, 0.3)); border-radius: 12px;">
            <h4 style="color: var(--secondary-pink); margin-bottom: 1rem;">✨ 조언</h4>
            <p>꿈은 당신의 내면과 무의식이 보내는 신호입니다. ${isLuckyDream ? '길몽은 자신감을 가지고 새로운 도전을 시작하라는 메시지입니다.' : '꿈의 메시지를 긍정적으로 받아들이고, 현실에서 필요한 변화나 결정을 내리는 데 참고하세요.'} 좋은 꿈은 현실로 만들기 위해 노력하고, 불안한 꿈은 주의를 상기시키는 것으로 이해하면 됩니다.</p>
        </div>
    `;

    if (!isPremium) {
        resultHTML += `
            <div style="margin-top: 1.5rem; padding: 1rem; background: hsla(45, 100%, 30%, 0.1); border: 2px dashed var(--accent-gold); border-radius: 12px; text-align: center;">
                <p style="color: var(--accent-gold);">🔒 프리미엄 회원은 꿈의 길흉 판단과 구체적인 대처법, 로또 번호 추천까지 제공받습니다.</p>
            </div>
        `;
    }

    resultContent.innerHTML = resultHTML;
    dreamInput.classList.add('hidden');
    dreamResult.classList.remove('hidden');
}

// ===== Compatibility Service =====
function initCompatibility() {
    const checkBtn = document.getElementById('checkCompatibilityBtn');

    checkBtn.addEventListener('click', () => {
        const myBirthDate = document.getElementById('myBirthDate').value;
        const myGender = document.getElementById('myGender').value;
        const partnerBirthDate = document.getElementById('partnerBirthDate').value;
        const partnerGender = document.getElementById('partnerGender').value;
        const compatType = document.getElementById('compatType').value;

        if (!myBirthDate || !myGender || !partnerBirthDate || !partnerGender) {
            alert('모든 정보를 입력해주세요.');
            return;
        }

        if (!checkCredits(2)) return;

        if (!useCredits(2)) {
            alert('크레딧이 부족합니다.');
            return;
        }

        showCompatibilityResult(myBirthDate, myGender, partnerBirthDate, partnerGender, compatType);
    });
}

function showCompatibilityResult(myBirthDate, myGender, partnerBirthDate, partnerGender, compatType) {
    const compatInput = document.getElementById('compatibilityInput');
    const compatResult = document.getElementById('compatibilityResult');
    const resultContent = compatResult.querySelector('.result-content');

    const myYear = new Date(myBirthDate).getFullYear();
    const partnerYear = new Date(partnerBirthDate).getFullYear();

    const zodiacAnimals = ['원숭이', '닭', '개', '돼지', '쥐', '소', '호랑이', '토끼', '용', '뱀', '말', '양'];
    const myZodiac = zodiacAnimals[myYear % 12];
    const partnerZodiac = zodiacAnimals[partnerYear % 12];

    // Calculate compatibility score (simplified)
    const compatScore = Math.floor(Math.random() * 30) + 70; // 70-100
    const stars = Math.floor(compatScore / 20);

    const typeNames = {
        love: '연애 궁합',
        marriage: '결혼 궁합',
        business: '사업 궁합'
    };

    let resultHTML = `
        <h3>💕 ${typeNames[compatType]} 결과</h3>
        
        <div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 1rem; align-items: center; margin: 2rem 0; padding: 2rem; background: hsla(240, 30%, 10%, 0.5); border-radius: 16px;">
            <div style="text-align: center;">
                <div style="font-size: 3rem; margin-bottom: 0.5rem;">👤</div>
                <h4 style="color: var(--primary-purple-light);">나</h4>
                <p style="color: var(--text-secondary);">${myZodiac}띠</p>
                <p style="font-size: 0.9rem; color: var(--text-secondary);">${myYear}년생</p>
            </div>
            <div style="text-align: center; font-size: 3rem;">
                💫
            </div>
            <div style="text-align: center;">
                <div style="font-size: 3rem; margin-bottom: 0.5rem;">👤</div>
                <h4 style="color: var(--secondary-pink);">상대방</h4>
                <p style="color: var(--text-secondary);">${partnerZodiac}띠</p>
                <p style="font-size: 0.9rem; color: var(--text-secondary);">${partnerYear}년생</p>
            </div>
        </div>

        <div style="text-align: center; padding: 2rem; background: linear-gradient(135deg, hsla(270, 70%, 30%, 0.3), hsla(320, 70%, 30%, 0.3)); border-radius: 16px; margin-bottom: 2rem;">
            <h4 style="color: var(--accent-gold); font-size: 2rem; margin-bottom: 1rem;">궁합 점수</h4>
            <div style="font-size: 4rem; font-weight: 700; color: var(--accent-gold); margin-bottom: 0.5rem;">${compatScore}점</div>
            <div style="font-size: 2rem; margin-bottom: 1rem;">${'★'.repeat(stars)}${'☆'.repeat(5 - stars)}</div>
            <p style="font-size: 1.2rem; color: var(--text-primary);">${compatScore >= 90 ? '천생연분' : compatScore >= 80 ? '매우 좋음' : compatScore >= 70 ? '좋음' : '보통'}</p>
        </div>

        <div style="margin-bottom: 2rem;">
            <h4 style="color: var(--primary-purple-light); margin-bottom: 1.5rem;">📊 세부 궁합</h4>
            
            <div style="display: grid; gap: 1rem;">
                ${generateCompatDetail('성격 궁합', Math.floor(Math.random() * 30) + 70)}
                ${generateCompatDetail('가치관 궁합', Math.floor(Math.random() * 30) + 70)}
                ${generateCompatDetail('소통 궁합', Math.floor(Math.random() * 30) + 70)}
                ${compatType === 'love' || compatType === 'marriage' ? generateCompatDetail('애정 궁합', Math.floor(Math.random() * 30) + 70) : ''}
                ${compatType === 'business' ? generateCompatDetail('협업 궁합', Math.floor(Math.random() * 30) + 70) : ''}
            </div>
        </div>

        <div style="padding: 1.5rem; background: hsla(240, 30%, 10%, 0.5); border-radius: 12px; margin-bottom: 2rem;">
            <h4 style="color: var(--accent-gold); margin-bottom: 1rem;">💡 궁합 분석</h4>
            <p style="margin-bottom: 1rem;">${myZodiac}띠와 ${partnerZodiac}띠는 ${compatScore >= 85 ? '매우 잘 어울리는' : compatScore >= 75 ? '잘 어울리는' : '괜찮은'} 조합입니다.</p>
            <p>${compatType === 'love' ? '서로의 장점을 이해하고 존중한다면 아름다운 관계를 만들어갈 수 있습니다.' : compatType === 'marriage' ? '결혼 생활에서 서로를 보완하며 행복한 가정을 꾸릴 수 있습니다.' : '비즈니스 파트너로서 서로의 강점을 살려 성공적인 협업이 가능합니다.'}</p>
        </div>

        <div style="padding: 1.5rem; background: linear-gradient(135deg, hsla(270, 70%, 30%, 0.3), hsla(320, 70%, 30%, 0.3)); border-radius: 12px;">
            <h4 style="color: var(--secondary-pink); margin-bottom: 1rem;">✨ 관계 발전 조언</h4>
            <ul style="list-style: none; padding: 0;">
                <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-glow);">✓ 서로의 차이를 인정하고 존중하세요</li>
                <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-glow);">✓ 솔직한 대화로 오해를 풀어가세요</li>
                <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-glow);">✓ 작은 배려가 큰 행복을 만듭니다</li>
                <li style="padding: 0.5rem 0;">✓ 함께 성장하는 관계를 만들어가세요</li>
            </ul>
        </div>
    `;

    if (!isPremium) {
        resultHTML += `
            <div style="margin-top: 1.5rem; padding: 1rem; background: hsla(45, 100%, 30%, 0.1); border: 2px dashed var(--accent-gold); border-radius: 12px; text-align: center;">
                <p style="color: var(--accent-gold);">🔒 프리미엄 회원은 궁합 개선 방법과 최적의 만남 시기까지 확인할 수 있습니다.</p>
            </div>
        `;
    }

    resultContent.innerHTML = resultHTML;
    compatInput.classList.add('hidden');
    compatResult.classList.remove('hidden');
}

function generateCompatDetail(label, score) {
    const percentage = score;
    return `
        <div style="padding: 1rem; background: hsla(240, 30%, 10%, 0.3); border-radius: 8px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span>${label}</span>
                <span style="color: var(--accent-gold); font-weight: 700;">${score}%</span>
            </div>
            <div style="background: hsla(240, 30%, 20%, 0.5); border-radius: 10px; height: 10px; overflow: hidden;">
                <div style="background: linear-gradient(90deg, var(--primary-purple), var(--accent-gold)); height: 100%; width: ${percentage}%; transition: width 1s ease-out;"></div>
            </div>
        </div>
    `;
}

// ===== Naming Service =====
function initNaming() {
    const analyzeBtn = document.getElementById('analyzeNameBtn');

    analyzeBtn.addEventListener('click', () => {
        const lastName = document.getElementById('lastName').value.trim();
        const firstName = document.getElementById('firstName').value.trim();
        const gender = document.getElementById('nameGender').value;

        if (!lastName || !firstName || !gender) {
            alert('모든 정보를 입력해주세요.');
            return;
        }

        if (!checkCredits(1)) return;

        if (!useCredits(1)) {
            alert('크레딧이 부족합니다.');
            return;
        }

        showNameAnalysis(lastName, firstName, gender);
    });
}

function showNameAnalysis(lastName, firstName, gender) {
    const namingInput = document.getElementById('namingInput');
    const namingResult = document.getElementById('namingResult');
    const resultContent = namingResult.querySelector('.result-content');

    const fullName = lastName + firstName;

    // 간단한 획수 계산 (실제로는 더 복잡한 알고리즘 필요)
    const strokeCount = {
        '김': 8, '이': 7, '박': 10, '최': 11, '정': 9, '강': 11, '조': 10, '윤': 7, '장': 11, '임': 7,
        '한': 12, '오': 8, '서': 9, '신': 10, '권': 18, '황': 12, '안': 6, '송': 13, '류': 14, '전': 11,
        '민': 5, '준': 7, '서': 9, '현': 16, '지': 12, '우': 7, '하': 5, '윤': 7, '채': 11, '은': 13,
        '수': 6, '연': 10, '아': 7, '영': 9, '진': 10, '희': 13, '경': 12, '미': 9, '혜': 13, '정': 9
    };

    let totalStrokes = 0;
    for (let char of fullName) {
        totalStrokes += strokeCount[char] || Math.floor(Math.random() * 15) + 5;
    }

    const score = Math.floor(Math.random() * 30) + 70;
    const stars = Math.floor(score / 20);

    const elements = ['목(木)', '화(火)', '토(土)', '금(金)', '수(水)'];
    const element = elements[totalStrokes % 5];

    let resultHTML = `
        <h3>✍️ 이름 분석 결과</h3>
        
        <div style="text-align: center; padding: 2rem; background: linear-gradient(135deg, hsla(270, 70%, 30%, 0.3), hsla(320, 70%, 30%, 0.3)); border-radius: 16px; margin-bottom: 2rem;">
            <h2 style="font-size: 2.5rem; color: var(--accent-gold); margin-bottom: 1rem;">${fullName}</h2>
            <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">총 획수: ${totalStrokes}획 | 오행: ${element}</p>
            <div style="font-size: 3rem; margin-bottom: 1rem;">${score}점</div>
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">${'★'.repeat(stars)}${'☆'.repeat(5 - stars)}</div>
            <p style="font-size: 1.2rem; color: var(--primary-purple-light);">${score >= 90 ? '매우 좋은 이름' : score >= 80 ? '좋은 이름' : score >= 70 ? '괜찮은 이름' : '보통 이름'}</p>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h4 style="color: var(--primary-purple-light); margin-bottom: 1.5rem;">📊 이름 운세</h4>
            
            <div style="display: grid; gap: 1rem;">
                ${generateNameDetail('재물운', Math.floor(Math.random() * 30) + 70)}
                ${generateNameDetail('건강운', Math.floor(Math.random() * 30) + 70)}
                ${generateNameDetail('사업운', Math.floor(Math.random() * 30) + 70)}
                ${generateNameDetail('대인관계운', Math.floor(Math.random() * 30) + 70)}
            </div>
        </div>
        
        <div style="padding: 1.5rem; background: hsla(240, 30%, 10%, 0.5); border-radius: 12px; margin-bottom: 2rem;">
            <h4 style="color: var(--accent-gold); margin-bottom: 1rem;">💡 성명학 해석</h4>
            <p style="margin-bottom: 1rem;">${fullName}님의 이름은 ${element} 기운이 강한 이름입니다.</p>
            <p>총 획수 ${totalStrokes}획은 ${totalStrokes % 2 === 0 ? '음(陰)' : '양(陽)'}의 기운을 가지고 있으며, 
            ${score >= 85 ? '매우 길한 수리로 성공과 발전을 상징합니다.' :
            score >= 75 ? '좋은 수리로 안정과 평온을 가져옵니다.' :
                '무난한 수리로 꾸준한 노력이 필요합니다.'}</p>
        </div>
        
        <div style="padding: 1.5rem; background: linear-gradient(135deg, hsla(270, 70%, 30%, 0.3), hsla(320, 70%, 30%, 0.3)); border-radius: 12px;">
            <h4 style="color: var(--secondary-pink); margin-bottom: 1rem;">✨ 조언</h4>
            <ul style="list-style: none; padding: 0;">
                <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-glow);">✓ ${element} 기운을 살리는 색상을 자주 사용하세요</li>
                <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-glow);">✓ 긍정적인 마음가짐으로 이름의 기운을 높이세요</li>
                <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-glow);">✓ 이름에 담긴 의미를 되새기며 살아가세요</li>
                <li style="padding: 0.5rem 0;">✓ 주변 사람들과 좋은 관계를 유지하세요</li>
            </ul>
        </div>
    `;

    if (!isPremium) {
        resultHTML += `
            <div style="margin-top: 1.5rem; padding: 1rem; background: hsla(45, 100%, 30%, 0.1); border: 2px dashed var(--accent-gold); border-radius: 12px; text-align: center;">
                <p style="color: var(--accent-gold);">🔒 프리미엄 회원은 사주에 맞는 최적의 이름을 추천받을 수 있습니다.</p>
            </div>
        `;
    }

    resultContent.innerHTML = resultHTML;
    namingInput.classList.add('hidden');
    namingResult.classList.remove('hidden');
}

function generateNameDetail(label, score) {
    return `
        <div style="padding: 1rem; background: hsla(240, 30%, 10%, 0.3); border-radius: 8px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span>${label}</span>
                <span style="color: var(--accent-gold); font-weight: 700;">${score}점</span>
            </div>
            <div style="background: hsla(240, 30%, 20%, 0.5); border-radius: 10px; height: 10px; overflow: hidden;">
                <div style="background: linear-gradient(90deg, var(--primary-purple), var(--accent-gold)); height: 100%; width: ${score}%; transition: width 1s ease-out;"></div>
            </div>
        </div>
    `;
}

// ===== Today's Fortune Service =====
function initToday() {
    const getTodayBtn = document.getElementById('getTodayFortuneBtn');

    getTodayBtn.addEventListener('click', () => {
        const birthDate = document.getElementById('todayBirthDate').value;
        const gender = document.getElementById('todayGender').value;

        if (!birthDate || !gender) {
            alert('생년월일과 성별을 모두 입력해주세요.');
            return;
        }

        // 오늘의 운세는 무료
        showTodayFortune(birthDate, gender);
    });
}

function showTodayFortune(birthDate, gender) {
    const todayInput = document.getElementById('todayInput');
    const todayResult = document.getElementById('todayResult');
    const resultContent = todayResult.querySelector('.result-content');

    const date = new Date(birthDate);
    const year = date.getFullYear();
    const zodiacAnimals = ['원숭이', '닭', '개', '돼지', '쥐', '소', '호랑이', '토끼', '용', '뱀', '말', '양'];
    const zodiacAnimal = zodiacAnimals[year % 12];

    const today = new Date();
    const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][today.getDay()];

    const fortunes = {
        overall: Math.floor(Math.random() * 5) + 1,
        love: Math.floor(Math.random() * 5) + 1,
        money: Math.floor(Math.random() * 5) + 1,
        work: Math.floor(Math.random() * 5) + 1,
        health: Math.floor(Math.random() * 5) + 1
    };

    const luckyColors = ['빨강', '파랑', '노랑', '초록', '보라', '흰색', '검정'];
    const luckyColor = luckyColors[Math.floor(Math.random() * luckyColors.length)];
    const luckyNumber = Math.floor(Math.random() * 9) + 1;
    const luckyTime = ['오전 6-9시', '오전 9-12시', '오후 12-3시', '오후 3-6시', '오후 6-9시', '오후 9-12시'][Math.floor(Math.random() * 6)];

    let resultHTML = `
        <h3>📅 ${today.getMonth() + 1}월 ${today.getDate()}일 (${dayOfWeek}) 오늘의 운세</h3>
        
        <div style="text-align: center; padding: 2rem; background: linear-gradient(135deg, hsla(270, 70%, 30%, 0.3), hsla(320, 70%, 30%, 0.3)); border-radius: 16px; margin-bottom: 2rem;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🐉</div>
            <h4 style="font-size: 1.5rem; color: var(--accent-gold); margin-bottom: 0.5rem;">${zodiacAnimal}띠</h4>
            <p style="color: var(--text-secondary);">${year}년생 ${gender === 'male' ? '남성' : '여성'}</p>
        </div>
        
        <div style="margin-bottom: 2rem; padding: 2rem; background: hsla(240, 30%, 10%, 0.5); border-radius: 12px;">
            <h4 style="color: var(--primary-purple-light); margin-bottom: 1.5rem; font-size: 1.3rem;">🌟 오늘의 종합운</h4>
            <div style="text-align: center; margin-bottom: 1.5rem;">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">${'★'.repeat(fortunes.overall)}${'☆'.repeat(5 - fortunes.overall)}</div>
                <p style="font-size: 1.1rem; color: var(--accent-gold);">${fortunes.overall >= 4 ? '매우 좋은 날' : fortunes.overall >= 3 ? '좋은 날' : '평범한 날'}</p>
            </div>
            <p style="line-height: 1.8;">
                오늘은 ${zodiacAnimal}띠에게 ${fortunes.overall >= 4 ? '매우 좋은' : fortunes.overall >= 3 ? '괜찮은' : '평범한'} 하루입니다. 
                ${fortunes.overall >= 4 ? '새로운 기회가 찾아올 수 있으니 적극적으로 행동하세요.' :
            fortunes.overall >= 3 ? '차근차근 계획한 일을 진행하면 좋은 결과가 있을 것입니다.' :
                '무리하지 말고 현재 하고 있는 일에 집중하세요.'}
            </p>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h4 style="color: var(--primary-purple-light); margin-bottom: 1.5rem;">📊 세부 운세</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1.5rem;">
                <div style="text-align: center; padding: 1.5rem; background: hsla(270, 70%, 30%, 0.2); border-radius: 12px;">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">❤️</div>
                    <h5 style="color: var(--secondary-pink); margin-bottom: 0.5rem;">연애운</h5>
                    <p style="font-size: 1.2rem;">${'★'.repeat(fortunes.love)}${'☆'.repeat(5 - fortunes.love)}</p>
                </div>
                <div style="text-align: center; padding: 1.5rem; background: hsla(320, 70%, 30%, 0.2); border-radius: 12px;">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">💰</div>
                    <h5 style="color: var(--accent-gold); margin-bottom: 0.5rem;">재물운</h5>
                    <p style="font-size: 1.2rem;">${'★'.repeat(fortunes.money)}${'☆'.repeat(5 - fortunes.money)}</p>
                </div>
                <div style="text-align: center; padding: 1.5rem; background: hsla(270, 70%, 30%, 0.2); border-radius: 12px;">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">💼</div>
                    <h5 style="color: var(--primary-purple-light); margin-bottom: 0.5rem;">사업운</h5>
                    <p style="font-size: 1.2rem;">${'★'.repeat(fortunes.work)}${'☆'.repeat(5 - fortunes.work)}</p>
                </div>
                <div style="text-align: center; padding: 1.5rem; background: hsla(320, 70%, 30%, 0.2); border-radius: 12px;">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">🏥</div>
                    <h5 style="color: var(--secondary-pink); margin-bottom: 0.5rem;">건강운</h5>
                    <p style="font-size: 1.2rem;">${'★'.repeat(fortunes.health)}${'☆'.repeat(5 - fortunes.health)}</p>
                </div>
            </div>
        </div>
        
        <div style="padding: 1.5rem; background: linear-gradient(135deg, hsla(270, 70%, 30%, 0.3), hsla(320, 70%, 30%, 0.3)); border-radius: 12px; margin-bottom: 2rem;">
            <h4 style="color: var(--accent-gold); margin-bottom: 1.5rem;">🍀 오늘의 행운 요소</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem;">
                <div>
                    <strong style="color: var(--accent-gold);">행운의 색:</strong>
                    <p>${luckyColor}</p>
                </div>
                <div>
                    <strong style="color: var(--accent-gold);">행운의 숫자:</strong>
                    <p>${luckyNumber}</p>
                </div>
                <div>
                    <strong style="color: var(--accent-gold);">행운의 시간:</strong>
                    <p>${luckyTime}</p>
                </div>
            </div>
        </div>
        
        <div style="padding: 1.5rem; background: hsla(240, 30%, 10%, 0.5); border-radius: 12px;">
            <h4 style="color: var(--secondary-pink); margin-bottom: 1rem;">✨ 오늘의 조언</h4>
            <ul style="list-style: none; padding: 0;">
                <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-glow);">✓ 긍정적인 마음으로 하루를 시작하세요</li>
                <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-glow);">✓ 행운의 색상을 활용해보세요</li>
                <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-glow);">✓ 중요한 결정은 행운의 시간대에 하세요</li>
                <li style="padding: 0.5rem 0;">✓ 주변 사람들에게 친절을 베풀면 더 큰 행운이 찾아옵니다</li>
            </ul>
        </div>
    `;

    if (!isPremium) {
        resultHTML += `
            <div style="margin-top: 1.5rem; padding: 1rem; background: hsla(45, 100%, 30%, 0.1); border: 2px dashed var(--accent-gold); border-radius: 12px; text-align: center;">
                <p style="color: var(--accent-gold);">🔒 프리미엄 회원은 주간, 월간 운세까지 확인할 수 있습니다.</p>
            </div>
        `;
    }

    resultContent.innerHTML = resultHTML;
    todayInput.classList.add('hidden');
    todayResult.classList.remove('hidden');
}




// ===== LOADING OVERLAY FUNCTIONS =====

function showLoading(message) {
    const overlay = document.getElementById('loadingOverlay');
    const textElement = document.getElementById('loadingText');

    if (overlay) {
        overlay.classList.add('active');
    }

    if (textElement && message) {
        textElement.textContent = message;
    }
}

function hideLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.classList.remove('active');
    }
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
        document.getElementById('paymentMethods').classList.add('hidden');
        selectedPlan = null;
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

function selectPrice(plan) {
    selectedPlan = plan;

    // Visual feedback - reset all cards and buttons
    document.querySelectorAll('.price-card').forEach(c => {
        c.style.border = '1px solid rgba(255,255,255,0.1)';
        c.style.transform = 'scale(1)';
        c.style.boxShadow = 'none';

        // Reset all buttons to transparent style
        const btn = c.querySelector('.select-btn');
        if (btn) {
            btn.style.background = 'transparent';
            btn.style.border = '1px solid var(--accent-gold)';
            btn.style.color = 'var(--accent-gold)';
        }
    });

    // Highlight selected card
    const selectedCard = document.querySelector(`.price-card[onclick="selectPrice('${plan}')"]`);
    if (selectedCard) {
        selectedCard.style.border = '2px solid var(--accent-gold)';
        selectedCard.style.transform = 'scale(1.05)';
        selectedCard.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.3)';

        // Change selected button to gold
        const selectedBtn = selectedCard.querySelector('.select-btn');
        if (selectedBtn) {
            selectedBtn.style.background = 'var(--accent-gold)';
            selectedBtn.style.border = 'none';
            selectedBtn.style.color = 'black';
        }
    }

    // Show payment methods
    const methods = document.getElementById('paymentMethods');
    if (methods) {
        methods.classList.remove('hidden');
        methods.scrollIntoView({ behavior: 'smooth' });
    }
}

function processPayment(method) {
    if (!selectedPlan) return;

    // Credits amount based on plan
    let creditsToAdd = 0;
    let amount = 0;

    switch (selectedPlan) {
        case 'starter': creditsToAdd = 10; amount = 1.99; break;
        case 'popular': creditsToAdd = 50; amount = 4.99; break;
        case 'premium': creditsToAdd = 120; amount = 9.99; break;
    }

    showLoading(`Processing ${method === 'stripe' ? 'Card' : 'PayPal'} Payment...`);

    // SIMULATED PAYMENT PROCESS
    // TODO: Replace this timeout with actual API call
    // Stripe: stripe.redirectToCheckout(...)
    // PayPal: paypal.Buttons(...).render(...)

    setTimeout(() => {
        hideLoading();

        // Success!
        userCredits += creditsToAdd;
        updateCreditsDisplay();

        // Save to local storage (simple persistence)
        localStorage.setItem('mysticUserCredits', userCredits);

        // Show success message
        alert(`Payment Successful! ${creditsToAdd} credits have been added to your account.`);
        closeModal('paymentModal');

        // If premium, unlock premium features
        if (selectedPlan === 'premium') {
            isPremium = true;
            document.querySelector('.upgrade-btn').textContent = '👑 Premium Member';
        }

    }, 2000);
}

// Update upgrade button to open payment modal
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
