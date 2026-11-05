# Personal Portfolio

A personal portfolio built with HTML5 for the **Internet Programming I – Chapter 2, Part II: Forms, Multimedia and HTML5** assignment (Labs 8–14).

The project brings together my profile, education, featured software projects, and contact information while demonstrating the HTML5 elements and features covered in the lab guide.

## Featured Projects

- **[StockFlow](https://github.com/yabetsalelign/Stockflow)** — Inventory and sales management application for wholesale workflows.
- **[SuperDimm](https://github.com/yabetsalelign/superdimm)** — Telecom service management platform focused on customer requests and operational workflows.
- **[Next](https://github.com/yabetsalelign/Next)** — Productivity application built around manageable tasks and flexible routines.
- **[Recovery Tracker](https://github.com/yabetsalelign/recovery-tracker)** — Local-first application for recording recovery goals, daily check-ins, and reflections.

Screenshots of the four applications are included in the portfolio.

## HTML5 Features

The assignment demonstrates:

- Semantic page structure using `header`, `nav`, `main`, `section`, `article`, `aside`, and `footer`.
- Form controls, labels, fieldsets, legends, validation attributes, and different input types.
- Native audio and video elements, including WebVTT captions.
- Embedded external content using `iframe`.
- Interactive elements such as `dialog`, `details`, and `summary`.
- Data indicators using `meter` and `progress`.
- Canvas drawings and a JavaScript-generated skills chart.
- Metadata, dates, abbreviations, and HTML character entities.

## Project Structure

```text
portfolio/
├── index.html
├── projects.html
├── thank-you.html
├── canvas.js
├── README.md
├── images/
│   └── projects/
│       ├── next.jpg
│       ├── recovery-tracker.jpg
│       ├── stockflow.jpg
│       └── superdimm-home.png
└── media/
    ├── intro.mp3
    ├── project-demo.mp4
    ├── project-demo.webm
    └── project-demo.vtt
```

Other image and asset files are kept in their respective directories.

## Running Locally

No installation or build process is required.

1. Download or clone the repository.
2. Open `index.html` in a browser.
3. Navigate between the portfolio and projects pages.

A local development server can also be used to preview the project.

## Notes and Limitations

- This is a static HTML project. The contact form retains the required POST and multipart attributes, but there is no server-side endpoint to receive or store submissions.
- The MP4 and WebM video formats match in content and duration (30 seconds), fully accommodating the 12-second caption track.
- The YouTube embed may encounter playback restrictions depending on the hosting environment.
- The audio and external embeds have not been fully verified through browser testing.
- The degree progress indicator is illustrative and does not represent a calculated academic completion percentage.

The project follows the assignment's HTML-only restriction; no CSS framework or external styling library is used.