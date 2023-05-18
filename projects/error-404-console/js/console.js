// Console Script
// This script will handle the console written content as well as some of static content to be loaded in.

// Global variables and constants
let tabIndentScale = 32

// Static Console Items - Insert content from WindowData
const consoleItems = document.getElementsByClassName('console-item');

for (let i = 0; i < consoleItems.length; i++) {
    let consoleItem = consoleItems[i]
    let consoleDir = consoleItem.getAttribute("data-console")

    if (consoleDir == "directory") { consoleItem.innerHTML = window.location.pathname; }
    else if (consoleDir == "domain") { consoleItem.innerHTML = window.location.host; }
}

// Loading in console items - Uses attribute "data-loadtimeout"
const staticLines = document.getElementsByClassName('line')
const colors = {
    ['red']: "#ed645a", ['blue']: "#70aeff"
}

for (let i = 0; i < staticLines.length; i++) {
    const staticLine = staticLines[i];
    let lineTimeout = staticLine.getAttribute('data-loadtimeout');
    let lineColor = staticLine.getAttribute('data-linecolor');
    let tabIndent = staticLine.getAttribute('data-lineindent') * tabIndentScale;

    if (lineTimeout) {
        setTimeout(() => {
            staticLine.style.display = 'block';
            staticLine.style.color = colors[lineColor];
            staticLine.style.paddingLeft = tabIndent + "px";
        }, lineTimeout)
    }
}

// Handling Input - Commands, Functions and Responses to the written console.
const writtenConsole = document.getElementById('console-written')
const primaryInput = document.getElementById('primary-input')

// Responses
const failedResponse = { ['lines']: ['The command you were trying to enter does not exist!'], ['indents']: [0], ['listItem']: [false] }
const responses = {
    // All custom responses would go here, lines would be the individual lines of text and indents is the amount of indents you want the text to be at.
    ['help']: {
        ['lines']: [
            "You can use the following commands:", "help", "domain", "url", "protocol",
            "goto", 'Syntax: goto {page name} | For example: goto index.html',
            "return", 'The "return" command will return to last available page you visited'
        ],
        ['indents']: [0, 1, 1, 1, 1, 1, 2, 1, 2],
        ['listItem']: [false, false, false, false, false, false, true, false, true]
    },

    ['url']: {
        ['lines']: [ "Url: " + window.location.href ],
        ['indents']: [0], ['listItem']: [false]
    },

    ['domain']: {
        ['lines']: [ "Domain: " + window.location.host ],
        ['indents']: [0], ['listItem']: [false]
    },

    ['protocol']: {
        ['lines']: [ "Protocol: " + window.location.protocol.split(":")[0].toUpperCase() ],
        ['indents']: [0], ['listItem']: [false]
    },

    ['gotoFailed']: {
        ['lines']: [ 'Incorrect use of the command "goto"', 'Syntax: goto {page name} | For example: goto index.html'],
        ['indents']: [0, 1], ['listItem']: [false, true]
    }
}

const responseCommand = function(commandName) {
    let responseDict = responses[commandName] && responses[commandName] || failedResponse

    for (let i = 0; i < responseDict.lines.length; i++) {
        let response = responseDict.lines[i];
        let responseIndents = responseDict.indents[i];
        let responseListItem = responseDict.listItem[i] || false
        let newLine = document.createElement('div');

        newLine.innerText = response
        newLine.style.display = 'block';
        newLine.style.paddingLeft = (tabIndentScale * responseIndents) + "px";
        newLine.classList.add('line')

        if (responseListItem) { newLine.classList.add('bullet') }
        if (responseIndents > 1) { newLine.classList.add('dimmed') }
                        
        writtenConsole.appendChild(newLine)
    }
}

// Commands - A list of functional commands.
const commands = {
    ['help']: function() { responseCommand('help') },
    ['domain']: function() { responseCommand('domain') },
    ['url']: function() { responseCommand('url') },
    ['protocol']: function() { responseCommand('protocol') },
    ['return']: function() { history.back(); },

    // goto is a more complex command, and will use more than one line on the data structure.
    ['goto']: function(inputValue) {
        let pageName = inputValue.split(" ")[1]

        if (pageName) {
            if (pageName == "/") { pageName = "" };
            window.location.assign("../../" + pageName)
        } else {
            responseCommand("gotoFailed");
        }
    },
}

// Input Handling
primaryInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        let inputValue = primaryInput.value;
        let commandName = inputValue.split(" ")[0]

        if (commands[commandName]) {
            commands[commandName](inputValue)
        } else {
            responseCommand();
        }

        primaryInput.value = "";
        writtenConsole.appendChild(primaryInput.parentElement)
    }
})