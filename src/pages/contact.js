import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Mainsection from "../components/Reusable/Mainsection"
import InfoBlock from "../components/Reusable/InfoBlock"
import Contact from "../components/Contact/contact"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact" />

    <Mainsection
      img={data.img.childImageSharp.fluid}
      title="Contact Us"
      subtitle=""
      mainclass="about-background"
    />

    <InfoBlock heading="How can we help?" />
    <Contact />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ContactPage
