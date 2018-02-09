// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const electron = require('electron');
let { ipcRenderer } = electron;

// Select the node that will be observed for mutations
let memDisp = document.getElementById('memory');

// Options for the observer (which mutations to observe)
let config = {
    attributes: true,
    attributeFilter: ['class'],
    childList: false,
    characterData: false
};

// Create an observer instance linked to the callback function
let observer = new MutationObserver(
    function (mutationsList) {
    if(mutationsList[0].target.className === "memoryshow")
        ipcRenderer.send('resize', 463, 298);
    else
        ipcRenderer.send('resize', 463, 280);
});

// Start observing the target node for configured mutations
observer.observe(memDisp, config);

// Later, you can stop observing
// observer.disconnect();