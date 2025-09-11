# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Bootstrap.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design using Bootstrap components
- **Smooth Navigation**: Fixed navigation bar with smooth scrolling
- **Project Showcase**: Interactive project cards with live demo and source code links
- **Contact Form**: Functional contact form for visitor inquiries
- **Skills Section**: Organized display of technical skills and technologies

## Sections

1. **Home/Hero**: Introduction with name, title, and call-to-action buttons
2. **About**: Personal background and professional summary
3. **Skills**: Technical skills organized by category (Frontend, Backend, Database, Tools)
4. **Projects**: Portfolio of work with descriptions, tech stacks, and links
5. **Contact**: Contact form for visitor messages

## Technologies Used

- **Frontend**: React 18, Vite, Bootstrap 5
- **Styling**: Bootstrap CSS with custom CSS enhancements
- **Build Tool**: Vite for fast development and optimized builds
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Personal Information

- Update `src/components/Header.jsx` with your name
- Modify `src/pages/Home.jsx` with your personal details
- Edit `src/pages/About.jsx` with your background story
- Update `src/pages/Skills.jsx` with your technical skills
- Replace project data in `src/pages/Projects.jsx` with your actual projects

### Styling

- Custom styles are in `src/index.css`
- Bootstrap classes are used throughout components
- You can customize the Bootstrap theme or add your own CSS

### Adding Your Photo

- Add your professional photo to `src/assets/`
- Update the photo placeholder in `src/pages/Home.jsx`

### Contact Form

- The contact form currently shows an alert on submission
- To make it functional, you'll need to implement a backend service or use a service like Netlify Forms, Formspree, or EmailJS

## Deployment

This project can be deployed to various platforms:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **Other platforms**: Any static hosting service that supports Single Page Applications

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.jsx      # Navigation bar
│   ├── Footer.jsx      # Footer component
│   ├── ProjectCard.jsx # Project display card
│   └── ContactForm.jsx # Contact form
├── pages/              # Main page components
│   ├── Home.jsx        # Hero/landing section
│   ├── About.jsx       # About section
│   ├── Skills.jsx      # Skills section
│   └── Projects.jsx    # Projects section
├── assets/             # Static assets (images, icons)
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles
```

## Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).
