function randomColor() {
    return Math.floor(Math.random()*256)
}
// Creates a <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>
// If the background is dark the text should be white, if the background is light the text should be black
const group = ["This", "Is", "My", "Group.", "Everyone", "Has", "A name"];

// Randomizes group order 
for (let i = group.length - 1; i > 0; i--) { 
      let j = Math.floor(Math.random() * (i + 1));
               
    let temp = group[i];
    group[i] = group[j];
    group[j] = temp;
}

const article = document.querySelector('article')
for (person of group) {
    //Creating the paragraph
    const paragraph = document.createElement('p');
    paragraph.innerText = person;

    //Creating the section
    const section = document.createElement('section');
    let R = randomColor();
    let G = randomColor();
    let B = randomColor();
    section.style.backgroundColor = `rgb(${R},${G},${B})`;
    // calculating color brightness
    let  brightness = 0.2126*R + 0.7152*G + 0.0722*B;
    console.log(brightness)
    if (brightness <  128) {
        section.style.color = 'white';
    }
    section.appendChild(paragraph);
    article.appendChild(section);
}
