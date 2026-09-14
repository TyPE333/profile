# CS PhD Student - Personal Profile Website

A dynamic, modern portfolio website for a CS PhD student focused on AI, Biomedical Research, Machine Learning Engineering, Mathematics, and Statistics.

## Features

- **Home**: Engaging hero section with quick navigation
- **About**: Detailed background, research interests, and skills
- **Publications**: Showcase academic papers and research outputs
- **Projects**: Highlight AI/ML and biomedical research projects
- **Blog**: Regularly updated thoughts on research and technology
- **Contact**: Easy ways to get in touch

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Hosting**: GitHub Pages

## Design Philosophy

The design communicates:
- **AI/ML**: Blue and purple gradients representing neural networks
- **Biomedical**: Green and cyan accents representing biology and data
- **Mathematics/Stats**: Professional, clean layout with data-driven aesthetics

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static site
npm run export
```

## Customization

### Adding Publications
Edit `data/publications.json` to add your research papers.

### Adding Projects
Edit `data/projects.json` to showcase your work.

### Adding Blog Posts
Create markdown files in `blog/posts/` directory.

### Updating About Section
Edit `app/about/page.tsx` to customize your biography and skills.

## Deployment to GitHub Pages

1. Push changes to main branch
2. GitHub Actions will automatically build and deploy to `gh-pages` branch
3. Your site will be live at `https://TyPE333.github.io/profile`

## File Structure

```
.
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── publications/      # Publications page
│   ├── projects/          # Projects page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Navigation.tsx
│   └── Footer.tsx
├── data/                  # Data files (JSON)
│   ├── publications.json
│   └── projects.json
├── public/                # Static assets
└── [config files]         # next.config.js, tailwind.config.js, etc.
```

## Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Search functionality for blog posts
- [ ] Research timeline visualization
- [ ] PDF CV download
- [ ] Integration with arXiv for auto-publishing
- [ ] Analytics dashboard

## License

MIT - Feel free to use this template for your own portfolio!
