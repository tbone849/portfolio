angular.module('myApp')
	.controller('homeController', ['$scope', function($scope){
		$scope.colleges = ['iup', 'iupui', 'umass'];
		$scope.tools = ['html', 'css', 'javascript', 'jquery', 'angular', 'sass', 'neat', 'gulp', 'git', 'github'];
	}]);