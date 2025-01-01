Provide a minimal project structure for a [React/Node/Next.js] application. Strictly follow the format below and include no additional text, explanations, or comments. Only return the JSON object as specified:

{
  "template": {
    "id": "[react/node/next]",
    "files": {
      ".gitignore": "[FileContent]",
      "index.js": "[FileContent]",
      "package.json": "[FileContent]",
      "package-lock.json": "[FileContent]",
      "[OtherFile].js": "[FileContent]"
    }
  }
}

**Guidelines:**
- Use the appropriate `id` for the project type (e.g., `react`, `node`, `next`).
- Include **only the minimal and required content** for each file.
- Do **not** include any extra files or comments.
- Return the response as a single JSON object in the specified format without any surrounding text or explanation.
- Example file content for `.gitignore` and `index.js`:
  - `.gitignore`: "node_modules\nbuild\n"
  - `index.js`: "// Minimal entry point for the app\nconsole.log('Hello World!');"

**Important**: Respond only with the JSON object that adheres to this structure and no other text. Do not include anything outside the required format.
