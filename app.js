//selecting the classes
const arrow = document.querySelector(" .arrow");
const content = document.querySelector(".main-content");
const mainOptions = document.querySelector(".main-options");
const newSvgs = document.querySelectorAll(".circle1");
const circleChecks = document.querySelectorAll(".circle");
const optionsCL = document.querySelectorAll(".optionsCL");
const optionsOP = document.querySelectorAll(".optionsOP");

// Eventlisteners
console.log(newSvgs, circleChecks);

content.addEventListener("click", () => {
  mainOptions.classList.add("active");
  arrow.classList.add("rotate-arrow");
  // arrow.classList.add("rotate-arrow");
});

arrow.addEventListener("click", function (e) {
  arrowBtn(e);
});

circleChecks.forEach((circleCheck) => {
  circleCheck.addEventListener("click", function () {
    checkBtn(circleCheck);
  });
});

optionsCL.forEach((option, index) => {
  console.log(option);
  option.addEventListener("click", function () {
    if (option.classList.contains("options0CL")) {
      option.innerHTML = optionsOP[0].innerHTML;
    } else if (option.classList.contains("options1CL")) {
      option.innerHTML = optionsOP[1].innerHTML;
    } else if (option.classList.contains("options2CL")) {
      option.innerHTML = optionsOP[2].innerHTML;
    } else if (option.classList.contains("options3CL")) {
      option.innerHTML = optionsOP[3].innerHTML;
    } else if (option.classList.contains("options4CL")) {
      option.innerHTML = optionsOP[4].innerHTML;
    }
  });
});

// functions
// drop down menu and arrow btn

function arrowBtn(e) {
  if (mainOptions.classList.contains("active")) {
    e.stopPropagation();
    arrow.classList.remove("rotate-arrow");
    arrow.classList.remove("enable-hover");
    mainOptions.classList.remove("active");
    setTimeout(() => {
      arrow.classList.add("enable-hover");
    }, 100);
  } else {
    arrow.classList.add("rotate-arrow");
    arrow.classList.remove("enable-hover");
    mainOptions.classList.add("active");
    setTimeout(() => {
      arrow.classList.add("enable-hover");
    }, 100);
  }
}
// Creating the check button animation
function checkBtn(circleCheck) {
  if (circleCheck.innerHTML === newSvgs[4].innerHTML) {
    circleCheck.innerHTML =
      '<circle cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 5"></circle>';
  } else {
    newSvgs.forEach((newSvg, index) => {
      setTimeout(() => {
        circleCheck.innerHTML = newSvg.innerHTML;
      }, index * 100);
    });
  }
}
