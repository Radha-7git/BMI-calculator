const height = document.getElementById("height");
const weight = document.getElementById("weight");
const mybutton = document.getElementById("mybutton");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");

mybutton.onclick = function () {
  let actheight = Number(height.value);
  actheight = actheight / 100;
  const actweight = Number(weight.value);
  let finalresult = actweight / actheight ** 2;
  finalresult = finalresult.toFixed(2);
  if (
    isNaN(actheight) ||
    isNaN(actweight) ||
    actheight <= 0 ||
    actweight <= 0
  ) {
    result1.textContent = "Please enter valid values";
    result2.textContent = "";
    return;
  }
  if (finalresult < 18.5) {
    result1.textContent = `Your BMI is ${finalresult}`;
    result2.textContent = "UNDERWEIGHT";
  } else if (finalresult >= 18.5 && finalresult < 24.9) {
    result1.textContent = `Your BMI is ${finalresult}`;
    result2.textContent = "NORMAL-WEIGHT";
  } else if (finalresult >= 24.9 && finalresult < 29.9) {
    result1.textContent = `Your BMI is ${finalresult}`;
    result2.textContent = "OVER-WEIGHT";
  } else {
    result1.textContent = `Your BMI is ${finalresult}.`;
    result2.textContent = "OBESITY";
  }
};
