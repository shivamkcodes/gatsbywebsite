import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Mainsection from "../components/Reusable/Mainsection"
import InfoBlock from "../components/Reusable/InfoBlock"
import DualinfoBlock from "../components/Reusable/DualinfoBlock"

import Teamphoto from "../components/About/Teamphoto"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <Mainsection
      img={data.img.childImageSharp.fluid}
      title="About Us"
      subtitle=""
      mainclass="about-background"
    />
    <DualinfoBlock
      heading="A message from CEO"
      url="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500\"
    ></DualinfoBlock>
    <InfoBlock heading="Our Vision" />
    <Teamphoto />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
