var ImgView = function(imgsArr){
  this.render(imgsArr);
}

ImgView.prototype = {
  render: function(imgsArr){

    imgsArr.forEach( function(img){

      var imgTag = document.createElement('img');
      var div = document.querySelector('#imgs');

      var id = img._id
      console.log(id)

      var src = "data:image/gif;base64," + img.img
      imgTag.src = src
      console.log(src)
      div.appendChild(imgTag)
    })
  }
}

module.exports = ImgView;
