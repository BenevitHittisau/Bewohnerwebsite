const tableDetail = document.querySelectorAll("td");

tableDetail.forEach(td => {
    const computedStyle = window.getComputedStyle(td);
    const height = computedStyle.height;

    td.style.width = height;
    
});