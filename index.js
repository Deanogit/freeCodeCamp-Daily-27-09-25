// // Spam Detector
// // Given a phone number in the format "+A (BBB) CCC-DDDD", where each letter represents a digit as follows:

// // A represents the country code and can be any number of digits.
// // BBB represents the area code and will always be three digits.
// // CCC and DDDD represent the local number and will always be three and four digits long, respectively.
// // Determine if it's a spam number based on the following criteria:

// // The country code is greater than 2 digits long or doesn't begin with a zero (0).
// // The area code is greater than 900 or less than 200.
// // The sum of first three digits of the local number appears within last four digits of the local number.
// // The number has the same digit four or more times in a row (ignoring the formatting characters).

//function isSpam(number) {
//console.log(number)
// split into arr
// const arr = number.split(" ");
// console.log(arr)
//console.log(arr[1])

// normalise the arr
// console.log(arr[0], arr[1], arr[2], arr[3])

// area code
// get number
//const areaNum = arr[1].slice(1,-1)
//console.log(areaNum)

// country code
// if (arr[0].length > 2 || arr[0][0] !== 0) {
//  return false
// }

// if (areaNum > 900 || areaNum < 200) {
//  return false
// }

// return number;
//}

// function isSpam(number) {
//   // console.log(number)
//   // regex = /([0-9]+)/
//   // console.log(regex.test(number))
//   // console.log(number.split(regex))
//   //// sanitise number
//   console.log(number.replace(/[^0-9]/g, ' '));
//   const sanitised = number.replace(/[^0-9]/g, ' ');
//   console.log(sanitised);
//   // split
//   const splitArr = sanitised.split(/[\s]+/g);
//   console.log(splitArr);
//   // clean arr
//   // remove empty
//   const cleanArr = splitArr.filter(Boolean);
//   console.log(cleanArr);
// }

//function isSpam(number) {
//console.log(number)
// split into arr
// const arr = number.split(" ");
// console.log(arr)
//console.log(arr[1])

// normalise the arr
// console.log(arr[0], arr[1], arr[2], arr[3])

// area code
// get number
//const areaNum = arr[1].slice(1,-1)
//console.log(areaNum)

// country code
// if (arr[0].length > 2 || arr[0][0] !== 0) {
//  return false
// }

// if (areaNum > 900 || areaNum < 200) {
//  return false
// }

// return number;
//}

function isSpam(number) {
  // console.log(number)
  // regex = /([0-9]+)/
  // console.log(regex.test(number))
  // console.log(number.split(regex))
  //// sanitise number
  console.log(number.replace(/[^0-9]/g, ' '));
  const sanitised = number.replace(/[^0-9]/g, ' ');
  console.log(sanitised);
  // split
  const splitArr = sanitised.split(/[\s]+/g);
  console.log(splitArr);
  // clean arr
  // remove empty
  const cleanArr = splitArr.filter(Boolean);
  console.log(cleanArr);

  // Country code
  if (cleanArr[0].length > 2 || cleanArr[0][0] !== 0) {
    return false;
  }

  // Area code
  if (cleanArr[1] > 900 || cleanArr[1] < 200) {
    return false;
  }
}
