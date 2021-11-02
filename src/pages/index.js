import * as React from 'react';
import '../fonts/index.css';

const pageStyles = {
  fontFamily: "Stencil Std",
  textAlign: "center",
  maxWidth: "none ",
  transition: "none",
  margin: "none",
  padding: "560px",
  border: "none",
  fontSize: "40px",
  backgroundColor: "#FFF",
}

const pricingStyles = {
  color: "#000",
  fontFamily: "Stencil Std",
  textAlign: "center",
  maxWidth: "none ",
  transition: "none",
  margin: "none",
  padding: "560px",
  border: "none",
  fontSize: "26px",
  backgroundColor: "#000",
}

const imgStyles = {
  width: "1000px",
  height: "auto",
  objectFit: "cover",
}

const titleStyles = {
  fontFamily: "Urban Jungle",
  fontSize: "180px",
  color: "#000",
}

const pricingListStyles = {
  textAlign: "center",
  fontSize: "16px",
  padding: "60px",
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
    <section style={pageStyles}>
      <h1>PRICING</h1>      
      <span style={pricingListStyles}><h2>TEST&nbsp;&nbsp;&nbsp;&nbsp;---------------------------------------------------------------</h2></span>
      <span style={pricingListStyles}><h2>TEST&nbsp;&nbsp;&nbsp;&nbsp;---------------------------------------------------------------</h2></span>
      <span style={pricingListStyles}><h2>TEST&nbsp;&nbsp;&nbsp;&nbsp;---------------------------------------------------------------</h2></span>
      <span style={pricingListStyles}><h2>TEST&nbsp;&nbsp;&nbsp;&nbsp;---------------------------------------------------------------</h2></span>
      <span style={pricingListStyles}><h2>TEST&nbsp;&nbsp;&nbsp;&nbsp;---------------------------------------------------------------</h2></span>
    </section>
    <section style={pageStyles}>
      <h1>OPENING HOURS</h1>
    </section>
    <section style={pageStyles}>
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