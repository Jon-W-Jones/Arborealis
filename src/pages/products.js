import React from "react";

import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import styles from "./products.module.scss";

export const productsQuery = graphql`
  {
    allContentfulProduct {
      edges {
        node {
          id
          slug
          name
          image {
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

const Products = ({ data: { allContentfulProduct } }) => {
  return (
    <div>
      <h2>Arborealis Products</h2>
      {allContentfulProduct.edges.map(product => {
        return (
          <div key={product.node.id} className={styles.productRow}>
            <Link to={`/products/${product.node.slug}`}>
              <h3>{product.node.name}</h3>
            </Link>
            <Img
              className={styles.productImage}
              fluid={product.node.image.fluid}
            />
          </div>
        );
      })}
    </div>
  );
};
export default Products;
