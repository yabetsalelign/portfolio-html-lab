# Personal Portfolio (Chapter 2 - Part II: Forms, Multimedia and HTML5)

This repository contains a portfolio implementing the **Chapter 2 (Part II) Forms, Multimedia and HTML5** lab guide (Labs 8-14). It is a static HTML project; the contact form has no server-side receiver, so its POST submission cannot deliver or store a message by itself.

- **Semantic HTML5 Structure (`index.html`)**: Complete implementation of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>` with zero layout `<hr>` dividers and proper search metadata (`viewport`, `description`, `keywords`, `author`).
- **Personal Branding & Logo (`<canvas>`)**: Programmatically drawn 120x120 canvas logo with brand background, circular badge, and personal initials (`YA`).
- **Interactive "Hire Me" Modal (`<dialog>`)**: Native dialog triggered with `showModal()` and dismissed with `close()` or Esc.
- **Audio Introduction (`<audio>`)**: Native audio markup references the local `media/intro.mp3` file. Playback was not verified in a browser during this correction pass.
- **Multimedia Demo (`<video>` & `<track>`)**: `projects.html` references local MP4 and WebM sources, a poster, and English WebVTT captions. The two video files report different durations (about 30 seconds for MP4 and 5 seconds for WebM), so the shared 12-second caption track does not fit the WebM. Playback was not browser-tested.
- **Embedded Content (`<iframe>`)**: YouTube embed in `<aside>` and OpenStreetMap embed of university campus in Contact. The YouTube player showed Error 153 in the supplied page capture; playback depends on the hosting environment supplying the referrer or client identification YouTube requires.
- **Skill Levels (`<meter>` & Canvas Bar Chart)**: Semantic gauge meters for HTML, Python, JavaScript, and CSS, accompanied by an HTML5 Canvas bar chart.
- **Degree Progress (`<progress>`)**: Native progress bar illustrating degree completion status.
- **Collapsible Project Details (`<details>` & `<summary>`)**: Expandable "How I built it" implementation breakdowns on all project articles.
- **Contact Form & Validation**: Contact form with 3 grouped `<fieldset>` blocks, `<legend>` tags, `<optgroup>` select options, `<textarea>`, pattern-validated phone number, file attachment, color picker, range slider, and `method="post"` submission to `thank-you.html`. No message is transmitted or stored without a server-side form receiver.
- **Dates, Abbreviations & Entities**: `<time datetime="...">` tags, tooltipped `<abbr>` elements, and HTML entities (`&copy;`, `&nbsp;`, `&lt;`, `&gt;`, `&amp;`).
- **Thank-You Page (`thank-you.html`)**: Semantic page explaining that it is a static confirmation only; it does not claim that a message was received.
- **Password Input Demonstration**: A password field outside the contact form, with no `name` attribute, included only to demonstrate the input type.
- **Canvas JavaScript (`canvas.js`)**: Deferred script draws the logo and skills chart while keeping the document body direct children as header, main, and footer.

## Structure
```
portfolio/
├── index.html
??? canvas.js
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
