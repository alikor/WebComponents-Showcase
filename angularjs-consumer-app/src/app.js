// src/app.js
angular.module('myApp', [])
  .controller('MainController', ['$scope', function($scope) {
    var ctrl = this;

    ctrl.openModal = function() {
      // Access the Web Component and call its method
      var myModal = document.querySelector('#myModal');
      myModal.show();
    };
  }]);