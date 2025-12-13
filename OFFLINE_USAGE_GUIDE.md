# 📱 Offline Dashboard Usage Guide

## 🎯 Overview

This dashboard is **100% future-proof** and can work completely **offline** without any server or GitHub dependency. You can download the dashboard as a single HTML file and use it anywhere with just your Excel data.

---

## ✅ Key Features for Offline Use

### 1. **Self-Contained Dashboard**
- Single HTML file contains everything (no external dependencies except CDN libraries)
- Works in any modern web browser
- No installation required
- No server needed

### 2. **Direct Excel Processing**
- Upload Excel files directly from your computer
- Processes data in the browser using JavaScript
- No data sent to any server (100% privacy)
- Real-time dashboard updates

### 3. **Future-Proof Design**
- Update your Excel data anytime
- Dashboard automatically adapts to new data
- No code changes needed
- No GitHub uploads required

---

## 📥 How to Use Offline

### Step 1: Download the Dashboard

**Option A: From GitHub**
1. Go to: https://github.com/Rishab25276/Adani-Ambuja-Cement-Audit-Dashboard
2. Click on `index.html`
3. Click the "Download" button (or right-click → "Save as...")
4. Save to your computer

**Option B: From GitHub Pages**
1. Visit: https://rishab25276.github.io/Adani-Ambuja-Cement-Audit-Dashboard/
2. Right-click anywhere → "Save Page As..."
3. Save as `Adani_Dashboard.html`

### Step 2: Prepare Your Excel File

Your Excel file **MUST** have these two sheets:

#### Sheet 1: `Audit Count`
Required columns:
- Client
- Financial Year
- Month
- Week
- Recruitment Stage
- Parameter
- Opportunity Count
- Opportunity Pass
- Opportunity Fail
- Opportunity NA
- Accuracy Score
- Error %

#### Sheet 2: `Recruiter Wise Data`
Required columns:
- Client
- Financial Year
- Month
- Month Number
- Week
- Recruitment Stage
- Recruiter Name
- Program Manager
- Parameter
- Audit Score

**Important Notes:**
- Sheet names must be **exact**: `Audit Count` and `Recruiter Wise Data`
- Trailing spaces in sheet names are OK (e.g., `Audit Count `)
- Column names must match exactly
- Data can have trailing spaces - dashboard handles it automatically

### Step 3: Open and Use the Dashboard

1. **Open the HTML file**
   - Double-click the downloaded HTML file
   - Or right-click → "Open with" → Choose your browser

2. **Upload Your Excel File**
   - Click the **"Upload Data"** button in the header
   - Click **"Click to Upload Excel File"**
   - Select your Excel file
   - Wait for processing (usually 1-2 seconds)

3. **View Your Dashboard**
   - All 9 views are now populated with your data:
     - Overall View
     - Weekly View
     - Monthly View
     - Yearly View
     - Recruiter View
     - Parameter View
     - Comparison View
     - Trend Analysis
     - Recruiter of the Month

4. **Use Filters**
   - Filter by Year, Month, Week, Recruiter, Parameter
   - Filters update all views automatically
   - Click "Reset Filters" to clear

5. **Export Data**
   - Click "Export PDF" to save current view
   - PDF includes all charts and visualizations

---

## 🔄 Updating Data

### When You Have New Data:

1. **Update your Excel file** with new records
2. **Open the dashboard** (same HTML file)
3. **Upload the new Excel file**
4. Dashboard automatically refreshes with new data

**No need to:**
- ❌ Update GitHub
- ❌ Modify any code
- ❌ Re-download the HTML
- ❌ Have internet connection

### Sample Workflow:

```
Week 1: Upload January data → View dashboard
Week 2: Update Excel with February data → Upload again
Week 3: Update Excel with March data → Upload again
...and so on
```

Each upload **completely replaces** the previous data, so you always see the latest information.

---

## 🛡️ Data Privacy & Security

### ✅ Your Data is Safe:
- **No server uploads**: All processing happens in your browser
- **No external storage**: Data only exists in browser memory
- **No tracking**: No analytics or data collection
- **Offline capable**: Works without internet (except CDN libraries)

### 🔒 Best Practices:
1. Keep your Excel files secure on your computer
2. Don't share the HTML file with sensitive data loaded
3. Use offline mode for maximum privacy
4. Clear browser cache if using public computers

---

## 💾 Saving Your Dashboard State

### Option 1: Browser Bookmarks (Temporary)
- Dashboard remembers data until you close/refresh the page
- Data is lost on page refresh

### Option 2: Re-upload Excel (Recommended)
- Always keep your master Excel file updated
- Upload fresh data each time you open the dashboard
- This ensures you always have the latest data

### Option 3: Download HTML with Embedded Data
- After uploading your data, save the page again
- The saved HTML will have your data embedded
- **Note**: This makes the file larger

---

## 🌐 Online vs Offline Comparison

| Feature | Online (GitHub Pages) | Offline (Local HTML) |
|---------|----------------------|---------------------|
| **Sample Data** | ✅ Pre-loaded | ❌ Need to upload |
| **Custom Data** | ✅ Via upload | ✅ Via upload |
| **Internet Required** | ✅ Yes | ❌ No (after download) |
| **Auto Updates** | ✅ Yes | ❌ Manual |
| **Privacy** | ⚠️ Public URL | ✅ 100% Private |
| **Speed** | ⚠️ Depends on connection | ✅ Fast (local) |
| **Sharing** | ✅ Easy (URL) | ⚠️ Send file |

---

## 🔧 Troubleshooting

### Issue: "Required sheets not found"
**Solution**: 
- Check sheet names are exactly `Audit Count` and `Recruiter Wise Data`
- Check for typos or extra spaces
- Ensure both sheets exist in the Excel file

### Issue: "Dashboard shows no data"
**Solution**:
- Refresh the page
- Upload your Excel file again
- Check browser console for errors (F12)

### Issue: "Recruiter of the Month not showing"
**Solution**:
- Check if recruiters meet criteria (5+ audits, 75%+ accuracy)
- Ensure `Recruiter Name` column exists in Excel
- Ensure `Audit Score` column has values (1.0 or 0.0)

### Issue: "Charts not displaying"
**Solution**:
- Ensure you're using a modern browser (Chrome, Firefox, Edge, Safari)
- Check internet connection (for CDN libraries)
- Try refreshing the page

### Issue: "Excel file won't upload"
**Solution**:
- Check file format is `.xlsx` or `.xls`
- Ensure file size is reasonable (< 10MB recommended)
- Close Excel if the file is open
- Try a different browser

---

## 📊 Excel Data Format Tips

### 1. **Date Formats**
- Use consistent date formats (e.g., "July", "August", "September")
- Avoid dates like "7/1/2024" - use month names

### 2. **Numeric Values**
- Audit Score: Use 1.0 for Pass, 0.0 for Fail
- Accuracy Score: Use decimals (e.g., 0.833 for 83.3%)
- Error %: Use decimals (e.g., 0.167 for 16.7%)

### 3. **Text Fields**
- Recruiter Name: Consistent spelling (e.g., always "John Smith", not "J. Smith")
- Parameter: Use full names
- Client: Consistent naming

### 4. **Missing Data**
- Use blank cells for missing data (not "N/A" or "NULL")
- Dashboard handles missing data gracefully

---

## 🚀 Advanced: Embedding Data Permanently

If you want to create a dashboard with your data **permanently embedded** (no upload needed):

### Option 1: Replace sample-data.json
1. Export your Excel to JSON format
2. Replace the `sample-data.json` file
3. Redeploy to GitHub Pages

### Option 2: Modify loadSampleData Function
1. Open `index.html` in a text editor
2. Find the `loadSampleData()` function
3. Replace the fetch URL with your data
4. Save and use the modified HTML

**Note**: This requires technical knowledge. Contact your developer if needed.

---

## 📞 Support

### Getting Help:
1. **Check User Manual**: Click "User Manual" in the dashboard sidebar
2. **Review GitHub Issues**: https://github.com/Rishab25276/Adani-Ambuja-Cement-Audit-Dashboard/issues
3. **Contact Admin**: Reach out to your dashboard administrator

### Providing Feedback:
- Submit issues on GitHub
- Include screenshots of errors
- Attach sample Excel file (with sensitive data removed)

---

## ✅ Checklist for Offline Success

Before using offline, ensure you have:

- [ ] Downloaded the `index.html` file
- [ ] Prepared Excel file with correct sheet names
- [ ] Verified all required columns exist
- [ ] Tested in a modern web browser
- [ ] Saved backup of Excel data
- [ ] Read the User Manual in the dashboard

---

## 🎯 Summary

**This dashboard is future-proof because:**

✅ **Self-contained**: Single HTML file, no dependencies  
✅ **Offline capable**: Works without internet  
✅ **Excel-driven**: Your data, your control  
✅ **No server needed**: Pure client-side processing  
✅ **Privacy-first**: Data never leaves your computer  
✅ **Update-friendly**: Upload new data anytime  
✅ **Cross-platform**: Works on Windows, Mac, Linux  
✅ **Browser-based**: No installation required  

**You can use this dashboard forever, with or without GitHub, online or offline, with complete control over your data!**

---

**Version**: v5.0 - Future-Proof Offline Support  
**Last Updated**: December 13, 2025  
**Compatibility**: All modern browsers (Chrome, Firefox, Edge, Safari)
