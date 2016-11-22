/* global angular */
(function () {
  'use strict';
  
    var app = angular.module('app');
    app.$inject = ['ngResource'];
    app.factory('MoviesService',MoviesService );
    
    function MoviesService($resource) {
      var movies = $resource('/movies.json?q[title_cont]=:q',{q:'@q'});
      return movies;
    }


    
})();
