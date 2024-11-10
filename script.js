const terminal = document.getElementById("terminal");

function waitForInput(inputElement){
    return new Promise(resolve =>{
        inputElement.addEventListener("keydown", (e)=>{
            if (e.key === "Enter") {
                resolve(inputElement.value);
            }
        });
    });
}

async function generateInputAndOuput(){
    let userInput = '';
    while (true) {
        const inputElement = document.createElement("input");
        inputElement.classList.add("jt-medium", "terminal-input");
        inputElement.setAttribute("autofocus", "true");
        terminal.appendChild(inputElement);
        userInput = await waitForInput(inputElement);
        console.log(userInput);

        const outputElement = document.createElement("p");
        outputElement.classList.add("jt-medium", "terminal-output");
        outputElement.textContent = userInput;
        terminal.appendChild(outputElement);
    }
}


const commands = {
    quit: "The program will quit",
    help: "Helped"
}

