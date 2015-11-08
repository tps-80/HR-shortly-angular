angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code
/*
  $scope.link = {};

  $scope.addLink = function(){
    Links.addLink($scope.link)
      .then(function(){
        $location//not done.....
      })
      .catch(function(error){
        console.log(error);
      });
  }
  */

  $scope.submit = function () {
	Links.addLink($scope.inputURL);
  };
});
