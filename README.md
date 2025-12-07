# Gypsos Строй - Professional Plastering Business Landing Page

A modern, responsive landing page for **Gypsos Строй** - professional plastering and construction services. Built with HTML, CSS, and JavaScript.

## ✨ Features

- 📱 Fully responsive design (mobile, tablet, desktop)
- 🌍 Multi-language support (English & Russian)
- 🖼️ **Ready-to-use with online placeholder images** - works immediately!
- 🎨 Modern UI/UX with smooth animations
- 🖼️ Portfolio/gallery section with beautiful sample images
- ⭐ Customer testimonials showcase with avatar placeholders
- 📞 Multiple contact methods (Phone, WhatsApp, Telegram, Email)
- 📝 Contact form ready for integration
- 🛠️ Services showcase section
- 🔧 Technology/tools highlight
- 🚀 SEO-friendly structure
- ⚡ Fast loading and optimized

## 🎯 Demo Sections

- **Hero Section**: Eye-catching header with call-to-action buttons
- **Services**: Showcase your plastering services
- **Technology**: Highlight your modern tools and techniques
- **Portfolio**: Display your completed projects
- **Testimonials**: Feature customer reviews
- **Contact**: Multiple ways for customers to reach you

## 📦 Project Structure

```
├── index.html                    # Main HTML (Russian - default) 🇷🇺
├── index-en.html                 # English version 🇬🇧
├── index-ru.html                 # Russian version (alternative URL) 🇷🇺
├── css/
│   └── styles.css                # All styling and responsive design
├── js/
│   └── script.js                 # Interactive functionality
├── assets/
│   ├── images/
│   │   ├── logo/                 # Company logo files
│   │   ├── hero/                 # Hero section background images
│   │   ├── portfolio/            # Project gallery images
│   │   └── testimonials/         # Customer photos
│   └── icons/                    # Favicon and app icons
├── docs/
│   ├── ASSETS-NEEDED.md          # Guide for required images/assets
│   ├── TRANSLATION-GUIDE.md      # Multi-language support guide
│   └── landing-page-context.md   # Project context and requirements
├── README.md                     # Documentation
└── LICENSE                       # MIT License
```

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Open `index.html`** in your browser - the site works right away with online placeholder images!
3. **Update contact information** in `index.html` (search for "PLACEHOLDER" comments)
4. **Customize colors** in `css/styles.css` to match your brand
5. **Replace placeholder images** with your own when ready (see `docs/ASSETS-NEEDED.md` for details)
6. **Deploy** to GitHub Pages (see deployment section below)

> ⚠️ **Security Note**: Never commit sensitive information (API keys, private credentials, etc.) to your repository. All placeholder contact info in this template is clearly marked and should be replaced with your actual information only after customization.

## 🌐 Multi-Language Support

This template includes both **Russian** (default) and **English** versions:

- **Russian** (default): `index.html` 🇷🇺
- **English**: `index-en.html` 🇬🇧
- **Russian** (alternative URL): `index-ru.html` 🇷🇺

Language switcher buttons are included in the navigation menu for easy switching between languages. All versions share the same CSS and JavaScript files.

### Adding More Languages

To add another language, see the detailed [TRANSLATION-GUIDE.md](docs/TRANSLATION-GUIDE.md) which includes:

- Complete translation reference for English ↔ Russian
- Step-by-step guide for adding new languages
- Best practices for multi-language sites
- Language code recommendations
- Testing checklist

> **Note**: The default language is Russian (`index.html`). Visitors will see Russian by default and can switch to English using the language switcher in the navigation menu.

## 🎨 Customization

### Update Your Information

All placeholder content is marked with `<!-- PLACEHOLDER: -->` comments in the HTML. Search for these to find what needs updating:

- Business name and logo
- Contact details (phone, WhatsApp, Telegram, email)
- Social media links
- Service descriptions
- Customer testimonials
- Portfolio project descriptions

### Brand Colors

Update the CSS variables in `css/styles.css` to match your brand:

```css
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e67e22;
  /* ... other colors */
}
```

### Contact Form

The contact form requires backend integration. Popular options:

- [Formspree](https://formspree.io/) - Easy setup, free tier
- [EmailJS](https://www.emailjs.com/) - Client-side email sending
- [Netlify Forms](https://www.netlify.com/products/forms/) - If hosting on Netlify
- Custom backend API

Update the form handler in `js/script.js` to integrate with your chosen service.

## 🌐 Deployment to GitHub Pages (Free Hosting)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Navigate to **Pages** in the left sidebar
4. Under **Source**, select `main` branch and `/ (root)` folder
5. Click **Save**
6. Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

The default page will be in **Russian** (`index.html`). Visitors can switch to English (`index-en.html`) using the language switcher.

### Step 3: Custom Domain (Optional)

If you have a custom domain, you can configure it in the GitHub Pages settings. GitHub provides free SSL certificates for custom domains.

## 🌍 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Optimization

**Image Optimization:**

- Use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- Target file sizes: < 500KB for hero images, < 300KB for portfolio images
- Consider WebP format for better compression

**Code Optimization:**

- Minify CSS and JavaScript for production
- Enable browser caching
- Use a CDN for Font Awesome or host locally

## 🛠️ Troubleshooting

**Images not displaying:**

- Verify file paths and names (case-sensitive)
- Ensure images are in the correct directory
- Check browser console for 404 errors

**Contact form not working:**

- The form requires backend integration (see customization section)
- Check browser console for JavaScript errors

**Mobile menu not responding:**

- Ensure `js/script.js` is loading correctly
- Clear browser cache and hard refresh

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. Free to use for personal and commercial projects.

## 🙏 Credits

- **Icons**: [Font Awesome 6.4.0](https://fontawesome.com/)
- **Design**: Modern responsive design with CSS Grid and Flexbox
- **Fonts**: System fonts for optimal performance

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

---

**Version**: 1.0  
**Last Updated**: December 2025
