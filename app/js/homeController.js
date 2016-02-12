angular.module('myApp')
	.controller('homeController', ['$scope', function($scope){
		$scope.colleges = ['iup', 'iupui', 'umass'];
		$scope.tools = ['html', 'css', 'javascript', 'jquery', 'angular', 'sass', 'neat', 'gulp', 'git', 'github'];
		$scope.projects = [
			{
				title: 'Star Wars: A Visual Guide',
				img: './assets/img/starwars.jpg',
				description: 'An Angular app developed using the <a href="http://swapi.co/" target="_blank">Star Wars API</a> to display basic information about Star Wars characters, films, starships, vehicles, species, planets, and their relations. If you are like me and you remember faces better than names, then this visual guide is right up your alley.',
				gitHub: 'https://github.com/tbone849/star-wars-guide',
				demo: 'https://starwars-visualguide.com/#/'
			},
			{
				title: 'Farmer Courses',
				img: './assets/img/farmercourses.jpg',
				description: 'A website for a company called Farmer Courses. The company provides Farm Service Agency approved courses that focus on improving profit and production while addressing finances and risk management. Users span from all over the United States, to some other countries as well. Developed in my pre-Angular days using JavaScript, jQuery, and jQueryUI.',
				demo: 'http://farmercourses.com/'
			}
		];
	}]);