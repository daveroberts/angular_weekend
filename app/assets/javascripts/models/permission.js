myApp.service('Permission', function($resource) {
  var Permission = $resource('permisisons');
  return Permission;
});
