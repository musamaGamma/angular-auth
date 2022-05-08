# NgAuth

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.4.

## title

ng-auth

## Table of Content:

- [About The App](#about-the-app)
- [Folder Architecture](#folder-architecture)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)

## about The App

this is a simple frontend authentication app

## folder architecture

```bash
.
├── angular.json
├── dist
│   └── ng-auth
│       ├── 3rdpartylicenses.txt
│       ├── favicon.ico
│       ├── index.html
│       ├── main.184392a3f7ca5a7a.js
│       ├── polyfills.5d21cf2738fdf9ef.js
│       ├── runtime.93bf9bee28aba932.js
│       └── styles.e3fedbea29d5c4a0.css
├── firebase.json
├── karma.conf.js
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app-routing.module.ts
│   │   ├── components
│   │   │   ├── home
│   │   │   │   ├── home.component.css
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.spec.ts
│   │   │   │   └── home.component.ts
│   │   │   ├── login
│   │   │   │   ├── login.component.css
│   │   │   │   ├── login.component.html
│   │   │   │   ├── login.component.spec.ts
│   │   │   │   └── login.component.ts
│   │   │   └── sign-up
│   │   │       ├── sign-up.component.css
│   │   │       ├── sign-up.component.html
│   │   │       ├── sign-up.component.spec.ts
│   │   │       └── sign-up.component.ts
│   │   └── services
│   │       ├── auth.service.spec.ts
│   │       └── auth.service.ts
│   ├── assets
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   └── test.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```

## screenshots

![login page](/src/assets/login.png)
![home page](/src/assets/welcome1.png)

## technologies:

### styling and icons

- tailwindcss
- angular material

## backend

firebase

## setup

- download or clone the repository
- run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
