import React from 'react'
import BackgroundImage from 'gatsby-background-image'

 
export default function Mainsection({img,title,subtitle,mainclass}) {
    return (
        <BackgroundImage  className={mainclass}
        fluid={img}>
            <div className="flexy">
            <h1 className="text-white text-uppercase text-center display-4">{title}</h1>
            <h4 className="text-warning text-center">{subtitle}</h4>
            </div>
        </BackgroundImage>
    )
}
