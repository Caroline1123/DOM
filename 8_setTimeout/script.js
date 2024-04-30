// write function that mimics typewritter effect.

let text = "Keller";

const typeWritterEffect = (string) => {
    const newDiv = document.createElement("div");
    const title = document.createElement("h1");
    document.body.appendChild(newDiv);
    newDiv.appendChild(title);
    let i = 0;
    let write = () => {
        if (i < string.length) {
            title.innerText += string[i];
            i++;
            setTimeout(write, 300);
        }
    }
    setTimeout(write, 500);
}

typeWritterEffect(text);

// Write a function that displays every second that has passed on the page since it was opened. The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.

let showTime = () => {
    const timeDiv = document.createElement("div");
    let seconds = 0;
    let minutes = 0;
    document.body.appendChild(timeDiv);
    let addTime = () => {
        seconds ++;
        if (seconds == 60) {
            seconds = 0;
            minutes ++;
        }
        timeDiv.innerText = `${minutes} minute(s) and ${seconds} seconds have passed`;
    }
    addTime();
    setInterval(addTime, 1000)
}

showTime();