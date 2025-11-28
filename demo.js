// Simple demo version - shows alerts when clicking
document.addEventListener('DOMContentLoaded', function () {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('click', function () {
            const service = this.getAttribute('data-service');

            switch (service) {
                case 'tarot':
                    alert('🎴 Tarot Cards\n\nClick OK to draw 3 cards and see your fortune!');
                    break;
                case 'saju':
                    alert('📿 Saju Reading\n\nEnter your birth date to get your fortune analysis!');
                    break;
                case 'dream':
                    alert('🌙 Dream Analysis\n\nTell us your dream and we will interpret it!');
                    break;
                case 'compatibility':
                    alert('💕 Compatibility\n\nEnter two names to check compatibility!');
                    break;
                case 'naming':
                    alert('✍️ Name Analysis\n\nEnter a name to analyze its meaning!');
                    break;
                case 'today':
                    alert('📅 Daily Fortune\n\nToday is a great day! Good luck awaits you!');
                    break;
            }
        });
    });
});
