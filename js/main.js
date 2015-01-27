var app = angular.module('mind_map_mean', []);
app.controller("application_controller", function($scope) {
	$scope.ADMIN_MODE = "ADMIN MODE";
	$scope.VIEW_MODE = "VIEW MODE";
	$scope.mode=$scope.ADMIN_MODE;
	$scope.toggleMode = function() {
		$scope.mode = ($scope.mode===$scope.ADMIN_MODE) ? $scope.VIEW_MODE : $scope.ADMIN_MODE;
	}
});
app.controller("mode_controller", function($scope) {
		
});
app.controller("admin_mode_controller", function($scope) {
		
});
app.controller("view_mode_controller", function($scope) {
			
});
