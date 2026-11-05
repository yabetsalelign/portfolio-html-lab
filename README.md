# Personal Portfolio (Chapter 2 - Part II: Forms, Multimedia and HTML5)

This repository contains the complete portfolio matching the **Chapter 2 (Part II) Forms, Multimedia and HTML5** lab guide (Labs 8–14):

- **Semantic HTML5 Structure (`index.html`)**: Complete implementation of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>` with zero layout `<hr>` dividers and proper search metadata (`viewport`, `description`, `keywords`, `author`).
- **Personal Branding & Logo (`<canvas>`)**: Programmatically drawn 120x120 canvas logo with brand background, circular badge, and personal initials (`YA`).
- **Interactive "Hire Me" Modal (`<dialog>`)**: Native dialog triggered with `showModal()` and dismissed with `close()` or Esc.
- **Audio Introduction (`<audio>`)**: Native audio element in the About section playing `media/intro.mp3` with browser fallback.
- **Multimedia Demo (`<video>` & `<track>`)**: 640x360 video player in `projects.html` with poster image `images/project-demo-poster.jpg`, dual sources (`.mp4` and `.webm`), and English WebVTT captions (`media/project-demo.vtt`).
- **Embedded Content (`<iframe>`)**: Responsive YouTube embed in `<aside>` and OpenStreetMap embed of university campus in Contact.
- **Skill Levels (`<meter>` & Canvas Bar Chart)**: Semantic gauge meters for HTML, Python, JavaScript, and CSS, accompanied by an HTML5 Canvas bar chart.
- **Degree Progress (`<progress>`)**: Native progress bar illustrating degree completion status.
- **Collapsible Project Details (`<details>` & `<summary>`)**: Expandable "How I built it" implementation breakdowns on all project articles.
- **Contact Form & Validation**: Complete contact form with 3 grouped `<fieldset>` blocks, `<legend>` tags, `<optgroup>` select options, `<textarea>`, pattern-validated phone number, file attachment, color picker, range slider, and `method="post"` submission to `thank-you.html`.
- **Dates, Abbreviations & Entities**: `<time datetime="...">` tags, tooltipped `<abbr>` elements, and HTML entities (`&copy;`, `&nbsp;`, `&lt;`, `&gt;`, `&amp;`).
- **Thank-You Page (`thank-you.html`)**: Semantic confirmation page with navigation and POST privacy acknowledgment.

## Structure
```
portfolio/
├── index.html
├── projects.html
├── thank-you.html
├── README.md
├── files/
│   └── cv.pdf
├── images/
│   ├── connect-banner.png
│   ├── favicon.png
│   ├── profile.jpg
│   ├── project-bus-tracking.png
│   ├── project-demo-poster.jpg
│   ├── project-movemate.png
│   └── schedule.jpg
└── media/
    ├── intro.mp3
    ├── project-demo.mp4
    ├── project-demo.vtt
    └── project-demo.webm
```
