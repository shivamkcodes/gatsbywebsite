import React from "react"
import Heading from "../Reusable/Heading"

export default function Contact() {
  return (
    <section className="py-3">
      <Heading title="Contact Us" color="text-dark" />

      <div className="col-md-6  mx-auto">
        <form action="https://formspree.io/f/mleoavyj" method="post">
          <div className="form-group">
            <input
              required
              type="text"
              name="name"
              id="name"
              placeholder="Your Name "
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              required
              type="tel"
              name="mobile"
              id="mobile"
              placeholder="Your mobile"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <textarea
              required
              type="text"
              name="description"
              id="description"
              placeholder="Your message"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
