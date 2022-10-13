var screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = " ";

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => {
        let buttonText = e.target.innerText;
        // console.log(buttonText); 
        if (buttonText == "X") {
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        }

        else if (buttonText == "C") {
            screenValue = "";
            screen.value = screenValue;
        }

        else if (buttonText == "=") {
            screen.value = eval(screenValue)
        }

        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}



