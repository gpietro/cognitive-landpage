const path = require("path")

exports.createPages = ({ actions }) => {
  const { createPage, createRedirect } = actions
  const languages = ["en-us", "de-ch"]
  const homeTemplate = require.resolve("./src/templates/home.js")
  languages.forEach(language => {
    createPage({
      path: `/${language}`,
      component: homeTemplate,
      context: { language },
    })
  })
  createRedirect({
    fromPath: "/",
    toPath: "/en-us",
    isPermanent: true,
    redirectInBrowser: true,
  })
}
