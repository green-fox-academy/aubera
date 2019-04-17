'use strict';
import { Student } from './student'

export class Teacher{
  answer(): void{
    console.log('I am answering!')
  }

  teach(student: Student): void{
    student.learn();
  }
}
