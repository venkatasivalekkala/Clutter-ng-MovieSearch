/* global angular */
(function () {
  'use strict';
  
    var app = angular.module('app');
    app.$inject = ['ngResource'];
    app.factory('CastMembersService',CastMembersService );
    
    function CastMembersService($resource) {
        return $resource('/movies/:id/cast_members.json',{id:'@id'});
    }
    
    
})();