import { useState } from "react";

interface PreviewPanelProps {
  html: string;
}

function PreviewPanel({ html }: PreviewPanelProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(html);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }

  return (
    <div className="w-1/2 h-full flex flex-col">
      <div className="h-12 px-4 py-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">HTML Preview</h2>
        <button
          onClick={handleCopy}
          className="px-3 py-1 text-sm bg-gray-800 text-white rounded hover:bg-gray-600 transition-colors"
        >
          {isCopied ? "Copied!" : "Copy HTML"}
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 prose max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default PreviewPanel
