// Use childNodes to list all the children from the <ul>
let ul = document.querySelector("ul");
const listItems = [...ul.childNodes];
let existingNodes = [];

// Adds important class to Fast and Furious
let addImportant = (nodeList) => {
    for (let child of nodeList) {
        if (child.textContent === "Fast and Furious") {
            child.classList.add("important");
        }
    }
}

// Removes duplicate nodes
let removeDuplicates = (nodeList) => {
    for (let child of nodeList) {
        let isDuplicate = false;
        for (let node of existingNodes) {
            if (node.textContent === child.textContent) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            existingNodes.push(child);
        } else {
            ul.removeChild(child);
        }
    }
}

// Function to shuffle array items
let shuffleListItems = (nodeList) => {
    for (let i = nodeList.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [nodeList[i].textContent, nodeList[j].textContent] = [nodeList[j].textContent, nodeList[i].textContent]
    }
}

addImportant(listItems);

// Creates alerts on node elems
for (let child of listItems) {
    child.addEventListener("click", (event) => {
        if (child.classList.contains('important')) {
            alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
        }
        else {
            alert(child.textContent);
        }
    })
}

removeDuplicates(listItems);

document.body.addEventListener("keyup", function(event) {
    // Check if the pressed key is 'r'
    const important = document.querySelector(".important");
    if (important) {
        important.classList.remove("important");
    }
    if (event.key === "r") {
        // Select the list items
        let nodes = document.querySelectorAll("ul li");
        // Shuffle the list items (excluding the first one)
        shuffleListItems(nodes);
        let ul = document.querySelector("ul");
        addImportant(nodes);
        let important = document.querySelector("ul li.important")
        ul.prepend(important);
    }
    // (*) Modify the previous function so that when you press the letter d of your keyboard, the Fast and Furious element gets cloned
    else if (event.key === "d") {
        let importantNode = document.querySelector(".important");
        if (importantNode) {
            // Clone the important node
            let clonedNode = importantNode.cloneNode(true);
            // Append the cloned node to the end of the <ul> element
            document.querySelector("ul").appendChild(clonedNode);
        }
    }
})


// Create a new <div> before the list, using createElement and insertBefore
const selectDiv = document.createElement("div");
// Using createElement, create a <select> tag into the previously created <div>, with two <option>s in it: "important franchises" and "normal franchises"
selectDiv.innerHTML = 
`<select name ="new_div" id="franchise">
    <option value="all" selected>normal franchises</option>
    <option value="important">Important franchises</option>
</select> `
document.body.insertBefore(selectDiv, ul);

const div = document.createElement("div");
const selection = document.querySelector("#franchise");

// Add an eventListener to the <select>, on change, if the option "important franchise" is chosen, only display items of the list that have the class .important. (hint: you can toggle visibility using element.style.visibility = 'hidden')
selection.addEventListener("change", (event) => {
    let option = selection.options[selection.selectedIndex];
    let li = [...document.querySelectorAll("ul li")];
    if (option.value === "important") {
        for (elem of li) {
            if (!elem.classList.contains('important')) {
                elem.style.visibility = "hidden";
            }
        }
    }
    else {
        for (elem of li) {
            elem.style.visibility = "visible";
        }
    }
})
