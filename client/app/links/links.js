angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

	// $scope.data = {};

	// $scope.getLinks = function() {
	// 	Links.getAll()
	// 		.then(function(links) {
	// 		  $scope.data.links = links
	// 		})
	// 		.catch(function(error){
	// 			console.error(error);
	// 		})
	// }

	// $scope.getLinks();


  // Your code here
  $scope.getLinks = function () {
    Links.fetch(function (response) {
    console.log(response);

      $scope.links = response.data;
    });
  };
  $scope.getLinks();
});
