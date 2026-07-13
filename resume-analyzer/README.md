# 📄 AI Resume Analyzer

An AI-powered Resume Analyzer built using **Angular**, **Node.js**, and **Ollama** that analyzes a candidate's resume and provides intelligent insights using Large Language Models (LLMs).

The application extracts text from uploaded PDF resumes and leverages **Llama 3.2** to generate AI-driven analysis such as resume summaries, strengths, weaknesses, improvement suggestions, and ATS recommendations.

---

## 🚀 Features

- 📄 Upload Resume (PDF)
- 📑 Extract Resume Text
- 🤖 AI Resume Analysis
- 📝 Professional Resume Summary
- 💪 Identify Candidate Strengths
- ⚠️ Highlight Weaknesses
- 🎯 ATS Improvement Suggestions
- 📊 Overall Resume Evaluation
- 💡 Actionable Recommendations

---

## 🏗️ Tech Stack

### Frontend

- Angular
- TypeScript
- HTML
- CSS

### Backend

- Node.js
- Express.js

### AI

- Ollama
- Llama 3.2

### PDF Processing

- PDF Parser

---

## 🧠 AI Concepts Implemented

- Large Language Models (LLMs)
- Prompt Engineering
- Context Injection
- PDF Text Extraction
- AI-powered Document Analysis
- Resume Evaluation
- Structured AI Responses

---

## 📁 Project Structure

```
resume-analyzer
│
├── frontend
│   ├── src
│   └── ...
│
├── backend
│   ├── routes
│   ├── services
│   │    ├── ai.service.js
│   │    ├── pdf.service.js
│   │    └── analyzer.service.js
│   ├── uploads
│   └── ...
│
└── README.md
```

---

## 🏛️ Architecture

```
                Upload Resume (PDF)
                        │
                        ▼
               Extract Resume Text
                        │
                        ▼
              Build AI Prompt Context
                        │
                        ▼
                   Llama 3.2
                        │
                        ▼
               Resume Analysis
                        │
                        ▼
                  Angular UI
```

---

## 🔄 Application Flow

1. User uploads a PDF resume.
2. Backend extracts the resume text.
3. Resume text is sent to the LLM with a structured prompt.
4. AI analyzes the resume.
5. The response is displayed in the Angular application.

---

## 📋 AI Analysis Includes

The application provides:

- Professional Summary
- Technical Skills Overview
- Strengths
- Weaknesses
- ATS Improvement Suggestions
- Missing Skills
- Resume Score
- Overall Recommendation

---

## 📸 Screenshots

Add screenshots of:

- Upload Resume
- AI Analysis Result
- Resume Summary
- ATS Suggestions

---

## 🎯 Example Prompt

```
Analyze the following resume as an experienced technical recruiter.

Provide:

- Professional Summary
- Technical Skills
- Strengths
- Weaknesses
- Missing Skills
- ATS Improvement Suggestions
- Overall Recommendation
```

---

## 💡 Learning Outcomes

This project demonstrates practical implementation of:

- AI-powered Resume Analysis
- Prompt Engineering
- LLM Integration
- PDF Parsing
- Context-based AI Responses
- Ollama Integration
- Node.js AI APIs
- Angular + AI Integration

---

## 🚀 Future Enhancements

- Resume Chat (RAG)
- Resume vs Job Description Comparison
- Interview Question Generator
- Resume Improvement Suggestions
- ATS Score Calculation
- Vector Database Integration
- Semantic Resume Search

---

## Interview Topics Covered

This project can be discussed in interviews for:

- LLM Integration
- Prompt Engineering
- Ollama
- AI-powered Document Analysis
- PDF Parsing
- Node.js AI Applications
- Angular + AI Integration
- Building AI APIs

---

## Why This Project?

Traditional resume analyzers rely on fixed rules and keyword matching.

This project demonstrates how Large Language Models can provide intelligent, context-aware resume analysis, making the feedback more meaningful and personalized.

---

## Author

**Sunanda Sagar**

GitHub: https://github.com/sunandayamanappa
