angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  Links.fetch(function (response) {
    $scope.links = response.body;
  });
});
