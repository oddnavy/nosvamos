# Nos Vamos

A statically generated blog using Next.js and Markdown

This showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using markdown files as the data source.

The blog posts are stored in `_posts` as markdown files with front matter support. Adding a new markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## How to use

### Install Dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```
