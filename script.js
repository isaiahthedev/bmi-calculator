const heightSlider = document.getElementById("height-slider");
const heightVal = document.getElementById("height-num");
const weightValInc = document.getElementById("weight-inc");
const weightValDec = document.getElementById("weight-dec");
const weightVal = document.getElementById("weight-num");
const ageValInc = document.getElementById("age-inc");
const ageValDec = document.getElementById("age-dec");
const ageVal = document.getElementById("age-num");
const maleBtn = document.getElementById("male");
const femaleBtn = document.getElementById("female");
const calculate = document.getElementById("calculate");

let height = heightSlider.value;
let feet = 0;
let inches = 0;
let weight = weightVal.innerHTML;
let age = ageVal.innerHTML;
let gender = "Male";
let BMI = 0;
let currentPage = "index.html";

//gender input/control
const selected = "rgb(12, 15, 28)";
const notSelected = "rgb(19, 23, 43)";
maleBtn.style.backgroundColor = selected;
femaleBtn.style.backgroundColor = notSelected;
maleBtn.addEventListener("click", () => {
    if(maleBtn.style.backgroundColor == notSelected) {
        maleBtn.style.backgroundColor = selected;
        femaleBtn.style.backgroundColor = notSelected;
    }
    gender = "Male";
});
femaleBtn.addEventListener("click", () => {
    if(femaleBtn.style.backgroundColor == notSelected) {
        femaleBtn.style.backgroundColor = selected;
        maleBtn.style.backgroundColor = notSelected;
    }
    gender = "Female";
})

//height input/control
const heightUpdate = () => {
    height = heightSlider.value;
    feet = height / 12;
    feet = Math.floor(feet);
    inches = height - (feet * 12);
    heightVal.innerText = feet + "'" + inches + '"';
}

heightSlider.addEventListener('change', heightUpdate);

//weight input/control
weightValInc.addEventListener('click', () => {
    if(weight < 500) {
        weight++;
    }
    weightVal.innerHTML = weight;
});
weightValDec.addEventListener('click', () => {
    if(weight > 1) {
        weight--;
    }
    weightVal.innerHTML = weight;
});

//age input/control
ageValInc.addEventListener('click', () => {
    if(age < 120) {
        age++;
    }
    ageVal.innerHTML = age;
});
ageValDec.addEventListener('click', () => {
    if(age > 18) {
        age--;
    }
    ageVal.innerHTML = age;
});

//calculate button
calculate.addEventListener('click', () => {
    BMI = weight/(height*height) * 703
    localStorage.setItem("BMI", BMI);
    location.href = "result.html"
})