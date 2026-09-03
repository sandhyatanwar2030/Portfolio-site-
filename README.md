# Sandhya Tanwar — Portfolio

A React + Vite personal site.

## Before you deploy — 2 things to fix

1. **Resume**: The "Download resume" button links to `/resume.pdf`. Add your actual
   resume PDF at `public/resume.pdf` (just drop the file in the `public` folder,
   keep the name `resume.pdf`), or change the link in `src/components/Hero.jsx`.
2. **Email**: `src/components/Contact.jsx` has a placeholder email
   (`your.email@example.com`). Swap in your real one.

You may also want to swap the "View code" links on each project card
(currently all point to your GitHub profile) for the specific repo URL of
each project, once those repos are public — edit `link` in
`src/components/Projects.jsx`.

## Run it locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Deploy to Vercel (free)

**Option A — via GitHub (recommended):**
1. Push this folder to a new GitHub repository.
2. Go to https://vercel.com, sign in with your GitHub account.
3. Click "Add New" → "Project", select the repo.
4. Vercel auto-detects Vite. Leave settings as default and click "Deploy".
5. You'll get a live URL like `sandhya-tanwar-portfolio.vercel.app` in about a minute.
6. Every time you push a change to GitHub, Vercel redeploys automatically.

**Option B — via Vercel CLI (no GitHub needed):**
```bash
npm install -g vercel
vercel
```
Follow the prompts; it deploys directly from your machine.

## Project structure

```
src/
  components/   one file + one CSS file per section
  App.jsx       assembles the page
  index.css     global tokens (colors, fonts) and resets
```
