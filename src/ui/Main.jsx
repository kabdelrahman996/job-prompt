import { useState } from "react";
import Prompt from "./Prompt";

const LANG_OPTIONS = {
  en: {
    code: "en",
    label: "EN",
    description: "AI explanations in English. Cover letter also in English.",
    instruction:
      "Use English for all your analysis, reasoning, explanations, and the final cover letter.",
  },
  ar: {
    code: "ar",
    label: "AR",
    description:
      "AI explanations in Arabic. The final cover letter must still be in English.",
    instruction:
      "Use Arabic for all your analysis, reasoning, and explanations. However, always write the final cover letter in English.",
  },
};

const TEMPLATE = `
You are a professional AI career assistant.

LANGUAGE INSTRUCTIONS:
{{LANG_INSTRUCTION}}

Here is my CV:
----------------
{{CV}}
----------------

Here is the job description I want to apply for:
----------------
{{JOB}}
----------------

Your tasks:
1. Analyze if my profile matches this job.
2. Respond with: "MATCH: YES" or "MATCH: NO".
3. If MATCH is YES, write a professional, tailored cover letter for this job.
4. If MATCH is NO, explain clearly what skills or experience are missing.
5. Keep everything clear, structured, and concise.
`;

function Main({ cv }) {
  const [jobDescription, setJobDescription] = useState("");
  const [finalPrompt, setFinalPrompt] = useState("");
  const [language, setLanguage] = useState("en");

  function handleGeneratePrompt() {
    if (!cv.trim() || !jobDescription.trim()) {
      alert("Please add both your CV and the job description");
      return;
    }

    const langInstruction = LANG_OPTIONS[language].instruction;

    const result = TEMPLATE.replace("{{LANG_INSTRUCTION}}", langInstruction)
      .replace("{{CV}}", cv)
      .replace("{{JOB}}", jobDescription);

    setFinalPrompt(result);
  }

  const isDisabled = !cv || !jobDescription;

  return (
    <main className="flex-1 bg-slate-950 text-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="space-y-6 sm:space-y-8">
          {finalPrompt ? (
            <Prompt
              finalPrompt={finalPrompt}
              close={() => setFinalPrompt("")}
            />
          ) : (
            <>
              <section className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                      Paste the job description
                    </h2>
                    <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
                      We will combine it with your saved CV to generate a
                      ready-to-use prompt you can paste into ChatGPT or any AI
                      assistant.
                    </p>
                  </div>

                  <div className="flex flex-col items-start sm:items-end gap-1">
                    <span className="text-xs sm:text-sm text-slate-400">
                      AI response language (analysis & explanations)
                    </span>
                    <div className="inline-flex items-center rounded-full bg-slate-800/80 p-0.5">
                      {Object.values(LANG_OPTIONS).map((opt) => (
                        <button
                          key={opt.code}
                          type="button"
                          onClick={() => setLanguage(opt.code)}
                          className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200
                        ${
                          language === opt.code
                            ? "bg-slate-100 text-slate-900 shadow-sm"
                            : "text-slate-200 hover:bg-slate-700/80"
                        }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-400 max-w-xs text-right">
                      {LANG_OPTIONS[language].description}
                    </p>
                  </div>
                </div>
              </section>

              <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-stretch">
                <textarea
                  onChange={(e) => setJobDescription(e.target.value)}
                  rows={10}
                  placeholder="Paste the full job description here..."
                  className="w-full lg:flex-1 min-h-[220px] border border-slate-700 bg-slate-900/70 text-slate-50 rounded-2xl py-3 px-4 text-sm sm:text-base placeholder:text-slate-500 outline-none 
                focus:ring-2 focus:ring-[#3b7ccb] focus:border-transparent transition-all duration-200 resize-y"
                />

                <div className="flex lg:flex-col gap-3 lg:w-56">
                  <button
                    disabled={isDisabled}
                    onClick={handleGeneratePrompt}
                    className={`w-full text-sm sm:text-base font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-sm
                  ${
                    isDisabled
                      ? "bg-slate-700/60 text-slate-300 cursor-not-allowed"
                      : "bg-[#0c1929] text-[#d8e5f5] hover:bg-slate-800 hover:-translate-y-[1px] cursor-pointer"
                  }`}
                  >
                    Generate prompt
                  </button>

                  <p className="text-xs sm:text-sm text-slate-400">
                    Your CV is loaded from the header.{" "}
                    {cv ? (
                      <span className="text-emerald-400 font-medium">
                        CV detected ✓
                      </span>
                    ) : (
                      <span className="text-amber-300 font-medium">
                        No CV found – click “Update your CV” first.
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </>
          )}

          {/* {finalPrompt && <Prompt finalPrompt={finalPrompt} />} */}
        </div>
      </div>
    </main>
  );
}

export default Main;
