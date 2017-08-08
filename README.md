#Mongo db Homework

###### e13_homework_week_12_day_02

## getting started



<br>
### Prerequisites

What things you need to install the software and how to install them

1. npm + nodejs
2. text editor
3. JSON Formatter (install on your browser)
4. npm body-parser
5. Insomnia REST Client

#### Tips for terminal
in your terminal you can use the alias 'i' for install on npm and other program frameworks like so
```sh
npm i --save express
```
#### Tips of debugging

```js
function = function(event) {
  console.log(event)
}
```
also works in RESTful requests with body-parser(npm)
```js
filmsRouter.post('/', function(req, res){
  console.log(req.body)
  films.push(req.body.film)
  res.json({data: films})
})
```
<br>
Remember if stuff double check your webpack and server terminal, while there running you will get feedback
```sh
throw er; // Unhandled 'error' event
      ^
Error: listen EADDRINUSE 'error' event
    at errnoExecption (net.js:901:11)
```
ect
