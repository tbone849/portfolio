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
				demo: 'https://starwars-visualguide.com'
			},
			{
				title: 'Farmer Courses',
				img: './assets/img/farmercourses.jpg',
				description: 'A website for a company that provides Farm Service Agency approved courses that focus on improving profit and production while addressing finances and risk management. Users span from all over the United States, to some other countries as well. Developed in my pre-Angular days using JavaScript, jQuery, and jQueryUI.',
				demo: 'http://farmercourses.com/'
			},
			{
				title: 'Brookville Bands',
				img: './assets/img/brkv.jpg',
				description: 'A website I built for the Brookville Area Jr/Sr High School band program out of Brookville, PA. There are pages that showcase each band, a calendar of events, photos, etc. I built this web app using AngularJS and Lumx.',
				gitHub: 'https://github.com/tbone849/brookville-bands',
				demo: 'http://brookvillebands.com'
			},
			{
				title: 'Weekly NFL Fantasy Leaders',
				img: './assets/img/nfl.jpg',
				description: 'Utilizes the NFL.com Fantasy Football Web Services API to deliver weekly fantasy football leaders. The leaders can be viewed by team, week, or both. This is an original project I developed utilizing jQuery.',
				gitHub: 'https://github.com/tbone849/nfl-fantasy-stats',
				demo: 'http://tbone849.github.io/nfl-fantasy-stats/'
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