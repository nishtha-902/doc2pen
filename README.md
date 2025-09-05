# Doc2Pen

<p align="center"><img src="readme_assets/doc2pen.gif"></p>

Are you a student who is tired of having to write out assignments on paper, draw sketches by hand, scan each page, convert it all to a PDF, and finally submit? 😩

Does it seem too much of a hassle in this age of online education? 😫

If your answer is yes, then you've come to the right place! 😃

### Doc2Pen is the 1 stop shop for getting all your "handmade" assignments ready for submission digitally. 🥳

- Use the highly customisable Editor page to type in text and get a handwritten document! 📝
- Use the Sketch page to digitally draw in a handmade style! 🎨
- And in the end, use the Media Manip page to convert your assignment into the appropriate format for submission! 📚

It really is that easy! 🎊


## DEMO

### Home Page

<img src="readme_assets/home.gif">

### Editor Page

<img src="readme_assets/editor.gif">

### Sketch Page

<img src="readme_assets/sketch.gif">

### Media Manip Page

<img src="readme_assets/mediaManip.gif">

## Features:

- [ ] Type/Paste your assignments and get handwritten ones to download directly! Bye-Bye Pen&Paper
- [ ] Make Sketches/Diagrams/Figures for your assignments/presentations
- [ ] Media Manager
  - [ ] PDF Spliter
  - [ ] PDF Merger
  - [ ] PNG to JPG
  - [ ] JPG to PNG
  - [ ] PNG to WEBP
  - [ ] WEBP to PNG
  - [ ] JPG to WEBP
  - [ ] WEBP to PNG
  - [ ] JIFF to PNG
  - [ ] JIFF to JPG
  - [ ] PNG(multiple) to PDF

## How to start the project after fork and cloning

```terminal
cd doc2pen
npm install
$env:NODE_OPTIONS="--openssl-legacy-provider"
npm start
```

## Basic structure of the project repository 🗃️📂

```terminal
|
|- readme_assets   # Contains all the images used for the README.MD
|- public          # Contains the stylesheets, images and fonts. Any files within this directory will not be processed by Webpack but copied directly to the build folder.
|- src:            # Contains all source code for the React application.
    |
    |- App.js
    |- index.css
    |- index.js
    |-assets         # Contains all the community brand assets
    |-components     # Contains all the components used within the app.
    |-fonts          # Contains all the fonts
    |-pages          # Contains all the sections of the page.
          |- 404
          |- Home
          |- Editor
          |- Sketch
    |-seo # Contains code for meta tags using react-helmet
```

### Tech Stack: 💻

<img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img alt="React" src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">

## Under the hood:

- [React - Bootstrap](https://react-bootstrap.github.io/)
- [React - Helmet](https://www.npmjs.com/package/react-helmet): Document Head Management
- [React - Leaflet.js](https://react-leaflet.js.org/): Interactive Maps
- [React - Dropzone.js](https://react-dropzone.js.org/): Drag and drop file uploads
- [Rough.js](https://roughjs.com/): Make sketchy, hand drawn figures
- [Mousetrap](https://github.com/ccampbell/mousetrap): Handling Keyboard shortcuts
- [ReactJS - Snackbar](https://www.npmjs.com/package/react-js-snackbar): Making snackbars to provide brief messages
- [React Reveal](https://www.react-reveal.com/): Animations
- [JSPDF](https://www.npmjs.com/package/jspdf): Generate PDFs
- [React Scroll](https://www.npmjs.com/package/react-scroll): Smooth Scrolling between sections

## Wish to fix a bug or add a new feature?[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)🤝🏽🍀


## Made with ♥ for the students of the world!
