const importantElems = document.querySelectorAll('.important');
for (elem of importantElems) {
    elem.setAttribute("title", "This is important");
}

// Select all the img tags and loop through them. If they have no important class, turn their display property to none

const images = document.querySelectorAll("img");
for (img of images) {
    if (img.classList.contains("important")) {
        img.style.display = "none";
    }
}