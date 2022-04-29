let equals_pressed = 0;
//refer all buttins excluding AC and DEL
let button_input = document.querySelectorAll(".input-button");
//refer input,equal, clear and erase
let input = document.getElementById("input");
let equals = document.getElementById("equals");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = ()=> {
    input.value = "";
};
//access each class using forEach
button_input.forEach((button_class) => {
    button_class.addEventListener("click", () => {
        if(equals_pressed == 1){
            input.value = "";
            equals_pressed = 0;
        }
        //display value of each button
        input.value += button_class.value;
    });
});

//solve the user's input when clicked on equal sign
equals.addEventListener("click", () => {
    equals_pressed = 1;
    let inp_val = input.value;
    try{
        //evaluate user's input
        let solution = eval(inp_val);
        //true for natural numbers
        //false for decimals
        if(Number.isInteger(solution)) {
            input.value = solution;
        } else {
            input.value = solution.toFixed(2);
        }
    }catch(err){}
});