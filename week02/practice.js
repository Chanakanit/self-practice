// โจทย์ 1:
// เขียนฟังก์ชัน shallowEqual(objA, objB)
// ให้คืนค่า true ถ้าวัตถุทั้งสองมี key และ value ในระดับแรกเหมือนกันทุกตัว
function shallowEqual(objA, objB) {
  // เขียนโค้ดที่นี่
  const key1 = Object.keys(objA)
  const key2 = Object.keys(objB)

  if (key1.length !== key2.length) {
    return false
  }

  for (let key of key1){
    if(!(key in objB) || objA[key] !== objB[key]) {
      return false
    }
  }
  return true
}
console.log("Test 1:", shallowEqual({a:1, b:2}, {a:1, b:2})); // true
console.log("Test 1:", shallowEqual({a:1, b:3}, {a:1, b:2})); // false

// โจทย์ 2:
// เขียนฟังก์ชัน compareArraysShallow(arr1, arr2)
// ให้คืนค่า true ถ้า array ทั้งสองยาวเท่ากันและ element ในตำแหน่งเดียวกัน === กัน
function compareArraysShallow(arr1, arr2) {
  // เขียนโค้ดที่นี่
  if (arr1.length !== arr2.length) {return false}
  return arr1.every((val, i) => val === arr2[i])
  
}
console.log("Test 2:", compareArraysShallow([1,2,3],[1,2,3])); // true
console.log("Test 2:", compareArraysShallow([1,2,3],[1,2,'3'])); // false

// โจทย์ 3:
// เขียนฟังก์ชัน hasSameKeys(objA, objB)
// ให้คืนค่า true ถ้าวัตถุทั้งสองมี key เหมือนกันทั้งหมด (ไม่สนค่า value)
function hasSameKeys(objA, objB) {
  // เขียนโค้ดที่นี่
  const key1 = Object.keys(objA)
  const key2 = Object.keys(objB)
  
  return key1.length === key2.length && key1.every(key => key in objB)
}
console.log("Test 3:", hasSameKeys({x:10,y:20},{y:30,x:99})); // true
console.log("Test 3:", hasSameKeys({x:10,y:20},{y:30,z:99})); // true
console.log("Test 3:", hasSameKeys({x:10},{x:10,z:20})); // false

// โจทย์ 4:
// เขียนฟังก์ชัน propsChanged(objA, objB)
// ให้คืนค่าเป็น array ของ key ที่ค่าเปลี่ยนแปลง (ใช้ shallow เทียบ ===)
function propsChanged(objA, objB) {
  // เขียนโค้ดที่นี่
  let result = []

  for (let key in objA){
    if (key in objB && objA[key] !== objB[key]){
       result.push(key)
    }
  }
  return result
}
console.log("Test 4:", propsChanged({a:1,b:2},{a:1,b:3})); // ['b']
console.log("Test 4:", propsChanged({a:1},{a:1})); // []

// โจทย์ 5:
// เขียนฟังก์ชัน isSameReference(a, b)
// ให้คืนค่า true ถ้า a และ b อ้างอิง object/array ตัวเดียวกัน
function isSameReference(a, b) {
  // เขียนโค้ดที่นี่
  return a === b  
}
const obj = {n:1};
console.log("Test 5:", isSameReference(obj,obj)); // true
console.log("Test 5:", isSameReference({n:1},{n:1})); // false

// โจทย์ 6 (พื้นฐาน):
// เขียนฟังก์ชัน getKeys(obj) → คืนค่า array ของ key ทั้งหมด
function getKeys(obj) {
  // เขียนโค้ดที่นี่
  let result = []
  for (let key in obj){
    result.push(key)
  }
  return Object.keys(obj)
  return result
}
console.log("Test 6:", getKeys({name:'Big',age:20})); // ['name','age']

// โจทย์ 7 (พื้นฐาน):
// เขียนฟังก์ชัน getValues(obj) → คืนค่า array ของ value ทั้งหมด
function getValues(obj) {
  // เขียนโค้ดที่นี่
  let result = []
  for (let key in obj){
    result.push(obj[key])
  }
  return Object.values(obj)
  return result
}
console.log("Test 7:", getValues({x:1,y:2})); // [1,2]

// โจทย์ 8 (พื้นฐาน):
// เขียนฟังก์ชัน mergeObjects(objA,objB)
// รวม object ทั้งสอง ถ้าคีย์ซ้ำให้ใช้ค่าของ objB
function mergeObjects(objA,objB) {
  // เขียนโค้ดที่นี่
  return {...objA,...objB}
}
console.log("Test 8:", mergeObjects({a:1,b:2},{b:99,c:3})); // {a:1,b:99,c:3}

// โจทย์ 9:
// เขียนฟังก์ชัน invertObject(obj)
// สลับ key ↔ value ใน object
function invertObject(obj) {
  // เขียนโค้ดที่นี่
  let result = {}
  for (let key in obj){
    if (obj.hasOwnProperty(key)){
      result[obj[key]] = key
    }
  }
  return result
}
console.log("Test 9:", invertObject({a:1,b:2})); // {1:'a',2:'b'}

// โจทย์ 10:
// เขียนฟังก์ชัน pick(obj, keys)
// คืนค่า object ใหม่ที่มีแค่ key ที่เลือก
function pick(obj, keys) {
  // เขียนโค้ดที่นี่
  let result = {}
  for (let i of keys){
    result[i] = obj[i]
  }
  return result
}
console.log("Test 10:", pick({a:1,b:2,c:3}, ['a','c'])); // {a:1,c:3}

// โจทย์ 11:
// เขียนฟังก์ชัน omit(obj, keys)
// คืนค่า object ใหม่ที่ลบ key ตามที่เลือกออก
function omit(obj, keys) {
  // เขียนโค้ดที่นี่
  let result = {...obj}
  for (let i of keys){
    delete result[i]
  }
  return result
}
console.log("Test 11:", omit({a:1,b:2,c:3}, ['b'])); // {a:1,c:3}



// โจทย์ 13:
// เขียนฟังก์ชัน countProperties(obj)
// คืนค่าจำนวน property ทั้งหมดใน object (รวม nested object)
function countProperties(obj) {
  // เขียนโค้ดที่นี่
  let count = 0
  for (let key in obj){
    count ++
    if (typeof obj[key] === 'object' && obj[key] !== null){
      count += countProperties(obj[key])
    }
  }
  return count
}
console.log("Test 13:", countProperties({a:1,b:{c:2,d:3}})); // 4

// โจทย์ 14:
// เขียนฟังก์ชัน countDuplicates(arr)
// หาตัวเลขที่ซ้ำกันและนับจำนวนครั้งที่ซ้ำ → คืนค่าเป็น Object
function countDuplicates(arr) {
  // เขียนโค้ดที่นี่
 let result = {}
 for (let num of arr){
  if (result[num]){
    result[num]++
  }else{
    result[num] = 1
  }
 }

 for (let key in result){
  if (result[key] === 1){
    delete result[key]
  }
 }
 return result
}
console.log("Test 14:", countDuplicates([10,5,10,5,5,7,7,7,7]));
// {10:2,5:3,7:4}

// โจทย์ 15:
// เขียนฟังก์ชัน groupBy(arr, keyFn)
// คืนค่า object ที่จัดกลุ่ม element ตาม key ที่ได้จาก keyFn
function groupBy(arr, keyFn) {
  // เขียนโค้ดที่นี่
  let result = {}
  for (let i of arr){
    let key = keyFn(i)
    if (!(result[key])){
      result[key] = []
    }
    result[key].push(i)
  }
  return result
}
console.log("Test 15:", groupBy(['apple','ant','banana','berry'], word=>word[0]));
// {a:['apple','ant'], b:['banana','berry']}
