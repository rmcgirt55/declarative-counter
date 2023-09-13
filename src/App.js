import React, { useState } from "react"

function App() {
  let [counter, changeCounter] = useState(1)
  window.changeCounter = changeCounter
  return (
    <div>
      <h1>{counter}</h1>
      <hr />
      <h2>{counter}</h2>
      <h3>{counter}</h3>
      <h4>{counter}</h4>
      <h5>{counter}</h5>
      <h6>{counter}</h6>
    </div>
  )
}

export default App