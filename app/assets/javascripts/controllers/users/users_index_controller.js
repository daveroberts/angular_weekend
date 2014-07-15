appControllers.controller('UsersIndexController', ['$scope','User',
  function ($scope, User) {
    $scope.users = User.query();
  }
]);
