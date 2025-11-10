# Quick Start Guide

## How to Open the MCQ Study Tool

### ⚠️ Important
**You cannot simply double-click `index.html` to open it.** Due to browser security restrictions, you must use a local web server.

### Step-by-Step Instructions

#### Method 1: Using Python (Easiest)

1. **Open Terminal** (or Command Prompt on Windows)

2. **Navigate to the folder:**
   ```bash
   cd "/Users/cheemakurthiadityasasank/Documents/aws course/AWS-CSAA-Prep-MCQs"
   ```

3. **Start the web server:**
   ```bash
   python3 -m http.server 8000
   ```

4. **Open your web browser** and go to:
   ```
   http://localhost:8000/index.html
   ```

5. **To stop the server:** Press `Ctrl + C` in the terminal

#### Method 2: Using VS Code Live Server (Recommended for VS Code Users)

1. **Install the Live Server extension** in VS Code:
   - Open VS Code
   - Go to Extensions (Cmd+Shift+X on Mac, Ctrl+Shift+X on Windows)
   - Search for "Live Server"
   - Click Install

2. **Open the folder** in VS Code:
   - File → Open Folder
   - Select the `AWS-CSAA-Prep-MCQs` folder

3. **Right-click on `index.html`** in the file explorer

4. **Select "Open with Live Server"**

5. The browser will automatically open with the MCQ tool

#### Method 3: Using Node.js (if you have it installed)

1. **Open Terminal**

2. **Navigate to the folder:**
   ```bash
   cd "/Users/cheemakurthiadityasasank/Documents/aws course/AWS-CSAA-Prep-MCQs"
   ```

3. **Start the web server:**
   ```bash
   npx http-server -p 8000
   ```

4. **Open your web browser** and go to:
   ```
   http://localhost:8000/index.html
   ```

## Using the MCQ Tool

1. **Select a section** from the dropdown menu:
   - Getting Started with AWS
   - IAM & AWS CLI
   - EC2 Fundamentals
   - EC2 Solution Architect Associate Level

2. **Answer questions** by clicking on an option (A, B, C, or D)

3. **Click "Submit Answer"** to check your response

4. **Track your progress** using the scoreboard:
   - Total Questions
   - Correct answers
   - Incorrect answers
   - Score percentage

5. **Review wrong answers** by clicking "Review Wrong Answers" button

6. **Navigate** between questions using Previous/Next buttons or arrow keys

## Troubleshooting

### "Error loading questions" message
- Make sure you're using a local web server (not opening the file directly)
- Check that the CSV files exist in the section folders
- Check the browser console (F12) for error messages

### Server won't start
- Make sure Python 3 is installed: `python3 --version`
- Try a different port: `python3 -m http.server 8080`
- Check if port 8000 is already in use

### Questions not loading
- Refresh the browser page
- Check that you selected a section from the dropdown
- Verify the CSV files are in the correct folders

## Need Help?

Check the main README.md file for more detailed information.

