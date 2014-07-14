myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/users', {
        templateUrl: 'assets/users/index.html',
        controller: 'UsersIndexController'
      }).
      when('/users/:userId', {
        templateUrl: 'assets/users/show.html',
        controller: 'UsersShowController'
      }).
      otherwise({
        redirectTo: '/users'
      });
  }]);
