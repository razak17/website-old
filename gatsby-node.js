const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');
const _ = require('lodash');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

// exports.createPages = async ({ actions, graphql }) => {
//   const { createPage } = actions;
//   const postTemplate = path.resolve(`src/templates/post.tsx`);
//   const tagTemplate = path.resolve(`src/templates/tag.tsx`);

//   const result = await graphql(`
//     query {
//       postsRemark: allMarkdownRemark(
//         filter: { fileAbsolutePath: { regex: "/posts/" } }
//         sort: { order: DESC, fields: [frontmatter___date] }
//         limit: 1000
//       ) {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//       tagsGroup: allMarkdownRemark(limit: 2000) {
//         group(field: frontmatter___tags) {
//           fieldValue
//         }
//       }
//     }
//   `);

//   // Handle errors
//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`);
//     return;
//   }

//   const posts = result.data.postsRemark.edges;

//   posts.forEach(({ node }) => {
//     createPage({
//       path: node.fields.slug,
//       component: postTemplate,
//       context: {
//         // Data passed to context is available
//         // in page queries as GraphQL variables.
//         slug: node.fields.slug,
//       },
//     });
//   });

//   // Extract tag data from query
//   const tags = result.data.tagsGroup.group;
//   // Make tag pages
//   tags.forEach((tag) => {
//     createPage({
//       path: `/posts/tags/${_.kebabCase(tag.fieldValue)}/`,
//       component: tagTemplate,
//       context: {
//         tag: tag.fieldValue,
//       },
//     });
//   });
// };

// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  // https://www.gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /scrollreveal/,
            use: loaders.null(),
          },
          {
            test: /animejs/,
            use: loaders.null(),
          },
        ],
      },
    });
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@theme': path.resolve(__dirname, 'src/theme'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
    },
  });
};
