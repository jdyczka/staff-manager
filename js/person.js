
var nextId = 1;

function Person( firstName, lastName, position, sex='M' ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.sex = sex;
    this.isDeleted = false;
    this.id = nextId++;
    this.born = getRandomDate( new Date(1960, 0, 0), new Date(1999, 11, 30) );
    var ofAge = new Date(this.born);
    ofAge.setFullYear(ofAge.getFullYear() + 18);
    this.hired = getRandomDate( ofAge , new Date() );
    this.salary = Math.round(2000 + Math.random() * (5000 - 2000));

	    function getRandomDate(from, to) {
	    from = from.getTime();
	    to = to.getTime();
	    return new Date(from + Math.random() * (to - from));
	}
};