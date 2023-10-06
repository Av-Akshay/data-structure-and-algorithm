// video 30 :- maximum occurring cgaracter in string=========================================================

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

// let str = "petter";
// let obj = {};
// maxkey = "";

// for (let i = 0; i < str.length; i++) {
//   let key = str[i];
//   if (!obj[key]) {
//     obj[key] = 0;
//   }
//   obj[key]++;
//   if (maxkey == "" || obj[key] >= obj[maxkey]) {
//     maxkey = key;
//   }
// }
// console.log(obj);
// console.log(maxkey);

// video 31:- Object (hash table) =======================================================================

// let obj = {
//   name: "akshay chauhan",
//   age: 23,
//   email: "user@gmail.com",
// };
// for (item in obj) {
//   console.log(item); // key
//   console.log(obj[item]); // values
// }

// [console.log(Object.keys(obj))]; // array of keys
// [console.log(Object.values(obj))]; // array of values

// video :- 32 Map data structure in javascript============================================================
// In this type of data structure duplicate data can't exist.

// let map1 = new Map([[true, "vishal"]]);
// or
// console.log(map1);=3

const map = new Map();
map.set("name", "akshay");
map.set("age", 23);
map.set({ name: "saksham" }, "chauhan");
// console.log(map.get("name"));
// console.log(map.has("name"));
map.clear();
// console.log(map);

// this data tyep is simillar to object

// video:- 33 Set data struture in javascript===============================================================================

// In this type of data structure duplicate data can't exist.
// It simler to the array data type.

const setArr = new Set(["akshay", "chauhan", "akshay"]);

// console.log(setArr);
// console.log(setArr.has("kshay"));

// video :- 34 Linked List In javaScript====================================================================================

class List {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }
  appendNode(nodeData) {
    let newNode = {
      value: nodeData,
      next: null,
    };
    this.size++;
    this.tail.next = newNode;
    this.tail = newNode;
  }
}
let list = new List(200);
list.appendNode(300);
list.appendNode(400);
// console.log(list);

// video:- 35 traversing Linked list============================================================================================

class List1 {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }
  appendNode(nodeData) {
    let newNode = {
      value: nodeData,
      next: null,
    };
    this.size++;
    this.tail.next = newNode;
    this.tail = newNode;
  }
  traversing() {
    let counter = 0;
    let currentNode = this.head;
    while (counter < this.size) {
      console.log(currentNode);
      currentNode = currentNode.next;
      counter++;
    }
  }
}
let list1 = new List1(200);
list1.appendNode(300);
list1.appendNode(400);
list1.traversing();
// console.log(list1);
