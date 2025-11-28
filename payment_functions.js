
// ===== PAYMENT FUNCTIONS =====

let selectedPackage = null;

function openPaymentModal() {
    const modal = document.getElementById('paymentModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closePaymentModal() {
    const modal = document.getElementById('paymentModal');
    if (modal) {
        modal.style.display = 'none';
    }
    selectedPackage = null;
}

function selectPackage(packageType) {
    selectedPackage = packageType;
    const packages = {
        starter: { credits: 10, price: '₩1,900', priceKRW: 1900 },
        popular: { credits: 30, price: '₩4,900', priceKRW: 4900 },
        premium: { credits: 100, price: '₩14,900', priceKRW: 14900 }
    };

    const pkg = packages[packageType];

    // 패키지 선택 시각적 피드백
    document.querySelectorAll('.payment-package').forEach(el => {
        el.style.border = '2px solid var(--border-glow)';
    });
    event.target.closest('.payment-package').style.border = '2px solid var(--accent-gold)';

    console.log(`선택된 패키지: ${packageType}, ${pkg.credits} 크레딧, ${pkg.price}`);
}

function processPayment(method) {
    if (!selectedPackage) {
        alert('먼저 패키지를 선택해주세요.');
        return;
    }

    const packages = {
        starter: {
            credits: 10,
            priceUSD: '1.99',
            priceKRW: 1900,
            // TODO: 실제 Stripe Payment Link로 교체하세요
            // Stripe 대시보드 → Products → Payment Links에서 생성
            stripeUrl: 'https://buy.stripe.com/test_XXXXX_starter',
            // TODO: 실제 PayPal.me 링크로 교체하세요
            paypalUrl: 'https://www.paypal.com/paypalme/YOURUSERNAME/1.99USD'
        },
        popular: {
            credits: 30,
            priceUSD: '4.99',
            priceKRW: 4900,
            stripeUrl: 'https://buy.stripe.com/test_XXXXX_popular',
            paypalUrl: 'https://www.paypal.com/paypalme/YOURUSERNAME/4.99USD'
        },
        premium: {
            credits: 100,
            priceUSD: '9.99',
            priceKRW: 14900,
            stripeUrl: 'https://buy.stripe.com/test_XXXXX_premium',
            paypalUrl: 'https://www.paypal.com/paypalme/YOURUSERNAME/9.99USD'
        }
    };

    const pkg = packages[selectedPackage];

    // 결제 정보를 로컬 스토리지에 저장 (결제 완료 후 크레딧 추가용)
    localStorage.setItem('pendingPayment', JSON.stringify({
        package: selectedPackage,
        credits: pkg.credits,
        timestamp: Date.now()
    }));

    if (method === 'stripe') {
        // Stripe 결제 페이지로 이동
        if (confirm(`Stripe로 ${pkg.credits} 크레딧을 구매하시겠습니까?\n\n가격: $${pkg.priceUSD} (약 ₩${pkg.priceKRW.toLocaleString()})`)) {
            window.location.href = pkg.stripeUrl;
        }
    } else if (method === 'paypal') {
        // PayPal 결제 페이지로 이동
        if (confirm(`PayPal로 ${pkg.credits} 크레딧을 구매하시겠습니까?\n\n가격: $${pkg.priceUSD} (약 ₩${pkg.priceKRW.toLocaleString()})`)) {
            window.location.href = pkg.paypalUrl;
        }
    }
}

// 결제 완료 후 크레딧 추가 (페이지 로드 시 확인)
function checkPaymentSuccess() {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentSuccess = urlParams.get('payment_success');

    if (paymentSuccess === 'true') {
        const pendingPayment = localStorage.getItem('pendingPayment');
        if (pendingPayment) {
            const payment = JSON.parse(pendingPayment);

            // 크레딧 추가
            if (typeof userCredits !== 'undefined') {
                userCredits += payment.credits;
                updateCreditsDisplay();
                localStorage.removeItem('pendingPayment');

                alert(`🎉 결제가 완료되었습니다!\n${payment.credits} 크레딧이 추가되었습니다.`);

                // URL에서 파라미터 제거
                window.history.replaceState({}, document.title, window.location.pathname);
            }
        }
    }
}

// Close modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById('paymentModal');
    if (modal && event.target == modal) {
        closePaymentModal();
    }
}

// 페이지 로드 시 결제 성공 확인
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkPaymentSuccess);
} else {
    checkPaymentSuccess();
}
