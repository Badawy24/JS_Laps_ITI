let studentForm = document.getElementById("student-form");
let tableData = document.getElementById("student-table-body");

let addBtn = document.getElementById("add-btn");

let name = document.getElementById("name");
let grade = document.getElementById("grade");


let departmentError = document.getElementById('department-error');
let nameError = document.getElementById('name-error');
let gradeError = document.getElementById('grade-error');
// let students = [];
let students = [
  { name: "Ahmed", grade: 45, department: "CS" },
  { name: "Sara", grade: 72, department: "IT" },
  { name: "Mostafa", grade: 88, department: "CS" },
  { name: "Laila", grade: 95, department: "IS" },
  { name: "Omar", grade: 60, department: "CS" },
  { name: "Mona", grade: 77, department: "IT" },
  { name: "Youssef", grade: 51, department: "IS" },
  { name: "Nour", grade: 30, department: "CS" },
  { name: "Khaled", grade: 67, department: "IT" },
  { name: "Hana", grade: 90, department: "IS" },
];

let studentsFiltered = [];

// Function to add students to the table
function addToTable(obj) {
  tableData.innerHTML = "";
  obj.forEach((student,index) => {

  let trStudent = document.createElement("tr");

  let tdName = document.createElement("td");
  let tdGrade = document.createElement("td");
  let tdDept = document.createElement("td");
  let tdDelete = document.createElement("td");

  let delBtn = document.createElement("button");
  delBtn.onclick = function () {
    let checkDelte = confirm("Are you sure you want to delete this student?");
    if (checkDelte) {
      obj.splice(index, 1);
      addToTable(obj);
    }
  }


  tdName.innerText = student.name;
  tdGrade.innerText = Number(student.grade);
  tdDept.innerText = student.department;
  delBtn.innerText = "Delete";

  if(Number(student.grade) < 50){
    trStudent.style.backgroundColor = "red";
  } else if(Number(student.grade) >= 50 && Number(student.grade) < 75){
    trStudent.style.backgroundColor = "yellow";
  } else {
    trStudent.style.backgroundColor = "green";
  }

    tdDelete.appendChild(delBtn);

    trStudent.appendChild(tdName);
    trStudent.appendChild(tdGrade);
    trStudent.appendChild(tdDept);
    trStudent.appendChild(tdDelete);

    tableData.appendChild(trStudent);
  });
}


// Add Function
addBtn.onclick = function (e) {
  e.preventDefault();

  let department = document.querySelector('input[name="department"]:checked');
  if (!department && ( department.value !== 'SD' || department.value !== 'OS' || department.value !== 'El')) {  
    departmentError.style.display = "block";
    departmentError.innerText = "Please select of Avilable";
    setTimeout(() => {
      departmentError.style.display = "none";
    }, 5000);
    return;
  }


  if (name.value === ''){
    nameError.style.display = "block";
    nameError.innerText = "Please Enter a Valid name";
    setTimeout(() => {
      nameError.style.display = "none";
    }, 5000);
    return;
  } 
  if (Number(grade.value) < 0 || Number(grade.value) > 100 || isNaN(grade.value)) {
    gradeError.style.display = "block";
    gradeError.innerText = "Please enter Grade Between 0 and 100";
    setTimeout(() => {
      gradeError.style.display = "none";
    }, 5000);
    return;
  } 


  let student = ({
    name: stringPascalCase(name.value),
    grade: grade.value,
    department: department.value
  });
  students.push(student);

  addToTable(students);
  console.log(students);
}


//  Sort Function 
let sortSelect = document.getElementById("sort");
sortSelect.onchange = function () {
  let selectedValue = sortSelect.value;
  if (selectedValue === "name") {
    students.sort((student, studentNext) => student.name.localeCompare(studentNext.name));
    console.log("sorted");
  } else if (selectedValue === "grade") {
    students.sort((student, studentNext) => Number(student.grade) - studentNext.grade);
    console.log("grade sorted");
  }else{
    return;
  }
  addToTable(students);
}

// Filter Function
let filterSelect = document.getElementById("filter");
filterSelect.onchange = function () {
  let selectedValue = filterSelect.value;
  if (selectedValue === "failed") {
    studentsFiltered = students.filter((student) => Number(student.grade) < 50);
    addToTable(studentsFiltered);
  } else if (selectedValue === "success") {
    studentsFiltered = students.filter((student) => Number(student.grade) >= 50);
    addToTable(studentsFiltered);
  } else {
    addToTable(students);
  }
}

// Capitalize Function
function stringPascalCase(str) {
  str.trim();
  let strToArray = str.split(' ');
  let mapArray = strToArray.map((wordFirstUpper) => {
      return wordFirstUpper.charAt(0).toUpperCase() + wordFirstUpper.slice(1).toLowerCase();
  });
  if(studentUnique(mapArray.join(' '))){
    return mapArray.join(' ');
  }else{
    return;
  }
}

function studentUnique(studentCheck) {
  let studentExists = students.some(student => {
    return student.name.toLowerCase() === studentCheck.toLowerCase();
  });
  
  if (studentExists) {
    nameError.style.display = "block";
    nameError.innerText = "This student already exists!";
    setTimeout(() => {
      nameError.style.display = "none";
    }, 5000);
    return false; 
  }
  return true; 
}