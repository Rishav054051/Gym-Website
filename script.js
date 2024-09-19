document.addEventListener('DOMContentLoaded', function() {
    // Initially show the home section when the page loads
    showSection('home');
});

// Function to show the selected section and hide others
function showSection(sectionId) {
    // Get all sections
    const sections = document.querySelectorAll('.content-section');
    
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
}

// Function to calculate BMI
function calculateBMI() {
    // Get height and weight values
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    
    // Validate input
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('bmi-result').textContent = 'Please enter valid height and weight.';
        return;
    }
    
    // Calculate BMI
    const bmi = weight / (height * height);
    
    // Display the result
    document.getElementById('bmi-result').textContent = `Your BMI is ${bmi.toFixed(2)}`;
}

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the selected section
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}
