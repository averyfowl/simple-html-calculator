document.getElementById("addBtn").addEventListener("click", function() {
    let num1 = parseFloat(document.getElementById('add1').value) || 0;
    let num2 = parseFloat(document.getElementById('add2').value) || 0;
    document.getElementById('addResult').innerText = `Result: ${num1 + num2}`;
});
document.getElementById("subBtn").addEventListener("click", function() {
    let num1 = parseFloat(document.getElementById('sub1').value) || 0;
    let num2 = parseFloat(document.getElementById('sub2').value) || 0;
    document.getElementById('subResult').innerText = `Result: ${num1 - num2}`;
});

document.getElementById("mulBtn").addEventListener("click", function() {
    let num1 = parseFloat(document.getElementById('mul1').value) || 0;
    let num2 = parseFloat(document.getElementById('mul2').value) || 0;
    document.getElementById('mulResult').innerText = `Result: ${num1 * num2}`;
});