const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const h = parseInt(document.querySelector("#height").value);
  const w = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector(".results");

  if (h === "" || h < 0 || isNaN(h)) {
    result.innerHTML = `Please give a valid height ${h}`;
  } else if (w === "" || w < 0 || isNaN(w)) {
    result.innerHTML = `Please give a valid weight ${w}`;
  } else {
    const bmi=(w / ((h * h) / 10000)).toFixed(1);

    if(bmi < 18.6){
        result.innerHTML=`<span>you are under Weight and your weight is ${bmi}</span>`
      }else if(bmi >=18.6 && bmi <= 24.9){
        result.innerHTML=`<span>Normal Range and your weight is ${bmi}</span>`
      }else{
        result.innerHTML=`<span>OverWeight and your weight is ${bmi}</span>`
      }
  }
});
