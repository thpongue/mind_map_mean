"use strict";

var app = angular.module('mind_map_mean', []);

// controllers
app.controller("application_controller", function($scope) {
	$scope.ADMIN_MODE = "ADMIN MODE";
	$scope.VIEW_MODE = "VIEW MODE";
	$scope.VENN_DIAGRAM_MODE = "VENN DIAGRAM MODE";
	$scope.toggleMode = setMode; 
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
	//<div ng-repeat="(key, value) in myObj"> ... </div>	
});
app.controller("view_mode_controller", function($scope) {
			
});
app.controller("venn_diagram_mode_controller", function($scope) {
	
});

// directive
app.directive("mmmNode", function() {
	return {
		templateUrl:"templates/node.html"
	}
});
