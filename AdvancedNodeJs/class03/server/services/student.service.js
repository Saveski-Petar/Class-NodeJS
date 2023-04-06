import Student from "../model/student.model.js";

export default class StudentService {
  static async getAllStudents() {
    const students = await Student.find({});

    return students;
  }
  static async getStudentByID(studentID) {
    const student = await Student.findById(studentID).populate(
      "course",
      "-students"
    );
    if (!student)
      throw new Error(`Student with id ${studentID} doesn't exist!!`);

    // const course = await Course.findById(student.courseID).lean();

    // const fullStudent = {
    //   ...student,
    //   course,
    // };

    return student;
  }
  static async addNewStudent(studentInfo) {
    const newStudentInfo = new Student(studentInfo);

    const newStudent = await newStudentInfo.save();

    return newStudent;
  }
  static async updateStudent(studentID, updatedStudentInfo) {
    const student = await Student.findById(studentID);
    if (!student)
      throw new Error(`Student with id ${studentID} doesn't exist!!`);

    const keys = Object.keys(updatedStudentInfo);
    keys.forEach((key) => {
      if (key !== "_id" && key !== "__v") {
        student[key] = updatedStudentInfo[key];
      }
    });
    const updatedStudentData = await student.save();
    return updatedStudentData;
  }
  static async deleteStudent(studentID) {
    await Student.findByIdAndDelete(studentID);
  }
}
