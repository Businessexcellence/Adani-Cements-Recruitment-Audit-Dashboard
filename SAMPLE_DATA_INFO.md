# Sample Data - Power BI Dashboard Data

## 📊 Excel File Information

**Filename**: `Power BI Dashboard Data.xlsx`  
**Size**: 48KB  
**Format**: Microsoft Excel (.xlsx)  
**Purpose**: Sample dataset for testing the Adani Recruitment Audit Dashboard

---

## 📁 File Structure

### **Sheet 1: "Audit Count "**
Contains audit metrics and performance data.

**Rows**: 151 data records  
**Columns**: 14 data fields

#### Column Details:
1. **Client** - Client organization name
2. **Finanical Year** - Fiscal year (e.g., "2024")
3. **Month** - Month name (e.g., "January", "February")
4. **MonthNumber** - Numeric month value (1-12)
5. **Week** - Week number
6. **Recruitment Stage** - Stage in recruitment process
7. **Parameter** - Audit parameter name
8. **Total Population** - Total number of candidates
9. **Opportunity Count** - Number of audits conducted
10. **Opportunity Pass** - Number of passed audits
11. **Opportunity Fail** - Number of failed audits
12. **Opportunity NA** - Number of NA audits
13. **Accuracy Score** - Calculated accuracy percentage
14. **Error %** - Calculated error percentage

### **Sheet 2: "Recruiter Wise Data "**
Contains individual recruiter performance records.

**Note**: Both sheet names have trailing spaces, which the dashboard handles correctly.

---

## 🚀 How to Use This Sample Data

### **Option 1: Test Dashboard with Sample Data**
1. Open the dashboard: https://rishab25276.github.io/Adani-Ambuja-Cement-Audit-Dashboard/
2. Click **"Upload Data"** button
3. Download this Excel file from the repository
4. Select the downloaded file
5. Dashboard will automatically process and display the data

### **Option 2: Use as Template**
You can use this Excel file as a template for your own data:
1. Download `Power BI Dashboard Data.xlsx`
2. Replace the data with your own audit records
3. Keep the same sheet names and column structure
4. Upload to the dashboard

---

## 📋 Data Requirements

### **Sheet Names (Required)**
- ✅ "Audit Count" or "Audit Count " (with trailing space)
- ✅ "Recruiter Wise Data" or "Recruiter Wise Data " (with trailing space)

### **Required Columns - Audit Count Sheet**
- Financial Year (or Finanical Year)
- Month
- Week
- Parameter
- Total Population
- Opportunity Count
- Opportunity Pass
- Opportunity Fail
- Opportunity NA

### **Required Columns - Recruiter Wise Data Sheet**
- Recruiter Name
- Audit Score (1 = Pass, 0 = Fail, NA = Not Applicable)
- Optional: Financial Year, Month, Week, Parameter (for filtering)

---

## 📊 Sample Data Statistics

Based on the included sample data:
- **Total Audit Records**: 151
- **Fiscal Year**: 2024
- **Months Covered**: Multiple months of audit data
- **Parameters Tracked**: Multiple audit parameters
- **Recruitment Stages**: Various stages in the recruitment process

---

## 🔍 Data Validation

The sample data includes:
- ✅ Valid sheet names with correct structure
- ✅ All required columns present
- ✅ Numeric data in appropriate fields
- ✅ Text data in name/description fields
- ✅ Pass/Fail/NA values in score fields
- ✅ Date/time information (year, month, week)

---

## 💡 Tips for Using Your Own Data

### **Preparing Your Excel File**:
1. **Use the same sheet names** (case-sensitive)
2. **Keep the same column names** exactly as shown
3. **Ensure data types match**:
   - Numbers for counts and scores
   - Text for names and parameters
   - Consistent date formats
4. **Remove extra sheets** (only keep the 2 required sheets)
5. **Check for empty rows** at the top (data should start from row 2)

### **Common Issues to Avoid**:
- ❌ Different sheet names
- ❌ Missing required columns
- ❌ Extra spaces in column headers (except sheet names which handle spaces)
- ❌ Invalid data types (e.g., text in numeric fields)
- ❌ Empty or null values in key fields

---

## 📥 Download Sample Data

To download the sample Excel file:
1. Go to: https://github.com/Rishab25276/Adani-Ambuja-Cement-Audit-Dashboard
2. Click on `Power BI Dashboard Data.xlsx`
3. Click the **"Download"** button (top right)
4. Save to your computer
5. Use with the dashboard

---

## 🔄 Updating the Sample Data

If you want to contribute updated sample data:
1. Fork the repository
2. Update the Excel file
3. Create a pull request
4. Describe the changes made

---

## 📊 Data Privacy

**Important**: This is sample data for demonstration purposes only.
- Do not include real personal information
- Do not include sensitive company data
- Anonymize all identifiable information
- Use sample/dummy data for testing

---

## 🎯 Expected Dashboard Output

When you upload this sample data, the dashboard will show:
- **Overall View**: Summary statistics and parameter accuracy
- **Weekly View**: Week-by-week performance trends
- **Monthly View**: Monthly aggregated performance
- **Yearly View**: Annual comparison (if multiple years)
- **Recruiter View**: Individual recruiter rankings
- **Parameter View**: Parameter-wise detailed analysis
- **Comparison View**: Side-by-side comparisons
- **Trend Analysis**: Historical trends with moving averages

---

## 📞 Support

If you encounter issues with the sample data:
1. Check that sheet names match exactly
2. Verify all required columns are present
3. Ensure data types are correct
4. Review the dashboard's User Manual (built-in)
5. Create a GitHub issue with details

---

## ✅ File Verification

To verify the Excel file structure:
```bash
# Using Python (requires openpyxl)
python3 -c "
import openpyxl
wb = openpyxl.load_workbook('Power BI Dashboard Data.xlsx')
print('Sheets:', wb.sheetnames)
print('Audit Count rows:', wb['Audit Count '].max_row)
wb.close()
"
```

---

**Filename**: Power BI Dashboard Data.xlsx  
**Format**: Excel 2007+ (.xlsx)  
**Size**: 48KB  
**Records**: 151 audit records  
**Last Updated**: December 3, 2025  
**Status**: ✅ Ready for use with dashboard
