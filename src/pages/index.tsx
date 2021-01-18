import * as React from "react";
import { Layout } from '../components/layout';

interface IndexPageProps { }

export const IndexPage: React.FC<IndexPageProps> = () => {
  return (
    <Layout>
      <div>Home</div>
    </Layout>
  )
};

export default IndexPage;
