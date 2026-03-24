import './App.css'
import React, { useState } from "react";
import { marked } from "marked";

function App() {
  const [text, setText] = useState("")
  return (
    <div className="flex h-screen">
      <div className="w-1/2 h-full">
        <textarea className="h-full w-full" value={text} onChange={(e) => setText(e.target.value)}></textarea>
      </div>
      <div className="w-1/2 h-full">
        <div></div>
      </div>
    </div>
  )
}

export default App
