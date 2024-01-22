let display = document.querySelector(".texthold");
let firstClick = true;

let buttons = document.querySelectorAll(".screen");

buttons.forEach((button) => {
  button.addEventListener("click", (first = false) => {
    if (firstClick) {
      display.innerHTML = ""; // Clear the content on the first click
      firstClick = false; // Set firstClick to false after the first click
    }

    display.innerHTML += button.innerHTML;
  });
});

let onScreen = document.querySelector(".solve");

onScreen.addEventListener("click", () => {
  const ans = eval(display.innerHTML);

  // Append the equation and result to history with line breaks
  historyl.innerHTML += display.innerHTML + "=" + ans + "<br>";

  // Update the display with the answer
  display.innerHTML = ans;
});

let erase = document.querySelector(".erase");
erase.addEventListener("click", () => {
  historyl.innerHTML += display.innerHTML;
  display.innerHTML = "";
});
backSpace.addEventListener("click", () => {
  let z = display.innerHTML;

  if (z.length > 0) {
    display.innerHTML = z.slice(0, -1);
  }
  // console.log(z);
});
let n = 0; // Start with 0, assuming initial state is Main displayed

hamburger.addEventListener("click", () => {
  n = (n + 1) % 2; // Toggle between 0 and 1

  if (n === 1) {
    // Odd, show history
    historyl.style.display = "block";
    Main.style.display = "none";
  } else {
    // Even, show main
    historyl.style.display = "none";
    Main.style.display = "grid";
  }
});
