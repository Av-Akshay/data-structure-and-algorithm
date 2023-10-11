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
      // console.log(currentNode);
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
class List2 {
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
      if (currentNode.value == 300) {
        currentNode.value = "akshay";
      }
      // console.log(currentNode.value);
      currentNode = currentNode.next;
      counter++;
    }
  }
}
let list2 = new List2(200);
list2.appendNode(300);
list2.appendNode(400);
list2.traversing();
// console.log(list2);

// video:- 36 Delete node link list============================================================================================

class List3 {
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
      if (currentNode.value == 300) {
        currentNode.value = "akshay";
      }
      // console.log(currentNode.value);
      currentNode = currentNode.next;
      counter++;
    }
  }
  delet(index) {
    let counter = 0;
    let lead = this.head;
    // console.log(lead);
    while (counter < index - 1) {
      lead = lead.next;
      counter++;
    }
    let nextNode = lead.next.next;
    lead.next = nextNode;
  }
}
let list3 = new List3(200);
list3.appendNode(300);
list3.appendNode(400);
list3.appendNode(500);
list3.appendNode(600);
list3.appendNode(700);
list3.appendNode(800);
list3.delet(3);
// console.log(list3);

// next video:- insert node in linked list=====================================================================================================
class List4 {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };

    this.tail = this.head;
    this.size = 0;
  }
  appendNode(val) {
    let newNode = {
      value: val,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }
  insert(index, value) {
    let counter = 1;
    let currentNode = this.head;
    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    let nextNode = currentNode.next;
    currentNode.next = {
      value,
      next: nextNode,
    };
  }
}

let list4 = new List4(100);
list4.appendNode(200);
list4.appendNode(300);
list4.appendNode(400);
list4.appendNode(500);
list4.appendNode(600);
// list4.insert(3, 700);
// console.log(list4);

// next video search node in linked list ==================================================================================================

// if we have to many nodes (example 1000 nodes) if we want to know what is the value in 10th node
// and what is the value in 20th node this approach is searching based on element.

// if we want to know which node having value 500 or which node elemet having value 1000
// this approach is searching based on value.

class List5 {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }
  appendNode(val) {
    let newNode = {
      value: val,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }
  searching(itemVal) {
    let currentNode = this.head;
    let valElem = "Dos't exist";
    let loop = true;
    while (loop) {
      if (loop && currentNode.value == itemVal) {
        loop = false;
        valElem = currentNode;
      }
      currentNode = currentNode.next;
      loop = !!currentNode;
      // console.log(!!currentNode);
    }
    console.log(valElem);
  }
}

let list5 = new List5(100);
list5.appendNode(200);
list5.appendNode(300);
list5.appendNode(400);
list5.appendNode(500);
list5.appendNode(600);
list5.searching(600);
console.log(list5);
