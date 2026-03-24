import { useRef, useEffect } from "react";

interface EditorPanelProps {
  value: string;
  onChange: (value: string) => void;
}

function EditorPanel({ value, onChange }: EditorPanelProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  return (
    <div className="w-1/2 h-full flex flex-col border-r border-gray-300">
      <div className="h-12 px-4 py-3 bg-gray-200 border-b border-gray-300">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Markdown</h2>
      </div>
      <textarea
        ref={textareaRef}
        className="flex-1 w-full p-4 resize-none outline-none font-mono text-sm text-gray-800 bg-white"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type your markdown here..."
        spellCheck={false}
      />
    </div>
  )
}

export default EditorPanel
