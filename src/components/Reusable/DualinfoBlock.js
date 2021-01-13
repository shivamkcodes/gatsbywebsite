import React from "react"
import Heading from "./Heading"

export default function DualinfoBlock({ heading, url }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />

        <div className="row">
          <div className="col-md-8 mx-auto">
            <p className="lead text-white mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              dignissimos illo, laboriosam suscipit quia minima esse nisi sed!
              Omnis voluptatum laboriosam provident beatae sapiente ipsum
              excepturi iure rem expedita tempore ipsa, numquam recusandae
              dolorem itaque alias repellendus blanditiis soluta. Culpa, amet
              nam iure voluptate dolorum cupiditate enim dignissimos assumenda
              ratione a eveniet excepturi doloremque qui repudiandae obcaecati
              beatae. Dolores, voluptates perferendis, quibusdam eveniet earum
              voluptas ullam quas facilis reiciendis delectus quaerat culpa
              dicta architecto, dolorum in expedita? Quam quis vero maxime
              beatae ut consequatur quod optio fuga asperiores assumenda. Sint
              odio repellendus in alias dolor voluptatum maiores ipsa explicabo,
              eos, ex esse maxime repudiandae. Animi eius corporis voluptates id
              sed repellat omnis vel maiores voluptatibus, placeat odit iusto
              illum nam.
            </p>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={url} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Just click photos</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn  btn-outline-primary btn-block">
                  {heading}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
