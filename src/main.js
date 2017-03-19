var app = angular.module('myApp', ['ngRoute']);

app.constant("baseURL", "http://localhost:3000/");

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "src/templates/home.html"
  })
  .otherwise({
    redirectTo: "/"
  });
});

app.controller('myCtrl', function($scope) {
  $scope.length = words.length;
	$scope.amount = 1;

	$('.amount').change(function() {
		amount = $(this).val();
		$('.checkbox-inline').hide();
		$('.word').html('');
		$('.keep').prop('checked', false);
	});

	$('.random').click(function() {
		random(length, amount);
	});

	function random(x, y) {
		for (i = 1; i<= y; i++) {
			if (!$('.word' + i + '-check').is(':checked')) {
				$scope.index = Math.floor((Math.random() * x) + 1);
				$scope.word = words[index];
				$('.word' + i).html(word);
				$('.checkDiv' + i).css('display', 'inline');
			}
		}
	};
});

	
