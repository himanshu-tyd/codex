import fs from "fs";

const getPrompt = () => fs.readFileSync("C:/Users/HIMANSHU TAVIYAD/codex/backend/src/firstPrompt.md" ,'utf-8');

export const firstPrompt = getPrompt();


export const secondPrompt = `For all designs I ask you to make, have them be beautiful, not cookie cutter. Make webpages that are fully featured and worthy for production.

By default, this template supports JSX syntax with Tailwind CSS classes, React hooks, and Lucide React for icons. Do not install other packages for UI themes, icons, etc unless absolutely necessary or I request them.

Use icons from lucide-react for logos.

Use stock photos from unsplash where appropriate, only valid URLs you know exist. Do not download the images, only link to them in image tags.

Provide the code for the file named [FileName]. Write the response like this: "This is the [FileName] file." Include all necessary imports, components, and exports for the context provided. Structure the file properly for better file management and modularity.

`;

export const thirdPrompt = `<bolt_running_commands>
</bolt_running_commands>

# File Changes

Here is a list of all files that have been modified since the start of the conversation.
This information serves as the true contents of these files!

The contents include either the full file contents or a diff (when changes are smaller and localized).

Use it to:
 - Understand the latest file modifications
 - Ensure your suggestions build upon the most recent version of the files
 - Make informed decisions about changes
 - Ensure suggestions are compatible with existing code

Here is a list of files that exist on the file system but are not being shown to you:

  - /home/project/.bolt/config.json`;
