// Print document title in console
console.log(document.title);
document.title = "Modifying the DOM";

document.body.style.backgroundColor = "#FF69B4";

let subElements = document.body.children;
for (let child of subElements) {
    console.log(child);
}