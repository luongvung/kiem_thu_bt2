function calculateDiscount(
  isBrokenSwordfish,
  isChildrenUnder10,
  isGroupOver10
) {
  let discountPercentage1 = 0;
  let discountPercentage2 = 0;

  if (isBrokenSwordfish) {
    discountPercentage1 = 40;
  }
  if (isChildrenUnder10) {
    if (isGroupOver10) {
      discountPercentage2 = 50;
    } else {
      discountPercentage2 = 10;
    }
  }

  return discountPercentage2 > discountPercentage1
    ? discountPercentage2
    : discountPercentage1;
}

console.log(calculateDiscount(true, true, true));
console.log(calculateDiscount(true, true, false));
console.log(calculateDiscount(true, false, true));
console.log(calculateDiscount(true, false, false));
console.log(calculateDiscount(false, true, true));
console.log(calculateDiscount(false, true, false));
console.log(calculateDiscount(false, false, true));
console.log(calculateDiscount(false, false, false));
