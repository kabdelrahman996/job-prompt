Job Prompt Generator

A lightweight React application that helps you generate ready-to-use AI prompts for job applications. Simply provide your CV once, then paste any job description to get a structured prompt ready for ChatGPT or any AI assistant.

Features

Local CV Storage
Save your CV directly in the browser (localStorage) and update it anytime.

Job Description Input
Paste the job description to generate a tailored AI prompt.

Language Selection

EN → AI explanations in English (cover letter also in English).

AR → AI explanations in Arabic (cover letter remains in English).

Prompt Template
Includes:

Full CV

Full job description

Clear instructions for AI:

MATCH: YES/NO

Cover letter (if YES)

Feedback on missing skills (if NO)

Copy Button
Copy the generated prompt with one click, with visual feedback.

Responsive Design
Works seamlessly on mobile, tablet, and desktop.

Downloadable CV
A direct link to download the project owner’s CV from the footer.

Tech Stack

React (Hooks)

Vite — Fast build & development

Tailwind CSS — Clean, responsive styling

JavaScript (ES6+)

LocalStorage — For storing CV data

Project Structure
project-root/
├─ public/
│  └─ abdelrahman-khaled-cv.pdf      # Downloadable CV
├─ src/
│  ├─ main.jsx                       # Entry point
│  ├─ App.jsx
│  └─ ui/
│     ├─ AppLayout.jsx               # Main layout
│     ├─ Header.jsx                  # Header + CV modal
│     ├─ Main.jsx                    # Job description & prompt generation
│     ├─ Modal.jsx                    # Reusable modal
│     ├─ Prompt.jsx                   # Generated prompt display
│     └─ Footer.jsx                  # Footer + CV download
├─ index.html
├─ package.json
├─ vite.config.js
└─ eslint.config.js

Usage

Clone the repository

git clone https://github.com/kabdelrahman996/job-prompt.git
cd job-prompt


Install dependencies

npm install


Run the project

npm run dev


Open in browser
Go to http://localhost:5173/ (or the URL shown in the terminal).

Save your CV
Click “Update your CV” in the header and paste your CV. It will be saved locally.

Generate prompt
Paste the job description, choose the AI response language, and click “Generate prompt”. Copy and use the prompt directly in any AI assistant.

Future Plans

Direct AI integration (generate cover letters automatically)

Job type presets for different roles

Prompt history & saved templates

Live Demo

https://job-prompt-abb.netlify.app/
