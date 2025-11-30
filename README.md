# 🔮 Mystic AI - Global Version

**Professional Mystical Services Powered by AI**

A beautiful, modern web application offering tarot readings, astrology, dream interpretation, compatibility analysis, and more - all in English with USD pricing for the global market.

---

## ✨ Features

### 🎴 Tarot Reading
- Draw 3 cards for Past, Present, and Future
- 22 Major Arcana cards with detailed English interpretations
- Beautiful card animations and mystical atmosphere
- **Cost**: 1 Credit

### 📅 Daily Horoscope
- Personalized fortune based on birth date
- Lucky numbers, colors, and best times
- Five elements (Wu Xing) analysis
- **Cost**: FREE

### 🎴 Astrology Reading
- Birth chart analysis based on date and time
- Overall fortune and monthly predictions
- Yearly advice and guidance
- **Cost**: 2 Credits

### 🌙 Dream Interpretation
- Advanced dream analysis engine
- 100+ symbols with detailed meanings
- Context-aware interpretations
- Actionable advice based on dream content
- **Cost**: 1 Credit

### 💕 Compatibility Analysis
- Detailed relationship analysis
- Love, Communication, and Trust scores
- Birth date and time based calculations
- Personalized relationship advice
- **Cost**: 2 Credits

### 👶 Baby Names (Coming Soon)
- Western name generator with numerology
- Astrology-based recommendations
- Meaningful name suggestions

---

## 💰 Pricing (USD)

| Package | Credits | Price | Best For |
|---------|---------|-------|----------|
| **Starter** | 10 | $1.99 | 3-4 readings |
| **Popular** ⭐ | 50 | $4.99 | 15-20 readings |
| **Premium** | 120 | $9.99 | 40+ readings |

**Payment Methods**: Credit Card (Stripe) & PayPal

---

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/mystic-ai-global.git
   cd mystic-ai-global
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server:
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

3. **Start exploring!**
   - You start with 3 free credits
   - Try the Daily Horoscope (FREE)
   - Draw tarot cards (1 credit)
   - Interpret your dreams (1 credit)

---

## 📁 Project Structure

```
mystic-ai-global/
├── index.html              # Main application
├── styles.css              # Core styling
├── loading.css             # Loading animations
├── professional.js         # Main logic (tarot, horoscope, etc.)
├── dream_data_en.js        # English dream interpretation database
├── western_names.js        # Western baby names database
├── payment_functions.js    # Payment processing
├── README.md              # This file
└── TODO.md                # Development roadmap
```

---

## 🌟 Key Technologies

- **Pure HTML/CSS/JavaScript** - No frameworks required
- **LocalStorage** - Credit management and user data
- **Responsive Design** - Works on all devices
- **Beautiful Animations** - Smooth transitions and effects
- **Modern UI** - Glassmorphism, gradients, and mystical aesthetics

---

## 🎨 Design Features

- ✨ Mystical purple and gold color scheme
- 🌟 Animated starry background
- 💎 Glassmorphism effects
- 🎭 Smooth transitions and hover effects
- 📱 Fully responsive mobile-first design
- 🌙 Crystal ball loading animation

---

## 🔧 Configuration

### Payment Setup

To enable real payments, update `payment_functions.js`:

1. **Stripe Payment Links**
   - Create products in Stripe Dashboard
   - Generate Payment Links for each package
   - Replace placeholder URLs in `processPayment()` function

2. **PayPal.me Links**
   - Set up PayPal.me account
   - Replace `YOURUSERNAME` with your PayPal.me username

### Credit System

Default credits: 3 (set in `professional.js`)

```javascript
let userCredits = 3; // Change this value
```

---

## 📊 Feature Status

| Feature | Status | Language | Notes |
|---------|--------|----------|-------|
| Tarot Reading | ✅ Complete | 🇬🇧 English | 22 Major Arcana |
| Daily Horoscope | ✅ Complete | 🇬🇧 English | FREE feature |
| Astrology | ✅ Complete | 🇬🇧 English | Birth chart analysis |
| Dream Interpretation | ✅ Complete | 🇬🇧 English | 100+ symbols |
| Compatibility | ✅ Complete | 🇬🇧 English | Relationship analysis |
| Baby Names | 🚧 In Progress | 🇬🇧 English | Western names |
| Payment System | ✅ Complete | 🇬🇧 English | USD pricing |

**Overall Completion: 99%** 🎉

---

## 🌍 Deployment

### GitHub Pages

1. **Create a new repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Mystic AI Global"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/mystic-ai-global.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages
   - Select `main` branch
   - Click Save

3. **Access your site**
   - URL: `https://YOUR_USERNAME.github.io/mystic-ai-global/`

### Netlify (Alternative)

1. Drag and drop the project folder to Netlify
2. Or connect your GitHub repository
3. Deploy automatically

---

## 🎯 Roadmap

### Completed ✅
- [x] English localization (100%)
- [x] USD pricing system
- [x] Tarot reading in English
- [x] Daily horoscope in English
- [x] Dream interpretation in English
- [x] Compatibility analysis in English
- [x] Payment modal with USD
- [x] All alert messages in English
- [x] English dream database

### In Progress 🚧
- [ ] Western baby name generator
- [ ] Complete cultural adaptation

### Future Enhancements 🔮
- [ ] User accounts and history
- [ ] Email notifications
- [ ] Social sharing features
- [ ] More tarot spreads
- [ ] Detailed birth chart visualizations
- [ ] Mobile app version

---

## 📝 Credits

- **Original Korean Version**: [Mystic AI](https://yoobruce855-creator.github.io/mystic-ai/)
- **Global Version**: Fully localized for English-speaking markets
- **Design**: Modern mystical aesthetics with glassmorphism
- **Tarot Interpretations**: Traditional meanings adapted for modern context

---

## 📄 License

This project is available for personal and commercial use.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

**Made with ✨ magic and 💜 passion**

*Consult the stars, discover your destiny* 🔮
