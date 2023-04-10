// Direct Linking from Url to project Url
const projectList = {
    [3]: "https://www.roblox.com/games/12633113230/"
}

let windowData = window.location.href
let windowDataSplit = windowData.split("?")[1]

if (windowDataSplit) {
    window.open(projectList[windowDataSplit])
}