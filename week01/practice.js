// โจทย์ 1:
// เขียนฟังก์ชันที่รับ Array ของตัวเลข
// ถ้าเป็นเลขคู่ให้คูณด้วย 2
// ถ้าเป็นเลขคี่ให้บวก 5
// คืนค่า Array ใหม่
function transformNumbers(arr) {
  // เขียนโค้ดที่นี่
   let result = []
  for (let i of arr){
    if (i % 2 == 0){
        result.push(i * 2)
    } else{
        result.push(i + 5)
    }
  }
  return arr.map(n => n % 2 == 0 ? n * 2 : n + 5)
  return result
}
console.log("Test 1:", transformNumbers([1, 2, 3, 4]));


// โจทย์ 2:
// เขียนฟังก์ชันที่รับ Array ของ string (ชื่อผลไม้)
// ให้ลบชื่อผลไม้ที่มีความยาว <= 5 ตัวอักษรออก
// และเปลี่ยนตัวอักษรที่เหลือให้เป็นตัวพิมพ์ใหญ่ทั้งหมด
function filterAndUppercase(fruits) {
  // เขียนโค้ดที่นี่
  let result = []
  for (let i = 0; i < fruits.length; i++){
    if (fruits[i].length > 5){
        result.push(fruits[i].toUpperCase())
    }
  }
  return fruits.filter(fruits => fruits.length > 5).map(fruits => fruits.toUpperCase())
  return result
}
console.log("Test 2:", filterAndUppercase(["apple", "banana", "pineapple", "kiwi"]));


// โจทย์ 3:
// เขียนฟังก์ชันที่รับ Array ของตัวเลข
// ใช้ while loop ลบตัวเลขที่น้อยกว่า 50 ออกทั้งหมด
function removeUnder50(arr) {
  // เขียนโค้ดที่นี่
  let i = 0
  while (i < arr.length){
    if (arr[i] < 50){
        arr.splice(i, 1)
    }else{
        i ++
    }
    
  }
  return arr.filter(arr => arr >= 50)
  return arr
}
console.log("Test 3:", removeUnder50([10, 60, 30, 9500, 50]));


// โจทย์ 4:
// เขียนฟังก์ชันที่รับ Array ของคะแนนสอบ
// ถ้าคะแนนมากกว่า 80 ให้เพิ่มคำว่า " (ดีเยี่ยม)" หลังคะแนน
// ถ้าคะแนน 50-80 ให้เพิ่ม " (ผ่าน)"
// ถ้าต่ำกว่า 50 ให้เพิ่ม " (ไม่ผ่าน)"
function gradeResults(scores) {
  // เขียนโค้ดที่นี่
  let result = []
  for (let i of scores){
    if (i > 80){
        result.push(`${i} (ดีเยี่ยม)`)
    }else if(i >= 50){
        result.push(`${i} (ผ่าน)`)
    }else{
        result.push(`${i} (ไม่ผ่าน)`)
    }
  }
  return scores.map(n => n > 80 ? n+"(ดีเยี่ยม)" : n >= 50 ? n + "(ผ่าน)" : n+"(ไม่ผ่าน)")
  return(result)
}
console.log("Test 4:", gradeResults([45, 50, 85]));


// โจทย์ 5:
// เขียนฟังก์ชันที่รับ Array ของตัวเลข
// หาผลรวมของเลขคู่ และผลรวมของเลขคี่
// คืนค่าเป็น Object {evenSum: ..., oddSum: ...}
function sumEvenOdd(arr) {
  // เขียนโค้ดที่นี่
    let result = {
        evenSum: 0,
        oddSum: 0
    }
    for (let i of arr){
        i % 2 == 0 ? result.evenSum += i : result.oddSum += i
    }
    return result
}
console.log("Test 5:", sumEvenOdd([1, 2, 3, 4, 5]));


// โจทย์ 6:
// เขียนฟังก์ชันที่รับ Array ของ object ที่มี property {name, age}
// ให้กรองคนที่อายุน้อยกว่า 18 ออก
// คืนค่า Array ใหม่ของเฉพาะคนที่อายุ >= 18
function filterAdults(people) {
  // เขียนโค้ดที่นี่
    let result = []
    for (let i of people){
        if (i.age >= 18){
            result.push(i)
        }
    }
    return people.filter(people => people.age >= 18)
    return result
}
console.log("Test 6:", filterAdults([
  {name: "Alice", age: 17},
  {name: "Bob", age: 20},
  {name: "Charlie", age: 18}
]));


// โจทย์ 7:
// เขียนฟังก์ชันที่รับ Array ของตัวเลข
// ใช้ reduce เพื่อหาผลรวมของตัวเลขทั้งหมด
function sumArray(arr) {
  // เขียนโค้ดที่นี่
  return arr.reduce((acc, cur) => acc + cur, 0)
}
console.log("Test 7:", sumArray([5, 10, 15, 20]));


// โจทย์ 8:
// เขียนฟังก์ชันที่รับ Array ของ string
// ใช้ map เพื่อเพิ่มคำว่า "🍎" ต่อท้ายทุกคำ
function addEmoji(arr) {
  // เขียนโค้ดที่นี่
  return arr.map(str => str+'🍎')
}
console.log("Test 8:", addEmoji(["apple", "banana", "cherry"]));


// โจทย์ 9:
// เขียนฟังก์ชันที่รับ Array ของตัวเลข
// วนลูป for...of เพื่อหาตัวเลขที่มากที่สุด
function findMax(arr) {
  // เขียนโค้ดที่นี่
  let result = 0
  for (let i of arr) {
    if (i > result){
        result = i
    }
  }
  return arr.sort((a,b) => b - a)[0]
  return result
}
console.log("Test 9:", findMax([10, 99, 23, 45, 100, 2]));


// โจทย์ 10:
// เขียนฟังก์ชันที่รับ Array ของ string
// รวมเป็นข้อความเดียวโดยคั่นด้วย " - "
// และแปลงเป็นตัวพิมพ์ใหญ่ทั้งหมด
function joinAndUppercase(arr) {
  // เขียนโค้ดที่นี่
  return arr.join('-').toUpperCase()
}
console.log("Test 10:", joinAndUppercase(["hello", "world", "javascript"]));

// โจทย์ 11:
// เขียนฟังก์ชันที่รับ Array ของ object {name, score}
// ให้คืน Array ของชื่อเรียงลำดับตามคะแนนจากมากไปน้อย
function sortNamesByScore(arr) {
  // เขียนโค้ดที่นี่
  return arr.sort((a, b) => a.score - b.score)
}
console.log("Test 11:", sortNamesByScore([
  { name: "Alice", score: 75 },
  { name: "Bob", score: 90 },
  { name: "Charlie", score: 85 }
]));

// โจทย์ 12:
// เขียนฟังก์ชันที่รับ Array ของ object {name: string, scores: number[]}
// คืนค่า Array ของ object {name, average} โดย average เป็นทศนิยม 2 ตำแหน่ง
function calculateAverages(data) {
  //  เขียนโค้ดที่นี่
  let result = []
  for (let person of data){
    let sum = 0
    for (let i of person.scores){
      sum += i
    }
    let avg = sum / person.scores.length
    result.push({name: person.name,
      average: avg.toFixed(2)
    })
  }
  return result
}
console.log("Test 12:", calculateAverages([
  {name: "Alice", scores: [80, 90, 100]},
  {name: "Bob", scores: [60, 70, 75]},
  {name: "Charlie", scores: [88, 92, 95]}
]));


// โจทย์ 13:
// เขียนฟังก์ชันที่รับ Array ของ string
// แยกแต่ละ string เป็นคำ (แยกด้วยช่องว่าง) → ลบคำซ้ำ → เรียง A-Z → คืนค่า Array คำที่ไม่ซ้ำ
function uniqueSortedWords(arr) {
  // เขียนโค้ดที่นี่
  let array = []
  for (let i of arr){
    let splitAr = i.split(" ")
    for (let arr of splitAr){
      array.push(arr)
    }
  }
  let sortArr = array.sort()
  let setWord = new Set(sortArr)
  let result =[...setWord]
  
  return result

}
console.log("Test 13:", uniqueSortedWords(["apple pie", "banana split", "cherry tart", "apple tart"]));


// โจทย์ 14:
// เขียนฟังก์ชันที่รับ Array ของตัวเลข
// หาตัวเลขที่ซ้ำกันและนับจำนวนครั้งที่ซ้ำ → คืนค่าเป็น Object
function countDuplicates(arr) {
  // เขียนโค้ดที่นี่
  let result = {}
  for (let i of arr){
    if (result[i]){
      result[i] ++
    } else{
      result[i] = 1 
    }
  }
  return result

}
console.log("Test 14:", countDuplicates([10, 5, 10, 5, 5, 7, 7, 7, 7]));


// โจทย์ 15:
// เขียนฟังก์ชันที่รับ Array ของ object {name, salary}
// หาค่าเฉลี่ย salary → คืนค่า Array ของชื่อคนที่มี salary สูงกว่าค่าเฉลี่ย
function aboveAverageSalaries(employees) {
  // เขียนโค้ดที่นี่
  let sum = 0 
  for (let person of employees){
    sum += person.salary
  }
  let avg = sum / employees.length 
  let result = []
  for (let i of employees){
    if (i.salary > avg){
      result.push(i)
    }
  }
  let avgg = employees.reduce((sum, emp) => sum + emp.salary,0) / employees.length
  return employees.filter(emp => emp.salary > avgg)

  return result
}
console.log("Test 15:", aboveAverageSalaries([
  {name: "Alice", salary: 30000},
  {name: "Bob", salary: 50000},
  {name: "Charlie", salary: 40000},
  {name: "David", salary: 55000}
]));
