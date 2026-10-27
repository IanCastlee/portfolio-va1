# 💼 Aria Vance Virtual Co. — Multi-Page Executive VA Portfolio

> A high-converting, professional **Multi-Page Portfolio Website** built for an **Executive Virtual Assistant & Operations Partner**. Built with **React 18**, **React Router v6**, **Tailwind CSS**, and **Vite**, featuring strict **Atomic Design Architecture**, **Dark & Light Mode**, detailed case studies with measurable ROI, retainer pricing packages, and discovery booking.

---

## 🌟 Pages & Architecture

Unlike single-page portfolio templates, this project is structured as a **Multi-Page Application (MPA)** using React Router for SEO-ready client-side routing:

| Route | Page | Purpose |
| :--- | :--- | :--- |
| `/` | **Home** | High-impact hero, live stats, tool proficiencies, 4-step onboarding, and featured client wins |
| `/about` | **About & Bio** | In-depth story, core working values, synchronous timezone coverage, and tech stack |
| `/services` | **Services** | 6 specialized service categories with complete deliverable checklists & custom scope inquiry |
| `/case-studies` | **Case Studies** | Problem-Solution-Result breakdowns showing hours reclaimed and revenue outcomes |
| `/pricing` | **Retainer Pricing** | 3 clear monthly retainer packages (Starter, Growth, Executive) + FAQ accordion |
| `/contact` | **Contact & Booking**| Direct contacts (email/phone), SLA turnaround guarantee, and interactive discovery brief |
| `*` | **404 Not Found** | Custom friendly fallback page |

---

## 🧱 Atomic Structure

```
src/
├── context/
│   └── ThemeContext.jsx            # Dark / Light Mode provider (with localStorage persistence)
│
├── data/
│   └── vaData.js                   # Centralized mock data (Profile, Stats, Services, Case Studies, Pricing, FAQs)
│
├── components/
│   ├── atoms/                      # Atomic UI building blocks
│   │   ├── Button.jsx              # Reusable button with router Link & external link support
│   │   ├── Badge.jsx               # Status indicators, proficiency badges, timezones
│   │   ├── Typography.jsx          # Eyebrows, Headings, and Paragraphs
│   │   ├── Input.jsx               # Form inputs with floating labels & validation
│   │   └── TextArea.jsx            # Multi-line inquiry textarea
│   │
│   ├── molecules/                  # Molecule combinations
│   │   ├── ThemeToggle.jsx         # Dark / Light mode switch
│   │   ├── ServiceSummaryCard.jsx  # Service card with deliverables checklist
│   │   ├── CaseStudyCard.jsx       # Problem, Solution, Results & Quote card
│   │   ├── PricingCard.jsx         # Retainer package card with popular badge
│   │   ├── TestimonialCard.jsx     # Client reviews with 5-star rating
│   │   ├── FaqAccordion.jsx        # Smooth expandable FAQ accordion
│   │   └── ContactForm.jsx         # Interactive discovery booking form
│   │
│   ├── organisms/                  # Complex layout sections
│   │   ├── Navbar.jsx              # Multi-page header with active route indicators & mobile drawer
│   │   ├── Footer.jsx              # Multi-column footer with NDA notice & contacts
│   │   ├── HeroBanner.jsx          # Reusable page banner with breadcrumb style
│   │   └── CtaBanner.jsx           # Global conversion banner ("Reclaim 20+ Hours")
│   │
│   └── templates/                  # Template layout wrapper
│       └── MainLayout.jsx          # Coordinates Navbar, Page Content, CTA, and auto-scroll-to-top
│
├── pages/                          # Dedicated route views
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── ServicesPage.jsx
│   ├── CaseStudiesPage.jsx
│   ├── PricingPage.jsx
│   ├── ContactPage.jsx
│   └── NotFoundPage.jsx
│
├── App.jsx                         # React Router routes setup
├── main.jsx                        # React root mounting
└── index.css                       # Tailwind directives
```

---

## 🚀 Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)

---

## 🛠️ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```

---

## 🎨 Easy Customization

All data is centrally configured in [`src/data/vaData.js`](src/data/vaData.js). To customize:
- Change your name, bio, photo avatar, and contact info in `profile`.
- Edit your hourly rates and retainer tiers in `pricingPlans`.
- Add your own case study wins and client testimonials in `caseStudies` and `testimonials`.

---

## 📄 License

MIT License — Feel free to use and customize for your virtual assistant or freelance business!
