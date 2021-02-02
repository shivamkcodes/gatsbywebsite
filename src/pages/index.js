import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Mainsection from "../components/Reusable/Mainsection"
import InfoBlock from "../components/Reusable/InfoBlock"
import DualinfoBlock from "../components/Reusable/DualinfoBlock"
import Coursecart from "../components/cart/Coursecart"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <Mainsection
      img={data.img.childImageSharp.fluid}
      title="I write code"
      subtitle="this is a subtitle"
      mainclass="hero-background"
    />
    <InfoBlock heading="About us" />
    <Coursecart
      courses={data.mycourses}
      bundles={data.coursebundles}
      apps={data.courseapps}
    />
    <DualinfoBlock
      heading="Our Team"
      url="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500\"
    ></DualinfoBlock>
  </Layout>
)
// ...GatsbyContentfulFixed_tracedSVG

export const query = graphql`
  {
    img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    mycourses: allContentfulCourses {
      edges {
        node {
          id
          title
          price
          category
          description {
            description
          }
          image {
            fixed(width: 200, height: 120) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }

    coursebundles: allContentfulBundles {
      edges {
        node {
          id
          title
          price
          image {
            fixed(width: 200, height: 120) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }

    courseapps: allContentfulApps {
      edges {
        node {
          id
          app
          links
          media {
            fixed(width: 200, height: 120) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
