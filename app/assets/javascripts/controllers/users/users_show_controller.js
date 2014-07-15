appControllers.controller('UsersShowController', ['$scope', '$routeParams', 'User',
  function ($scope, $routeParams, User) {
    $scope.user = User.get({userId: $routeParams.userId});
  }
]);

