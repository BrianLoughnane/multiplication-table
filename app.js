var myMod = angular.module('myApp', ['ngAnimate']);
myMod.controller('DisplayController', function($scope) {
		// $scope.content = 'hi';
		$scope.$on('displayData', function(event, data) {
			$scope.content = data;
		});
	});
myMod.controller('MultiplicationController', 
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
// myMod.animation('.cell', function() {
// 	return {
// 		enter: function(el, done) {
// 			$('.cell').css({'background': 'red'});
// 			$('.cell').animate({'background': 'green'}, done);
// 			return function (cancelled) {
// 				if(cancelled) {
// 					$('.cell').stop();
// 				}
// 			};
// 		},
// 		leave: function(el, done) { done(); },
// 		move: function(el, done) { done(); },
// 		beforeAddClass: function(el, className, done) { done(); },
// 		addClass: function(el, className, done) { done(); },
// 		beforeRemoveClass: function(el, className, done) { done(); },
// 		removeClass: function(el, className, done) { done(); },
// 		allowCancel: function(el, event, className) {}
// 	};
// });

// myMod.animation('.cell', function() {
// 	return {
// 		enter: function(element, done) {
// 			jQuery(element).css({opacity: 0});
// 			jQuery(element).animate({opacity:1}, 2000, done);
// 		},
// 		leave: function(element, done) {
// 			jQuery(element).css({opacity: 1});
// 			jQuery(element).animate({opacity: 0}, 2000, done);
// 		}
// 	};
// });
// myMod.animation('.row', function() {
// 	return {
// 		enter: function(element, done) {
// 			jQuery(element).css({opacity: 0});
// 			jQuery(element).animate({opacity: 1}, 2000, done);
// 		},
// 		leave: function(element, done) {
// 			jQuery(element).css({opacity: 1});
// 			jQuery(element).animate({opacity: 0}, 2000, done);
// 		}
// 	};
// });

// myMod.animation('.cell', function() {
// 	return {
// 		// enter: function(element, done) {
// 		// 	jQuery(element).css({background: 'red'});
// 		// 	jQuery(element).animate({background: 'green'}, done);
// 		// }
// 		// ,
// 		// leave: function(element, done) {
// 		// 	jQuery(element).css({background: 'green'});
// 		// 	jQuery(element).animate({background: 'red'}, 2000, done);
// 		// }
// 	};
// });
myMod.animation('.row', function() {
	return {
		enter: function(element, done) {
			jQuery(element).css({background: 'red'});
			jQuery(element).animate({background: 'green'}, 2000, done);
		},
		leave: function(element, done) {
			jQuery(element).css({background: 'green'});
			jQuery(element).animate({background: 'red'}, 2000, done);
		}
	};
});