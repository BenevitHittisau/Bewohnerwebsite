const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    const computedStyle = window.getComputedStyle(button);
    const height = parseFloat(computedStyle.height) * 1.75;

    button.style.width = `${height}px`;
});
