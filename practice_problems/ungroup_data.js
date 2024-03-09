function ungroupStudents(students) {
  let result = [];

  students.forEach(teacherInfo => {
    teacherInfo.data.forEach(studentInfo => {
      let studentInfoObj = {teacher: teacherInfo.teacher};
      Object.keys(studentInfo).forEach(key => {
        studentInfoObj[key] = studentInfo[key];
      })
      result.push(studentInfoObj);
    })
  })

  return result;
}