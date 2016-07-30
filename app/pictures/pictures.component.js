'use strict';

angular.
    module('pictures', []).
    component('pictures', {
    template: '<pictures></pictures>',
    controller: 'PictureController'
})

.controller('PictureController', function ($http) {
        var self = this;

        $http.get('http://work.com/picture-list').then(function(response) {

            self.pictures= response.data;
        });
});


