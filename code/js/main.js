"use strict";

var app = angular.module('mind_map_mean', []);

// controllers
app.controller("application_controller", function($scope) {
	$scope.ADMIN_MODE = "ADMIN MODE";
	$scope.VIEW_MODE = "VIEW MODE";
	$scope.VENN_DIAGRAM_MODE = "VENN DIAGRAM MODE";
	$scope.toggleMode = setMode; 
	$scope.nodes = [
		{name:"root node",url:null, nodes:[]}
	];
	function setMode() {
		$scope.mode = isInAdminMode() ? $scope.VIEW_MODE : isInViewMode() ? $scope.VENN_DIAGRAM_MODE : $scope.ADMIN_MODE;
	}
	function isInAdminMode(){
		return($scope.mode===$scope.ADMIN_MODE)
	}
	function isInViewMode(){
		return($scope.mode===$scope.VIEW_MODE)
	}
	// initialise
	setMode();
});

app.controller("mode_controller", function($scope) {
	
});

app.controller("admin_mode_controller", function($scope) {

});

app.controller("view_mode_controller", function($scope) {

});

app.controller("venn_diagram_mode_controller", function($scope) {
	
});

// directives

app.directive("mmmNode", function() {
	console.log("mmmNode called");
	return {
		templateUrl:"templates/node.html"
	}
});
