import { useState } from "react";

function App() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const getResult = (input: string) => {
    if (mode === "encode") {
      const encoded = input.split("").map((char) => {
        return char.codePointAt(0);
      });
      setOutput(encoded.join(" "));
    }
    if (mode === "decode") {
      const decoded = input.split(" ").map((char) => {
        return String.fromCodePoint(parseInt(char));
      });
      setOutput(decoded.join(""));
    }
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold text-white">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Tokenizer
                </span>
              </h1>
              <div className="hidden sm:block w-px h-8 bg-white/20"></div>
              <p className="hidden sm:block text-white/70 text-sm">
                Encode and decode your data
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/in/baluchandrasekhar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-blue-400 transition-colors duration-200">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/Balusekhar/tokenizer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-gray-300 transition-colors duration-200">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mode Selection */}
        <div className="mb-8">
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-1 border border-white/20">
              <div className="flex space-x-1">
                <button
                  onClick={() => setMode("encode")}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                    mode === "encode"
                      ? "bg-emerald-500 text-white shadow-lg"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}>
                  Encode
                </button>
                <button
                  onClick={() => setMode("decode")}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                    mode === "decode"
                      ? "bg-teal-500 text-white shadow-lg"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}>
                  Decode
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Input/Output Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">
                {mode === "encode" ? "Input Text" : "Encoded Data"}
              </h2>
              <div className="flex items-center space-x-2">
                <div
                  className={`w-3 h-3 rounded-full ${
                    mode === "encode" ? "bg-emerald-400" : "bg-teal-400"
                  }`}></div>
                <span className="text-white/70 text-sm capitalize">{mode}</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 overflow-hidden">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  mode === "encode"
                    ? "Enter text to encode..."
                    : "Enter encoded data to decode..."
                }
                className="w-full h-64 bg-transparent text-white placeholder-white/50 p-6 resize-none focus:outline-none overflow-y-auto scrollbar-hide"
              />
            </div>

            <div className="flex justify-between items-center text-sm text-white/60">
              <span>Characters: {input.length}</span>
            </div>
          </div>

          {/* Output Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">
                {mode === "encode" ? "Encoded Output" : "Decoded Text"}
              </h2>
              <div className="flex items-center space-x-2">
                <div
                  className={`w-3 h-3 rounded-full ${
                    mode === "encode" ? "bg-teal-400" : "bg-emerald-400"
                  }`}></div>
                <span className="text-white/70 text-sm">
                  {mode === "encode" ? "decoded" : "encoded"}
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 overflow-hidden">
              <textarea
                value={output}
                readOnly
                placeholder={
                  mode === "encode"
                    ? "Encoded output will appear here..."
                    : "Decoded text will appear here..."
                }
                className="w-full h-64 bg-transparent text-white placeholder-white/50 p-6 resize-none focus:outline-none overflow-y-auto scrollbar-hide"
              />
            </div>

            <div className="flex justify-between items-center text-sm text-white/60">
              <span>Characters: {output.length}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={() => getResult(input)}
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
            {mode === "encode" ? "Encode Text" : "Decode Data"}
          </button>
          <button
            onClick={clearAll}
            className="px-6 py-4 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
            Clear All
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
