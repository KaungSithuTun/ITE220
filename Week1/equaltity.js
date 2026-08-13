"5" == 5; // true (coerced!)
"5" === 5; // false (safe)
0 == false; // true
0 === false; // false
null == undefined; // true
null === undefined; // false
5 !== "5"; // true because their types are different
typeof "hi"; // "string"
typeof 42; // "number"
typeof null; // "object" <- quirk!
typeof undefined; // "undefined"
