const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const Description = document.querySelector("#description");

  if (height === "" || height <= 0 || isNaN(height)) {
    result.value = "please enter a valid height";
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    result.value = "please enter a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      result.value = ` YOUR BMI IS ${bmi}`;
      Description.innerHTML = `YOU ARE UNDER WEIGHT <br> NEEDS TO EAT MORE FOOD `;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.value = `${bmi}`;
      Description.innerHTML = `YOU ARE FIT`;
    } else if (bmi >= 24.9 && bmi < 29.9) {
      result.value = `YOUR BMI IS ${bmi}`;
      Description.innerHTML = `YOU ARE OVER WEIGHT <br> EAT LESS DO MORE EXCERCISES `;
    } else if (bmi > 29.9 && bmi <= 34.9) {
      result.value = `YOUR BMI IS ${bmi}`;
      Description.innerHTML = `YOU ARE IN OBESE 1 <br> EAT LESS DO MORE EXCERCISES `;
    } else if (bmi > 34.9 && bmi <= 39.9) {
      result.value = `YOUR BMI IS ${bmi}`;
      Description.innerHTML = `YOU ARE IN OBESE 2 <br> DANGEROUS FOR YOU <br>EAT LESS DO MORE EXCERCISES `;
    } else if (bmi > 39.9) {
      result.value = `YOUR BMI IS ${bmi}`;
      Description.innerHTML = `YOU ARE IN OBESE 3<br>VERY DANGEROUS FOR YOU <br>EAT LESS DO MORE EXCERCISES `;
    }
  }
});
