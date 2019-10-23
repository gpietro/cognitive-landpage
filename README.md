<h1 align="center">
  SSUT Assignment
</h1>

## TODO

- Improve responsive layout and CSS styling
- Update useStaticQuery to Query(lang: {$eq: $language})
- Better solution to i18n pages
- Add React PropTypes & defaultProps
- Add more testing
- Add versioning system with tags
- Define missing custom types

## Step by step overview

1. Create a new Git repository
2. Create a new Gatsby project defining the page Layout and Components using gatsby templates instead of pages to be able to add translated pages.
3. Create a new repository in Prismic

   - Define custom types.
   - Add a second language
   - Generate API_KEY. Insert API_KEY in .env.development and .env.production

4. When custom types are created, define graqhql queries for each resource.
5. Netlify: create new site from the git repository

   - Generate Prismic webhook link and copy it to a new Netlify build hook. This allow to deliver automatically new content changes when published.

6. Deploy the project by commiting and pushing your changes.

## Strategy for delivering high quality and tested code

1. Run unit tests for componets with jest and an end-to-end test with Cypress in CI
2. Create a staging environment beside production and development
3. Implement a tagging system in git for releasing specific versions and release branches.

## Technical landscape

1. Site generator: Gatsby
2. Headless CMS: Prismic
3. Testing: Jest, Cypress
4. CI: Github hook + Netlify
5. Host: Netlify

## Future development

1. Run Chrome audit and Google page speed for performance optimization
2. Missing features
   - page links
   - search
   - login and signup

## Conclusion

I did spend lot of time understanding how to add translated content with Gatsby since it's my first project with it and I started working with pages and StaticQuery. I don’t like the solution I came up with because the index page is empty and there is always a redirect to /en-us, but I didn’t have time to find a better one.
Test coverage can be improved and also React component styling usage.
Prismic is a good headless CMS but I would probably try strapi in the next project because it seems to give more flexibility and features.
Netlify was really easy to setup and configure, definitely a good option to keep in mind. I wanted to try out and add GitLab but I didn't have time anymore.

---

## 🚀 Start development

1. **Navigate into your new site’s directory and start it up.**

   ```shell
   cd cognitive-landscape/
   npm start
   ```

1. **Open the source code and start editing!**

   Your site is now running at `http://localhost:9000`!

   _Note: You'll also see a second link: _`http://localhost:9000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world)

<!-- AUTO-GENERATED-CONTENT:END -->
