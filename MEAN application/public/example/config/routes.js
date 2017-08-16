angular.module('example').config(['$routeProvider', function($routeProvider) {

    $routeProvider.
    when('/', {
        templateUrl: '/example/views/view.html'
    }).
    otherwise({
        redirectTo: '/'
    });
}]);