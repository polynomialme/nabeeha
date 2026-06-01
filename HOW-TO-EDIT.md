# How to Edit Your Portfolio

Hi Nabeeha! Here's how to update your website. You don't need to install anything -- everything is done through GitHub in your browser.

---

## Editing Your Content

All your portfolio content lives in one file: **`data.json`**

### Step by step:

1. Go to https://github.com/polynomialme/nabeeha
2. Click on **`data.json`** in the file list
3. Click the **pencil icon** (top right of the file) to edit
4. Make your changes (see examples below)
5. Scroll down and click **"Commit changes"**
6. Your website will automatically update in ~1 minute

---

## What You Can Edit

### Your personal info
Find this section near the top:
```json
"personal": {
  "name": "Nabeeha Navaal Ahmed",
  "tagline": "Social scientist and strategist...",
  "bio": "I'm a Minerva University graduate...",
  "email": "nahmed4@student.hult.edu",
  "linkedin": "https://www.linkedin.com/in/nabeehaahmed/",
  "photo": "/photo.jpg"
}
```
Just change the text between the quotes.

---

### Your impact numbers
Each impact stat looks like this:
```json
{
  "number": "400%",
  "label": "Application Growth from Karachi",
  "org": "Minerva University",
  "date": "2023-05"
}
```

**To edit one:** Change the text between the quotes.

**To remove one:** Delete the entire block (from `{` to `}`), including the comma before or after it.

**To add a new one:** Copy an existing block, paste it after the last one, and change the values. Make sure there's a comma between each block.

---

### Your experience
Each job looks like this:
```json
{
  "title": "Product Manager - Nutrilinq",
  "org": "Kelker Pharma",
  "location": "Los Angeles, USA",
  "startDate": "2024-10",
  "endDate": "2025-09",
  "bullets": [
    "First bullet point here.",
    "Second bullet point here."
  ]
}
```

- **Dates** use the format `"YYYY-MM"` (year-month), like `"2024-10"` for October 2024
- If you're still working there, use `null` (no quotes) for endDate: `"endDate": null`
- **Bullets** are inside `[ ]` brackets, each in quotes, separated by commas
- Experience is automatically sorted by most recent first

---

### Your projects
Each project looks like this:
```json
{
  "name": "Flood Awareness Campaign Optimization",
  "description": "Used GIS tools and demographic data...",
  "tags": ["GIS", "Data Analysis", "Public Policy"],
  "link": null
}
```

- **Tags** go inside the `[ ]` brackets, each in quotes, separated by commas
- **Link** can be a URL like `"https://example.com"` or `null` if there's no link

---

### Your education
```json
{
  "school": "Hult International Business School",
  "degree": "Masters in Management (Marketing) & Masters in Business Analytics",
  "location": "Cambridge, USA",
  "dates": "2027",
  "details": ["Future Leader & Changemaker Scholarships Recipient"]
}
```

---

### Languages and skills
These are simple lists:
```json
"languages": ["English (Fluent)", "Urdu (Fluent)", "French (Intermediate)"],
"skills": ["Excel", "Python", "R", "Tableau"]
```
Add or remove items inside the `[ ]` brackets.

---

## Changing Your Photo

1. Go to https://github.com/polynomialme/nabeeha
2. Click on the **`public`** folder
3. Click **"Add file"** > **"Upload files"**
4. Upload your new photo and name it **`photo.jpg`** (it will replace the old one)
5. Click **"Commit changes"**

Your photo should be roughly square (same width and height) for best results.

---

## Common Mistakes to Avoid

- **Missing quotes:** All text must be wrapped in `"double quotes"`
- **Missing commas:** Each item in a list needs a comma after it, except the last one
- **Broken brackets:** Make sure every `{` has a `}` and every `[` has a `]`

If you accidentally break something, don't panic! Click the **"History"** button on the file page to see previous versions and revert.

---

## Need Help?

If something breaks or looks weird, reach out to Polina. She can fix it quickly.
