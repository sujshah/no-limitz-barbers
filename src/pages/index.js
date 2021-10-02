import * as React from 'react'

const backgroundStyles = {
  backgroundColor: "#212121",
}

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
}

const IndexPage = () => {
  return (
    <body style={backgroundStyles}>
    <main style={pageStyles}>
      <title>
        Home Page
      </title>
      <h1>NO LIMITZ BARBERS</h1>
    </main>
    </body>
    
  )
}

export default IndexPage