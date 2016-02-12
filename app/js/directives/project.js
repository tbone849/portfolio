angular.module('myApp')
	.directive('project', function(){
		return {
			scope: {
				myProject: '='
			},
			transclude: true,
			restrict: 'E',
			templateUrl: "../partials/project.html"
		};
	});