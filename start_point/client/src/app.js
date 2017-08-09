var ImgView = require('./views/imgView');
var data

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest()

  request.responseType = 'blob'
  request.onload = function() {
    var reader = new FileReader()
    reader.onloadend = function() {
      callback(reader.result)
    }
    reader.readAsDataURL(request.response)
  }
  request.open('GET', url)
  request.setRequestHeader('Content-Type', 'application/json')
  request.send()
}

var requestComplete = function(data) {

  var request = new XMLHttpRequest();
  var postdata = {
    id: data
  }
}

//////

var makeDbRequest = function(url, callback){
  var requestImg = new XMLHttpRequest()
  // request.open('GET', url)
  // request.send()

  requestImg.open("GET", url)
  requestImg.setRequestHeader('Content-Type', 'application/json')
  requestImg.addEventListener('load', getRequestComplete)
  requestImg.send()

}

var getRequestComplete = function() {
  // console.log()
  console.log(this.responseText);

  var imgString = this.responseText
  var imgs = JSON.parse(imgString)
  var imgView = new ImgView(imgs)
}



var app = function(){
  var getUrlImgButton = document.querySelector("#js-img-button");
  getUrlImgButton.addEventListener('click', function() {
      var input = document.querySelector('#imageurl');
      makeRequest(input.value, requestComplete);
  });

  var getImgButton = document.querySelector("#js-getImg-button");
  getImgButton.addEventListener('click', function() {
      makeDbRequest(url, getRequestComplete);
  });
  var url = "http://localhost:3000/imgs"
  // makeRequest(url, requestComplete)
}


window.addEventListener('load', app);
