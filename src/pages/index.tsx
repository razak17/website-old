import * as React from "react";
import { graphql } from 'gatsby';
import { Layout } from "../components/layout";
import { Hero } from '../components/sections/hero';

interface IndexPageProps {
  data: any
}

export const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  return (
    <Layout>
      <Hero data={data.hero.edges} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            title
              name
              subtitle
              buttonText
          }
          html
        }
      }
    }
  }
`;
