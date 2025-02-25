# Personal Blog

A simple, responsive personal blog built with Eleventy. This blog features:

- Responsive design that works on mobile and desktop
- A clean, centered blog layout with posts displayed chronologically
- Dark/light mode that respects user preferences
- Navigation with home, about, and search pages
- Full-text search powered by Pagefind
- Markdown-based content with frontmatter

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Visit http://localhost:8080 to see your blog

## Adding New Posts

Create a new markdown file in the `posts` directory with a filename following the format `YYYY-MM-DD-title.md`. For example: `2024-02-26-my-new-post.md`.

Each post should include frontmatter at the top:

```markdown
---
layout: post
title: Your Post Title
date: 2024-02-26
description: A brief description of your post
tags:
  - tag1
  - tag2
---

Your post content here...
```

## Building for Production

To build the site for production, run:

```
npm run build
```

This will generate the site in the `_site` directory and run Pagefind to create a search index.

## CSS Structure

This blog uses a modified version of the Grease CSS structure, which provides:

- Modern CSS custom properties for theming
- Responsive utilities
- Flexible layout components
- Dark/light mode support

## Credits

This blog was built using the [Grease](https://github.com/theapplegates/grease) CSS ruleset templates.