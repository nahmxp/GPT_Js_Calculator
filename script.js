document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    // Add click event listeners to all buttons
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.textContent === "=") {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = "Error";
                }
            } else if (button.textContent === "C") {
                display.value = "";
            } else {
                display.value += button.textContent;
            }
        });
    });
});
