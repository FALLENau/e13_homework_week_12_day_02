var imgView = require('./views/imgView');
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
  requestImg.send()
  getRequestComplete(requestImg)
}

var getRequestComplete = function(imgs) {
  var imagesArr = []



  imagesArr.push(imgs)

  console.log(imgs)
  console.log(imgs.readyState)
  console.log(imgs.readyState)



  console.log(imagesArr)



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
