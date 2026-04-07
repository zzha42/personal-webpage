# Personal Portfolio Website

## What is this?

This is a professional personal portfolio website. It displays your background, education, and software projects in a clean, modern layout so potential employers and collaborators can learn about you quickly.

---

## How to run it (double-click, no typing required)

Before you can run this website on your computer, you need **Node.js** installed. Node.js is a free program that lets your computer run the website code.

### Step 1 — Check if Node.js is already installed

1. Press the **Windows key**, type `cmd`, then press **Enter**. A black text window will open.
2. Type the following and press **Enter**:
   ```
   node --version
   ```
3. If you see a number like `v22.11.0`, Node.js is already installed. Skip to **Step 3**.
4. If you see an error, download and install Node.js from **nodejs.org** (choose the "LTS" version), then restart your computer.

### Step 2 — Open the project folder in the text window

In the same black text window, type:

```
cd "D:\Claude Projects\Personal Webpage"
```

Press **Enter**.

### Step 3 — Install the pieces the website needs (first time only)

Type the following and press **Enter**:

```
npm install
```

Wait for it to finish. You only need to do this once.

### Step 4 — Start the website

Type the following and press **Enter**:

```
npm run dev
```

After a few seconds you will see a message like:

```
  ➜  Local:   http://localhost:5173/
```

### Step 5 — Open the website in your browser

Open any web browser (Chrome, Edge, Firefox) and go to:

```
http://localhost:5173
```

Your portfolio website will appear. To stop the website, go back to the black text window and press **Ctrl + C**.

---

## Customising the content

All placeholder text is clearly labelled. To update it:

| What to change | File to open |
|---|---|
| Your name | `src/components/Navbar.jsx` and `src/components/Footer.jsx` |
| Job title / intro paragraph | `src/components/Hero.jsx` |
| Technology tags (Python, React…) | `src/components/Hero.jsx` |
| Education entries | `src/components/Education.jsx` |
| Project cards | `src/components/Projects.jsx` |
| Email and social media links | `src/components/Footer.jsx` |

Open any of these files with a text editor (e.g. **Notepad** or **VS Code**) and replace the placeholder text with your own details.

---

## Common problems and fixes

**"npm is not recognised as a command"**
Node.js is not installed. Download it from nodejs.org (LTS version), run the installer, restart your computer, then try again.

**The page loads but looks broken (no colours, no layout)**
The CSS build step may not have run. In the text window, type `npm run build` and press Enter, then try `npm run dev` again.

**Port 5173 is already in use**
Another program is using that port. In the text window, type `npm run dev -- --port 5174` to use a different port, then open `http://localhost:5174` instead.

**Changes I made to the files are not showing up**
Make sure the development server is still running (`npm run dev`). Save the file again — the browser should refresh automatically within a second.

**"Cannot find module" error after pulling new changes**
Run `npm install` again in the text window and then restart the dev server.
