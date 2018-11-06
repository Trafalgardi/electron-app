'use strict'
const remote = require('electron').remote
const main = remote.require('./main.js')

window.$ = window.jQuery = require('jquery')
window.Tether = require('tether')
window.Bootstrap = require('bootstrap')


var win = remote.getCurrentWindow()

document.getElementById('headerClose').addEventListener('click', (event) => {
	
	win.close()

});
document.getElementById('btnClose').addEventListener('click', (event) => {
	
	win.close()

});
document.getElementById('minimize').addEventListener('click', (event) => {
	
	win.minimize()

});
document.getElementById('maximize').addEventListener('click', (event) => {
	
	win.isMaximized() ? win.unmaximize() : win.maximize() 

});

/*document.getElementById('button').addEventListener('click', (event) => {

	var login = $( "input#inputLogin" ).val();
	var password = $( "input#inputPassword" ).val();
  var parms = '{ "type" : "auth" , "login" : "' + login + '" , "password" : "' + password + '" }';

  connect(parms)

  main.openWindow('loading')
	
});*/

$(document).ready(function getUsers() {

    $.get("https://personnelsecurity.info/getData", function(data, status){
      var str = JSON.stringify(data, "", 2); // spacing level = 2
      var json = {
        "personnelData": {
          "firstName": "Вячеслав",
          "lastName": "Мальцев",
          "secondName": "Евгеньевич",
          "gender": "Мужской",
          "age": "22",
          "registration": "гражданство РФ",
          "children": "нет"
          
        }
      };
      var pd = data[0].data;
      //pd = JSON.stringify(pd);
      
      
      console.log("Data: " + pd + "\nStatus: " + status);
    });
});
