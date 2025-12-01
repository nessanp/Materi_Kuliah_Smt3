// event handling
let button = document.getElementById('myButton');

button.addEventListiner('click', function(){
    alert('Button wa clicked!');
})

// comon events
let myElement = document.getElementById('myElement');

myElement.addEventListener('mouseover', function(){
    console.log('Mouse over the element')
});

// event object
button.addEventListener('clik', function(event){
    console.log('Button clicked')
    console.log('Event type:', event.type)
    console.log('Target element:',event.target)
})