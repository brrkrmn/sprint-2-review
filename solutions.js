import { students } from "./data.js";

// console.log("1 -> 10. ogrenci ismi", students[9].name);

// 2. Students array'ine yeni bir ogrenci ekle
// push()
const newStudent = {
    id: 13,
    name: "Sevil",
    city: "Ankara",
    isActive: true,
    scores: [82, 91, 77],
    attendance: 0.92,
    enrolledCourses: ["js101", "git", "node"],
}

// console.log("Students before: ", students.length);
students.push(newStudent);
// console.log("Students after: ", students.length);
// console.log(students[students.length - 1])


// 3. Ogrencileri attendance'a gore sirala ve studentsByAttendance degiskenine ata
// sort((a, b) => a - b);
// spread ...

const studentsByAttendance = [...students].sort((a, b) => b.attendance - a.attendance);
// console.log(studentsByAttendance);


// 4. Ogrencilerden aktif olmayanlari listele
// isActive === false
//filter((student) => student.i);

const passiveStudents = students.filter((student) => !student.isActive);
console.log(passiveStudents.length);

// 6. Ogrencilerin not ortalamasini hesaplayan calculateAverage fonksiyonunu yaz
const calculateAverage = (scores) => {
    const sum = scores.reduce((total, score) => total + score, 0);
    return Math.ceil(sum / scores.length);
}

// console.log(calculateAverage([2, 3, 4, 5, 6]));

//map
const returnAllAverages = (students) => {
    return students.map((student) => calculateAverage(student.scores))
}


console.log("MAP: ")
console.log("BEFORE: ", students)
console.log(returnAllAverages(students));
console.log("AFTER: ", students.length)
