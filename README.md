# Full Stack Static Content Display

A high-performance, aesthetically refined full-stack web application designed to serve and display static text and imagery using modern web standards. Built in full accordance with the project requirements: zero database dependency, no external APIs, and lightning-fast static delivery.

🔗 **Live Demo**: [https://ziadayoub2005-code.github.io/fullstack-static-content-display/](https://ziadayoub2005-code.github.io/fullstack-static-content-display/)  
📦 **GitHub Repository**: [https://github.com/ziadayoub2005-code/fullstack-static-content-display](https://github.com/ziadayoub2005-code/fullstack-static-content-display)

---

## 🌟 Key Highlights & Features

- **Full-Stack Architecture**: Lightweight **Node.js** & **Express** backend serving static assets with caching headers (`maxAge`, `ETag`) and a `/status` health-check endpoint.
- **Pure Web Standards**: Built with semantic **HTML5**, modern **Vanilla CSS3** (Custom Properties, Glassmorphism, CSS Grid & Flexbox), and **Vanilla JavaScript**—no bloated frameworks.
- **High-Fidelity Content Display**: Curated exhibitions featuring architectural photography, 3D fluid digital sculptures, and creative Scandinavian ateliers.
- **Interactive Capabilities (Zero Backend Overhead)**:
  - 🌓 **Dynamic Theme Toggle**: Seamless dark & light mode switching with `localStorage` persistence.
  - 🔍 **Interactive Lightbox Modal**: Click any exhibit image to open high-resolution modal preview with captions and escape-key handling.
  - 🏷️ **Category Filter Bar**: Instant client-side filtering between Architecture, Digital Art, and Workspaces.
- **Responsive & Accessible**: Fully adaptive across mobile phones, tablets, laptops, and ultra-wide screens.

---

## 📁 Project Structure

```
├── package.json         # Project metadata and dependencies (Express)
├── server.js            # Node.js Express backend server
├── .gitignore           # Ignores node_modules and OS files
├── README.md            # Documentation and instructions
└── public/              # Static assets served by backend
    ├── index.html       # Semantic HTML5 frontend layout
    ├── css/
    │   └── style.css    # Modern Vanilla CSS design system & themes
    ├── js/
    │   └── main.js      # Theme toggle, filter tabs & modal lightbox logic
    └── images/          # Curated showcase high-res images
        ├── architecture.jpg
        ├── abstract-sculpture.jpg
        └── studio-interior.jpg
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** (v18 or higher) installed on your system.

### Installation & Run

1. Open your terminal in the project directory:
   ```bash
   cd "جيجز ٢"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the server:
   ```bash
   npm start
   ```
   *(Or for auto-reloading during development: `npm run dev`)*

4. Open your web browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 📋 Compliance with Project Requirements

| Requirement | Implementation Status | Notes |
| :--- | :---: | :--- |
| **Full Stack Technologies** | ✅ Complete | Node.js + Express backend serving frontend HTML/CSS/JS |
| **Display Static Text & Images** | ✅ Complete | Curated exhibition cards with high-res imagery, typography & specs |
| **Frontend Renders Content** | ✅ Complete | Semantic HTML5, CSS Grid/Flexbox, interactive modal & filters |
| **Backend Serves Basic Files** | ✅ Complete | `express.static` with caching headers and clean routing |
| **No Database Interaction** | ✅ Complete | Zero database dependencies or configuration needed |
| **No API Calls Required** | ✅ Complete | Completely standalone static delivery |
| **No User Input Required** | ✅ Complete | Purely display and visual interaction |

---

## ✉️ Ready Proposal / Submission Message for the Client

### In English:
> **Hi there,**
> 
> I have completed the **Full Stack Static Content Display** project exactly as specified in your brief.
> 
> Here is a summary of the delivery:
> - **Backend**: Built with Node.js & Express to serve the static frontend files securely with optimized caching headers and a clean health check endpoint.
> - **Frontend**: Crafted using semantic HTML5 and modern Vanilla CSS (with responsive grid layouts, glassmorphism, and dark/light mode toggle).
> - **Static Display**: Implemented a curated visual showcase with high-resolution imagery, descriptive typography, client-side category filters, and an image lightbox modal.
> - **Zero Overhead**: Zero database interaction, zero external API calls, and zero complex inputs required—ensuring lightning-fast loading and 100% reliability.
> 
> You can run the project in seconds using `npm install` followed by `npm start` and visit `http://localhost:3000`.
> 
> Looking forward to your feedback and approval!

---

### باللغة العربية:
> **مرحباً بك،**
> 
> لقد قمت بإنجاز مشروع **Full Stack Static Content Display** بدقة واحترافية وفق كافة المتطلبات المحددة:
> 
> - **الباك إند (Backend)**: تم بناؤه باستخدام Node.js و Express لتقديم (serve) ملفات الواجهة الثابتة بكفاءة عالية وإعدادات caching محسنة.
> - **الفرونت إند (Frontend)**: تم بناؤه باستخدام HTML5 و Vanilla CSS الحديثة وتصميم متجاوب بالكامل (Responsive) يدعم الوضعين المظلم والفاتح (Dark/Light Mode) ومؤثرات Glassmorphism أنيقة.
> - **عرض المحتوى الثابت (Static Content)**: معرض تفاعلي أنيق يضم صوراً عالية الجودة ونصوصاً منسقة، مع إمكانية الفلترة السريعة وتكبير الصور عبر نافذة Lightbox المنبثقة.
> - **الالتزام بالشروط**: خالٍ تماماً من قواعد البيانات أو استدعاءات الـ APIs الخارجية أو مدخلات المستخدم المعقدة لضمان أقصى سرعة وأداء مستقر.
> 
> لتشغيل المشروع فوراً: فقط نفّذ `npm install` ثم `npm start` وافتح المتصفح على `http://localhost:3000`.
> 
> يسعدني جداً تقييمك للمشروع واعتماده!
