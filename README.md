# Frontend Mentor - Notifications Page Solution

This is my solution to the **Notifications Page** challenge on Frontend Mentor. This project focuses on building a responsive notifications interface using React and Tailwind CSS v4.

The project provided an opportunity to practice reusable components, props, conditional rendering, dynamic list rendering from JSON data, responsive layouts with Flexbox, and preparing a production build with Vite for GitHub Pages.

---

## Table of contents

* [Overview](#overview)
* [The challenge](#the-challenge)
* [Design](#design)
* [Links](#links)
* [My process](#my-process)
* [Built with](#built-with)
* [What I learned](#what-i-learned)

---

## Overview

This project displays seven notifications, including post reactions, a new follower, group membership changes, a private message, and a comment on a picture.

Each notification contains an avatar, a name, an activity description, and a timestamp. Depending on its type, it can also include a post title, a group name, a message, or a picture.

Unread notifications are distinguished by a different background color and a red indicator. The interface uses a mobile-first layout with additional spacing and rounded container corners on larger screens.

**Current implementation:** notification data is stored in a static JSON file. The unread counter is currently fixed at `3`. The **Mark all as read** button is styled, but its click behavior and updates to the unread counter have not yet been implemented.

---

## The challenge

The interface aims to let users:

* View a layout that adapts to their device's screen size.
* Distinguish between read and unread notifications.
* View different notification types in a single list.
* Read a private message within its notification.
* View the picture associated with a comment.
* See hover styles on selected interface elements.

The remaining interaction is to mark all notifications as read and update the unread count when the **Mark all as read** button is clicked.

---

## Design

The following images are the supplied design references, rather than screenshots of the implementation.

### Desktop Design

<img src="./design/desktop-design.jpg" alt="Notifications page desktop design reference" width="700">

### Active states

<img src="./design/active-states.jpg" alt="Notifications page active states reference" width="700">

### Mobile Design

<img src="./design/mobile-design.jpg" alt="Notifications page mobile design reference" width="250">

---

## Links

* Solution URL: [GitHub Repository](https://github.com/mlopezl/notification-page)
* GitHub Pages URL: [Notifications Page](https://mlopezl.github.io/notification-page/)

---

## My process

* Structured the application using reusable React functional components.
* Organized notification components inside `src/components/notifications/`.
* Split the interface into a container, header, title, button, and notification list.
* Created smaller components for notification avatars, content, timestamps, messages, pictures, and unread indicators.
* Stored notification information in `src/notifications.json`, separating data from presentation.
* Rendered the notifications with `.map()` and used each notification's `id` as its React `key`.
* Passed notification properties explicitly to the `Notification` component using props.
* Used a lookup object to select the activity description for each notification type.
* Used conditional rendering for private messages, pictures, and unread indicators.
* Applied different background colors based on the `isNew` property.
* Built the layout with Flexbox and Tailwind CSS v4 utility classes.
* Defined project colors and the Plus Jakarta Sans font in Tailwind's `@theme` configuration.
* Added hover styles and CSS transitions to selected interface elements.
* Prefixed JSON image paths with `import.meta.env.BASE_URL` so they work under the GitHub Pages repository path.
* Configured Vite to generate the production build directly in `docs`.
* Added `public/.nojekyll`, which is copied into the production build.
* Excluded generated files in `docs` from ESLint.

### Run locally

Install dependencies and start the development server:

```bash
pnpm install
pnpm run dev
```

Open the local URL printed by Vite.

### Validate and build

```bash
pnpm run lint
pnpm run build
```

The production files are generated in `docs`. To preview the build locally:

```bash
pnpm run preview
```

### Publish to GitHub Pages

The project uses the following Vite configuration:

```js
export default defineConfig({
  base: '/notification-page/',
  build: { outDir: 'docs' },
  plugins: [react(), tailwindcss()],
})
```

After building, commit and push the updated source files and `docs` directory. In the repository's **Settings > Pages**, select **Deploy from a branch**, choose **main** and **/docs**, then save.

For future updates, run `pnpm run build` again and commit the regenerated `docs` files along with your source changes.

---

## Built with

* React 19
* JSX
* JavaScript (ES6+)
* React props and component composition
* Conditional rendering
* Dynamic list rendering with `.map()`
* JSON data
* Tailwind CSS v4
* Flexbox
* Mobile-first responsive styling
* CSS transitions and hover states
* Plus Jakarta Sans
* WebP image assets
* Vite
* PNPM
* ESLint
* GitHub Pages deployment configuration

---

## What I learned

* Breaking a notifications interface into smaller, reusable React components.
* Passing data between parent and child components using props.
* Separating notification data from the interface using a JSON file.
* Rendering a list of components with `.map()` instead of repeating JSX manually.
* Using stable, unique `key` props for list items.
* Understanding how explicit props relate to the JSX spread syntax.
* Selecting activity descriptions with an object keyed by notification type.
* Displaying optional content using conditional rendering.
* Styling read and unread notifications based on a boolean property.
* Building responsive layouts with Tailwind CSS and Flexbox.
* Defining custom colors and typography with Tailwind CSS v4.
* Handling public image paths when an application is hosted in a repository subdirectory.
* Configuring Vite's `base` and `build.outDir` options for GitHub Pages.
* Generating a production build and checking source code with ESLint.
* Recognizing the difference between a styled control and an implemented interaction: marking notifications as read is the next step.
