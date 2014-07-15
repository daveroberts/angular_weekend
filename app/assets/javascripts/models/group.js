myApp.service('Group', function($resource, Permission) {
  var Group = $resource('groups/:groupId.json');
  return Group;
});
