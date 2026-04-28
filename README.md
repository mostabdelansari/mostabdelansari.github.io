# Angular 18 Portfolio — Setup Guide

## Prerequisites
```bash
node -v        # v20+ recommended
npm install -g @angular/cli@18
ng version
```

## Create the project
```bash
ng new portfolio --routing --style=scss --standalone
cd portfolio
ng add @angular/material   # choose: Indigo/Pink, YES global typography, YES animations
```

## Install dependencies
```bash
npm install @angular/material @angular/cdk @angular/animations
```

## File Structure
```
src/
├── app/
│   ├── core/
│   │   └── models/
│   │       └── portfolio.model.ts
│   ├── shared/
│   │   └── components/
│   │       └── navbar/
│   │           ├── navbar.component.ts
│   │           ├── navbar.component.html
│   │           └── navbar.component.scss
│   ├── features/
│   │   ├── hero/
│   │   │   ├── hero.component.ts
│   │   │   ├── hero.component.html
│   │   │   └── hero.component.scss
│   │   ├── about/
│   │   │   ├── about.component.ts
│   │   │   ├── about.component.html
│   │   │   └── about.component.scss
│   │   ├── skills/
│   │   │   ├── skills.component.ts
│   │   │   ├── skills.component.html
│   │   │   └── skills.component.scss
│   │   ├── projects/
│   │   │   ├── projects.component.ts
│   │   │   ├── projects.component.html
│   │   │   └── projects.component.scss
│   │   ├── cv/
│   │   │   ├── cv.component.ts
│   │   │   ├── cv.component.html
│   │   │   └── cv.component.scss
│   │   └── contact/
│   │       ├── contact.component.ts
│   │       ├── contact.component.html
│   │       └── contact.component.scss
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.scss
│   └── app.routes.ts
├── styles.scss
└── index.html
```