// main.ts

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 20,
    location: "Nairobi"
  };
  
  const student2: Student = {
    firstName: "Bob",
    lastName: "Smith",
    age: 22,
    location: "Mombasa"
  };
  
  const studentsList: Student[] = [student1, student2];
  
  // Create table
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.width = "50%";
  table.style.margin = "20px";
  
  studentsList.forEach((student) => {
    const row = document.createElement("tr");
  
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.border = "1px solid black";
    firstNameCell.style.padding = "8px";
  
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    locationCell.style.border = "1px solid black";
    locationCell.style.padding = "8px";
  
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });
  
  document.body.appendChild(table);
  