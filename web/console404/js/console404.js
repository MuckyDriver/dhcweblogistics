// Console Directory
const consoleDirectoryItems = document.getElementsByClassName('console-directory')
const consoleDomainItems = document.getElementsByClassName('console-domain')

for (let i = 0; i < consoleDirectoryItems.length; i++) {
    const directoryItem = consoleDirectoryItems[i];
    
    directoryItem.innerHTML = window.location.pathname;
}
    
for (let i = 0; i < consoleDomainItems.length; i++) {
    const directoryItem = consoleDomainItems[i];
    
    directoryItem.innerHTML = window.location.host
}

// Console Line load in
const staticLines = document.getElementsByClassName('line')
const colors = {
    ['red']: "#ed645a",
    ['blue']: "#70aeff"
}

for (let i = 0; i < staticLines.length; i++) {
    const staticLine = staticLines[i];
    let lineTimeout = staticLine.getAttribute('data-loadtimeout');
    let lineColor = staticLine.getAttribute('data-linecolor');
    let tabIndent = staticLine.getAttribute('data-lineindent') * 16;

    if (lineTimeout) {
        setTimeout(() => {
            staticLine.style.display = 'block';
            staticLine.style.color = colors[lineColor];
            staticLine.style.paddingLeft = tabIndent + "px";
        }, lineTimeout)
    }
}

// Input Handling
const writtenConsole = document.getElementById('console-written')

const responses = {
    ['help']: [
        'You can you use commands "goto" or "return".',
        'Syntax: goto {page name} | Example: goto index.html',
        'The command "return" will return to your last page you visited.'
    ],
    ['return']: function() {
        history.back();
    },
    ['goto']: function(page) {
        if (page.length < 1 || page == "/") { page = "" }
        window.location.assign("https://dhcweblogistics.net/" + page)
    }
}

function handleInputs() {
    const allInputs = document.getElementsByTagName('input')

    for (let i = 0; i < allInputs.length; i++) {
        const input = allInputs[i];
    
        // Going to listen out for when the user presses enter on the keyboard (input handling)
        input.addEventListener('keypress', (event) => {
            if (event.key === "Enter") {
                let split = input.value.split(" ");

                if (split[0] == 'goto') { 

                    // The command "goto" will need to use the second part of the split to know what page to go to.
                    responses.goto(split[1])
                } else if (input.value == 'return') { 

                    // The "return" command will return to the last know page in history.
                    responses.return()
                } else { 
                    // As all the other commands are function commands, now this is for information only.
                    let responseArray = responses[input.value]

                    // If the response array does not exist then the command does not exist.
                    if (responseArray == undefined) {
                        responseArray = ["The command you entered does not exist!"]
                    }
    
                    for (let i = 0; i < responseArray.length; i++) {
                        let response = responseArray[i];
                        let newLine = document.createElement('div');
            
                        newLine.innerText = response
                        newLine.style.display = 'block';
                        newLine.style.paddingLeft = (32 * i) + "px";
                        newLine.classList.add('line')

                        if (i > 0) {
                            newLine.classList.add('dimmed')
                        }
                        
                        writtenConsole.appendChild(newLine)
                    }

                    input.value = ""
                    writtenConsole.appendChild(document.getElementById('input-example'))
                }
            }
        })
    }
}

handleInputs()