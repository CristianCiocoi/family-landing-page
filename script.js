// Mobile Navigation Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offset = 70; // Height of fixed navbar
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Back to Top Button
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Contact Form Handling
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form data
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };

  // PLACEHOLDER: Implement your form submission logic here
  // You can integrate with services like:
  // - Formspree (https://formspree.io/)
  // - Netlify Forms
  // - EmailJS (https://www.emailjs.com/)
  // - Your own backend API

  console.log("Form submitted:", formData);

  // Show success message (customize this)
  alert("Thank you for your message! We will get back to you soon.");

  // Reset form
  contactForm.reset();
});

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.8s ease forwards";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll(".service-card, .portfolio-item, .testimonial-card").forEach((el) => {
  observer.observe(el);
});

// Portfolio Item Click Handler (Optional - for lightbox or modal)
document.querySelectorAll(".portfolio-item").forEach((item) => {
  item.addEventListener("click", () => {
    // PLACEHOLDER: Add lightbox functionality here if desired
    // You can use libraries like:
    // - Lightbox2 (https://lokeshdhakar.com/projects/lightbox2/)
    // - PhotoSwipe (https://photoswipe.com/)
    // - GLightbox (https://biati-digital.github.io/glightbox/)
    console.log("Portfolio item clicked");
  });
});

// Lazy Loading Images (if you add more images)
if ("loading" in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach((img) => {
    img.src = img.dataset.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement("script");
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  document.body.appendChild(script);
}

// WhatsApp and Telegram Quick Contact
function openWhatsApp() {
  // PLACEHOLDER: Replace with your WhatsApp number
  window.open("https://wa.me/1234567890", "_blank");
}

function openTelegram() {
  // PLACEHOLDER: Replace with your Telegram username
  window.open("https://t.me/yourusername", "_blank");
}
