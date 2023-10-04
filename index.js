// video 30 :- maximum occurring cgaracter in string

// let str = "priyansh chauhan";
// let obj = {};
// maxkey = "";

// for (let i = 0; i < str.length; i++) {               it's my method
//   obj[str[i]] = (obj[str[i]] || 0) + 1;
//   let key = str[i];
//   if (maxkey == "" || obj[key] >= obj[maxkey]) {
//     maxkey = key;
//     console.log(obj[maxkey]);
//   }
// }
// console.log(obj);
// console.log(maxkey);

let str = "vishaldogriyl";
let obj = {};
maxkey = "";

for (let i = 0; i < str.length; i++) {
  let key = str[i];
  if (!obj[key]) {
    obj[key] = 0;
  }
  obj[key]++;
  if (maxkey == "" || obj[key] >= obj[maxkey]) {
    maxkey = key;
  }
}
console.log(obj);
console.log(maxkey);
