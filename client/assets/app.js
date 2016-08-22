var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(function ($routeProvider) {
$routeProvider
	.when('/logout', {
		redirectTo: '/'
	})
	.when('/new_poll', {
		templateUrl: "partials/new.html",
		controller: "newController"
	})
	.when('/dashboard', {
		templateUrl: "partials/dashboard.html",
		controller: "dashboardController"
	})
	.when('/poll/:id', {
		templateUrl: "partials/poll.html",
		controller: "pollController"
	})
	.when('/', {
		templateUrl: "partials/login.html",
		controller: "loginController"
	})
	.otherwise({
		redirectTo: '/'
	})
});