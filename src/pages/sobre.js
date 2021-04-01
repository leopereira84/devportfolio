import React from "react"
import Header from "../components/header";
import Container from '../components/container';
import { Link, graphql } from "gatsby"

const Sobre = ( {data} ) => {
    const { siteMetadata } = data.site;
    return (
        <Container>
            <Header title={siteMetadata.aboutPage.title} />
            <p>
                <img src={siteMetadata.aboutPage.img} alt="" />
            </p>
            <Link to="/">Home</Link>
        </Container>
    )
}
    
export default Sobre

export const query = graphql`
  {
    site {
      siteMetadata {
        aboutPage {
          img
          title
        }
      }
    }
  }
`

