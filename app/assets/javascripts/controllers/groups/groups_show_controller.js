appControllers.controller('GroupsShowController', ['$scope', '$routeParams', 'Group','Permission',
  function ($scope, $routeParams, Group, Permission) {
    $scope.group = Group.get({groupId: $routeParams.groupId});
    Permission.query().$promise.then(function(all){
      $scope.group.$promise.then(function(g){
        $scope.unselected_permissions = _.difference(all, g.permissions);
      });
    });
    // $scope.unselected_permissions = _.difference(Permission.query(), $scope.group.permissions);
    $scope.sortableOptionsList = [{connectWith: ".apps-container"},{connectWith: ".apps-container"}];
  }
]);

