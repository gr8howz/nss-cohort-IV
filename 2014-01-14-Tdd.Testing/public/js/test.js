//test("name of test", function() {
  
//


test("add", function(){
    deepEqual(add(2, 3), 5, "adding 2 and 3");
      deepEqual(add(2, -5), -3, "adding 2 and -5");
        deepEqual(add(0, 0), 0, "adding 0 and 0");
});

test("sum", function(){
    deepEqual(sum([11, 3, 8]), 22, "summing 11, 3 & 8");
});

test("countEvens", function(){
    deepEqual(countEvens([3, 8, 6, 4, 7]), 3, "should be 3 even values");
});

test("makeEvenStringsUppercase", function(){
    var actual = ['hello', 'cohort', 'iv', 'welcome', 'to', 'tdd'];
      var expected = ['hello', 'COHORT', 'IV', 'welcome', 'TO', 'tdd'];
        deepEqual(makeEvenStringsUppercase(actual), expected, "should be 3 uppercased strings");
});

test("sumLengthOfStrings", function(){
    var string = "this is a very long string";
      deepEqual(sumLengthOfStrings(string), 21, "string should be 21 characters (spaces ignored)");
});

test("makeCatWithName", function(){
    deepEqual(makeCatWithName("fluffy").name, "fluffy", "cat's name should be fluffy");
});

