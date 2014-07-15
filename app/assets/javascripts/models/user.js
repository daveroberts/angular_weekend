/*myApp.service('User', function($resource, Permission) {
  var User = $resource('users');

  User.prototype.permissions = function(callback) {
    debugger;
    return Permission.query({userId: this.id}, callback);
  }
  return User;
});*/

myApp.factory('User', ['ActiveResource', function(ActiveResource) {

  function User(data) {
    this.number('id');
    this.string('username');

    this.computedProperty('fullName', function() {
      return this.username + this.id;
    }, ['id', 'username']);

    this.hasMany('permissions');
  };

  User.inherits(ActiveResource.Base);
  //Post.api.set('http://api.faculty.com');
  //Post.dependentDestroy('comments');

  return User;
}]);
