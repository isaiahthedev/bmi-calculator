//create variables for DOM elements
const unitSystemBtn = document.getElementById("btn-unit");
const heightSlider = document.getElementById("height-slider");
const heightVal = document.getElementById("height-num");
const weightValInc = document.getElementById("weight-inc");
const weightValDec = document.getElementById("weight-dec");
const weightVal = document.getElementById("weight-num");
const weightUnitVal = document.getElementById("weight-unit");
const ageValInc = document.getElementById("age-inc");
const ageValDec = document.getElementById("age-dec");
const ageVal = document.getElementById("age-num");
const maleBtn = document.getElementById("male");
const femaleBtn = document.getElementById("female");
const calculate = document.getElementById("calculate");

//initialize main variables
let height = heightSlider.value;
let weight = weightVal.innerHTML;
let age = ageVal.innerHTML;
let gender = "Male";
let BMI = 0;
let currentPage = "index.html";
let unitSystem = "imperial";

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
});

// convert imperial to metric
const imperialToMetric = (feet, inches) => {
    cm = inches * 2.54 + feet * 30.48;
    return cm;
};

// convert metric to imperial
const metricToImperial = cm => {
    inches = cm / 2.54;
    inches = inches % 12;
    feet = (cm - inches) / 30.48;
    feet = Math.floor(feet);
    return [feet, inches];
};

//convert to slider value and update height
const heightUpdateSlider = value => {
    feet = value / 12;
    feet = Math.floor(feet);
    inches = value - feet * 12;
    return [feet, inches];
};

//height input/control
const heightUpdate = () => {
    height = heightSlider.value;
    [feet, inches] = heightUpdateSlider(height);
    if(unitSystem === "imperial") {
        heightVal.innerText = feet + "'" + inches + '"';
    }
    if(unitSystem === "metric") {
        height = imperialToMetric(feet, inches);
        heightVal.innerText = height.toFixed(0) + "cm";
    }
};

heightSlider.addEventListener('input', heightUpdate);

//weight input/control
weightValInc.addEventListener('click', () => {
    if(weight < 500) {
        weight++;
        weight = Math.floor(weight);
    }
    weightVal.innerHTML = weight;
});
weightValDec.addEventListener('click', () => {
    if(weight > 1) {
        weight--;
        weight = Math.floor(weight);
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
    BMI =
        unitSystem === "imperial"
            ? (weight / (height * height)) * 703
            : weight / ((height * height) / 10000);

    localStorage.setItem("BMI", BMI);
    location.href = "result.html";
});

// Function to switch between imperial and metric units
const switchUnitSystem = () => {
    if(unitSystem === "imperial") {
        unitSystem = "metric";
        weight = convertWeight(weight, 1 / 2.20462, "kg");
        [feet, inches] = heightUpdateSlider(height);
        height = imperialToMetric(feet, inches);
    } else {
        unitSystem = "imperial";
        weight = convertWeight(weight, 2.20462, "lbs");
        [feet, inches] = metricToImperial(cm);
        height = heightSlider.value;
        heightVal.innerText = feet + "'" + inches + '"';
    }

    // Update the button text and displayed weight/height
    unitSystemBtn.innerHTML = unitSystem;
    weightVal.innerHTML = weight.toFixed(0);
    heightVal.innerText = height.toFixed(0) + "cm";
};

// Event listener for the unit system button
unitSystemBtn.innerHTML = unitSystem;
unitSystemBtn.addEventListener("click", switchUnitSystem);

// Function to convert weight
const convertWeight = (value, factor, unit) => {
    weightUnitVal.innerHTML = unit;
    return value * factor;
};
