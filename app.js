//selecting the classes
const arrow = document.querySelector(" .arrow");
const content = document.querySelector(".main-content");
const contentClosed = document.querySelector(".content");
const mainOptions = document.querySelector(".main-options");
const optionsChange = mainOptions.querySelectorAll('[role="menuitem"]');
const circleChecks = document.querySelectorAll(".circle1");
const newSvgs = document.querySelectorAll(".circle");
const optionsOP = document.querySelectorAll(".optionsOP");
const popDown = document.querySelectorAll(".pop-down");
const imageReveal = document.querySelectorAll(".img-hide");
const count = document.querySelector(".count");
const hideBar = document.querySelector(".cancel-display");
const trial = document.querySelector(".trial");
const profileMenu = document.querySelector(".profile-menu button");
const daviiMenu = document.querySelector(".davii-menu");
const bell = document.querySelector(".notification button");
const bellPop = document.querySelector(".alert-popdown");
const menu = daviiMenu.querySelectorAll('[role="menuitem"]');
const notifyMenu = bellPop.querySelectorAll('[role="menuitem"]');
let countNr = 0;
let rectChg = document.querySelector(".rect");
let initialOption = document.querySelector(".options");
let num = 0;

count.innerHTML = countNr + " ";

// Eventlisteners

document.addEventListener("click", function (event) {
  // Check if you clicked the exempted buttons
  const exemptedButtons = document.querySelectorAll(".exempted-button-class");
  const isExemptedButton = Array.from(exemptedButtons).some(
    (button) => button === event.target || button.contains(event.target)
  );

  // do nothing when it is "isExemptedButton"
  if (isExemptedButton) {
    return;
  }

  // code to remove display when anyother place is pressed
  if (
    !bell.classList.contains("alert-hide") ||
    profileMenu.classList.contains("menu-active")
  ) {
    bellPop.classList.add("alert-hide");
    daviiMenu.classList.remove("menu-active");
  }
});

bell.addEventListener("click", toggleAlert);
profileMenu.addEventListener("click", toggleProfile);
arrow.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleOptions(e);
});
arrow.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    toggleOptions(e);
  }
});

hideBar.addEventListener("click", () => {
  trial.classList.add("hidden");
});

optionsOP.forEach((optionOP, index) => {
  optionOP.addEventListener("click", function () {
    activeChange(this);
  });
});
optionsOP.forEach((optionOP) => {
  optionOP.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
      activeChange(this);
    }
  });
});

content.addEventListener("click", function (e) {
  mainOptions.classList.add("active");
  arrow.classList.add("rotate-arrow");
});
circleChecks.forEach((circleCheck) => {
  circleCheck.addEventListener("click", function (e) {
    checkBtn(this);
  });
});
circleChecks.forEach((circleCheck) => {
  circleCheck.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
      checkBtn(this);
    }
  });
});

// functions

function handleArrowKeypress(event, menuItemIndex) {
  const isLastMenuItem = menuItemIndex === menu.length - 1;
  const isFirstMenuItem = menuItemIndex === 0;
  const nextMenuItem = menu.item(menuItemIndex + 1);
  const previousMenuItem = menu.item(menuItemIndex - 1);
  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    if (isLastMenuItem) {
      menu.item(0).focus();
      return;
    }
    nextMenuItem.focus();
  }
  if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    if (isFirstMenuItem) {
      menu.item(menu.length - 1).focus();
      return;
    }
    previousMenuItem.focus();
  }
}
function handleArrowKeypressAlert(event, menuItemIndex) {
  const isLastMenuItem = menuItemIndex === notifyMenu.length - 1;
  const isFirstMenuItem = menuItemIndex === 0;
  const nextMenuItem = notifyMenu.item(menuItemIndex + 1);
  const previousMenuItem = notifyMenu.item(menuItemIndex - 1);
  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    if (isLastMenuItem) {
      notifyMenu.item(0).focus();
      return;
    }
    nextMenuItem.focus();
  }
  if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    if (isFirstMenuItem) {
      notifyMenu.item(notifyMenu.length - 1).focus();
      return;
    }
    previousMenuItem.focus();
  }
}
function handleArrowKeypressOptions(event, menuItemIndex) {
  const isLastMenuItem = menuItemIndex === optionsChange.length - 1;
  const isFirstMenuItem = menuItemIndex === 0;
  const nextMenuItem = optionsChange.item(menuItemIndex + 1);
  const previousMenuItem = optionsChange.item(menuItemIndex - 1);
  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    if (isLastMenuItem) {
      optionsChange.item(0).focus();
      return;
    }
    nextMenuItem.focus();
  }
  if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    if (isFirstMenuItem) {
      optionsChange.item(optionsChange.length - 1).focus();
      return;
    }
    previousMenuItem.focus();
  }
}
function handleArrowKeypressContent(event, menuItemIndex) {
  const isLastMenuItem = menuItemIndex === optionsChange.length - 1;
  const isFirstMenuItem = menuItemIndex === 0;
  const nextMenuItem = optionsChange.item(menuItemIndex + 1);
  const previousMenuItem = optionsChange.item(menuItemIndex - 1);
  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    if (isLastMenuItem) {
      optionsChange.item(0).focus();
      return;
    }
    nextMenuItem.focus();
  }
  if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    if (isFirstMenuItem) {
      optionsChange.item(optionsChange.length - 1).focus();
      return;
    }
    previousMenuItem.focus();
  }
}

function handleEscapeEvent(event) {
  if (event.key === "Escape") {
    toggleProfile();
  }
}

function handleEscapeEventTwo(event) {
  if (event.key === "Escape") {
    toggleAlert();
  }
}

function handleEscapeEventThree(event) {
  if (event.key === "Escape") {
    arrow.focus();
    toggleOptions();
  }
}

function toggleAlert() {
  const isExpanded = bell.attributes["aria-expanded"].value === "true";
  bellPop.classList.toggle("alert-hide");
  daviiMenu.classList.remove("menu-active");
  if (isExpanded) {
    closeNotify();
  } else {
    openNotify();
  }
}

function toggleOptions() {
  const isExpanded = arrow.attributes["aria-expanded"].value === "true";

  mainOptions.classList.toggle("active");

  optionsOP.forEach((optionOP) => {
    optionOP.classList.remove("active1");
  });

  // Remove pop-event class from all popDown and imageReveal elements
  popDown.forEach((pop) => {
    pop.classList.remove("pop-event");
  });

  imageReveal.forEach((img) => {
    img.classList.remove("pop-event");
  });

  if (mainOptions.classList.contains("active")) {
    arrow.classList.remove("rotate-arrow");
    arrow.classList.remove("enable-hover");
    // mainOptions.classList.toggle("active");

    // Add active1 and pop-event classes to the first option
    optionsOP[0].classList.add("active1");
    popDown[0].classList.add("pop-event");
    imageReveal[0].classList.add("pop-event");

    setTimeout(() => {
      arrow.classList.add("enable-hover");
    }, 100);
  } else {
    arrow.classList.add("rotate-arrow");
    arrow.classList.remove("enable-hover");
    // mainOptions.classList.add("active");

    // Add active1 and pop-event classes to the first Class
    optionsOP[0].classList.add("active1");
    popDown[0].classList.add("pop-event");
    imageReveal[0].classList.add("pop-event");

    setTimeout(() => {
      arrow.classList.add("enable-hover");
    }, 100);
  }
  if (isExpanded) {
    closeOption();
  } else {
    openOption();
  }
}

function toggleProfile() {
  const isExpanded = profileMenu.attributes["aria-expanded"].value === "true";
  daviiMenu.classList.toggle("menu-active");
  bellPop.classList.add("alert-hide");
  if (isExpanded) {
    closeProfile();
  } else {
    openProfile();
  }
}

function closeProfile() {
  profileMenu.setAttribute("aria-expanded", "false");
  profileMenu.focus();
}

function openProfile() {
  profileMenu.setAttribute("aria-expanded", "true");
  menu.item(0).focus();
  daviiMenu.addEventListener("keyup", handleEscapeEvent);

  menu.forEach(function (menuitem, menuItemIndex) {
    menuitem.addEventListener("keyup", (event) => {
      handleArrowKeypress(event, menuItemIndex);
    });
  });
}

function openNotify() {
  bell.setAttribute("aria-expanded", "true");
  notifyMenu.item(0).focus();
  bellPop.addEventListener("keyup", handleEscapeEventTwo);
  notifyMenu.forEach(function (menuitem, menuItemIndex) {
    menuitem.addEventListener("keyup", (event) => {
      handleArrowKeypressAlert(event, menuItemIndex);
    });
  });
}
function closeNotify() {
  bell.setAttribute("aria-expanded", "false");
  bell.focus();
}
function openOption() {
  content.setAttribute("aria-expanded", "true");
  optionsChange.item(0).focus();
  content.addEventListener("keyup", handleEscapeEventThree);
  optionsChange.forEach(function (menuitem, menuItemIndex) {
    menuitem.addEventListener("keyup", (event) => {
      handleArrowKeypressOptions(event, menuItemIndex);
    });
  });
}
function closeOption() {
  arrow.setAttribute("aria-expanded", "false");
  arrow.focus();
}

// Creating the check button animation
// track the animation in progress
let animationInProgress = false;

function checkBtn(circleCheck) {
  if (animationInProgress) {
    return;
  }

  animationInProgress = true;

  if (circleCheck.innerHTML === newSvgs[4].innerHTML) {
    circleCheck.innerHTML =
      '<circle cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 5"></circle>';
    countNr--;
    num -= 14;
  } else {
    // Clicked state, increase the count
    newSvgs.forEach((newSvg, index) => {
      setTimeout(() => {
        circleCheck.innerHTML = newSvg.innerHTML;
      }, index * 110);
    });
    countNr++;
    num += 14;
  }

  rectChg.style.width = `${num}px`;
  count.innerHTML = countNr + " ";

  setTimeout(() => {
    animationInProgress = false;
  }, newSvgs.length * 100);
}

function activeChange(e) {
  // Remove active1 and pop-event classes from all elements
  console.log(e);

  optionsOP.forEach((optionOP, index) => {
    optionOP.classList.remove("active1");
  });

  popDown.forEach((pop) => {
    pop.classList.remove("pop-event");
  });
  imageReveal.forEach((img) => {
    img.classList.remove("pop-event");
  });

  // Add active1 class to the clicked optionOP
  e.classList.add("active1");

  // Find the corresponding popDown element and add pop-event class
  let index = -1;
  optionsOP.forEach((option, i) => {
    if (option === e) {
      index = i;
    }
  });

  if (index !== -1) {
    popDown[index].classList.add("pop-event");
    imageReveal[index].classList.add("pop-event");
  }
}

// when i click on the check button it receives the active class, and then moves to the next one
