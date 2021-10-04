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
  fontSize: "26px",
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
  backgroundColor: "#000000",
}

const IndexPage = () => {
  return (
    <body>
    <main style={pageStyles}>
      <title>
        Home Page
      </title>
      <h1>NO LIMITZ BARBERS</h1>
    </main>
    <section style={pricingStyles}>
      <h1>PRICING</h1>
    </section>
    </body>
  )
}

export default IndexPage