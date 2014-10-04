angular.module('myApp', [])
	.controller('DisplayController', function($scope) {
		// $scope.content = 'hi';
		$scope.$on('displayData', function(event, data) {
			$scope.content = data;
		});
	})
	.controller('MultiplicationController', 
	function($scope, $attrs, $rootScope) {
		function populateNumbers(x) {
			var numbers = [];
			for(var i = 0; i < x; i++) {
				numbers[i] = i + 1;
			}

			return numbers;
		}

		$scope.compute = function (a,b) {
			return a * b;
		};

		$scope.$watch('numberLimit', function(limit) {
			$scope.numbers = populateNumbers(limit);
		});

		$scope.numberLimit = $attrs.initialNumberLimit || 10;
		
		$scope.activeFactors = [];
		
		$scope.setActiveFactors = function(a,b) {
			$scope.activeFactors[0] = a;
			$scope.activeFactors[1] = b;
		};

		$scope.matchesFactor = function(a,b) {
			return a === $scope.activeFactors[0] || b === $scope.activeFactors[1];
			// return a === $scope.activeFactors[0] || b === ;
		};

		$scope.setActiveNumber = function(number) {
			$rootScope.$broadcast('displayData', number);
		};



	});
