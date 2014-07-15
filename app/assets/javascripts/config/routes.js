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
      when('/groups/:groupId', {
        templateUrl: 'assets/groups/show.html',
        controller: 'GroupsShowController'
      }).
      otherwise({
        redirectTo: '/users'
      });
  }]);
