# Premium Plaster Works - Landing Page

A modern, professional landing page for a plastering business built with HTML, CSS, and JavaScript.

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modern UI/UX with smooth animations
- ✅ Portfolio/gallery section
- ✅ Customer testimonials
- ✅ Multiple contact methods (Phone, WhatsApp, Telegram, Email)
- ✅ Contact form
- ✅ Service showcase
- ✅ Technology/tools highlight section
- ✅ SEO-friendly structure
- ✅ Fast loading and optimized

## Required Assets to Replace

### 1. Logo/Branding

- **File needed**: `placeholder-logo.png`
- **Location**: Root directory
- **Dimensions**: Recommended 200x50px or similar aspect ratio
- **Format**: PNG with transparent background

### 2. Hero Background Image

- **File needed**: `hero-background.jpg`
- **Location**: Root directory
- **Dimensions**: At least 1920x1080px
- **Description**: High-quality image of your plaster work or a professional workspace
- **Update in**: `styles.css` line ~173 (uncomment and replace background)

### 3. High-Tech Tools Image

- **File needed**: `placeholder-tools.jpg`
- **Location**: Root directory
- **Dimensions**: At least 600x400px
- **Description**: Photo of your plastering equipment/tools

### 4. Portfolio/Project Images (6 images minimum)

- **Files needed**:
  - `placeholder-project-1.jpg`
  - `placeholder-project-2.jpg`
  - `placeholder-project-3.jpg`
  - `placeholder-project-4.jpg`
  - `placeholder-project-5.jpg`
  - `placeholder-project-6.jpg`
- **Location**: Root directory
- **Dimensions**: At least 800x600px each
- **Description**: High-quality photos of completed projects

### 5. Customer/Testimonial Photos (3 images minimum)

- **Files needed**:
  - `placeholder-client-1.jpg`
  - `placeholder-client-2.jpg`
  - `placeholder-client-3.jpg`
- **Location**: Root directory
- **Dimensions**: 100x100px (square)
- **Description**: Photos of customers (with permission) or professional avatars

## Customization Checklist

### Branding & Colors

- [ ] Update colors in `styles.css` (lines 12-18) to match your brand
- [ ] Replace logo image and company name
- [ ] Add your brand fonts if you have specific ones

### Contact Information (Update in `index.html`)

- [ ] **Phone number** (line 312): Replace `+1 (234) 567-890`
- [ ] **WhatsApp** (line 319): Replace number in `https://wa.me/1234567890`
- [ ] **Telegram** (line 326): Replace `@yourusername`
- [ ] **Email** (line 333): Replace `info@premiumplaster.com`
- [ ] **Location** (line 340): Add your business address

### Social Media Links (Update in `index.html`)

- [ ] **Facebook** (line 434)
- [ ] **Instagram** (line 435)
- [ ] **LinkedIn** (line 436)
- [ ] **YouTube** (line 437)

### Content Customization

- [ ] Update business name throughout
- [ ] Customize service descriptions
- [ ] Add real customer testimonials
- [ ] Update portfolio project descriptions
- [ ] Personalize "About Us" section

### Form Integration

The contact form needs backend integration. Options:

1. **Formspree** (https://formspree.io/) - Easy, free tier available
2. **EmailJS** (https://www.emailjs.com/) - Client-side email sending
3. **Netlify Forms** - If hosting on Netlify
4. **Custom Backend** - Your own API

Update the form handler in `script.js` (lines 70-94)

## Deployment to GitHub Pages

### Step 1: Create GitHub Repository

```bash
git init
git add .
git commit -m "Initial commit: Plaster business landing page"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select `main` branch and `/root` folder
5. Click **Save**
6. Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

### Step 3: Custom Domain (Optional)

1. Purchase a domain from a registrar (GoDaddy, Namecheap, etc.)
2. In your domain's DNS settings, add:
   - Type: `CNAME`
   - Name: `www`
   - Value: `YOUR-USERNAME.github.io`
3. In GitHub Pages settings, add your custom domain
4. Enable "Enforce HTTPS"

## File Structure

```
familiy business/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── README.md           # This file
└── (image files)       # Add your images here
```

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Performance Tips

1. **Optimize Images**:

   - Use tools like TinyPNG or Squoosh
   - Aim for < 200KB per image
   - Use WebP format for better compression

2. **Enable Caching**: Add `.htaccess` or use CDN

3. **Minify Files**: Use tools to minify CSS/JS for production

## Need Help?

Common issues and solutions:

### Images not showing

- Check file paths are correct
- Ensure images are in the same directory as HTML
- Verify image file names match exactly (case-sensitive)

### Contact form not working

- Integrate with a form service (see Form Integration section)
- Check browser console for errors

### Mobile menu not working

- Clear browser cache
- Check JavaScript is enabled
- Verify script.js is loading correctly

## License

Free to use for your business. Customize as needed.

## Credits

- Icons: Font Awesome 6.4.0
- Design: Custom responsive design
- Created for Premium Plaster Works

---

**Last Updated**: December 2025
**Version**: 1.0
