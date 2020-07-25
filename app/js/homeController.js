angular.module('myApp')
	.controller('homeController', ['$scope', function($scope){

		$scope.colleges = ['iup', 'iupui', 'umass'];

		$scope.tools = ['html', 'css', 'javascript', 'jquery', 'angular', 'sass', 'bootstrap', 'gulp', 'git', 'github'];

		$scope.projects = [
			{
				title: 'Walk the Mock',
				img: './assets/img/walkthemock.png',
				description: "A web app that allows users to draft incoming NFL prospects for their favorite team. Features include rank sorting and sharing and extended player information to aid educated choices. I developed Walk the Mock using AngularJS and Google's Firebase.",
				demo: 'https://walkthemock.com'
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
			},
			{
				title: 'Magic 8 Ball',
				img: './assets/img/eight.jpg',
				description: "Fun app I built to get my feet wet with Angular 2. Ask a question to the mystic eight ball and watch your answer be revealed.",
				demo: 'https://tbone849.github.io/magic8/',
				gitHub: 'https://github.com/tbone849/magic8'
			},
			{
				title: 'Waitstaff Calculator',
				img: './assets/img/calculator.jpg',
				description: "An Angular app I created during my education at Thinkful. This app will calculate tip earnings from a meal's base price, tax rate, and tip percentage. It will also update the customer charges a running total of your earnings that include tip total, how many meals you served, and the average tip per meal.",
				gitHub: 'https://github.com/tbone849/waitstaff-calc',
				demo: 'http://tbone849.github.io/waitstaff-calc/#/'
			},
			{
				title: 'Movie Villain Quiz',
				img: './assets/img/ghostbusters.jpg',
				description: 'A quiz app utilizing jQuery. Test your knowledge of classic movie villains by associating the villain picture to the correct movie title.',
				gitHub: 'https://github.com/tbone849/villian-movie-quiz',
				demo: 'http://tbone849.github.io/villian-movie-quiz/'
			}
		];
	}]);