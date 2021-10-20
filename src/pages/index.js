import * as React from 'react';
import '../fonts/index.css';

const pageStyles = {
  color: "#FFFFFF",
  fontFamily: "Stencil Std",
  textAlign: "center",
  maxWidth: "none ",
  transition: "none",
  margin: "none",
  padding: "560px",
  border: "none",
  fontSize: "40px",
  backgroundColor: "#212121",
}

const pricingStyles = {
  color: "#FFFFFF",
  fontFamily: "Stencil Std",
  textAlign: "center",
  maxWidth: "none ",
  transition: "none",
  margin: "none",
  padding: "560px",
  border: "none",
  fontSize: "26px",
  backgroundColor: "#212121",
}

const imgStyles = {
  width: "1000px",
  height: "auto",
  objectFit: "cover",
}

const titleStyles = {
  fontFamily: "Urban Jungle",
  fontSize: "180px",
}

const IndexPage = () => {
  return (
    <html lang="en">
    <head>
      <title>
        Home Page
      </title>
    </head>
    <body>
    <main style={pageStyles}>
      <h1 style={titleStyles}>No Limitz Barbers</h1>
    </main>
    <section>
      <h1 style={titleStyles}>PRICING</h1>
      <ul>
        <li>Mens Wash & Cut</li>
        <li>Wash & Cut (Longer Hair)</li>
        <li>Skin Fade with Clippers on top</li>
        <li>All-Over Clipper Cut</li>
        <li>Restyle</li>
        <li>Back & Sides</li>
        <li>Beard Trim</li>
        <li>Boys Haircut (up to 12 years)</li>
      </ul>
    </section>
    <section style={pageStyles}>
      <h1>OPENING HOURS</h1>
    </section>
    <section style={pricingStyles}>
      <h1>SOCIAL MEDIA</h1>
    </section>
    <section style={pageStyles}>
      <h1>MAPS</h1>
    </section>
    </body>
    <footer>
      Suraj Shah
    </footer>
    </html>
  )
}

export default IndexPage