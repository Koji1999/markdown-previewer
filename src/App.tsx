import './App.css'
import { useState } from "react";
import EditorPanel from './components/EditorPanel';
import PreviewPanel from './components/PreviewPanel';
import { marked } from 'marked';

function App() {
  const [text, setText] = useState("")
  return (
    <div className="flex h-screen overflow-hidden">
      <EditorPanel value={text} onChange={setText} />
      <PreviewPanel html={marked(text) as string} />
    </div>
  )
}

export default App
