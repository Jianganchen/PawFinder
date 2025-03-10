<h1 align="center">🐕 PawFinder</h1>

![README image](/public/readme1.png)

[![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)](#)
[![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white)](#)
[![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white)](#)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff)](#)
[![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff)](#)
[![Vercel](https://img.shields.io/badge/Vercel-%23000000.svg?logo=vercel&logoColor=white)](#)
[![HTML](https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white)](#)
[![CSS](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=fff)](#)
[![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff)](#)
[![Figma](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white)](#)
[![Unsplash](https://img.shields.io/badge/Unsplash-000000?logo=Unsplash&logoColor=white)](#)
[![Arc](https://img.shields.io/badge/Arc-FCBFBD?logo=arc&logoColor=000)](#)
[![Visual Studio Code](https://custom-icon-badges.demolab.com/badge/Visual%20Studio%20Code-0078d7.svg?logo=vsc&logoColor=white)](#)

* This is a website to help a dog-lover search through a database of shelter dogs, with the hope of finding a lucky dog a new home!

* See the design document [here](https://frontend-take-home.fetch.com/).

* The document is written and distributed by [fetch](https://fetch.com/).

# Getting Started

* Here are four options for you to see the final result of this amazing web app!

## Video Demostration

* Click [here](https://www.youtube.com/watch?v=1WQyzI8pmzE) to see the video demonstration

## Visit the website on PC

* See the website live here: [🐕PawFinder](https://paw-finder-sigma.vercel.app/)

## Browse on your phone

* If you're using _Safari_ or _Chrome_ on phone, go to **Settings** and search for _Safari_(or _Chrome_), then turn off **Prevent Cross-Site Tracking**, and you will see the amazing ✨responsive design✨ on your mobile device!

_Because in this project we have a different domain for backend, Disabling cross-site cookies would prevent you from logging into the website._

## Run it on your machine

**1. Clone the repository**

* To begin, clone the repository from GitHub, using the following command:

```
git clone https://github.com/Jianganchen/PawFinder.git
```

**2. Install the dependencies**

* To install the dependencies, run this:

```
npm install
```

**3. Launch the server**

* run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

* Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# File Structure

* I used [Next.js](https://nextjs.org/)'s app router in this project. Basically there are three main pages: landing page, dashboard page and favorites page. Favorites page lives inside dashboard page because they sahre a same sidebar. I also have a not-found page for all the unwanted routes, so feel free to try it out!

```
.
├── app/                 # root route & landing page
│   ├── dashboard/       # dashboard page & sidebar
│   │   └── favorites    # favorite dogs page
│   └── login            # login page
├── components/          # all the reusable components
│   ├── context          # favorite dogs & user provider
│   └── ui               # UI library
├── hooks                # customized hooks
├── lib                  # apis & utils & TypeScript definitions
└── public               # pngs & svgs

```

# Features

### Design
- I put a lot of effort into the **UI/UX design** of this website, because I do think design is a significant part of front-end engineering!
- I studied 10+ different pet websites and chose this modern and simplistic style for PawFinder, which I think goes pretty well.

### Functionalities
- You can **filter** dogs by breeds, states and city they live in, zipcodes, age and name etc. All the functionalities in the documentation are implemented.
- You can view all the dogs with **pagination**, and what's important is if you refresh the page you wouldn't be redirected back to page 1, because we don't want users to lose their progress while browsing through cute puppies.
- You can click the **like button** on any dog that you see on the on page, and later on you can generate a match according to the dogs you chose.

### User Experience
- This web app **fully supports** mobile device! Try to visit the link on your phone and see what's different.
- You may have noticed the choice I made in designing the buttons. For example, the silder for age selection, a toggle button for sorting order, a sidebar that can be toggled etc.

### Error Handling
- If you try to visit /dashboard without logging in, you would be redirected to login page.
- If you visit any unlisted route, you would see a not-found page.
- If you accidentally set a filter where no dog satisfies any of the conditions, you will see a no-dogs-found page.
- If you try to generate a match without liking any dogs, it wouldn't let you.
- If you type in the incorrect zip-code, it would give you a warning.
