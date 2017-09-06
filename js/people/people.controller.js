//import { Class } from '@angular/core';

angular.module( 'staff-manager' )
       .controller( 'PeopleController', [ 'dataSourceService', function(dataSourceService) {

    this.newPerson = new Person();

    this.people = dataSourceService.getListOfPeople();
    
    this.orderKey = 'lastName';
    this.reverseOrder = false;

    this.editingPerson = false;
    this.personToEdit = null;
    this.editedPerson = new Person();

    this.personToDelete = null;
    this.deletingPerson = false;

    this.modalVisible = false;

    this.peopleFilter = '';

    this.updateFilter = function( peopleFilter ) {
        this.peopleFilter = peopleFilter;
    }

    this.addPerson = function() {
    	console.log('add');
        this.people.push( this.newPerson );

        //this.newPerson = new Person();
    };
    
    this.setOrderParams = function( orderKey ) {
        if ( this.orderKey === orderKey ) {
            this.reverseOrder = !this.reverseOrder;
        } else {
            this.reverseOrder = false;
        }
        this.orderKey = orderKey;
    };

    this.editPerson = function( person ) {
        this.modalVisible = true;
        this.editingPerson = true;
        this.personToEdit = person;
        this.editedPerson = angular.copy( person );
    };

    this.saveEditPerson = function() {
        angular.merge( this.personToEdit, this.editedPerson );
        this.closeEditPerson();
    };

    this.closeEditPerson = function() {
        this.modalVisible = false;
        this.editingPerson = false;
        this.personToEdit = null;
        this.editedPerson = null;
    };

    this.deletePerson = function( person ) {
        this.modalVisible = true;
        this.deletingPerson = true;
        this.personToDelete = person;
    };

    this.confirmDeletePerson = function() {
        this.personToDelete.isDeleted = true;
        this.people = dataSourceService.getListOfPeople();
        this.closeDeletePerson();
    };

    this.closeDeletePerson = function() {
        this.modalVisible = false;
        this.deletingPerson = false;
        this.personToDelete = null;
    };
}]);

