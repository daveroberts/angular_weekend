myApp.service('Permission', function($resource) {
  var Permission = $resource('permissions');
  return Permission;
});
