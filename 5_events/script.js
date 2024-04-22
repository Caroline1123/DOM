const _initTime = Date.now()

const getElapsedTime = () => {
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

// Creates a new square with event listener
const createSquare = (newClass) => {
    const destination = document.querySelector(".displayedsquare-wrapper")
    const newSquare = document.createElement("div");
    newSquare.classList.add("displayedsquare", newClass);
    newSquare.addEventListener("click", (event) => {
        alert(newClass);
    })
    destination.appendChild(newSquare);
}

// Deletes the generated squares
const deleteSquares = ()  => {
    const newSquares = document.querySelectorAll(".displayedsquare");
    for (square of newSquares) {
        square.remove();
    }
}

// Modifies log each time an action is performed
const editLog = (target) => {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    if (target === "spacebar") {
        li.innerText = `[${getElapsedTime()}] Spacebar was clicked!`
    }
    else if (target === "l") {
        while (ul.firstChild) {
            ul.firstChild.remove();
        }
        return;
    }
    else {
        li.innerText = `[${getElapsedTime()}] Created a new ${target.classList[1]} square.`
    }
    ul.appendChild(li);
}

const clickOnSquare = (e) => {
    createSquare(e.target.classList[1]);
    editLog(e.target);
}

// Changes body background color
const body = document.querySelector("body");
body.addEventListener("keypress", (event) => {
    // change body background color if spacebar pressed
    if (event.key === " ") {
        let randomColor = `rgba(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)},0.5`
        body.style.backgroundColor = randomColor;
        editLog("spacebar");
    }
    // delete all new squares when s is pressed
    if (event.key === "s") {
        deleteSquares();
    }
    // Modifies logs when l is pressed
    if (event.key === "l") {
        editLog("l");
    }
})

const actionSquares = document.querySelectorAll('.actionsquare');
for (let actionSquare of actionSquares) {
    actionSquare.addEventListener('click', clickOnSquare)
}