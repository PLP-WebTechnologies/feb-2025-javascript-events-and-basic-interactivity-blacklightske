// 1. Event Handling 🎈

// Button click event
const clickButton = document.getElementById('click-button');
clickButton.addEventListener('click', () => {
    alert("Button clicked! 🎉");
});

// Hover effect
const hoverDiv = document.getElementById('hover-div');
hoverDiv.addEventListener('mouseover', () => {
    hoverDiv.style.backgroundColor = "#d4f1f9";
});
hoverDiv.addEventListener('mouseout', () => {
    hoverDiv.style.backgroundColor = "#eee";
});

// Keypress detection
const keypressInput = document.getElementById('keypress-input');
keypressInput.addEventListener('keypress', (e) => {
    console.log(`Key pressed: ${e.key}`);
});

// Secret action: Double-click or long press
const doubleClickArea = document.getElementById('double-click-area');
doubleClickArea.addEventListener('dblclick', () => {
    alert("Double-click detected! 🤫");
});
doubleClickArea.addEventListener('mousedown', (e) => {
    setTimeout(() => {
        if (e.buttons === 1) {
            alert("Long press detected! 🤫");
        }
    }, 1000);
});

// 2. Interactive Elements 🎮

// Change text color button
const colorChangeBtn = document.getElementById('color-change-btn');
colorChangeBtn.addEventListener('click', () => {
    colorChangeBtn.style.color = colorChangeBtn.style.color === "red" ? "green" : "red";
});

// Image Gallery: Just showing a gallery of images for now
// (You can extend with JavaScript to create a slideshow)

// Accordion-style tabs
const tabButtons = document.querySelectorAll('.tab-button');
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabContent = button.nextElementSibling;
        tabContent.style.display = tabContent.style.display === "block" ? "none" : "block";
    });
});

// 3. Form Validation 

const validationForm = document.getElementById('validation-form');
const validationFeedback = document.getElementById('validation-feedback');

validationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let feedback = "";

    if (!email.includes('@')) {
        feedback += "Please enter a valid email address. ";
    }

    if (password.length < 8) {
        feedback += "Password must be at least 8 characters long.";
    }

    validationFeedback.textContent = feedback || "Form submitted successfully!";
});
