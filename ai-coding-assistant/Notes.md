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
