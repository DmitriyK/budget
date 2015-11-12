// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .controller('MainCtrl', function ($scope) {
    $scope.data = {};
    $scope.expenditureTypes = ["lunch", "sport", "store", "salary"];
    //debugger
    $scope.data.expenditure = $scope.expenditureTypes[0];

    $scope.history = [
      {type : "lunch", cost : -5},
      {type : "salary", cost : 10}
    ];

    $scope.updateBalance = function() {
      var temp = 0;
      for(var i = 0; i < $scope.history.length; i++) {
        temp = temp + $scope.history[i].cost;
      }
      $scope.balance =  temp;
      return temp;
    };

    $scope.add = function() {
      //debugger
      $scope.history.unshift({type: $scope.data.expenditure, cost : $scope.data.cost});
      $scope.data.expenditure = $scope.expenditureTypes[0];
      $scope.data.cost = null;
    };
  });
