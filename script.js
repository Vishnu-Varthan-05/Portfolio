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
    const infoElement = document.createElement("p");
    infoElement.classList.add("jt-medium", "terminal-output");
    infoElement.textContent = "Enter ls to start exploring my portfolio..."
    terminal.appendChild(infoElement);
    
    let userInput = '';
    while (true) {
        const inputElement = document.createElement("input");
        const inputLabel =  document.createElement("label");

        inputElement.classList.add("jt-medium", "terminal-input");
        inputElement.setAttribute("autofocus", "true");
        inputElement.name = "inputElement";

        inputLabel.classList.add("jt-medium", "terminal-label");;
        inputLabel.setAttribute("for", "inputElement");
        inputLabel.textContent = "->";

        terminal.appendChild(inputLabel)
        terminal.appendChild(inputElement);

        inputElement.focus();
        
        userInput = await waitForInput(inputElement);
        inputElement.setAttribute("disabled", "true");

        console.log(userInput);

        const command = userInput.split(" ")[0];
        const outputElement = document.createElement("pre");
        outputElement.classList.add("jt-medium", "terminal-output");
        if (commands[command]) {
            commands[command](outputElement);
        }
        else{
            outputElement.textContent = "Command not found";
            terminal.appendChild(outputElement);
        }       
    }
}


const commands = {
    ls: (outputElement)=>{
        outputElement.textContent = "about -> to know more about me\nskills -> to know about my skills\nprojects -> to know about the projects\nclear -> to clear the terminal\n";
        terminal.appendChild(outputElement);
    },
    clear: ()=>{
        terminal.innerHTML = "";
    },
}

