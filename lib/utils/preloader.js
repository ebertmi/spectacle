var preload = function preload(imageArray) {
  var images = [];
  for (var i = 0; i < imageArray.length; i++) {
    images[i] = new Image();
    images[i].src = imageArray[i];
  }
};

export default preload;