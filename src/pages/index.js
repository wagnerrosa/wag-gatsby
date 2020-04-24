import React from "react"
import '../styles/styles.scss'

const IndexPage = () => (
  <div className="flex">
    <div className="caixa">
      <img src="../../Perfil2.png" />
      <h1 className="title" alt="Wagner Rosa">Wagner Rosa</h1>
      <navigator>
          <a href="https://github.com/wagnerrosa" target="_blank" rel="noopener noreferrer">
            Instagram</a>
          <a href="https://www.linkedin.com/in/wagrosa/" target="_blank" rel="noopener noreferrer">
            Linkedin</a>
          <a href="https://github.com/wagnerrosa" target="_blank" rel="noopener noreferrer">
            Github</a>
      </navigator>
    </div>
  </div>
)

export default IndexPage
