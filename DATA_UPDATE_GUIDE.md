# 📊 Data Update Guide - How to Update Dashboard Data

## 🎯 Overview

The dashboard now **automatically loads sample data** when opened. You can update this data anytime, and all users will see the new data instantly!

---

## ✅ What You Have Now

### **Current Setup**
- ✅ Dashboard auto-loads data from `sample-data.json` (288KB)
- ✅ No manual upload needed - data appears immediately
- ✅ 150 audit records + 567 recruiter records pre-loaded
- ✅ Users see visualizations instantly on page load

### **Live Links**
- **GitHub Repository**: https://github.com/Rishab25276/Adani-Ambuja-Cement-Audit-Dashboard
- **Live Dashboard**: https://3000-ioyjkajzw2h2lj6y89w5f-5c13a017.sandbox.novita.ai
- **GitHub Pages** (after enabling): https://rishab25276.github.io/Adani-Ambuja-Cement-Audit-Dashboard/

---

## 🔄 How to Update Data (3 Methods)

### **Method 1: Update via Excel File (Recommended)**

#### **Step 1: Prepare Your Excel File**

Create an Excel file with **exactly these 2 sheets**:

**Sheet 1: "Audit Count "** (with trailing space)
Required columns:
- Client
- Finanical Year (or Financial Year)
- Month
- MonthNumber
- Week
- Recruitment Stage
- Parameter
- Total Population
- Opportunity Count
- Opportunity Pass
- Opportunity Fail
- Opportunity NA

**Sheet 2: "Recruiter Wise Data "** (with trailing space)
Required columns:
- Recruiter Name
- Audit Score (1 = Pass, 0 = Fail, NA = Not Applicable)
- Other optional fields: Financial Year, Month, Week, Parameter

#### **Step 2: Convert Excel to JSON**

Run this Python script in the repository directory:

```python
import openpyxl
import json

# Load your Excel file
wb = openpyxl.load_workbook('YOUR_NEW_DATA.xlsx')

# Process Audit Count sheet
audit_sheet = wb['Audit Count ']  # Note the trailing space
audit_data = []
headers = []

# Get headers
for col in range(1, audit_sheet.max_column + 1):
    header = audit_sheet.cell(1, col).value
    if header:
        headers.append(str(header).strip())

# Get data rows
for row in range(2, audit_sheet.max_row + 1):
    row_data = {}
    for col_idx, header in enumerate(headers, 1):
        cell_value = audit_sheet.cell(row, col_idx).value
        if cell_value is not None:
            if isinstance(cell_value, (int, float)):
                row_data[header] = cell_value
            else:
                row_data[header] = str(cell_value).strip()
    if row_data:
        audit_data.append(row_data)

# Process Recruiter Wise Data sheet
recruiter_sheet = wb['Recruiter Wise Data ']  # Note the trailing space
recruiter_data = []
rec_headers = []

for col in range(1, recruiter_sheet.max_column + 1):
    header = recruiter_sheet.cell(1, col).value
    if header:
        rec_headers.append(str(header).strip())

for row in range(2, recruiter_sheet.max_row + 1):
    row_data = {}
    for col_idx, header in enumerate(rec_headers, 1):
        cell_value = recruiter_sheet.cell(row, col_idx).value
        if cell_value is not None:
            if isinstance(cell_value, (int, float)):
                row_data[header] = cell_value
            else:
                row_data[header] = str(cell_value).strip()
    if row_data:
        recruiter_data.append(row_data)

# Create JSON structure
dashboard_data = {
    "auditData": audit_data,
    "recruiterData": recruiter_data,
    "metadata": {
        "totalRecords": len(audit_data),
        "totalRecruiters": len(recruiter_data),
        "lastUpdated": "2025-12-03"  # Update this date
    }
}

# Save to JSON
with open('sample-data.json', 'w') as f:
    json.dump(dashboard_data, f, indent=2)

print(f"✅ JSON created! Audit: {len(audit_data)}, Recruiters: {len(recruiter_data)}")
wb.close()
```

Save this as `convert_to_json.py` and run:
```bash
python3 convert_to_json.py
```

#### **Step 3: Push to GitHub**

```bash
cd /home/user/webapp

# Add the updated JSON file
git add sample-data.json

# Commit with descriptive message
git commit -m "Update dashboard data - December 2025"

# Push to GitHub
git push origin main
```

#### **Step 4: Verify**

Wait 1-2 minutes, then visit your live dashboard. The new data will load automatically!

---

### **Method 2: Direct JSON Edit (Advanced Users)**

If you're comfortable with JSON, you can edit `sample-data.json` directly:

```json
{
  "auditData": [
    {
      "Client": "Adani",
      "Finanical Year": "FY 2025-2026",
      "Month": "July",
      "Week": 1,
      "Parameter": "Resume Screening",
      "Total Population": 100,
      "Opportunity Count": 50,
      "Opportunity Pass": 45,
      "Opportunity Fail": 5,
      "Opportunity NA": 0
    }
    // Add more records...
  ],
  "recruiterData": [
    {
      "Recruiter Name": "John Doe",
      "Audit Score": 1,
      "Month": "July",
      "Week": 1
    }
    // Add more records...
  ],
  "metadata": {
    "totalRecords": 150,
    "totalRecruiters": 567,
    "lastUpdated": "2025-12-03"
  }
}
```

Then push to GitHub as shown in Method 1, Step 3.

---

### **Method 3: GitHub Web Interface (No Command Line)**

1. **Go to Repository**: https://github.com/Rishab25276/Adani-Ambuja-Cement-Audit-Dashboard

2. **Click on `sample-data.json`** file

3. **Click Edit button** (pencil icon)

4. **Replace the content** with your new JSON data

5. **Scroll down and click "Commit changes"**

6. **Add commit message**: "Update dashboard data"

7. **Click "Commit changes"** button

8. **Done!** Data updates in 1-2 minutes

---

## 📝 Important Notes

### **Excel File Format**
- Sheet names MUST be exactly: `"Audit Count "` and `"Recruiter Wise Data "` (with trailing spaces)
- Column names should match the template
- No empty rows between data
- First row must be headers

### **Data Structure**
- `auditData` array contains audit records
- `recruiterData` array contains individual scores
- `metadata` tracks totals and last update date

### **File Size**
- Current JSON: ~288KB
- Recommended max: 2MB for fast loading
- If larger, consider data cleanup or filtering

### **Validation**
Before pushing, validate your JSON:
```bash
python3 -m json.tool sample-data.json > /dev/null && echo "✅ Valid JSON"
```

---

## 🔍 Troubleshooting

### **Issue: Dashboard shows "No Data Available"**

**Solution**:
1. Check JSON file exists in repository
2. Verify JSON is valid (no syntax errors)
3. Check browser console for errors (F12)
4. Clear browser cache and reload

### **Issue: Old data still showing**

**Solution**:
1. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Wait 2-3 minutes for CDN to update
3. Try incognito/private window

### **Issue: JSON file too large**

**Solution**:
1. Remove old/unnecessary records
2. Keep only recent months
3. Consider splitting data by quarter

### **Issue: Charts not updating**

**Solution**:
1. Verify all required fields are present
2. Check data types (numbers vs strings)
3. Ensure no null values in critical fields

---

## 📊 Data Maintenance Best Practices

### **Regular Updates**
- Update data weekly or monthly
- Include commit message with date: `"Update data - Week 45, 2025"`
- Keep old Excel files as backups

### **Data Quality**
- Validate Excel file before conversion
- Check for missing values
- Verify calculations (accuracy, error rates)
- Test with small dataset first

### **Version Control**
- Each update creates a git commit
- Can rollback if needed: `git revert <commit-hash>`
- View history: `git log --oneline`

### **Backup Strategy**
- Keep Excel source files in separate folder
- Export data monthly to CSV for backup
- Document major data changes in commit messages

---

## 🚀 Quick Update Workflow

```bash
# 1. Prepare new Excel file with updated data
# 2. Convert to JSON
python3 convert_to_json.py

# 3. Test locally (optional)
python3 -m http.server 3000
# Open http://localhost:3000 and verify

# 4. Push to GitHub
git add sample-data.json
git commit -m "Update data - December 2025"
git push origin main

# 5. Wait 1-2 minutes and check live site
# All users see new data automatically!
```

---

## 🎯 Future Enhancements

### **Planned Features**
- [ ] Automatic data refresh from API
- [ ] Date range picker for historical data
- [ ] Export current view to Excel
- [ ] Data comparison between updates
- [ ] Real-time data sync

### **Advanced Options**
- Connect to Google Sheets API for auto-updates
- Set up GitHub Actions for automated conversion
- Add data validation webhooks
- Create admin panel for data management

---

## 📞 Support

### **Need Help?**
1. Check this guide first
2. Review SAMPLE_DATA_INFO.md for data structure
3. Check GitHub Issues for common problems
4. Create new issue with details

### **Resources**
- **Repository**: https://github.com/Rishab25276/Adani-Ambuja-Cement-Audit-Dashboard
- **Sample Excel**: `Power BI Dashboard Data.xlsx` in repo
- **Conversion Script**: See Method 1 above
- **JSON Validator**: https://jsonlint.com/

---

## ✅ Checklist for Data Update

Before pushing updates, verify:

- [ ] Excel file has correct sheet names
- [ ] All required columns present
- [ ] No empty rows in data
- [ ] JSON file is valid (no syntax errors)
- [ ] File size reasonable (<2MB)
- [ ] Tested locally if possible
- [ ] Commit message is descriptive
- [ ] Pushed to main branch

---

## 🎉 Benefits of Auto-Load

✅ **No Manual Upload**: Users see data immediately  
✅ **Always Current**: Update once, everyone sees it  
✅ **Version Controlled**: Full history in Git  
✅ **Easy Rollback**: Can revert to previous data  
✅ **Professional**: Looks like production dashboard  
✅ **Shareable**: Just send the URL  

---

**Last Updated**: December 3, 2025  
**Current Data**: 150 audit records, 567 recruiter records  
**Dashboard Version**: 4.4 - Auto-Load Edition
