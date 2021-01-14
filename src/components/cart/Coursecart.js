import React, { Component } from "react"
import Img from "gatsby-image"
import { node } from "prop-types"

const getCate = items => {
  let holditem = items.map(items => {
    return items.node.category
  })

  let holdCategories = new Set(holditem)
  // console.log(holdCategories)
  // holdCategories.delete("web")
  // console.log(holdCategories)

  let categories = Array.from(holdCategories)

  // console.log(categories)

  categories = ["all", ...categories]
  return categories
}

export default class Coursecart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: props.courses.edges,
      mobilecourses: props.courses.edges,
      mycategory: getCate(props.courses.edges),
    }
  }
  cateClicked = category => {
    let safe = [...this.state.courses]

    if (category === "all") {
      this.setState(() => {
        return {
          mobilecourses: safe,
        }
      })
    } else {
      console.log(category)

      let holdme = safe.filter(({ node }) => node.category === category)

      this.setState(() => {
        return {
          mobilecourses: holdme,
        }
      })
    }
    // console.log(node.category)
  }
  render() {
    // console.log(process.env.CONTENTFUL_ACCESS_TOKEN)

    return (
      <section className="py-3 ">
        <div className="container">
          <h1 className="text-center text-dark mb-5">Courses</h1>

          <div className="row my-3">
            <div className="col-10 mx-auto text-center">
              {this.state.mycategory.map((category, index) => {
                return (
                  <button
                    type="button"
                    className="btn btn-primary m-3 px-3"
                    key={index}
                    onClick={() => {
                      this.cateClicked(category)
                    }}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="row">
            {this.state.mobilecourses.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-11 col-md-6 d-flex my-3 mx-auto"
                >
                  <Img fixed={node.image.fixed} />
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">{node.title}</h6>
                      <h6 className="mb-0"> $ {node.price}</h6>
                    </div>
                    <p className="text-muted">
                      {/* <small>{node.description.description}</small> */}
                    </p>
                    <button
                      className="btn btn-primary snipcart-add-item"
                      data-item-id={node.id}
                      data-item-price={node.price}
                      data-item-url="https://storex.netlify.app/"
                      data-item-image={node.image.fixed.src}
                      data-item-name={node.title}
                    >
                      Join Now
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
