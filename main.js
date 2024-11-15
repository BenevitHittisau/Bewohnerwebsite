const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    const computedStyle = window.getComputedStyle(button);
    const height = parseFloat(computedStyle.height) * 1.5;

    button.style.width = `${height}px`;
});

function adjustFontSize() {
    const textElements = document.querySelectorAll('.responsive-text');
    
    textElements.forEach(element => {
        console.log(height)
        element.style.fontSize = (heigth * 0.01) + "px";
    });
  }

window.addEventListener('load', adjustFontSize);
window.addEventListener('resize', adjustFontSize);