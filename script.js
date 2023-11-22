

  //Global variables

  var video = document.getElementById("example");
  var videoSource =  document.getElementById("vid-src");

  //function to display the advert video
  function advert() {
     videoSource.src = "food.mp4";
     video.style.display = "block";
     video.load();

      video.addEventListener('ended', function() {
          // hide video
            video.style.display = "none";
          })
     }





