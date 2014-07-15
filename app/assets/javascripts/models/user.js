myApp.service('User', function($resource, Permission) {
  var User = $resource('users/:userId.json');

  User.prototype.permissions = function(callback) {
    return Permission.query({userId: this.id}, callback);
  }
  return User;
});
