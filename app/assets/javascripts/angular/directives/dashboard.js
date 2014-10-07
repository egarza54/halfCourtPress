var app = angular.module('dashboard-directives', []);

app.directive("newTeamForm", function(){
	return {
		restrict: "E",
		templateUrl: "new-team.html"
		// controller: function () {
		// 	// http stuff, setting dashboard's vars

		// },
		// controllerAs: "team"
	};
});