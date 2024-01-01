let display = document.querySelector(".text");

let buttons = document.querySelectorAll(".screen");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        display.innerHTML += button.innerHTML;
    });
});

let onScreen=document.querySelector(".solve")
onScreen.addEventListener("click",()=>{
  
    const ans = eval(display.innerHTML);
    display.innerHTML = ans;
    
})
let erase=document.querySelector(".erase")
erase.addEventListener("click",()=>{
    
    display.innerHTML = "";
})

