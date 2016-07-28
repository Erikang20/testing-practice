var myFunctions = require( '../lib/miles' );
//the word "it" would be for each individual test

describe( 'Checks if this stuff works', function () {
    it( 'returns "YUP"', function () {
        expect( myFunctions.testFunc() ).toEqual( "YUP!" );
    } );
} );
