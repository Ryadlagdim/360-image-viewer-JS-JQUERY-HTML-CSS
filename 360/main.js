$(document).ready(function() {
 
  const imageSource = "https://i.ibb.co/wNyT7Pq/image1.jpg"; 

  // const imageSource = "https://i.ibb.co/JcpzTgt/timothy-oldfield-luufn-Ho-Ch-RU-unsplash.jpg"; 
  
 
  const panoramaImage = new PANOLENS.ImagePanorama(imageSource);

 
  const imageContainer = $(".image-container");
  const viewer = new PANOLENS.Viewer({
    container: imageContainer[0],
    autoRotate: false,
    autoRotateSpeed: 0.3,
    controlBar: true
  });

  function updatePanoramaRotation(deltaY, deltaX) {
    panoramaImage.rotation.x += deltaY;
    panoramaImage.rotation.y += deltaX;
  }

  $("#rotate-left").on("click", function() {
    updatePanoramaRotation(0, -Math.PI / 36);
  });

  $("#rotate-right").on("click", function() {
    updatePanoramaRotation(0, Math.PI / 36);
  });

  $("#scroll-up").on("click", function() {
    updatePanoramaRotation(-0.1, 0);
  });

  $("#scroll-down").on("click", function() {
    updatePanoramaRotation(0.1, 0);
  });

  $("#zoom-in").on("click", function() {
    viewer.camera.fov -= 5;
    viewer.camera.updateProjectionMatrix();
  });

  $("#zoom-out").on("click", function() {
    viewer.camera.fov += 5;
    viewer.camera.updateProjectionMatrix();
  });

  viewer.add(panoramaImage);
});


























// $(document).ready(function() {
//   const panoramaImage = new PANOLENS.ImagePanorama("images/image1.jpeg");
//   const imageContainer = $(".image-container");
//   const viewer = new PANOLENS.Viewer({
//     container: imageContainer[0],
//     autoRotate: false,
//     autoRotateSpeed: 0.3,
//     controlBar: true
//   });

//   function updatePanoramaRotation(deltaY, deltaX) {
//     panoramaImage.rotation.x += deltaY;
//     panoramaImage.rotation.y += deltaX;
//   }

//   $("#rotate-left").on("click", function() {
//     updatePanoramaRotation(0, -Math.PI / 36);
//   });

//   $("#rotate-right").on("click", function() {
//     updatePanoramaRotation(0, Math.PI / 36);
//   });

//   $("#scroll-up").on("click", function() {
//     updatePanoramaRotation(-0.1, 0);
//   });

//   $("#scroll-down").on("click", function() {
//     updatePanoramaRotation(0.1, 0);
//   });

//   $("#zoom-in").on("click", function() {
//     viewer.camera.fov -= 5;
//     viewer.camera.updateProjectionMatrix();
//   });

//   $("#zoom-out").on("click", function() {
//     viewer.camera.fov += 5;
//     viewer.camera.updateProjectionMatrix();
//   });

//   viewer.add(panoramaImage);
// });







// const panoramaImage = new PANOLENS.ImagePanorama("images/image1.jpeg");
// const imageContainer = document.querySelector(".image-container");
// const rotateLeftButton = document.getElementById("rotate-left");
// const rotateRightButton = document.getElementById("rotate-right");
// const scrollUpButton = document.getElementById("scroll-up");
// const scrollDownButton = document.getElementById("scroll-down");

// const viewer = new PANOLENS.Viewer({
//   container: imageContainer,
//   autoRotate: false,
//   autoRotateSpeed: 0.3,
//   controlBar: true,
// });

// rotateLeftButton.addEventListener("click", () => {
//   panoramaImage.rotation.y -= Math.PI / 36;
// });


// rotateRightButton.addEventListener("click", () => {
//   panoramaImage.rotation.y += Math.PI / 36; 
// });

// scrollUpButton.addEventListener("click", () => {
//   panoramaImage.rotation.x -= 0.1; 
// });


// scrollDownButton.addEventListener("click", () => {
//   panoramaImage.rotation.x += 0.1; 
// });

// document.getElementById("zoom-in").addEventListener("click", () => {
//   viewer.camera.fov -= 5; 
//   viewer.camera.updateProjectionMatrix();
// });


// document.getElementById("zoom-out").addEventListener("click", () => {
//   viewer.camera.fov += 5; 
//   viewer.camera.updateProjectionMatrix();
// });


// viewer.add(panoramaImage);




























































