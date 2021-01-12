import { Link } from 'gatsby'
import React from 'react'
import Heading from './Heading'


export default function InfoBlock({heading}) {
    return (
        <section className="bg-theme my-5 py-4 ">

            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dolorum placeat deleniti hic totam esse provident maxime ex porro blanditiis odio laudantium ullam necessitatibus harum delectus libero nisi saepe cumque nihil quasi amet veritatis, ipsum alias asperiores. Fuga ducimus quisquam eum accusantium maxime, recusandae dolorem eveniet id, mollitia corporis, hic porro sunt fugiat quasi voluptate rerum! Ducimus quidem laudantium explicabo?
                        </p>
                        <Link to="/about">
                            <button className="btn btn-primary btn-lg">
                                {heading}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
