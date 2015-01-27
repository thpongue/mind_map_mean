var app = angular.module('mind_map_mean', []);
app.controller("application_controller", function($scope) {
	$scope.ADMIN_MODE = "ADMIN MODE";
	$scope.VIEW_MODE = "VIEW MODE";
	$scope.VENN_DIAGRAM_MODE = "VENN DIAGRAM MODE";
	$scope.mode=$scope.ADMIN_MODE;
	$scope.toggleMode = function() {
		if ($scope.mode === $scope.ADMIN_MODE) {
			$scope.mode = $scope.VIEW_MODE;
		}
		else if ($scope.mode === $scope.VIEW_MODE) { 
			$scope.mode = $scope.VENN_DIAGRAM_MODE;
		}
		else {
			$scope.mode = $scope.ADMIN_MODE;
		}
	}
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
