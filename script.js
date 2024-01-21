const form = document.getElementById("bmiForm");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Stop page reload from happening
    const inputData = document.getElementById("userInput").value;
    console.log("Input data:",inputData);
    document.getElementById("userInput").value = "";
})