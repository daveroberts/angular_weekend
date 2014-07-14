myApp.service('User', function($resource, Permission) {
  var User = $resource('users');

  User.prototype.permissions = function(callback) {
    debugger;
    return Permission.query({userId: this.id}, callback);
  }
  return User;
});
