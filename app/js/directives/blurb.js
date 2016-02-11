angular.module('myApp')
	.directive('blurb', function() {
		return {
			scope: {
				header: '@'
			},
			transclude: true,
			restrict: 'E',
			template: "<div><span class='fs-display-1 title'>{{header}}</span><p class='fs-title' ng-transclude></p></div>"
		};
	});