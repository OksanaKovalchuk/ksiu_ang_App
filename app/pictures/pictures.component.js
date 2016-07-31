'use strict';

angular.
    module('pictures', []).
    component('pictures', {
    template: '<pictures></pictures>',
    controller: 'PictureController'
})

.controller('PictureController', function ($http) {
        var self = this;
    self.orderProp = 'name';

        $http.get('http://work.com/picture-list').then(function(response) {
            console.log(self.pictures);
            self.pictures= response.data;
        });
});


