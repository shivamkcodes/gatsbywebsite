import React, { Component } from "react"

import Img from "gatsby-image"
export default class Coursecart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobilecourses: props.courses.edges,
      courses: props.courses.edges,
    }
  }
  render() {
    // console.log(process.env.CONTENTFUL_ACCESS_TOKEN)

    return (
      <section className="py-3 ">
        <div className="container">
          {/* <Heading title="Courses" />
           */}
          <h1 className="text-center text-dark mb-5">Courses</h1>
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
                      data-item-url="https://shivamkcodes.github.io/EmailandPasswordGenerator/"
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
