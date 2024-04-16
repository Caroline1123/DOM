function randomColor() {
    return Math.floor(Math.random()*256)
}


const importantElems = document.querySelectorAll('.important');
for (let elem of importantElems) {
    elem.setAttribute("title", "This is important");
}

// Select all the img tags and loop through them. If they have no important class, turn their display property to none

const images = document.querySelectorAll("img");
for (img of images) {
    if (img.classList.contains("important")) {
        img.style.display = "none";
    }
}

//Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well
//Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.

const paragraphs = document.querySelectorAll('p');
for (let paragraph of paragraphs) {
    if (paragraph.classList.length > 0 ) {
        console.log("Text: " + paragraph.innerText + ". Class:" + paragraph.classList);
    }
    else {
        console.log(paragraph.innerText);
        let R = randomColor();
        let G = randomColor();
        let B = randomColor();
        paragraph.style.color = `rgb(${R}, ${G}, ${B})`;

    }
}
