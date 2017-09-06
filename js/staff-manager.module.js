

// function Car(brand) {
//     console.log(this);
//     this.brand = brand;
//     this.toString = function () {
//         return 'brand of car: ' + this.brand;
//     }
//     this.toString2 = function () {
//         window.setTimeout(function() {
//             console.log('brand of car: ' + this.brand)
//         }, 1000);
//     }
// };

// var c = new Car('Fiat');
// console.log(c.toString());

// var c2 = angular.copy(c);
// c.brand = 'Opel';
// console.log(c.toString(), c2.toString());



angular.module( 'staff-manager', ['ui.router'] );

angular.module( 'staff-manager' ).config( function($stateProvider) {

    var homeState = {
        name: 'home',
        url: '/home',
        template: '<h3>Hello world</h3>'
    }

    var peopleState = {
        name: 'people',
        url: '/people',
        component: 'people'
        // template: '<h3>Hello people</h3>'
        // templateUrl: 'people.html',
        // controller: 'MainController as mc'
    }

    var aboutUsState = {
        name: 'aboutUs',
        url: '/about-us',
        component: 'aboutUs'
    }

    $stateProvider.state( homeState );
    $stateProvider.state( peopleState );  
    $stateProvider.state( aboutUsState );    
});

