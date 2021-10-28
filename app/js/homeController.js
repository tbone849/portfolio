angular.module('myApp')
	.controller('homeController', ['$scope', function($scope){

		$scope.colleges = ['iup', 'iupui', 'umass'];

		$scope.tools = ['html', 'css', 'javascript', 'jquery', 'angular', 'sass', 'bootstrap', 'gulp', 'git', 'github'];

		$scope.projects = [
			{
				title: 'Walk the Mock',
				img: './assets/img/wtm.jpg',
				description: "A web app that allows users to draft incoming NFL prospects for their favorite team. Features include rank sorting and sharing and extended player information to aid educated choices. I developed Walk the Mock using AngularJS and Google's Firebase.",
				demo: 'https://walkthemock.com'
			},
			{
				title: 'Portal Box',
				img: './assets/img/portalbox.jpg',
				description: "An e-commerce website built with Wordpress for the selling of pop culture themed boxes for cats to play in.",
				demo: 'https://theportalbox.com'
			},
			{
				title: 'Flair Drum Major Academy',
				img: './assets/img/flair.jpg',
				description: "A Wordpress site built for the Flair Drum Major Academy, a virutal camp for aspiring and experienced drum majors.",
				demo: 'https://flairdmacademy.com'
			},
			{
				title: 'Pokemon: A Visual Guide',
				img: './assets/img/pokemon.jpg',
				description: 'A web app I developed using <a href="http://pokeapi.co/">Pokeapi</a> to display basic information about Pok&#233;mon characters. Infomation includes basic stats, species information, and evolution chain. You can search for Pok&#233;mon by name or just browse.',
				gitHub: 'https://github.com/tbone849/pokemon-guide',
				demo: 'https://pokemon-visualguide.com'
			},
			{
				title: 'Star Wars: A Visual Guide',
				img: './assets/img/starwars.jpg',
				description: 'An Angular app developed using the <a href="http://swapi.co/" target="_blank">Star Wars API</a> to display basic information about Star Wars characters, films, starships, vehicles, species, planets, and their relations. If you are like me and you remember faces better than names, then this visual guide is right up your alley.',
				gitHub: 'https://github.com/tbone849/star-wars-guide',
				demo: 'https://starwars-visualguide.com'
			},
			{
				title: 'Farmer Courses',
				img: './assets/img/farmercourses.jpg',
				description: 'A website for a company that provides Farm Service Agency approved courses that focus on improving profit and production while addressing finances and risk management. Users span from all over the United States, to some other countries as well. Developed in my pre-Angular days using JavaScript, jQuery, and jQueryUI.',
				demo: 'http://farmercourses.com/'
			}
		];
	}]);