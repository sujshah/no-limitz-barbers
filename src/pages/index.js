import * as React from 'react'

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
      <h1><img style={imgStyles} src="https://fontmeme.com/permalink/211010/f0cb3d7a35da93e6a3ea024a6996c7a3.png" alt="graffiti-creator" border="0"></img></h1>
    </main>
    <section style={pricingStyles}>
      <h1>PRICING</h1>
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