const calculate = document.getElementById("calculate");
const bmiVal = document.getElementById("result-num");
const resultText = document.getElementById("result-text");
const resultTitle = document.getElementById("result-block-title");
//display calculated BMI value
let BMI = localStorage.getItem("BMI");
BMI = parseFloat(BMI);
BMI = BMI.toFixed(1);
bmiVal.innerText = BMI;
//display BMI message
switch(true) {
    case BMI < 18.5:
        resultTitle.innerText ="Underweight";
        resultTitle.style.color = "#4287f5";
        resultText.innerText = "You are underweight.";
        break;
    case BMI >= 18.5 && BMI <= 24.9:
        resultTitle.innerText ="Healthy";
        resultText.innerText = "You are a healthy weight.";
        break;
    case BMI >= 25 && BMI <= 29.9:
        resultTitle.innerText ="Overweight";
        resultTitle.style.color = "#f5e942";
        resultText.innerText = "You are overweight.";
        break;
    case BMI > 30 && BMI <= 39.9:
        resultTitle.innerText ="Obese";
        resultTitle.style.color = "#eb923f";
        resultText.innerText = "You are obese.";
        break;
    case BMI >= 40:
        resultTitle.innerText ="Severly Obese";
        resultTitle.style.color = "#cc2823";
        resultText.innerText = "You are severly obese.";
        break;
}
//re-calculate button
calculate.addEventListener('click', () => {
    location.href = "index.html";
})