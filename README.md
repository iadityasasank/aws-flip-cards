# AWS Flip Cards Study Tool 🎴

Interactive flip card study tool for AWS certification preparation. This system uses CSV files to store questions and answers, allowing you to easily edit content using Excel, Google Sheets, or any text editor.

## Features ✨

- 📚 **120+ Flip Cards** across 4 AWS topics
- 📝 **CSV-based Content** - Easy to edit in Excel/Sheets
- 🎨 **Beautiful UI** - Modern, responsive design with smooth animations
- ⌨️ **Keyboard Shortcuts** - Efficient navigation and interaction
- 📊 **Progress Tracking** - Monitor your study progress
- 🌐 **Single HTML Template** - One file loads all sections dynamically

## Overview
Interactive flip card study tool for AWS certification preparation. This system uses CSV files to store questions and answers, allowing you to easily edit content using Excel, Google Sheets, or any text editor.

## File Structure

```
flip-cards/
├── index.html              # Main entry point - loads any section dynamically
├── flipcard-style.css      # Styling for flip cards
├── flipcard-script.js      # Flip card functionality (for standalone pages)
├── README.md              # This file
├── getting-started-aws/
│   └── data.csv           # 30 flip cards for Getting Started with AWS
├── iam-aws-cli/
│   └── data.csv           # 30 flip cards for IAM & AWS CLI
├── ec2-fundamentals/
│   └── data.csv           # 30 flip cards for EC2 Fundamentals
└── ec2-solution-architect/
    └── data.csv           # 30 flip cards for EC2 Solution Architect Associate Level
```

## How to Use

### ⚠️ Important: Use a Local Web Server

**Due to browser security restrictions (CORS), you cannot open the HTML file directly (double-clicking it). You must use a local web server.**

### Quick Start Options

#### Option 1: Python (Recommended)
```bash
cd "flip-cards"
python3 -m http.server 8000
```
Then open: `http://localhost:8000/index.html`

#### Option 2: Node.js (if you have it)
```bash
cd "flip-cards"
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
4. Start studying with the interactive flip cards

### Method 2: Direct URL
You can also load a specific section directly using URL parameters:
```
http://localhost:8000/index.html?section=getting-started-aws/data.csv
http://localhost:8000/index.html?section=iam-aws-cli/data.csv
http://localhost:8000/index.html?section=ec2-fundamentals/data.csv
http://localhost:8000/index.html?section=ec2-solution-architect/data.csv
```

## Features

### Interactive Flip Cards
- Click any card to flip it and reveal the answer/question
- Beautiful gradient design with smooth animations
- Responsive layout that works on desktop and mobile

### Navigation
- **Previous/Next Buttons**: Navigate between cards
- **Keyboard Shortcuts**:
  - `Arrow Keys` (←/→ or ↑/↓): Navigate between cards
  - `Space`: Flip current card
  - `R`: Reset all cards (unflip everything)
  - `F`: Flip all cards at once

### Statistics
- Track total cards in the section
- Monitor how many cards you've flipped
- See remaining cards to study

### Controls
- **Reset All**: Unflip all cards and return to the beginning
- **Flip All**: Flip all cards at once to review everything

## CSV File Format

Each CSV file contains flip card data with the following structure:

```csv
Type,Number,Front,Back
Key Point,1,"Front content goes here","Question or answer goes here"
Key Point,2,"Another front content","Another question or answer"
```

### CSV Columns Explained

1. **Type**: The type of card (e.g., "Key Point", "Question", "Concept")
2. **Number**: Card number within the section
3. **Front**: Content shown on the front of the card (concept/definition)
4. **Back**: Content shown on the back of the card (question/answer)

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

### Example of Adding a Card

```csv
Key Point,31,"New concept to learn","New question to answer"
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

