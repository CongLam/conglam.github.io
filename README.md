# Professional Portfolio Website

A modern, responsive, and professional portfolio website built with HTML5, CSS3, and vanilla JavaScript. The website loads content dynamically from embedded data and features smooth animations, responsive design, and SEO optimization. **No server required - works directly with file:// protocol!**

## ✨ Features

- **🎨 Modern Design**: Clean, professional design with elegant typography and neutral color scheme
- **📱 Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **⚡ Dynamic Content**: All content is embedded in JavaScript for easy updates and CORS-free operation
- **🎭 Smooth Animations**: Fade-in effects, hover animations, and typing effect
- **🔍 SEO Optimized**: Proper meta tags, semantic HTML, and structured data
- **♿ Accessible**: Keyboard navigation, focus indicators, and screen reader friendly
- **📧 Contact Form**: Functional contact form that opens email client
- **📱 Mobile Menu**: Responsive hamburger menu for mobile devices
- **⬆️ Back to Top**: Smooth scroll-to-top functionality
- **🎯 Smooth Scrolling**: Navigation with smooth scrolling between sections
- **🚫 No CORS Issues**: Works directly when opened as file:// - no server required!

## 🏗️ Project Structure

```
cv/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality with embedded data
├── profile.svg         # Placeholder profile image
└── README.md           # This documentation
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- **No server required!** Works directly with file:// protocol

### Installation

1. **Clone or download the files** to your local machine

2. **Update your content** by editing the `portfolioData` object in `script.js`

3. **Add your profile image** (replace `profile.svg` with your actual image):
   - Supported formats: JPG, PNG, WebP, SVG
   - Recommended size: 300x300px or larger (square aspect ratio)
   - Update the `profileImage` field in the `portfolioData` object in `script.js`

4. **Add your CV file** (PDF format recommended):
   - Place your CV file in the project root
   - Update the `cvFile` field in the `portfolioData` object in `script.js`

5. **Open the portfolio**:

   **Option 1: Direct File Access (Recommended)**
   - Simply double-click `index.html` or open it directly in your browser
   - Works with `file:///path/to/your/cv/index.html`

   **Option 2: Using a Local Server (Optional)**

   **Python:**
   ```bash
   python -m http.server 8000
   ```

   **Node.js:**
   ```bash
   npx serve .
   ```

   **VS Code Live Server extension:**
   - Install the "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

6. **That's it!** Your portfolio is ready to use

## 📝 Customization

### Updating Content

All content is stored in the `portfolioData` object at the top of `script.js`. Simply edit this object to update:

- Personal information (name, title, contact details)
- About section (description, goals)
- Work experience
- Projects
- Skills
- Education

### Customizing Design

**Colors and Themes:**
- Edit CSS variables in `:root` selector in `styles.css`
- Modify the color scheme by changing the variable values

**Typography:**
- Change the Google Fonts import in `index.html`
- Update the font-family in CSS

**Layout:**
- Modify grid layouts in CSS
- Adjust spacing and sizing variables

### Adding New Sections

1. Add the HTML structure to `index.html`
2. Add corresponding styles in `styles.css`
3. Update the navigation menu
4. Add any necessary JavaScript functionality

## 🎨 Design Features

### Color Scheme
- Primary: Blue gradient (#667eea to #764ba2)
- Text: Dark slate gray (#1e293b)
- Background: White with light gray sections
- Accents: Professional blue tones

### Typography
- Font Family: Inter (Google Fonts)
- Responsive font sizes
- Proper line heights for readability

### Animations
- Fade-in effects on scroll
- Hover animations on interactive elements
- Typing effect for hero subtitle
- Smooth transitions throughout

## 📱 Responsive Design

- **Desktop**: Full layout with two-column sections
- **Tablet**: Adapted layout with stacked columns
- **Mobile**: Single column layout with hamburger menu
- **Breakpoints**: 768px and 480px

## �️ CORS-Free Implementation

This portfolio is designed to work without any CORS (Cross-Origin Resource Sharing) issues:

- **Embedded Data**: Portfolio content is embedded directly in `script.js`
- **No External Requests**: No need to fetch external JSON files
- **File Protocol Support**: Works perfectly with `file://` URLs
- **No Server Required**: Can be opened directly in any browser
- **Easy Sharing**: Just zip and share - works everywhere

### Why This Approach?

Traditional web portfolios often require a local server because browsers block local file access for security reasons. Our implementation eliminates this by:

1. **Embedding all data** directly in JavaScript
2. **Avoiding fetch() calls** to external files
3. **Making it truly portable** - works anywhere, anytime

## �🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📊 Performance

- **Optimized Critical Rendering Path**: Inline critical CSS for immediate rendering
- **Lazy Loading**: Non-critical resources loaded asynchronously
- **Resource Preloading**: DNS prefetch and preconnect for faster external resources
- **Throttled Scroll Events**: Optimized scroll handling for smooth performance
- **Document Fragments**: Efficient DOM manipulation for faster content insertion
- **Event Delegation**: Minimized event listeners for better memory usage
- **No external data fetching (CORS-free)**
- **Embedded content for faster loading**
- **Minimal external dependencies**
- **Works offline**

### Performance Features:
- **First Contentful Paint**: Hero section loads immediately
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Optimized Images**: Lazy loading with fallbacks
- **Minified Resources**: Compressed CSS and JavaScript (production ready)
- **Browser Caching**: Proper cache headers for static assets

## 🚀 Deployment

### Simple File Sharing
1. **Zip the entire folder** and share it
2. **Upload to any web hosting** service
3. **Works immediately** - no build process required

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main` or `master`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to Netlify
2. Or connect your GitHub repository
3. Automatic deployment on every update

### Vercel
1. Drag and drop your project folder to Vercel
2. Or use Vercel CLI: `npm i -g vercel` then run `vercel`
3. Follow the prompts

## 🐛 Troubleshooting

**Common Issues:**

1. **Images not loading**: Make sure image paths in the `portfolioData` object are correct
2. **Profile image not showing**: Verify the image file exists and the path is correct in `script.js`
3. **Animations not working**: Check if JavaScript is enabled in your browser
4. **Mobile menu not working**: Verify JavaScript is loading properly
5. **Content not updating**: Make sure you're editing the `portfolioData` object in `script.js`

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you find bugs or have suggestions for improvements, please create an issue.

## 📞 Support

If you need help with customization or encounter any issues, feel free to reach out or create an issue in the repository.

---

**Happy coding! 🚀**
