
angular.module( 'staff-manager' )
       .service( 'dataSourceService', function($filter) {
    
    this.people = [ 
        {
            firstName: 'aaa',
            lastName: 'bbb',
            sex: 'M',
            isDeleted: false
        },
        new Person( 'Jan', 'Kowalski', 'M' ),
        new Person( 'Michał', 'Rydz', 'M' ),
        new Person( 'Joanna', 'Dyczka', 'F' )
    ];

    this.getListOfPeople = function() {
        return $filter('filter')(this.people, {'isDeleted':false}, true);
    };
});