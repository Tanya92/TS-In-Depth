/// <reference path="utility-functions.ts" />

import util = Utility.Fees;

const result = util.calculateLateFee(10);
console.log(result);

const max1 = Utility.maxBooksAllowed(5);
console.log(max1);

const max2 = Utility.maxBooksAllowed(20);
console.log(max2);
