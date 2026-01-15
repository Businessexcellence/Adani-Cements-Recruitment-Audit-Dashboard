// Adani Recruitment Audit Dashboard v4.4
// Complete JavaScript Implementation

let dashboardData = {
    auditData: [],
    recruiterData: [],
    filteredData: [],
    filteredRecruiterData: [],
    charts: {},
    selectedFilters: {
        years: [],
        months: [],
        weeks: [],
        recruiters: [],
        parameters: []
    }
};

let currentTheme = 'light';
let currentView = 'overall';
let audioEnabled = false; // FIXED: Disabled by default to prevent auto-speaking
let utterance = null;
let isInitialLoad = true; // FIXED: Track initial page load

// Initialize Select2 after DOM loads
$(document).ready(function() {
    initializeSelect2();
    // FIXED: Removed setupAudioFilters() call as it doesn't exist
    setTimeout(() => {
        isInitialLoad = false; // Allow audio after initial load completes
    }, 2000);
});

function initializeSelect2() {
    $('#yearFilter').select2({
        placeholder: 'All Years',
        allowClear: true,
        width: '100%'
    }).on('change', function() {
        dashboardData.selectedFilters.years = $(this).val() || [];
        applySmartFilters();
    });

    $('#monthFilter').select2({
        placeholder: 'All Months',
        allowClear: true,
        width: '100%'
    }).on('change', function() {
        dashboardData.selectedFilters.months = $(this).val() || [];
        applySmartFilters();
    });

    $('#weekFilter').select2({
        placeholder: 'All Weeks',
        allowClear: true,
        width: '100%'
    }).on('change', function() {
        dashboardData.selectedFilters.weeks = $(this).val() || [];
        applySmartFilters();
    });

    $('#recruiterFilter').select2({
        placeholder: 'All Recruiters',
        allowClear: true,
        width: '100%'
    }).on('change', function() {
        dashboardData.selectedFilters.recruiters = $(this).val() || [];
        applySmartFilters();
    });

    $('#parameterFilter').select2({
        placeholder: 'All Parameters',
        allowClear: true,
        width: '100%'
    }).on('change', function() {
        dashboardData.selectedFilters.parameters = $(this).val() || [];
        applySmartFilters();
    });
}

// FIXED: Safe speak function that checks if audio is enabled and page is loaded
function speakText(text) {
    if (!audioEnabled || !window.speechSynthesis || isInitialLoad) return;
    
    // Cancel any ongoing speech to prevent overlapping
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
    
    utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    
    window.speechSynthesis.speak(utterance);
}

function toggleUploadSection() {
    const section = document.getElementById('uploadSection');
    const isActive = section.classList.toggle('active');
    speakText(isActive ? "Upload section opened" : "Upload section closed");
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    document.getElementById('themeIcon').className = currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    speakText(`Switched to ${currentTheme} theme`);
    renderView();
}

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            
            const auditSheet = workbook.Sheets['Audit Count'] || workbook.Sheets['Audit Count '];
            const recruiterSheet = workbook.Sheets['Recruiter Wise Data'] || workbook.Sheets['Recruiter Wise Data '];
            
            if (!auditSheet || !recruiterSheet) {
                alert('Required sheets not found. Please ensure your Excel file contains "Audit Count" and "Recruiter Wise Data" sheets.');
                return;
            }
            
            dashboardData.auditData = XLSX.utils.sheet_to_json(auditSheet);
            dashboardData.recruiterData = XLSX.utils.sheet_to_json(recruiterSheet);
            
            populateFilters();
            applySmartFilters();
            
            alert(`✅ Data loaded successfully!\n${dashboardData.auditData.length} audit records processed.`);
            toggleUploadSection();
        } catch (error) {
            alert('❌ Error processing file: ' + error.message);
            console.error(error);
        }
    };
    reader.readAsArrayBuffer(file);
}

function populateFilters() {
    const years = new Set();
    const months = new Set();
    const weeks = new Set();
    const recruiters = new Set();
    const parameters = new Set();

    dashboardData.auditData.forEach(row => {
        if (row['Financial Year'] || row['Finanical Year']) {
            const year = (row['Financial Year'] || row['Finanical Year']).toString().trim();
            if (year) years.add(year);
        }
        const month = (row['Month'] || row['Month '] || '').toString().trim();
        if (month) months.add(month);
        
        const week = (row['Week'] || row['Week '] || '').toString().trim();
        if (week) weeks.add(week);
        
        const parameter = (row['Parameter'] || row['Parameter '] || '').toString().trim();
        if (parameter) parameters.add(parameter);
    });

    dashboardData.recruiterData.forEach(row => {
        const recruiter = (row['Recruiter Name'] || '').toString().trim();
        if (recruiter) recruiters.add(recruiter);
    });

    populateSelect('yearFilter', years);
    populateSelect('monthFilter', months);
    populateSelect('weekFilter', weeks);
    populateSelect('recruiterFilter', recruiters);
    populateSelect('parameterFilter', parameters);
}

function populateSelect(id, data) {
    const $select = $('#' + id);
    $select.empty();
    
    Array.from(data).sort().forEach(value => {
        const option = new Option(value, value, false, false);
        $select.append(option);
    });
    
    $select.trigger('change');
}

function applySmartFilters() {
    const { years, months, weeks, recruiters, parameters } = dashboardData.selectedFilters;

    dashboardData.filteredData = dashboardData.auditData.filter(row => {
        const year = (row['Financial Year'] || row['Finanical Year'] || '').toString().trim();
        const month = (row['Month'] || row['Month '] || '').toString().trim();
        const week = (row['Week'] || row['Week '] || '').toString().trim();
        const parameter = (row['Parameter'] || row['Parameter '] || '').toString().trim();
        
        const yearMatch = years.length === 0 || years.includes(year);
        const monthMatch = months.length === 0 || months.includes(month);
        const weekMatch = weeks.length === 0 || weeks.includes(week);
        const paramMatch = parameters.length === 0 || parameters.includes(parameter);
        
        return yearMatch && monthMatch && weekMatch && paramMatch;
    });

    dashboardData.filteredRecruiterData = dashboardData.recruiterData.filter(row => {
        const year = (row['Financial Year'] || row['Finanical Year'] || '').toString().trim();
        const month = (row['Month'] || row['Month '] || '').toString().trim();
        const week = (row['Week'] || row['Week '] || '').toString().trim();
        const parameter = (row['Parameter'] || row['Parameter '] || '').toString().trim();
        const recruiter = (row['Recruiter Name'] || '').toString().trim();
        
        const yearMatch = years.length === 0 || years.includes(year);
        const monthMatch = months.length === 0 || months.includes(month);
        const weekMatch = weeks.length === 0 || weeks.includes(week);
        const paramMatch = parameters.length === 0 || parameters.includes(parameter);
        const recruiterMatch = recruiters.length === 0 || recruiters.includes(recruiter);
        
        return yearMatch && monthMatch && weekMatch && paramMatch && recruiterMatch;
    });

    updateFilterOptions();
    renderView();
}

function updateFilterOptions() {
    const currentData = dashboardData.filteredData;
    
    if (dashboardData.selectedFilters.years.length > 0) {
        const availableMonths = new Set();
        currentData.forEach(row => {
            if (row.Month) availableMonths.add(row.Month);
        });
    }
}

function resetFilters() {
    $('#yearFilter').val(null).trigger('change');
    $('#monthFilter').val(null).trigger('change');
    $('#weekFilter').val(null).trigger('change');
    $('#recruiterFilter').val(null).trigger('change');
    $('#parameterFilter').val(null).trigger('change');
    
    dashboardData.selectedFilters = {
        years: [],
        months: [],
        weeks: [],
        recruiters: [],
        parameters: []
    };
    
    speakText("All filters have been reset");
    applySmartFilters();
}

function showView(view) {
    currentView = view;
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    event.target.closest('.nav-link').classList.add('active');
    
    const viewNames = {
        'overall': 'Overall dashboard view',
        'weekly': 'Weekly performance analysis',
        'monthly': 'Monthly trends view',
        'yearly': 'Yearly comparison view',
        'recruiters': 'Recruiter performance rankings',
        'parameters': 'Parameter-wise audit analysis',
        'comparison': 'Comparison tool',
        'trends': 'Trend analysis and forecasting',
        'manual': 'User manual and documentation'
    };
    
    speakText(`Switched to ${viewNames[view] || view}`);
    renderView();
}

function renderView() {
    Object.values(dashboardData.charts).forEach(chart => {
        if (chart && chart.destroy) chart.destroy();
    });
    dashboardData.charts = {};

    switch(currentView) {
        case 'overall': renderOverallView(); break;
        case 'weekly': renderWeeklyView(); break;
        case 'monthly': renderMonthlyView(); break;
        case 'yearly': renderYearlyView(); break;
        case 'recruiters': renderRecruitersView(); break;
        case 'parameters': renderParametersView(); break;
        case 'comparison': renderComparisonView(); break;
        case 'trends': renderTrendsView(); break;
        case 'manual': renderUserManual(); break;
    }
}

function toggleAudioDescriptions() {
    audioEnabled = !audioEnabled;
    const statusText = audioEnabled ? "Audio descriptions enabled" : "Audio descriptions disabled";
    
    // Always speak this status update (override the check)
    if (window.speechSynthesis) {
        const tempUtterance = new SpeechSynthesisUtterance(statusText);
        tempUtterance.rate = 0.9;
        window.speechSynthesis.speak(tempUtterance);
    }
    
    // Update button visual feedback
    const audioBtn = document.querySelector('[onclick="toggleAudioDescriptions()"]');
    if (audioBtn) {
        audioBtn.style.opacity = audioEnabled ? '1' : '0.5';
        audioBtn.title = audioEnabled ? 'Audio Descriptions Enabled' : 'Audio Descriptions Disabled';
    }
}

function calculateStats(data) {
    let totalPop = 0, totalOpp = 0, totalPass = 0, totalFail = 0, totalNA = 0;
    
    data.forEach(row => {
        totalPop += row['Total Population'] || 0;
        totalOpp += row['Opportunity Count'] || 0;
        totalPass += row['Opportunity Pass'] || 0;
        totalFail += row['Opportunity Fail'] || 0;
        totalNA += row['Opportunity NA'] || 0;
    });

    const accuracy = totalPass + totalFail > 0 ? 
        ((totalPass / (totalPass + totalFail)) * 100).toFixed(2) : 0;
    const errorRate = totalPass + totalFail > 0 ? 
        ((totalFail / (totalPass + totalFail)) * 100).toFixed(2) : 0;
    const sampleRate = totalPop > 0 ? 
        ((totalOpp / totalPop) * 100).toFixed(2) : 0;

    return { totalPop, totalOpp, totalPass, totalFail, totalNA, accuracy, errorRate, sampleRate };
}

