// โจทย์ 1:
// เขียนฟังก์ชัน doubleValues(arr) คืน array ใหม่ที่ทุกค่าคูณ 2
function doubleValues(arr) {
  // เขียนโค้ดที่นี่
  return arr.map((arr) => arr * 2);
}
console.log("Test 1:", doubleValues([1, 2, 3]));
// Output: Test 1: [2,4,6]

// โจทย์ 2:
// เขียนฟังก์ชัน filterByLength(arr, minLen) คืน array ของ string ที่ยาวกว่า minLen
function filterByLength(arr, minLen) {
  // เขียนโค้ดที่นี่
  return arr.filter((str) => str.length > minLen);
}
console.log("Test 2:", filterByLength(["hi", "apple", "sun"], 3));
// Output: Test 2: ["apple"]

// โจทย์ 3:
// เขียนฟังก์ชัน getUnique(arr) คืน array ที่ตัดค่าซ้ำออก
function getUnique(arr) {
  // เขียนโค้ดที่นี่
  return arr.reduce((acc, cur) => {
    if (!acc.includes(cur)) {
      acc.push(cur);
    }
    return acc;
  }, []);
}
console.log("Test 3:", getUnique([1, 2, 2, 3, 1, 4]));
// Output: Test 3: [1,2,3,4]

// โจทย์ 4:
// เขียนฟังก์ชัน sortByName(users) คืน array user เรียงตาม name (A→Z)
function sortByName(users) {
  // เขียนโค้ดที่นี่
  return users.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );
}
console.log(
  "Test 4:",
  sortByName([{ name: "Charlie" }, { name: "Alice" }, { name: "Bob" }])
);
// Output: Test 4: [{name:"Alice"},{name:"Bob"},{name:"Charlie"}]

// โจทย์ 5:
// เขียนฟังก์ชัน groupByGrade(students) คืน object กลุ่มนักเรียนตาม grade
function groupByGrade(students) {
  // เขียนโค้ดที่นี่
  return students.reduce((acc, cur) => {
    if (!acc[cur.grade]) {
      acc[cur.grade] = [cur.name];
    } else {
      acc[cur.grade].push(cur.name);
    }
    return acc;
  }, {});
}
console.log(
  "Test 5:",
  groupByGrade([
    { name: "A", grade: "1" },
    { name: "B", grade: "2" },
    { name: "C", grade: "1" },
  ])
);
// Output: Test 5: { "1":["A","C"], "2":["B"] }

// โจทย์ 6:
// เขียนฟังก์ชัน averageScore(students) คืนค่าเฉลี่ยคะแนน
function averageScore(students) {
  // เขียนโค้ดที่นี่
  if (students.length === 0) {
    return 0;
  }
  return students.reduce((acc, cur) => acc + cur.score, 0) / students.length;
}
console.log(
  "Test 6:",
  averageScore([
    { name: "A", score: 80 },
    { name: "B", score: 70 },
    { name: "C", score: 90 },
  ])
);
// Output: Test 6: 80

// โจทย์ 7:
// เขียนฟังก์ชัน findById(arr, id) คืน object ที่มี id ตรง หรือ null ถ้าไม่มี
function findById(arr, id) {
  // เขียนโค้ดที่นี่
  return arr.find((op) => op.id === id);
}
console.log(
  "Test 7:",
  findById(
    [
      { id: 1, name: "Item1" },
      { id: 2, name: "Item2" },
    ],
    2
  )
);
// Output: Test 7: {id:2,name:"Item2"}

// โจทย์ 8:
// เขียนฟังก์ชัน countByCategory(items) คืน object นับจำนวนแต่ละ category
function countByCategory(items) {
  // เขียนโค้ดที่นี่
  return items.reduce((acc, cur) => {
    if (!acc[cur.cat]) {
      acc[cur.cat] = 1;
    } else {
      acc[cur.cat] += 1;
    }
    return acc;
  }, {});
}
console.log(
  "Test 8:",
  countByCategory([{ cat: "Fruit" }, { cat: "Fruit" }, { cat: "Veg" }])
);
// Output: Test 8: {Fruit:2, Veg:1}

// โจทย์ 9:
// เขียนฟังก์ชัน flatten(arr) แปลง array ซ้อนเป็น array เดียว
function flatten(arr) {
  // เขียนโค้ดที่นี่
  return arr.flat(Infinity);
}
console.log("Test 9:", flatten([1, [2, 3], [4, [5]]]));
// Output: Test 9: [1,2,3,4,5]

// โจทย์ 10:
// เขียนฟังก์ชัน removeByName(arr, name) คืน array ใหม่ที่ลบ object ชื่อที่กำหนดออก
function removeByName(arr, name) {
  // เขียนโค้ดที่นี่
  return arr.filter((op) => op.name !== name);
}
console.log(
  "Test 10:",
  removeByName([{ name: "A" }, { name: "B" }, { name: "C" }], "B")
);
// Output: Test 10: [{name:"A"},{name:"C"}]

// โจทย์ 11:
// เขียนฟังก์ชัน mergeData(arr1, arr2) รวม array object ตาม id ถ้าซ้ำให้นำของ arr2 ทับ
function mergeData(arr1, arr2) {
  // เขียนโค้ดที่นี่
  // return [...arr1, ...arr2]
  return [...arr1, ...arr2].reduce((acc, cur) => {
    let findOp = acc.findIndex((op) => op.id === cur.id);
    if (findOp === -1) {
      acc.push(cur);
    } else {
      acc[findOp] = cur;
    }
    return acc;
  }, []);
}
console.log(
  "Test 11:",
  mergeData(
    [
      { id: 1, val: 10 },
      { id: 2, val: 20 },
    ],
    [
      { id: 2, val: 99 },
      { id: 3, val: 30 },
    ]
  )
);
// Output: Test 11: [{id:1,val:10},{id:2,val:99},{id:3,val:30}]

// โจทย์ 12:
// เขียนฟังก์ชัน maxBy(arr, key) คืน object ที่ key มีค่ามากสุด
function maxBy(arr, key) {
  // เขียนโค้ดที่นี่
  return arr.reduce((acc, cur) => {
    if (acc[key] < cur[key]) {
      acc = cur;
    }
    return acc;
  });
}
console.log(
  "Test 12:",
  maxBy(
    [
      { name: "A", score: 70 },
      { name: "B", score: 90 },
      { name: "C", score: 80 },
    ],
    "score"
  )
);
// Output: Test 12: {name:"B",score:90}

// โจทย์ 13:
// เขียนฟังก์ชัน compose(f,g) ที่คืนฟังก์ชัน h(x)=f(g(x))
function compose(f, g) {
  // เขียนโค้ดที่นี่
  return (x) => f(g(x));
}
const add1 = (x) => x + 1,
  double = (x) => x * 2;
const h = compose(add1, double);
console.log("Test 13:", h(5));
// Output: Test 13: 11  (เพราะ double(5)=10, add1(10)=11)

// โจทย์ 14:
// เขียนฟังก์ชัน nthHighestUniqueSalary(employees, n)
// คืน Array ของ "พนักงานทั้งหมด" ที่มีเงินเดือนเป็น "อันดับที่ n แบบไม่ซ้ำ" (1 = เงินเดือนสูงสุด)
// ถ้าไม่มีอันดับที่ n ให้คืน []
function nthHighestUniqueSalary(employees, n) {
  //
  let sortSara = employees
    .sort((b, a) => a.salary - b.salary)
    .reduce((acc, cur) => {
      if (acc.length === 0) {
        acc.push([cur]);
      } else {
        let lastGroup = acc[acc.length - 1];
        if (lastGroup[0].salary === cur.salary) {
          lastGroup.push(cur);
        } else {
          acc.push([cur]);
        }
      }
      return acc;
    }, []);
  if (n > sortSara.length) return [];
  return sortSara[n - 1];
}

console.log(
  "Test 14a:",
  nthHighestUniqueSalary(
    [
      { name: "A", salary: 50000 },
      { name: "B", salary: 50000 },
      { name: "C", salary: 40000 },
      { name: "D", salary: 30000 },
    ],
    1
  )
);
// Output: Test 14a: [{name:"A",salary:50000},{name:"B",salary:50000}]

console.log(
  "Test 14b:",
  nthHighestUniqueSalary(
    [
      { name: "A", salary: 50000 },
      { name: "B", salary: 50000 },
      { name: "C", salary: 40000 },
      { name: "D", salary: 30000 },
    ],
    2
  )
);
// Output: Test 14b: [{name:"C",salary:40000}]

console.log(
  "Test 14c:",
  nthHighestUniqueSalary(
    [
      { name: "A", salary: 50000 },
      { name: "B", salary: 50000 },
      { name: "C", salary: 40000 },
      { name: "D", salary: 30000 },
    ],
    4
  )
);
// Output: Test 14c: []  (เพราะมีแค่ 3 อันดับเงินเดือนแบบไม่ซ้ำ)

// โจทย์ 15 (Class):
// สร้างคลาส EmployeeStats จัดการพนักงาน {id, name, dept, salary}
// มีเมธอด:
// - upsert(emp): เพิ่ม/อัปเดตข้อมูลพนักงานตาม id
// - raise(id, amount): ปรับเงินเดือนพนักงานเพิ่มตามจำนวน amount
// - median(dept): คืน "ค่ามัธยฐาน" ของเงินเดือนในแผนกที่ระบุ (ถ้าไม่มี ให้คืน null)
class EmployeeStats {
  // เขียนโค้ดที่นี่...
  constructor() {
    this.employees = [];
  }
  upsert(emp) {
    const idx = this.employees.findIndex((e) => e.id === emp.id);
    if (idx !== -1) {
      this.employees[idx] = emp;
    } else {
      this.employees.push(emp);
    }
  }

  raise(id, amount) {
    const emp = this.employees.find((e) => e.id === id);
    if (emp) {
      return (emp.salary += amount);
    }
  }

  median(dept) {
    const salaries = this.employees
      .filter(e => e.dept === dept)
      .map(e => e.salary)
      .sort((a, b) => a - b);
    
    if (salaries.length === 0) {return null}
    let Mdn = Math.floor(salaries.length / 2)
    if (salaries.length % 2 === 0){
      return (salaries[Mdn - 1] + salaries[Mdn]) / 2
    } else{
      return salaries[Mdn]
    }
    
  }

  getEmp() {
    return this.employees;
  }
}

const es = new EmployeeStats();
es.upsert({ id: 1, name: "Ann", dept: "IT", salary: 30000 });
es.upsert({ id: 2, name: "Bee", dept: "IT", salary: 50000 });
es.upsert({ id: 2, name: "Big", dept: "IT", salary: 50000 });
es.upsert({ id: 3, name: "Cat", dept: "HR", salary: 40000 });
es.raise(1, 10000); // Ann จาก 30000 → 40000

console.log("Test 15:", {
  medianIT: es.median("IT"),
  medianHR: es.median("HR"),
  medianSales: es.median("Sales")
});

console.log(es.getEmp());

// Output: Test 15: { medianIT: 45000, medianHR: 40000, medianSales: null }
