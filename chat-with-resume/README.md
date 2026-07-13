# 🤖 Chat With Resume - AI Resume Assistant

An AI-powered Resume Assistant built using **Node.js**, **Ollama**, and **ChromaDB** that enables users to interact with their resume using natural language.

Instead of performing keyword-based searches, the application uses **Retrieval-Augmented Generation (RAG)** with semantic search to answer questions, summarize resumes, and compare resumes against job descriptions.

---

## 🚀 Features

- 📄 Upload Resume (PDF)
- ✂️ Automatic Text Chunking
- 🧠 Generate Embeddings using `nomic-embed-text`
- 💾 Store Embeddings in ChromaDB
- 🔍 Semantic Resume Search
- 💬 Chat with Resume
- 📝 AI Resume Summary
- 🎯 Resume vs Job Description Comparison
- 🤖 AI Agent for Tool Selection
- 🛠 Tool Registry
- ⚙️ Agent Executor
- 🔄 Multi Tool Execution

---

## 🏗 Tech Stack

### Frontend

- Angular

### Backend

- Node.js
- Express.js

### AI

- Ollama
- Llama 3.2
- nomic-embed-text

### Vector Database

- ChromaDB

---

## 🧠 AI Concepts Implemented

- Large Language Models (LLM)
- Prompt Engineering
- Embeddings
- Chunking
- Vector Databases
- ChromaDB
- Semantic Search
- Retrieval-Augmented Generation (RAG)
- AI Agent
- Tool Registry
- Agent Executor
- Multi-step Tool Execution

---

## 📁 Project Structure

```
chat-with-resume
│
├── frontend
│
├── backend
│   ├── routes
│   ├── services
│   │     ├── ai.service.js
│   │     ├── summary.service.js
│   │     ├── compare.service.js
│   │     ├── search.service.js
│   │     ├── vectordb.service.js
│   │     ├── agent.service.js
│   │     ├── agent-executor.service.js
│   │     └── tool-registry.js
│   │
│   └── uploads
│
└── README.md
```

---

## 🏛 Architecture

```
                   Upload Resume
                         │
                         ▼
                  PDF Text Extraction
                         │
                         ▼
                      Chunking
                         │
                         ▼
                 Generate Embeddings
                         │
                         ▼
                     ChromaDB
                         │
                         ▼
──────────────────────────────────────────────

User Question
        │
        ▼
   Agent Executor
        │
        ▼
 AI selects Tool
        │
        ▼
  Tool Registry
        │
        ▼
 Selected Tool
(Search / Summary / Compare)
        │
        ▼
 Retrieve Context (RAG)
        │
        ▼
      Llama 3.2
        │
        ▼
     Final Response
```

---

## 🔄 Application Flow

### Upload Flow

1. Upload Resume PDF
2. Extract Text
3. Split into Chunks
4. Generate Embeddings
5. Store in ChromaDB

### Chat Flow

1. User asks a question
2. AI Agent selects the appropriate tool
3. Relevant resume chunks are retrieved
4. LLM generates the response
5. Response is returned to the user

---

## Example Questions

### Search Resume

- What Angular projects have I worked on?
- Which companies have I worked for?
- What is my total experience?

### Summary

- Summarize my resume.
- Give me a short professional summary.

### Resume Comparison

- Compare my resume with this Job Description.
- What skills are missing in my resume?

---

## Future Enhancements

- Interview Question Generator
- Resume Improvement Suggestions
- Structured JSON Responses
- Streaming Responses
- Conversation Memory
- LangChain Integration
- LangGraph Workflow
- MCP Integration
- Multi-Agent System

---

## Learning Outcomes

This project demonstrates practical implementation of:

- Retrieval-Augmented Generation (RAG)
- Semantic Search
- AI Agents
- Tool Calling
- Prompt Engineering
- Vector Databases
- LLM Integration
- ChromaDB
- Ollama
