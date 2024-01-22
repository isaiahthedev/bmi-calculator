const heightSlider = document.getElementById("height-num");
const weightValInc = document.getElementById("weight-inc");
const weightValDec = document.getElementById("weight-dec");
const weightVal = document.getElementById("weight-num");
const ageValInc = document.getElementById("age-inc");
const ageValDec = document.getElementById("age-dec");
const ageVal = document.getElementById("age-num");
const maleBtn = document.getElementById("male");
const femaleBtn = document.getElementById("female");

let height = heightSlider.value;
let weight = weightVal.innerHTML;
let age = ageVal.innerHTML;
let gender = "Male";

//height input/control
const heightUpdate = () => {
    height = heightSlider.value;
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
    if(age > 1) {
        age--;
    }
    ageVal.innerHTML = age;
});

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