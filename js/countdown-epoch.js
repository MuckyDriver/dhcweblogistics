// Counting months, weeks or days from epoch time set.
const countTimeElements = document.getElementsByClassName('count-time');
const durationTypeCalculation = {
    ["month"]: 2419200, // seconds
    ["week"]: 604800, // seconds
    ["day"]: 86400, // seconds
    ["hour"]: 3600, // seconds
    ["min"]: 60 // seconds
}

for (i = 0; i < countTimeElements.length; i++) {
    const countTimeElement = countTimeElements[i];
    const lastEpochTimestamp = countTimeElement.getAttribute('data-epoch');
    const durationType = countTimeElement.getAttribute('data-duration');
    const suffix = countTimeElement.getAttribute('data-suffix')

    if (lastEpochTimestamp && durationType) {
        let currentEpoch = (Date.now() / 1000);
        let epochDifference = (lastEpochTimestamp - currentEpoch);
        let timeLeftUntilEpoch = Math.round( (epochDifference / durationTypeCalculation[durationType]) );
        let suffixData = "";

        // If suffix attribute is present then we add the suffixData using the durationType.
        if (suffix != undefined) {
            suffixData = (timeLeftUntilEpoch != 1) && (" " + durationType + "s") || (" " + durationType)
        }

        // If time has lapsed then it needs to be altered to be no less than 0.
        if (timeLeftUntilEpoch < 0) { 
            timeLeftUntilEpoch = 0; 
        }

        // Adding the information to the webpage.
        countTimeElement.innerHTML = timeLeftUntilEpoch + suffixData;
    }
}