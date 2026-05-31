# 🎬 Salar Mehfooz — Creative MERN Developer Portfolio

A modern, cinematic, multi-page portfolio website built to showcase full-stack engineering work with a premium product-level presentation.

Built with **React 19**, **Vite**, **TypeScript**, **Framer Motion**, and **Tailwind CSS**, this project transforms traditional developer portfolios into a **story-driven studio experience**.

---

## ✨ Overview

This portfolio is designed as a **case-study driven digital studio**, where each project is presented like a production-grade exhibit rather than a simple card listing.

It focuses on:

- Clean engineering architecture
- High-performance UI/UX
- Real-world integrations
- Recruiter-friendly navigation
- Client conversion optimization

---

## 🚀 Tech Stack

- ⚛️ React 19
- ⚡ Vite
- 🟦 Javascript
- 🎨 Tailwind CSS
- 🎬 Framer Motion
- 📦 React Router
- 🧩 React Hook Form
- 📊 Google Apps Script (Sheets Integration)

---

## 📁 Project Structure

```bash
/
├── public/
│   └── projects/          # Project assets (case study images)
├── src/
│   ├── components/        # Reusable UI components
│   ├── data/              # Project configuration & metadata
│   ├── pages/             # Application routes
│   ├── types.ts           # TypeScript interfaces
│   ├── App.tsx            # Routing + layout
│   ├── main.tsx           # App entry point
│   └── index.css          # Global styles
├── package.json
└── tsconfig.json
```

---

## 🧠 Core Concept

Instead of a traditional portfolio, this project is structured like a **digital product studio**:

- Every project is a **case study**
- Every page behaves like a **narrative scene**
- Every interaction is designed for **clarity and conversion**

The goal is not just to display work — but to **demonstrate engineering value instantly**.

---

## 🖼️ Project Assets Setup

Place all project images inside:

```bash
/public/projects/{project-slug}/
```

Example:

```bash
/public/projects/verdantia-global/
  ├── cover.png
  ├── dashboard.png
  └── analytics.png
```

Then map them inside:

```ts
/src/aadt / projects.js;
```

Example:

```ts
coverImage: "/projects/verdantia-global/cover.png",
gallery: [
  "/projects/verdantia-global/dashboard.png",
  "/projects/verdantia-global/analytics.png"
]
```

If an image is missing, the built-in fallback system ensures the UI remains visually consistent.

---

## 🔗 GitHub Integration

Each project can be linked directly to its repository for transparency and credibility.

```ts
github: "https://github.com/username/project-name";
```

This allows recruiters and clients to instantly access source code and technical depth.

---

## 📊 Google Sheets Contact Integration

The contact form is connected to **Google Sheets via Apps Script**, turning the portfolio into a lightweight CRM.

### Features:

- Real-time form submissions
- Timestamp tracking
- Structured lead storage
- No backend required

### Flow:

Contact Form → React Hook Form → Google Apps Script → Google Sheets

This makes lead collection simple, fast, and scalable.

---

## ☁️ Deployment

### ⚡ Vercel (Recommended)

- Build Command: `npm run build`
- Output Directory: `dist`

Add SPA routing fix:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

### 🌐 Netlify

Build settings:

- Build Command: `npm run build`
- Publish Directory: `dist`

Add SPA redirect:

```bash
/*   /index.html   200
```

---

## 🎯 Key Features

- 🎬 Cinematic multi-page UI
- ⚡ Fast Vite-powered performance
- 🧠 Strict TypeScript architecture
- 🎨 Modern Tailwind design system
- 🎞 Framer Motion transitions
- 📁 Scalable project data structure
- 📊 Google Sheets CRM integration
- 🔗 GitHub project linking system
- 🧩 Reusable component architecture

---

## 💡 Purpose

This portfolio is designed to:

- Replace traditional CVs
- Attract high-quality freelance clients
- Demonstrate full-stack engineering ability
- Showcase production-level UI/UX thinking

---

## 📌 License

This project is open for personal portfolio use.
Feel free to modify it for your own developer branding.

---
