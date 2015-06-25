/**
 * define the app module as a global variable
 */
var app = angular.module('weatherChannel', []).run(function ($templateCache){
  $templateCache.put('animate.html', '<a href="#">Animate!</a>');
  //TODO: iterate over template files to generate this code
});
