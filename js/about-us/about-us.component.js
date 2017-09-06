angular.module( 'staff-manager' )
       .component( 'aboutUs', {

        //template: '<h3>About us</h3>',
        //controller: function () { }
        templateUrl: 'js/about-us/about-us.html',
        controller: 'AboutUsController',
        controllerAs: 'vm' // default: $ctrl

});
