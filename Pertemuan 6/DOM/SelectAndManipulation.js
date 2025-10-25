let paragraphs = document.getElementsByClassName('paragraph');
let fistparagraph = document.querySelector('p');

// manipulation elements
heading.innerHTML = 'New Heading'
paragraphs[0].computedStyleMap.color = 'blue'
fistparagraph.setAttribute('class', 'important')

// creating amd appending elements
let newParagraph = document.createElement('p')
newParagraph.innerHTML = 'This is a new paragraph'
document.body.appendChild(newParagraph)