import { Injectable } from '@angular/core';
import {Quiz} from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[] = [
    {
    question:'The combination of operating system and processor ...',
    answer:[
      {option:'Minimum requirements', correct:false },
      {option:'Specifications', correct:false },
      {option:'Platform', correct:true },
      {option:'Firmware', correct:false }
    ]
  },
  {
    question:'Which was the computer conceived by babbage?',
    answer:[
      {option:'Donald knuth', correct:false },
      {option:'Arithmetic machine', correct:false },
      {option:'Analytical engine', correct:true },
      {option:'All of the above', correct:false }
    ]
  },
  {
    question:'Which of the following is generally costlier?',
    answer:[
      {option:'Mainframe', correct:true  },
      {option:'Personal computer', correct:false },
      {option:'Notebook computer', correct:false},
      {option:'Server', correct:false }
    ]
  },
  {
    question:'In which year slide rule was developed ?',
    answer:[
      {option:'1605', correct:false },
      {option:'1610', correct:false },
      {option:'1620', correct:true },
      {option:'1855', correct:false }
    ]
  },
  {
    question:'Shell is the exclusive feature of',
    answer:[
      {option:'Application software', correct:false },
      {option:'System software', correct:false },
      {option:'DOS', correct:false },
      {option:'UNIX', correct:true }
    ]
  },
  {
    question:'Name the application used for creating presentatio...',
    answer:[
      {option:'MS Access', correct:false },
      {option:'MS Word', correct:false },
      {option:'MS Excel', correct:false },
      {option:'MS PowerPoint', correct:true }
    ]
  },
  {
    question:'Modem is a"',
    answer:[
      {option:'Word processing software', correct:false },
      {option:'Application software', correct:false },
      {option:'Hardware', correct:true },
      {option:'Liveware', correct:false }
    ]
  },
  {
    question:'Which of the following can be considered as portab...',
    answer:[
      {option:'Desktop', correct:false },
      {option:'PDA', correct:true},
      {option:'Mainframe computer', correct:false },
      {option:'Mini Computer', correct:false }
    ]
  },
  {
    question:'The combination of operating system and processor ...',
    answer:[
      {option:'Central processing unit', correct:true  },
      {option:'Computer processing unit', correct:false },
      {option:'Control processing unit', correct:false},
      {option:'Command processing unit', correct:false }
    ]
  },
  {
    question:'Where is the DVD disk put in a computer?',
    answer:[
      {option:'Floppy drive', correct:false },
      {option:'USB port', correct:false },
      {option:'Hard disk drive', correct:false },
      {option:'DVD drive', correct:true }
    ]
  }
]
  constructor() { }

getQuizzes(){
  return this.quizzes;
}
}
