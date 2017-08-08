var ImgView = function(imgs){
  this.render(imgs);
}

ImgView.prototype = {
  render: function(imgs){

    // console.log(imgs)
    imgs.forEach( function(img){
      var imgTag = document.createElement('img');
      var div = document.querySelector('#imgs');
      // imgTag.innerText("hi")
      imgTag.src = img
      div.appendChild(imgTag)
    })
  }
}

module.exports = ImgView;
