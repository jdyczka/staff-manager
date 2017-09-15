
angular.module( 'staff-manager' )
       .controller( 'PersonDetailsController', function( dataSourceService ) {

	this.$onInit = () => {
		console.log( this.person );
	}       	
    
});

