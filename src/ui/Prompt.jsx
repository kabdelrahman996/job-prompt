import { useState } from "react";

function Prompt({ finalPrompt, close }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    if (!finalPrompt) return;

    navigator.clipboard.writeText(finalPrompt);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }

  return (
    <section className="mt-6 sm:mt-8">
      <div className="flex items-center content-between my-3">
        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-slate-100">
          Generated prompt
        </h3>
        <button
          className="w-50 mx-auto sm:w-auto inline-flex items-center cursor-pointer justify-center gap-2 text-sm sm:text-base font-semibold bg-slate-100 text-slate-900 py-2.5 px-4 rounded-xl shadow-sm hover:bg-white hover:opacity-80 hover:-translate-y-px active:translate-y-0 transition-transform transition-colors duration-200"
          onClick={close}
        >
          Generate another one
        </button>
      </div>

      <div className="relative w-full max-w-4xl text-start mx-auto border border-slate-700/80 bg-slate-900/80 rounded-2xl p-4 sm:p-5 shadow-lg">
        <p className="max-h-[60vh] overflow-auto whitespace-pre-wrap text-sm sm:text-base leading-relaxed text-slate-50">
          {finalPrompt}
        </p>

        <div className="absolute top-3 right-3">
          <button
            onClick={handleCopy}
            className={`text-xs cursor-pointer sm:text-sm font-semibold py-1.5 px-3 rounded-2xl transition-all duration-200 border
              ${
                copied
                  ? "bg-emerald-500 text-white border-emerald-400 scale-105"
                  : "bg-slate-800/80 text-slate-100 border-slate-600 hover:bg-slate-700 hover:border-slate-500"
              }`}
          >
            {copied ? "Copied ✓" : "Copy"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Prompt;
