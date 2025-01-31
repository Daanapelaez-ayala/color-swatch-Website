
    $(".myImage").hover(function(){
      $(".overview").attr("src","img/bartholomew bear heart.jpg");
    });
  $(".myImage").hover(function(){
      $(".overview").attr("src","img/bartholomew bear pumpkin.jpg");
    });
  $(".myImage").hover(function(){
      $(".overview").attr("src","img/bartholomew bear strawberry.jpg");
    });
  
    // Get the main image element and all thumbnail images
const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');

// Loop through each thumbnail image and add event listeners for hover
thumbnails.forEach(thumbnail => {
  // When mouse enters a thumbnail, change the main image
  thumbnail.addEventListener('mouseover', function() {
    mainImage.src = thumbnail.getAttribute('data-image');
  });

  // When mouse leaves the thumbnail, reset the main image to the default one
  thumbnail.addEventListener('mouseout', function() {
    mainImage.src = "img/Bartholomew Bear.jpg"; // reset to original image
  });
});


    