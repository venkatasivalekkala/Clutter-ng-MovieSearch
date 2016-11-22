/* global angular */
(function () {
  'use strict';

    var app = angular.module('app');
    app.$inject = ['MoviesService','CastMembersService'];
    app.controller('MoviesController', MoviesController);
    
    function MoviesController(MoviesService,CastMembersService) {
        var self =this;
        self.searchText= "";
        self.movies=null;
        self.rightContent = right_content;
        self.cast_members=null;
        self.cast_movie = null;
        self.searchMovies = moviesList;
        self.baseUrl = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";

        function moviesList($event){
          if($event.keyCode == 13){
            if(self.searchText ==""){
              self.movies = null;
              self.cast_movie = null;
              return;
            }
              var query = MoviesService.query({ q:self.searchText});
                query.$promise.then(function(data) {
                     self.movies = data;
                });
            }
        }
          
          
         function right_content(movie){
              var castQuery = CastMembersService.query({ id:movie.id});
                  castQuery.$promise.then(function(data) {
                  self.cast_members = data;
                  self.cast_movie = movie;
                  });
              }
    }
          
    
})();
