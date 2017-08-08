var ImgView = function(imgs){
  this.render(imgs);
}

ImgView.prototype = {
  render: function(imgs){

    // console.log(imgs)
    imgs.forEach( function(img){
      var imgTag = document.createElement('img');
      var ul = document.querySelector('#imgs');
      imgTag.innerHtml(img)
      imgTag.src = img
      ul.appendChild(imgTag)

      // var text = document.createElement('p');
      // li.appendChild(text);
      // text.innerText = img.name + ": " + '"' + img.img + '"';
      // ul.appendChild(li);
    })
  }
}

module.exports = ImgView;
