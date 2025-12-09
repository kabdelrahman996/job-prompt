import { useState } from "react";
import Modal from "./Modal";

function Header() {
  const [showUpdateInput, setShowUpdateInput] = useState(false);
  const [cv, setCv] = useState(() => localStorage.getItem("cv") || "");

  function handleSave() {
    localStorage.setItem("cv", cv);
    setShowUpdateInput(false);
  }

  return (
    <>
      <header className="bg-[#0c1929] text-[#d8e5f5] border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between py-4 sm:py-5 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-roboto tracking-tight">
              Job Prompt Generator
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Paste your CV once, then generate tailored prompts for any job
              description.
            </p>
          </div>

          <button
            onClick={() => setShowUpdateInput(true)}
            className="w-50 mx-auto sm:w-auto inline-flex items-center cursor-pointer justify-center gap-2 text-sm sm:text-base font-semibold bg-slate-100 text-slate-900 py-2.5 px-4 rounded-xl shadow-sm hover:bg-white hover:opacity-80 hover:-translate-y-px active:translate-y-0 transition-transform transition-colors duration-200"
          >
            Update your CV
          </button>
        </div>
      </header>

      <Modal isOpen={showUpdateInput} onClose={() => setShowUpdateInput(false)}>
        <h2 className="text-xl font-bold mb-2 text-slate-900">
          Update Your CV
        </h2>
        <p className="text-sm text-slate-600 mb-4">
          Paste your full CV below. It will be saved locally in your browser.
        </p>

        <textarea
          rows="10"
          value={cv}
          onChange={(e) => setCv(e.target.value)}
          placeholder="Paste your full CV here..."
          className="w-full border border-slate-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#3b7ccb] focus:border-transparent resize-y"
        />

        <div className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={() => setShowUpdateInput(false)}
            className="px-4 py-2 cursor-pointer text-sm font-medium text-slate-600 hover:text-slate-800"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="text-sm cursor-pointer sm:text-base font-semibold bg-[#0c1929] text-[#d8e5f5] py-2.5 px-4 rounded-xl hover:opacity-90 hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200"
          >
            Save CV
          </button>
        </div>
      </Modal>
    </>
  );
}

export default Header;
