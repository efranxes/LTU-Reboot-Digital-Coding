const buttons = document.querySelectorAll('button');

const allImages = document.querySelectorAll('.image'); 
// Collect all images and save in a variable called allImages


const toggleImages = dataClass => {
  // Ternary operator
  dataClass === 'all' 
    ? allImages.forEach( image => image.style.display = 'flex') 
    : allImages.forEach( image => {
      image.dataset.class  === dataClass 
        ? (image.style.display = 'flex') 
        : ( image.style.display = 'none');
  });

  // const toggleImages = (dataClass) => {
//   if (dataClass === "all") {
//     allImages.forEach((image) => (image.style.display = "flex"));
//   } else {
//     allImages.forEach((image) => {
//       if (image.dataset.class === dataClass) {
//         image.style.display = "flex";
//       } else {
//         image.style.display = "none";
//       }
//     });
//   }
// };

}

const toggleActiveClass = ( active ) => {
   buttons.forEach( button => {
     button.classList.remove('active');
   })

   active.classList.add('active');
}


buttons.forEach( button => {
  button.addEventListener('click', () => {
    toggleImages(button.dataset.class);
    toggleActiveClass( button );
  } );
})

