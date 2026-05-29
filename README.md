# Personal Portfolio / Online CV

A fast, responsive, and beautiful single-page portfolio designed for software engineers. It uses a clean aesthetic with a choice between two themes: **Fresh Tech** (light) and **Obsidian Synth** (dark).

Built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Features

- **Data-Driven Content**: All text, projects, and experiences are loaded from JSON files. No need to touch the React source code to update your CV.
- **Dark/Light Mode**: Smooth, accessible theme toggling that remembers the user's preference.
- **Animations**: Silky smooth scroll-reveal and layout animations using Framer Motion.
- **Glassmorphism UI**: Beautiful, modern UI cards with subtle glows and blurs.
- **Resume Download**: Easily link your PDF resume.

## 📂 Project Structure

- `src/data/`: This is where your content lives.
- `src/components/`: The React UI components.
- `src/hooks/`: Custom hooks like `useTheme`.
- `public/`: Static assets like your `photo.webp` and `cv.pdf`.

## ✍️ How to Update Your Content

You never have to touch a `.jsx` file to update your portfolio. Simply edit the JSON files in `src/data/`:

1. **`personal.json`**: Update your name, bio, social links, and code snippets for the hero section.
2. **`experience.json`**: Add your work history.
3. **`education.json`**: Add your academic background.
4. **`projects.json`**: Showcase your best repositories and side projects.
5. **`skills.json`**: Define your tech stack categorized into groups.
6. **`certifications.json`**: Add certificates with verification links.
7. **`site.json`**: Global metadata like the page title and language.

### Updating your Photo and Resume
- **Photo**: Replace `public/photo.webp` with your own image, or set `"showPhoto": false` in `personal.json` to hide it.
- **Resume**: Replace `public/cv.pdf` with your actual PDF resume.

## 🎨 Theming

This project uses CSS variables defined in `src/index.css` and mapped in `tailwind.config.js`. 
To change the colors, simply edit the RGB values in `src/index.css` under the `:root` (Light mode) and `.dark` (Dark mode) selectors.

## 🛠️ Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:5173` in your browser.

## 🚢 Deployment (GitHub Pages)

This project is configured to be deployed easily to GitHub Pages.
The GitHub Actions workflow is already set up in `.github/workflows/deploy.yml`.

To deploy:
1. Push your code to the `main` branch of your GitHub repository.
2. Go to your repository **Settings** > **Pages**.
3. Under **Build and deployment**, set the **Source** to **GitHub Actions**.
4. The GitHub Action will automatically build and publish your site!

### Custom Domains
If you want to use a custom domain:
1. Add your custom domain to the repository's Pages settings.
2. Add a `CNAME` file to the `public/` directory with your domain name (e.g., `www.yourdomain.com`).
3. Set up your DNS records with your domain provider.
