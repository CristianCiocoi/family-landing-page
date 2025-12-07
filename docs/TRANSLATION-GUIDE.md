# Translation Guide

This document provides a guide for the Russian translation and how to add more languages.

## 🌍 Available Languages

- **Russian** (`index.html`) - Default language 🇷🇺
- **English** (`index-en.html`) - English version 🇬🇧
- **Russian** (`index-ru.html`) - Alternative Russian URL 🇷🇺

## 📝 Translated Content

### Navigation

- Home → Главная
- Services → Услуги
- Portfolio → Портфолио
- Testimonials → Отзывы
- Contact → Контакты

### Hero Section

- **English**: "Professional Plastering Excellence"
- **Russian**: "Профессиональное Штукатурное Мастерство"

- **English**: "High-tech tools. Exceptional craftsmanship. Perfect finishes."
- **Russian**: "Высокотехнологичное оборудование. Исключительное качество. Идеальная отделка."

### Call-to-Action Buttons

- Get a Quote → Получить Расчет
- View Our Work → Наши Работы
- Send Message → Отправить Сообщение

### Services Section

1. **Interior Plastering** → **Внутренняя Штукатурка**
2. **Exterior Plastering** → **Наружная Штукатурка**
3. **Decorative Finishes** → **Декоративная Отделка**
4. **Repair & Restoration** → **Ремонт и Реставрация**
5. **High-Tech Tools** → **Высокотехнологичные Инструменты**
6. **Quality Guarantee** → **Гарантия Качества**

### Technology Section

- **Advanced Technology for Perfect Results** → **Передовые Технологии для Идеального Результата**

Benefits list:

- Faster project completion → Быстрое завершение проектов
- Smoother, more precise finishes → Более гладкую и точную отделку
- Reduced material waste → Сокращение отходов материалов
- Consistent professional results → Стабильно профессиональные результаты

### Portfolio Section

- Our Work → Наши Работы
- "See the quality and precision in every project" → "Качество и точность в каждом проекте"

Project examples:

- Residential Interior → Жилой Интерьер
- Commercial Building → Коммерческое Здание
- Modern Home → Современный Дом
- Office Renovation → Ремонт Офиса
- Luxury Villa → Роскошная Вилла
- Restaurant Interior → Интерьер Ресторана

### Testimonials Section

- What Our Clients Say → Отзывы Наших Клиентов
- "Real feedback from satisfied customers" → "Реальные отзывы довольных клиентов"

Client roles:

- Homeowner → Домовладелец
- Business Owner → Владелец бизнеса
- Property Developer → Застройщик

### Contact Section

- Get in Touch → Связаться с Нами
- "Ready to start your project? Contact us today!" → "Готовы начать свой проект? Свяжитесь с нами сегодня!"

Contact fields:

- Phone → Телефон
- Location → Местоположение
- Send us a Message → Отправить Сообщение
- Your Name → Ваше Имя
- Your Email → Ваш Email
- Your Phone → Ваш Телефон
- "Tell us about your project" → "Расскажите о вашем проекте"

### Footer

- About Us → О Нас
- Quick Links → Быстрые Ссылки
- Follow Us → Мы в Соцсетях
- "All rights reserved" → "Все права защищены"

## 🔄 Language Switcher

All versions include a language switcher in the navigation:

- **Default page** (`index.html` - Russian) shows: 🇬🇧 EN (links to `index-en.html`)
- **English page** (`index-en.html`) shows: 🇷🇺 RU (links to `index.html`)
- **Alternative Russian URL** (`index-ru.html`) shows: 🇬🇧 EN (links to `index-en.html`)

The language switcher is styled with CSS in `styles.css`:

```css
.lang-switch a {
  background: var(--secondary-color);
  color: var(--white) !important;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}
```

## ➕ Adding More Languages

### Step 1: Create New Language File

1. Duplicate `index.html` (Russian) or `index-en.html` (English) depending on which is closer to your target language
2. Rename to match language code (e.g., `index-es.html` for Spanish, `index-de.html` for German)

### Step 2: Update HTML Language Attribute

```html
<html lang="es">
  <!-- Change "en" or "ru" to your language code -->
</html>
```

### Step 3: Translate Content

- Translate all visible text
- Keep all `<!-- PLACEHOLDER: -->` comments in English
- Keep CSS class names and IDs unchanged
- Keep file references (images, CSS, JS) unchanged

### Step 4: Update Language Switcher

Add language switcher links in ALL language files:

```html
<li class="lang-switch"><a href="index.html" title="Русский">🇷🇺 RU</a></li>
<li class="lang-switch"><a href="index-en.html" title="English">🇬🇧 EN</a></li>
<li class="lang-switch"><a href="index-es.html" title="Español">🇪🇸 ES</a></li>
```

**Note**: `index.html` is Russian (default), so it should be listed first or marked as default.

### Step 5: Update Page Title

```html
<title>Your Business Name - Translated Tagline</title>
```

## 🎯 Important Notes

### Keep Unchanged:

- CSS classes and IDs
- Image file names (placeholders)
- JavaScript file reference
- HTML structure and layout
- Form field `name` and `id` attributes
- URL structure for contact links

### Translate:

- All visible text content
- `alt` attributes for images
- `placeholder` text in forms
- `title` attributes
- Page title and meta descriptions

### Language-Specific Considerations:

**Russian**:

- Uses Cyrillic alphabet
- Longer words may require CSS adjustments
- Formal "Вы" used for professional tone

**For Other Languages**:

- Check text length - some languages are more verbose
- Test mobile layout after translation
- Consider right-to-left (RTL) languages (Arabic, Hebrew) - may need CSS adjustments
- Check special characters display correctly

## 📱 Testing Translations

After adding a new language:

1. ✅ Check all navigation links work
2. ✅ Verify language switcher links to correct files
3. ✅ Test form placeholders display correctly
4. ✅ Check mobile responsive design
5. ✅ Verify special characters render properly
6. ✅ Test smooth scrolling to sections
7. ✅ Validate HTML with W3C validator

## 🌐 Recommended Language Codes

- English: `en`
- Russian: `ru`
- Spanish: `es`
- German: `de`
- French: `fr`
- Italian: `it`
- Portuguese: `pt`
- Polish: `pl`
- Ukrainian: `uk`
- Turkish: `tr`

## 📞 Contact Form Translations

When integrating with email services (Formspree, EmailJS, etc.), you may want to:

1. Use separate forms for each language (different endpoints)
2. Add a hidden field indicating the language
3. Customize email templates per language

Example:

```html
<input type="hidden" name="language" value="ru" />
```

---

**Need help with translations?**
Consider using professional translation services for business-critical content, especially for:

- Legal terms
- Technical specifications
- Customer-facing communications
