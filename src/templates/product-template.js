import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";

export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      name
      price
      description
      createdAt(formatString: "MMMM Do, YYYY, h:mm:ss a")
      image {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

const ProductTemplate = ({ data: { contentfulProduct: product } }) => (
  <Layout location={product.name} title={product.name}>
    <div>
      <h2>
        {product.name} - <span>Added on {product.createdAt}</span>
      </h2>
      <p>{product.description}</p>
      <Img fluid={product.image.fluid} />
    </div>
  </Layout>
);

export default ProductTemplate;
