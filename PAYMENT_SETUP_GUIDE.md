# 결제 시스템 설정 가이드

## 🔧 실제 결제 연동 방법

### 1. Stripe 설정

#### 1.1 Stripe 계정 생성
1. [Stripe 대시보드](https://dashboard.stripe.com/register)에서 계정 생성
2. 비즈니스 정보 입력 및 인증 완료

#### 1.2 Payment Links 생성
1. Stripe 대시보드 → **Products** → **+ Add Product**
2. 3개의 상품 생성:
   - **스타터 패키지**: $1.99 (10 크레딧)
   - **인기 패키지**: $4.99 (30 크레딧)
   - **프리미엄 패키지**: $9.99 (100 크레딧)

3. 각 상품에 대해 **Payment Link** 생성:
   - Product 페이지 → **Create payment link**
   - Success URL: `https://yourdomain.com/?payment_success=true`
   - Cancel URL: `https://yourdomain.com/`

4. 생성된 Payment Link를 복사하여 `payment_functions.js`에 입력:
```javascript
stripeUrl: 'https://buy.stripe.com/XXXXX' // 실제 링크로 교체
```

### 2. PayPal 설정

#### 2.1 PayPal.me 링크 생성
1. [PayPal.me](https://www.paypal.com/paypalme/) 접속
2. 개인 링크 생성 (예: `paypal.me/yourusername`)

#### 2.2 payment_functions.js 업데이트
```javascript
paypalUrl: 'https://www.paypal.com/paypalme/YOURUSERNAME/1.99USD'
```

**YOURUSERNAME**을 실제 PayPal.me 사용자명으로 교체

### 3. 결제 완료 후 크레딧 추가

현재 구현된 방식:
- 결제 완료 시 `?payment_success=true` 파라미터와 함께 리다이렉트
- `localStorage`에 저장된 결제 정보를 확인하여 크레딧 자동 추가

**보안 강화 (권장):**
서버 사이드에서 Webhook을 통해 결제 확인 후 크레딧 추가
- Stripe Webhook 설정
- 서버에서 결제 검증 후 데이터베이스에 크레딧 저장

### 4. 테스트

#### 4.1 Stripe 테스트 모드
- Stripe 대시보드에서 "Test mode" 활성화
- 테스트 카드 번호: `4242 4242 4242 4242`
- 만료일: 미래 날짜
- CVC: 아무 3자리 숫자

#### 4.2 PayPal 샌드박스
- [PayPal Developer](https://developer.paypal.com/) 에서 샌드박스 계정 생성
- 테스트 계정으로 결제 테스트

### 5. 프로덕션 배포 전 체크리스트

- [ ] Stripe 계정 인증 완료
- [ ] 실제 Payment Links 생성 및 URL 교체
- [ ] PayPal.me 링크 설정 및 URL 교체
- [ ] Success URL이 실제 도메인으로 설정되어 있는지 확인
- [ ] 테스트 모드에서 결제 플로우 테스트 완료
- [ ] Stripe를 Live 모드로 전환
- [ ] 실제 결제 테스트 (소액)

### 6. 보안 고려사항

**현재 구현 (클라이언트 사이드):**
- ✅ 간단하고 빠른 구현
- ⚠️ 보안 취약점: 사용자가 localStorage를 조작할 수 있음

**권장 사항 (서버 사이드):**
1. 백엔드 서버 구축 (Node.js, Python, PHP 등)
2. Stripe Webhook 설정하여 결제 검증
3. 데이터베이스에 사용자 크레딧 저장
4. 로그인 시스템 구현

### 7. 파일 위치

- **결제 로직**: `payment_functions.js`
- **결제 모달 HTML**: `index.html` (하단 Payment Modal 섹션)
- **크레딧 표시**: `index.html` (상단 credits-bar)

### 8. 지원

문제가 발생하면:
- Stripe: https://support.stripe.com/
- PayPal: https://www.paypal.com/kr/smarthelp/home

---

## 📝 TODO

`payment_functions.js` 파일에서 다음 항목을 교체하세요:

```javascript
// 1. Stripe URLs (3개)
stripeUrl: 'https://buy.stripe.com/test_XXXXX_starter'  // → 실제 링크
stripeUrl: 'https://buy.stripe.com/test_XXXXX_popular'  // → 실제 링크
stripeUrl: 'https://buy.stripe.com/test_XXXXX_premium'  // → 실제 링크

// 2. PayPal URLs (3개)
paypalUrl: 'https://www.paypal.com/paypalme/YOURUSERNAME/1.99USD'  // → 실제 링크
paypalUrl: 'https://www.paypal.com/paypalme/YOURUSERNAME/4.99USD'  // → 실제 링크
paypalUrl: 'https://www.paypal.com/paypalme/YOURUSERNAME/9.99USD'  // → 실제 링크
```
