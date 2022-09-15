This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Take Home

#### You'll need:

- Docker Desktop
- yarn
- Preferrably a Mac
- Watchman
## Getting Started

Email me if you get stuck anywhere! sean.aguinaga@round.tech

Install the recommended extensions - VSCode should pop up in the bottom right corner with a button to install

Install Docker Desktop: https://www.docker.com/products/docker-desktop/

Open Docker Desktop

Install Watchman: https://facebook.github.io/watchman/docs/install.html

Run the docker setup script:

```bash
yarn hasura-start
```

You should be able to open http://localhost:6789 and sign in with admin secret "crudio" to see what kind of data you're working with
The relay extension should also provide statement completion when writing queries

Start relay if the extension doesn't do it for you - cmd/ctrl + shift + p - "Relay: Start Compiler / Restart"

You may need to reload VSCode to get extensions to register: cmd/ctrl + shift + p - "Developer: Reload Window"

You may even need to quit VSCode and re-open it

The relay compiler should have a button on the bottom toolbar on the right if installed/loaded correctly

(Only if that doesn't work, you need to run the compiler via the terminal) {

```bash
yarn relay-compiler
```

}

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### There are five "challenges"

You can pick three out of the five and we'll probably get to the other two together on our video call

###  1. Full Page Flashing on iOS and Safari with Dark Mode Enabled

The browser flashes pretty intensely if you have dark mode enabled when browsing on safari on Mac OS or iOS on your phone.

- Can you add something to the <Head/> in Next.js to fix this?

- Should it be placed in _app.tsx or somewhere else? A new file?

- tag with // @Page-Flashing wherever you implement changes

### 2. Grid isn't responsive

You'll notice that when you resize the window, the grid doesn't change its column count.

- Can you make it responsive, via either using CSS, Ionic's <ion-grid/>, <ion-row/>, and <ion-col/> components, or a masonry library you like of some sort?

- tag with // @Unresponsive wherever you implement changes

### 3. Bundle size is large on all pages, regardless of data-fetching requirements

If code is simply placed in _app.tsx, all routes "inherit" that bundle, which could slow down api routes needlessly.

- Bundles without any data-fetching code at all:

Route (pages)                              Size     First Load JS
┌ ○ /                                      1.02 kB         119 kB
├   /_app                                  0 B            96.3 kB
├ ○ /404                                   184 B          96.5 kB
├ λ /api/hello                             0 B            96.3 kB
├ ○ /blog-post                             1.02 kB         119 kB
└ ○ /blog-post/[blog-post-id]              1.03 kB         119 kB
+ First Load JS shared by all              102 kB
  ├ chunks/framework-a88882961a60abaa.js   45.5 kB
  ├ chunks/main-de7ef80b5021a29a.js        31.2 kB
  ├ chunks/pages/_app-b994a30a699b2206.js  16.4 kB
  ├ chunks/webpack-187b6de62d391b66.js     3.13 kB
  └ css/9ef786c52862af4b.css               5.25 kB

- Bundles with data-fetching component added to _app.tsx

Route (pages)                              Size     First Load JS
┌ ○ /                                      1.02 kB         177 kB
├   /_app                                  0 B             154 kB
├ ○ /404                                   184 B           154 kB
├ λ /api/hello                             0 B             154 kB
├ ○ /blog-post                             1.02 kB         177 kB
└ ○ /blog-post/[blog-post-id]              1.03 kB         177 kB
+ First Load JS shared by all              159 kB
  ├ chunks/framework-a88882961a60abaa.js   45.5 kB
  ├ chunks/main-de7ef80b5021a29a.js        31.2 kB
  ├ chunks/pages/_app-f62aa54b909e4b5f.js  74.3 kB
  ├ chunks/webpack-ca50246c8a77660e.js     3.19 kB
  └ css/9ef786c52862af4b.css               5.25 kB

- Maybe the ideal case?

Route (pages)                              Size     First Load JS
┌ ○ /                                      1.48 kB         177 kB
├   /_app                                  0 B            96.4 kB
├ ○ /404                                   184 B          96.5 kB
├ λ /api/hello                             0 B            96.4 kB
├ ○ /blog-post                             1.49 kB         177 kB
└ ○ /blog-post/[blog-post-id]              1.49 kB         177 kB
+ First Load JS shared by all              102 kB
  ├ chunks/framework-a88882961a60abaa.js   45.5 kB
  ├ chunks/main-de7ef80b5021a29a.js        31.2 kB
  ├ chunks/pages/_app-416f94fcaaea782d.js  16.4 kB
  ├ chunks/webpack-d7a92bdb347ad04c.js     3.19 kB
  └ css/9ef786c52862af4b.css               5.25 kB

- Can you use a ui-focused Next.js feature mentioned in their docs to use and share the data-fetching code across only the pages that need it?

- Is the environment now recreated on each navigation, thus losing the cache? Could you "memoize" that?

- tag with // @Bundle wherever you implment changes

### 4. Add blog post data the [blog-post-id] page

Looks like we can get a list of blog-posts on /blog-post, but we can't click into them and see the blog post on its own page

- Can you try and repeat the lazy-load pattern used on the /blog-post page and use it on the [blog-post-id] page?

- tag with // @BlogPostId wherever you implment changes

- Next has a dynamic feature that can combine Suspense with code-splitting. I personally don't know much about this and why/when you would use this.

Maybe we can talk about this on our video call. Does it hint to Next.js that there is an optimization that can be made? Do you think it's different, aside from 
the code-splitting bundle reduction, than just simply importing the component that suspends, and wrapping it in <Suspense/>?

### 5. Blog Post Article Tags

Blog posts have a plain article property where people can maybe add tags with a hashtag. (#potato) We need to extract these and display them as a list in the UI

- Can you get the tags out of the article and into an array?

- Can you display those tags in a list of some kind?

- tag with // @Tags wherever you implment changes

Feel free to generate your own "article" with more than one tag/hashtag