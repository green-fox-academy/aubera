'use strict';
import { Teacher } from './teacher'

export class Student{

  learn(): void{
    console.log('I am learning!')
  }

  question(teacher: Teacher): void{
    teacher.answer();
  }
}

let teacher: Teacher = new Teacher();
let student: Student = new Student();

student.question(teacher);
teacher.teach(student);
