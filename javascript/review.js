/**
 * buat array dengan panjang 5, isi bebas, number | boolean | string
 * ['asep','dani']
 */

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["dani", "asep", "dede", "jaja", "doni"];

/**
 * buat array dengan panjang 500, isi bebas, number | boolean | string
 * [1,2,3]
 */

let arr = createArray(500);

function createArray(length = 0) {
  let newArr = [];
  for (let index = 0; index < length; index++) {
    newArr.push(index);
  }
  return newArr;
}

// console.log(arr);

/**
 * buat object dari array tersebut
 * key adalah `nama`
 * contoh array ['asep','dani']
 * hasil object [{nama: 'asep'},{nama:'dani'}]
 */

function createObjArr(arrInput) {
  let arr = [];
  arrInput.forEach((element) => {
    arr.push({ nama: element });
  });
  return arr;
}

let arrObj = createObjArr(arr2);
console.log(arrObj);
