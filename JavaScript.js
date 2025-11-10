// Create digit strip HTML: 0-9
const stripHTML = Array.from({ length: 10 }, (_, i) => `<div class="digit">${i}</div>`).join("");

// Select all strips (for each digit place)
const strips = document.querySelectorAll('.digit-strip');

// Populate each digit strip
strips.forEach(strip => {
    strip.innerHTML = stripHTML;
});

let count = 0;

function updateOdometer() {
    const str = count.toString().padStart(5, '0');
    
    str.split('').forEach((digit, i) => {
        const y = parseInt(digit) * 50; // 50px height per digit
        strips[i].style.transform = `translateY(-${y}px)`;
    });

    count = (count + 1) % 100000; // Reset after 99999
}

setInterval(updateOdometer, 1000);
