appControllers.controller('UsersIndexController', ['$scope', '$http','User',
  function ($scope, $http, User) {
    User.query({}, function(users){
      $scope.users = users;
      debugger;
    });
  }]);
