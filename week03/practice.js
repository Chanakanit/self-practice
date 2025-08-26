// โจทย์ 1:
// เขียนฟังก์ชันแบบ Function Expression รับเลข 1 ตัว คืนค่ากำลังสอง
const square = function(num) {
  // เขียนโค้ดที่นี่
  return num ** 2
};
console.log("Test 1:", square(5));  // Output: Test 1: 25


// โจทย์ 2:
// เขียนฟังก์ชันแบบ Function Expression รับชื่อ และคืนค่า "Hello, <name>!"
const greet = function(name) {
  // เขียนโค้ดที่นี่
  return `Hello, ${name}!`
};
console.log("Test 2:", greet("Alice"));  // Output: Test 2: Hello, Alice!


// โจทย์ 3:
// เขียนฟังก์ชัน multiply(x, y=2) คืนค่า x*y
function multiply(x, y = 2) {
  // เขียนโค้ดที่นี่
  return x * y

}
console.log("Test 3a:", multiply(5));    // Output: Test 3a: 10
console.log("Test 3b:", multiply(5, 3)); // Output: Test 3b: 15


// โจทย์ 4:
// เขียนฟังก์ชัน sumAll(...nums) รับตัวเลขไม่จำกัดจำนวน และคืนค่าผลรวม
function sumAll(...nums) {
  // เขียนโค้ดที่นี่
  return nums.reduce((acc, cur) => acc + cur,0)
}
console.log("Test 4:", sumAll(1,2,3,4,5));  // Output: Test 4: 15


// โจทย์ 5:
// เขียนฟังก์ชัน mergeArrays(arr1, arr2) รวม Array สองตัวด้วย spread operator
function mergeArrays(arr1, arr2) {
  // เขียนโค้ดที่นี่
  return [...arr1,...arr2]
}
console.log("Test 5:", mergeArrays([1,2],[3,4]));  
// Output: Test 5: [1, 2, 3, 4]


  // โจทย์ 6:
  // เขียนฟังก์ชัน printUser({name, age}) ใช้ object destructuring พิมพ์ "Name: <name>, Age: <age>"
  function printUser(user) {
    // เขียนโค้ดที่นี่
    let {name, age} = user
    return `Name: ${name}, Age: ${age}`
  }
  console.log("Test 6:", printUser({name:"Bob", age:25}));  
  // Output: Test 6: Name: Bob, Age: 25


// โจทย์ 7:
// เขียนฟังก์ชัน curry(fn) ที่แปลงฟังก์ชันทั่วไปให้กลายเป็นแบบ curry
// เช่น curry((a, b, c) => a + b + c)(1)(2)(3) คืน 6
function curry(fn) {
  // เขียนโค้ดที่นี่
  return function carried(...args){
    if (args.length >= fn.length){
      return fn(...args)
    } else{
      return (next) => carried(...args,next)
    }
  }
}
console.log("Test 7:", curry((a, b, c) => a + b + c)(1)(2)(3));
// Output: Test 7: 6


// โจทย์ 8:
// เขียนฟังก์ชัน createCounter() ที่คืนฟังก์ชันนับเลขทุกครั้งที่ถูกเรียก
// โดยจะเริ่มจาก 1, 2, 3, ... เพิ่มขึ้นทีละ 1 ทุกครั้งที่เรียก
function createCounter() {
  // เขียนโค้ดที่นี่
  let count = 1
  return () => count ++
}
const counter = createCounter();
console.log("Test 8:", counter()); // 1
console.log("Test 8:", counter()); // 2
console.log("Test 8:", counter()); // 3


// โจทย์ 9:
// เขียนฟังก์ชัน once(fn) ที่คืนฟังก์ชันใหม่ที่เรียก fn ได้แค่ครั้งเดียวเท่านั้น
// เช่น once(() => console.log("Run")) เมื่อเรียกหลายครั้งจะพิมพ์แค่ครั้งเดียว
function once(fn) {
  // เขียนโค้ดที่นี่
  let call = false
  return function(param){
    if(!call){
      call = true
      return fn(param)
    }
  }

}
const runOnce = once(() => console.log("Run"));
runOnce();
runOnce();
// Output: Run  (พิมพ์แค่ครั้งเดียว)



// โจทย์ 10:
// เขียนฟังก์ชัน combineInfo(name, age, ...hobbies) คืน object {name, age, hobbies:[...]}
function combineInfo(name, age, ...hobbies) {
  // เขียนโค้ดที่นี่
  return {name, age, hobbies}

}
console.log("Test 10:", combineInfo("Alice",20,"reading","music"));  
// Output: Test 10: {name:"Alice", age:20, hobbies:["reading","music"]}


// โจทย์ 11:
// เขียนฟังก์ชัน calculate({a,b,op="+") } ใช้ destructuring และ default parameter 
// คืนผลบวกถ้า op="+" หรือผลคูณถ้า op="*"
function calculate({a, b, op="+"}) {
  // เขียนโค้ดที่นี่
  return  op === "+" ? a + b :  op === "*" ? a * b : NaN

}
console.log("Test 11a:", calculate({a:5,b:3}));      
// Output: Test 11a: 8
console.log("Test 11b:", calculate({a:5,b:3,op:"*"})); 
// Output: Test 11b: 15


// โจทย์ 12:
// เขียนฟังก์ชัน cloneAndUpdate(obj, changes) คืน object ใหม่ที่ merge properties (ใช้ spread)
function cloneAndUpdate(obj, changes) {
  // เขียนโค้ดที่นี่
  return {...obj, ...changes}
}
console.log("Test 12:", cloneAndUpdate({x:1,y:2},{y:99}));  
// Output: Test 12: {x:1, y:99}


// โจทย์ 13:
// เขียนฟังก์ชัน sumEvenOdd(...nums) คืนค่า {even:ผลรวมเลขคู่, odd:ผลรวมเลขคี่}
function sumEvenOdd(...nums) {
  // เขียนโค้ดที่นี่
  return nums.reduce((acc, num) => {
    if (num % 2 === 0){
      acc.even += num
    }
    if (num % 2 !== 0){
      acc.odd += num
    }
    return acc
  }, { even: 0, odd: 0 })
}
console.log("Test 13:", sumEvenOdd(1,2,3,4,5));  
// Output: Test 13: {even:6, odd:9}


// โจทย์ 14:
// เขียนฟังก์ชัน highestSalary(employees) คืน object ของคนที่มี salary สูงสุด
function highestSalary(employees) {
  // เขียนโค้ดที่นี่
  return employees.reduce((acc, cur) => {
    if (cur.salary > acc.salary) {
      return cur
    } else{
      return acc
    }
  })
}
console.log("Test 14:", highestSalary([
  {name:"A",salary:30000},
  {name:"B",salary:50000},
  {name:"C",salary:40000}
]));  
// Output: Test 14: {name:"B",salary:50000}


// โจทย์ 15:
// เขียนฟังก์ชัน groupByCategory(items) รับ Array ของ {name, category} 
// คืน object จัดกลุ่มตาม category
function groupByCategory(items) {
  // เขียนโค้ดที่นี่
  return items.reduce((acc, cur) => {
    if (!acc[cur.category]){
      acc[cur.category] = []

    } 
    acc[cur.category].push (cur.name)
    return acc
  }, {})
}
console.log("Test 15:", groupByCategory([
  {name:"Apple",category:"Fruit"},
  {name:"Carrot",category:"Vegetable"},
  {name:"Banana",category:"Fruit"}
]));  
// Output: Test 15: {Fruit:["Apple","Banana"], Vegetable:["Carrot"]}
