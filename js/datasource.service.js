
angular.module( 'staff-manager' )
       .service( 'dataSourceService', function($filter) {
    
    this.people = [
        new Person( 'Jan', 'Kowalski', 'General Manager', 'M' ),
        new Person( 'Michał', 'Nowak', 'Chef', 'M' ),
        new Person( 'Joanna', 'Mielczarek', 'Housekeeper', 'F' ),
        new Person( 'Magdalena', 'Lubomirska', 'Front Desk Clerk', 'F' )
    ];

    this.getListOfPeople = function() {
        return $filter('filter')(this.people, {'isDeleted':false}, true);
    };

    this.getPerson = function( personId ) {
    	return this.people.find( function(person) {
    		console.log( typeof person.id, typeof personId );
    		return person.id === personId;
    	});
    };
});