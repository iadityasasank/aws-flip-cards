# AWS MCQ Study Tool 📝

Interactive multiple choice question (MCQ) study tool for AWS certification preparation. This system uses CSV files to store questions, options, and answers, allowing you to easily edit content using Excel, Google Sheets, or any text editor.

## Features ✨

- 📚 **120+ MCQs** across 4 AWS topics
- 📝 **CSV-based Content** - Easy to edit in Excel/Sheets
- 🎨 **Beautiful UI** - Modern, responsive design
- 📊 **Scoreboard** - Track correct/incorrect answers and score percentage
- 🔍 **Review Section** - Review all incorrect answers with explanations
- ⌨️ **Keyboard Navigation** - Efficient navigation with arrow keys
- 🌐 **Single HTML Template** - One file loads all sections dynamically

## Overview
Interactive multiple choice question (MCQ) study tool for AWS certification preparation. This system uses CSV files to store questions, multiple choice options, and answers, allowing you to easily edit content using Excel, Google Sheets, or any text editor.

## File Structure

```
AWS-CSAA-Prep-MCQs/
├── index.html              # Main entry point - MCQ interface
├── mcq-style.css           # Styling for MCQ interface
├── README.md              # This file
├── getting-started-aws/
│   └── mcq-data.csv       # 30 MCQs for Getting Started with AWS
├── iam-aws-cli/
│   └── mcq-data.csv       # 30 MCQs for IAM & AWS CLI
├── ec2-fundamentals/
│   └── mcq-data.csv       # 30 MCQs for EC2 Fundamentals
└── ec2-solution-architect/
    └── mcq-data.csv       # 30 MCQs for EC2 Solution Architect Associate Level
```

## How to Use

### ⚠️ Important: Use a Local Web Server

**Due to browser security restrictions (CORS), you cannot open the HTML file directly (double-clicking it). You must use a local web server.**

### Quick Start Options

#### Option 1: Python (Recommended)
```bash
cd "AWS-CSAA-Prep-MCQs"
python3 -m http.server 8000
```
Then open: `http://localhost:8000/index.html`

#### Option 2: Node.js (if you have it)
```bash
cd "AWS-CSAA-Prep-MCQs"
npx http-server -p 8000
```
Then open: `http://localhost:8000/index.html`

#### Option 3: VS Code Live Server
If you use VS Code:
1. Install "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Method 1: Main Index (Recommended)
1. Start a local web server (see options above)
2. Open `index.html` in your web browser
3. Select a section from the dropdown menu
4. Answer the multiple choice questions
5. Track your score and review incorrect answers

### Method 2: Direct URL
You can also load a specific section directly using URL parameters:
```
http://localhost:8000/index.html?section=getting-started-aws/mcq-data.csv
http://localhost:8000/index.html?section=iam-aws-cli/mcq-data.csv
http://localhost:8000/index.html?section=ec2-fundamentals/mcq-data.csv
http://localhost:8000/index.html?section=ec2-solution-architect/mcq-data.csv
```

## Features

### Multiple Choice Questions
- Select an answer from 4 options (A, B, C, D)
- Immediate feedback on correct/incorrect answers
- Color-coded options (green for correct, red for incorrect)
- Beautiful, responsive design that works on desktop and mobile

### Scoreboard
- **Total Questions**: Number of questions in the section
- **Correct**: Count of correct answers
- **Incorrect**: Count of incorrect answers
- **Score**: Percentage of correct answers
- **Progress Bar**: Visual representation of completion

### Review Section
- Click "Review Wrong Answers" to see all incorrect responses
- Shows your answer vs. correct answer
- Includes explanations for each question
- Helps identify areas that need more study

### Navigation
- **Previous/Next Buttons**: Navigate between questions
- **Keyboard Shortcuts**:
  - `Arrow Keys` (←/→ or ↑/↓): Navigate between questions
- **Reset Quiz**: Start over and clear all answers

### Controls
- **Submit Answer**: Check your selected answer
- **Reset Quiz**: Clear all answers and start fresh
- **Review Wrong Answers**: View all incorrect answers with explanations

## CSV File Format

Each CSV file contains flip card data with the following structure:

```csv
Type,Number,Front,Back
Key Point,1,"Front content goes here","Question or answer goes here"
Key Point,2,"Another front content","Another question or answer"
```

### CSV Columns Explained

1. **Question**: The multiple choice question text
2. **OptionA**: First answer option (typically incorrect)
3. **OptionB**: Second answer option (typically the correct answer)
4. **OptionC**: Third answer option (typically incorrect)
5. **OptionD**: Fourth answer option (typically incorrect)
6. **CorrectAnswer**: The correct option (A, B, C, or D)
7. **Explanation**: Detailed explanation of the correct answer

### Important Notes for CSV Files

- **Commas in Content**: If your content contains commas, wrap the entire field in double quotes
- **Line Breaks**: Use actual line breaks in your CSV for multi-line content
- **Special Characters**: Most special characters are supported, including emojis
- **Encoding**: Files should be saved as UTF-8 for best compatibility

## Editing Flip Card Content

### Using Excel or Google Sheets

1. Open the CSV file in Excel or Google Sheets
2. Edit the content in the `Front` and `Back` columns
3. Save as CSV format (UTF-8 encoding recommended)
4. Refresh your browser to see changes

### Using a Text Editor

1. Open the CSV file in a text editor (VS Code, Notepad++, etc.)
2. Edit content directly, ensuring proper CSV formatting
3. Save the file
4. Refresh your browser

### Adding New Cards

To add more cards to a section:

1. Open the CSV file
2. Add a new row with format: `Type,Number,"Front","Back"`
3. Update the Number to be sequential
4. Save the file
5. Refresh your browser

### Example of Adding a Question

```csv
"What is AWS Lambda?","A database service","A serverless compute service that runs code in response to events","A storage service","A networking service","B","AWS Lambda is a serverless compute service that runs code in response to events without provisioning or managing servers."
```

## Sections Included

### 1. Getting Started with AWS (30 cards)
Covers fundamental AWS concepts including:
- AWS Global Infrastructure
- Core services (S3, EC2, Lambda, RDS)
- Management tools (Console, CLI, CloudFormation)
- AWS Well-Architected Framework
- Pricing models and support plans

### 2. IAM & AWS CLI (30 cards)
Covers identity management and command-line tools:
- IAM users, groups, and roles
- IAM policies and best practices
- Multi-Factor Authentication (MFA)
- AWS CLI configuration and commands
- IAM security features

### 3. EC2 Fundamentals (30 cards)
Covers EC2 basics:
- Instance types and families
- Pricing models (On-Demand, Reserved, Spot)
- Storage options (EBS, Instance Store)
- Security Groups and Key Pairs
- Auto Scaling and Load Balancing

### 4. EC2 Solution Architect Associate Level (30 cards)
Covers advanced EC2 architecture:
- High availability design
- Multi-tier architectures
- Cost optimization strategies
- Disaster recovery patterns
- Performance tuning
- Security best practices

## Technical Details

### Browser Compatibility
- Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- **Requires a local web server** - cannot open HTML file directly due to CORS restrictions
- No internet connection needed after initial load (for local files)

### File Loading
- Uses Fetch API to load CSV files
- Parses CSV with custom JavaScript parser
- Handles quoted fields and special characters
- Generates flip cards dynamically from CSV data

### Styling
- CSS-based animations for smooth flipping
- Responsive grid layout
- Gradient backgrounds
- Custom scrollbars

## Troubleshooting

### Cards Not Loading

#### Most Common Issue: CORS Error
If you see errors about "CORS policy" or "Failed to fetch" in the browser console:
- **You must use a local web server** (see "How to Use" section above)
- Opening the HTML file directly (file://) will not work due to browser security restrictions

#### Other Issues:
- Check that CSV file path is correct
- Verify CSV file format is valid
- Check browser console (F12) for error messages
- Ensure CSV file is in the correct directory
- Make sure the web server is running and accessible

### Loading Indicator Not Showing
- If cards appear to do nothing when selecting a section, check the browser console (F12)
- Look for error messages in the console
- Verify the CSV files exist in the expected locations

### Content Not Displaying Properly
- Verify CSV file uses proper quoting for fields with commas
- Check file encoding (should be UTF-8)
- Ensure special characters are properly escaped

### Keyboard Shortcuts Not Working
- Click on the page first to ensure focus
- Some shortcuts may conflict with browser shortcuts
- Check that JavaScript is enabled

## Tips for Effective Study

1. **Regular Review**: Study a few cards each day rather than cramming
2. **Active Recall**: Try to answer before flipping the card
3. **Spaced Repetition**: Review previously studied cards regularly
4. **Focus Areas**: Use the section selector to focus on weak areas
5. **Progress Tracking**: Use the statistics to track your progress

## Customization

### Adding New Sections

1. Create a new folder (e.g., `s3-fundamentals/`)
2. Create a `data.csv` file with your cards
3. Add the section to the dropdown in `index.html`:
   ```html
   <option value="s3-fundamentals/data.csv">S3 Fundamentals</option>
   ```

### Changing Colors

Edit `flipcard-style.css` to customize:
- Card background gradients
- Button colors
- Text colors
- Hover effects

## Credits

- Data sourced from AWS documentation and certification study materials
- Questions based on AWS Certified Solutions Architect Associate exam topics
- Updated with current AWS services and best practices (2024)

## License

This study tool is for personal use in preparing for AWS certification exams.

