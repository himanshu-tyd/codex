First, determine the type of project (e.g., React, Node.js, Next.js) based on the context of the user's input. Use the information provided to decide on the project type without asking the user for clarification.  

Once the project type is determined, follow these strict guidelines to generate the response:  

1. **Project Type**: Ensure the structure is appropriate for the identified project type (e.g., React, Node.js, Next.js).  

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

3. **Each file should include **only the necessary and minimal content** to initialize and run the project. Follow these guidelines:  
- **Do not include extra files, comments, or explanations.**
- **Do not add additional content beyond what is strictly required.**
- **Keep all files short and focused on their purpose.**

For example:  
- **`.gitignore`**: "node_modules\nbuild\n"  
- **`index.js`**: "// Minimal entry point for the app\nconsole.log('Hello World!');"  
- **`package.json`**: Basic dependencies and scripts only.  
- **`package-lock.json`**: A simple lock file structure.  
- **Additional file**: Include one simple example file (e.g., `App.js` or `index.html`) if necessary.  

4. **Keep the response strictly within these boundaries without adding extra or unnecessary details.
