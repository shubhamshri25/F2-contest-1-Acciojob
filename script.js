/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map((student) => {
    if (student.marks > 50) {
      console.log(student);
    }
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach((student) => {
    if (student.marks > 50) {
      console.log(student);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(newStudent);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr.forEach((student, index) => {
    if (student.marks < 50) {
      arr.splice(index, 1);
    }
  });
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newStudents = [
    { id: 4, name: "shubham", age: "21", marks: 88 },
    { id: 5, name: "rahul", age: "20", marks: 70 },
    { id: 6, name: "mohit", age: "22", marks: 75 }
  ];
  const combinedArray = arr.concat(newStudents);
  console.log(combinedArray);
}
