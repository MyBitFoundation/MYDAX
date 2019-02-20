import React from 'react'
import { Root, Routes } from 'react-static'

import '@assets/css/app.css'
import '@assets/css/tachyons.min.css'

function App() {
  return (
    <Root>
      <div className="content">
          <Routes />
      </div>
    </Root>
  )
}

export default App
