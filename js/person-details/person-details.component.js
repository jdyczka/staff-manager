
angular.module( 'staff-manager' )
       .component( 'personDetails', {

       	bindings: { person: '<' },

        templateUrl: 'js/person-details/person-details.html',
        controller: 'PersonDetailsController',
        controllerAs: 'vm' // default: $ctrl

});
