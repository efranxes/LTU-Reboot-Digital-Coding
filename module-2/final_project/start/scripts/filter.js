console.log("hello");

let buttons = document.querySelectorAll('.animalFilter');
let images = document.querySelectorAll('.imageFilter');
let textSearchInput = document.querySelector('.textSearchInput');

//console.log(buttons);
//console.log(images);
//console.log(textSearchInput);
let searchString;
let animal = 'all';

buttons.forEach(function(button){
    button.addEventListener('click',function(event){
        let clickedElement = document.querySelector('.clicked');
        console.log(clickedElement);
        if(clickedElement){
            clickedElement.classList.remove('clicked');
        }
        event.target.classList.add('clicked');
        let clickedItem = event.target;
        animal = clickedItem.getAttribute('animal');
        //console.log(animal);
        showHideImages();
    });
});

textSearchInput.addEventListener('keyup',function(event){
    searchString = event.target.value;
    //console.log(searchString);
    showHideImages();
});

function showHideImages(){
    images.forEach(function(image){
        let captionElement = image.parentElement;
        //console.log(image.parentElement);
        let caption = captionElement.textContent.trim();
        //console.log(caption);
        image.parentElement.classList.add('hide');
        if(image.classList.contains(animal) || animal == 'all'){
            console.log(searchString);
            if(caption.indexOf(searchString) !== -1 || caption == ""){
                //show current image
                if(image.parentElement.classList.contains('hide')){
                    image.parentElement.classList.remove('hide');
                }
            }
        }
    });
};