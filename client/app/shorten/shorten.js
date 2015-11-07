angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.submit = function () {
	Links.add($scope.inputURL);
  };
});
