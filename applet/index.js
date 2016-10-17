angular.module('applet', [ 'ng' ])

  .run(function($rootScope, $http) {

    $http.get('https://api.github.com/users/janunld').then(function(res) {
      $rootScope.$my = res.data;

      /* TODO: Choose if this is pretty or not?
      angular.element('.ju.profile-avatar').tooltip({
        container: '.ju.profile',
        title: $rootScope.$my.bio
      });*/
    }).catch(function(res) {
      $rootScope.$$error = res;
    });

  });