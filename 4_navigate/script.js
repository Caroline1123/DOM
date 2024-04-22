let ol = document.querySelector("ol");
let first = ol.children[0];
let last = ol.children[4];

ol.insertBefore(last,first);

// Moves the <h2> of the third section in the second one and vice-versa
const sections = document.querySelectorAll("section");
let secondSectionTitle = sections[1].querySelector("h2");
let thirdSectionTitle = sections[2].querySelector("h2");

[secondSectionTitle.innerHTML, thirdSectionTitle.innerHTML] = [thirdSectionTitle.innerHTML, secondSectionTitle.innerHTML]

// Delete the last section from the DOM, we don't need it anyways

sections[2].remove();