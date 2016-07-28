///first option:
//this works as well:

// module.exports = {
//
//     ///first create an empty function so you "test" the test
//     testFunc: function () {
//         //now we return "YUP!" to test that the in this case"testFunc" return what the test is expecting, in this case "YUP!"
//         return "YUP!";
//
//     }
// }


//refactor:

var functions = {
    testFunc: function () {
        return "YUP!";
    },
    //add second function here:
    testNopeFunc: function () {
        return "NOPE!";
    }
}
module.exports = functions


// after you refactor, run the test again to make sure that the new code doesn't break
//the test is case sensitive//
//make sure that the function names matches in the js file with the specs file
//everytime that you add new "it" or expectations you have to run the test and "make" the test "fail"
