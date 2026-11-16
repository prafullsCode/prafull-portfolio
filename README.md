# Prafull Sutar — Developer Portfolio

A responsive dark-themed React portfolio built with Vite.

## 1. Requirements

- Node.js LTS (install from https://nodejs.org/)
- VS Code (recommended)
- Git (for GitHub deployment)

Check your installation in a terminal:

```bash
node -v
npm -v
```

## 2. Run locally

Open this folder in VS Code, then open Terminal > New Terminal.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## 3. Add your profile photo

1. Choose a clear, professional head-and-shoulders photo.
2. Rename it to `profile.jpg`.
3. Copy it into the `public` folder, replacing the placeholder instructions.
4. Refresh the website.

The hero section uses `/profile.jpg`. If the image is missing, a PS initials fallback appears.

## 4. Add your resume

Copy your latest resume PDF into `public` and name it `resume.pdf`.
The Download Resume button links to `/resume.pdf`.

## 5. Personalize your contact details

In `src/App.jsx`, replace:
- `your.email@example.com` with your real professional email.
- `https://www.linkedin.com/` with your LinkedIn profile URL.
- Update your location if you want to show a city instead of India.

## 6. Update project links and details

Edit `src/data/projects.js`.

For each project:
- Add the correct `github` repository URL.
- Add a `demo` URL only after deploying that project.
- Verify the description, technology stack, and features match the working application.

The Mini Search Engine GitHub link is prefilled from the repository shared in the conversation. Other project links are intentionally left blank rather than guessed.

## 7. Test a production build

```bash
npm run build
npm run preview
```

Vite creates the production website in the `dist` folder.

## 8. Push to GitHub

Create a new empty repository on GitHub, for example `prafull-portfolio`.

Run these commands from the portfolio folder:

```bash
git init
git add .
git commit -m "Create developer portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/prafull-portfolio.git
git push -u origin main
```

Replace `YOUR_GITHUB_USERNAME` with your GitHub username.

## 9. Deploy on Vercel

1. Visit https://vercel.com/ and sign in with GitHub.
2. Select **Add New → Project**.
3. Import `prafull-portfolio`.
4. Framework preset: **Vite**.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Click **Deploy**.

For future updates, push commits to the connected GitHub repository. Vercel will rebuild and deploy automatically.

## Before publishing checklist

- [ ] Replace `public/profile.jpg` with your own photo.
- [ ] Add `public/resume.pdf`.
- [ ] Replace placeholder email and LinkedIn URL.
- [ ] Add GitHub links for the other five projects where available.
- [ ] Add live demo URLs only for deployed projects.
- [ ] Verify all project descriptions and features.
- [ ] Run `npm run build` successfully.
- [ ] Test the site on mobile and desktop.
