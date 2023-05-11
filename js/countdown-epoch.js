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

    if (lastEpochTimestamp && durationType) {
        let currentEpoch = (Date.now() / 1000);
        let epochDifference = (lastEpochTimestamp - currentEpoch);
        let timeLeftUntilEpoch = (epochDifference / durationTypeCalculation[durationType]);

        countTimeElement.innerHTML = Math.round(timeLeftUntilEpoch);
    }
}