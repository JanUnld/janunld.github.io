angular.module('applet', [ 'ng' ])

  .run(function($rootScope, $http) {

    // Holds several indicators for loading states of different components
    $rootScope.loading = {};

    $rootScope.loading.userData = true;
    $http.get('https://api.github.com/users/janunld').then(function(res) {
      $rootScope.loading.userData = false;

      $rootScope.$my = res.data;
    }).catch(function(res) {
      $rootScope.loading.userData = false;
      $rootScope.$$error = res;
    });

  });