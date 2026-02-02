# BariBazar

AI-powered property marketplace for Dhaka, Bangladesh. Find flats, land, and commercial spaces with intelligent search, verified listings, and 24/7 AI support.

## Features

- **AI-Driven Search** – Gemini-powered property recommendations and advice
- **Property Listings** – Buy, rent, land, commercial, and new projects
- **AI Chat Widget** – Get instant answers on pricing, areas, and legal verification
- **Modern UI** – Tailwind CSS, Framer Motion, responsive design

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)

## Run Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   - Copy `.env.example` to `.env.local`
   - Add your [Google Gemini API key](https://ai.google.dev/) to `GEMINI_API_KEY`

3. **Start the dev server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS (CDN)
- Framer Motion
- Lucide React
- Google Gemini AI

## License

MIT – see [LICENSE](LICENSE) for details.
