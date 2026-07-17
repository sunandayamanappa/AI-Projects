I think this is a fantastic idea. 👍

In fact, I'd recommend creating a folder in your AI repository called:

```text
AI-Projects
│
├── Notes
│      01-LLM.md
│      02-RAG.md
│      03-AI-Agents.md
│      04-LangChain.md
│      ...
```

These notes will help you in interviews much more than watching videos again.

I'll give you notes in an interview-friendly format.

---

# 📘 Module 1 – Large Language Models (LLM)

## What is an LLM?

A Large Language Model (LLM) is an AI model trained on massive amounts of text data to understand and generate human language.

Examples:

* GPT-4
* Llama 3
* Mistral
* Gemma

---

## What can an LLM do?

* Answer questions
* Summarize text
* Translate
* Generate code
* Explain code
* Generate tests

---

## Limitation

LLMs do **not** know your private data.

Example:

```text
What is my resume?
```

Llama doesn't know.

You must provide it.

---

# 📘 Module 2 – Ollama

## What is Ollama?

Ollama lets you run open-source LLMs locally.

Example:

```text
Node.js

↓

Ollama

↓

Llama 3.2
```

---

## Why Ollama?

* Free
* Local
* Privacy
* No API cost
* Fast for development

---

## Code

```javascript
const { Ollama } = require("ollama");

const ollama = new Ollama();
```

---

# 📘 Module 3 – Prompt Engineering

A prompt tells the LLM:

* Who it is
* What to do
* Output format

Example:

```text
You are a Senior Software Engineer.

Explain the following code.
```

---

## Good Prompt

```text
Role

↓

Task

↓

Rules

↓

Input
```

Example:

```text
You are an expert recruiter.

Compare the resume.

Return:

- Match %
- Missing Skills
```

---

# 📘 Module 4 – PDF Parsing

Flow

```text
PDF

↓

Extract Text

↓

Raw Resume Text
```

Purpose:

Convert resume into plain text before AI can understand it.

---

# 📘 Module 5 – Chunking

Problem:

Large resumes exceed model context.

Solution:

Split into small chunks.

Example

```text
Chunk 1

Chunk 2

Chunk 3
```

Benefits:

* Better retrieval
* Lower token usage
* Faster search

---

# 📘 Module 6 – Embeddings

## What are embeddings?

Embeddings convert text into vectors (numbers).

Example:

```text
Angular Developer

↓

[0.21,0.45,0.91,...]
```

---

Purpose:

Semantic search.

---

# 📘 Module 7 – ChromaDB

What is ChromaDB?

A Vector Database.

Stores

```text
Chunk

↓

Embedding
```

Unlike SQL,

it searches meaning instead of exact words.

---

# 📘 Module 8 – Semantic Search

Keyword Search

```text
Angular
```

Only finds "Angular".

Semantic Search

```text
Frontend Framework
```

Still finds Angular.

Because embeddings understand meaning.

---

# 📘 Module 9 – RAG

Retrieval Augmented Generation

Flow

```text
Question

↓

Embedding

↓

ChromaDB

↓

Relevant Chunks

↓

LLM

↓

Answer
```

Purpose:

Provide private knowledge to LLM.

---

# 📘 Module 10 – AI Agent

Our AI Agent architecture

```text
Question

↓

Executor

↓

Tool Selection

↓

Tool Registry

↓

Execute Tool

↓

Answer
```

---

## Why AI Agent?

Instead of one prompt,

the AI decides which action to perform.

---

# 📘 Module 11 – Tool Registry

Purpose

Maps

```text
Tool Name

↓

Function
```

Example

```javascript
search_resume

↓

askQuestion()
```

Benefits

* Decoupling
* Easy extension
* Cleaner code

---

# 📘 Module 12 – Agent Executor

Purpose

Coordinates workflow.

Responsibilities

* Decide tool
* Retrieve context
* Execute tool
* Return answer

---

# 📘 Module 13 – Multi Tool Execution

Instead of

```text
Question

↓

One Tool
```

AI can execute

```text
Question

↓

Tool 1

↓

Tool 2

↓

Answer
```

---

# 📘 Module 14 – Resume Comparison

Flow

```text
Resume

+

Job Description

↓

LLM

↓

Match %

Missing Skills

Recommendation
```

Purpose

ATS style comparison.

---

# 📘 Module 15 – LangChain

## Problem

We noticed repetition.

Every feature had

```javascript
ollama.chat(...)
```

---

Solution

LangChain.

---

## ChatOllama

Instead of

```javascript
ollama.chat()
```

Use

```javascript
const llm = new ChatOllama(...)
```

---

## PromptTemplate

Instead of

```javascript
`${code}`
```

Use

```javascript
PromptTemplate.fromTemplate(...)
```

Benefits

* Reusable
* Dynamic variables
* Cleaner prompts

---

## LCEL (pipe)

Instead of

```text
Prompt

↓

LLM
```

We write

```javascript
prompt.pipe(llm)
```

Benefits

Composable pipeline.

---

# 📘 Output Parser

Purpose

Convert

```text
LLM Response

↓

JavaScript Object
```

Instead of manually parsing text.

Use when frontend requires structured data.

Not necessary for plain markdown responses.

---

# 📘 Projects Completed

## Project 1

Resume Analyzer

Concepts

* LLM
* Ollama
* Prompt Engineering
* PDF Parsing

---

## Project 2

Chat With Resume

Concepts

* Embeddings
* ChromaDB
* RAG
* AI Agent
* Tool Registry
* Agent Executor
* Resume Comparison

---

## Project 3 (In Progress)

AI Coding Assistant

Completed

* Explain Code
* Find Bugs
* Generate Unit Tests
* ChatOllama
* PromptTemplate
* LCEL (pipe)

---

# 📘 Interview Questions

### What is RAG?

RAG retrieves relevant documents from a knowledge base before sending them to the LLM.

---

### Why Embeddings?

To perform semantic search instead of keyword search.

---

### Why ChromaDB?

To efficiently store and search embeddings.

---

### Why LangChain?

To simplify LLM application development using reusable prompts, models, chains, memory, tools, and agents.

---

### Why PromptTemplate?

Separates prompts from business logic and supports dynamic variable injection.

---

### What is LCEL?

LangChain Expression Language (LCEL) allows multiple LangChain components to be composed into pipelines using `pipe()`.

---

### What is Output Parser?

Converts raw LLM output into structured data (JSON or typed objects) instead of manually parsing strings.

---

# ⭐ My suggestion

Rather than keeping these as plain notes, I'd like to help you build an **"AI Interview Handbook"** over the next few weeks.

Each topic will have the same structure:

* **Definition** (1–2 lines)
* **Why is it needed?**
* **How did we use it in our project?**
* **Interview questions**
* **Common mistakes**
* **Real-world use cases**

By the time you finish your interview preparation, you'll have a personalized handbook based on projects you've actually built—not generic AI notes from the internet. I think that will be one of your strongest assets during interviews.
