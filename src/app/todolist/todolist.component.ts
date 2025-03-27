import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

   taskArray=[{taskname:'bresh', iscomplted:false , isEdit:false}];
   Edittext=''
   isEdit:boolean | undefined;
  summitform(form:NgForm){
this.taskArray.push(
  {taskname:form.controls['task'].value, iscomplted:false, isEdit:false}
)
      form.reset();
    console.log(form);
    console.log(form.controls['task'].value)
  }


deleteMethod(index:number){
  if(this.taskArray[index].iscomplted){
    this.taskArray.splice(index,1)
  }
}

onChange(index:number){
  console.log(this.taskArray)
  this.taskArray[index].iscomplted=!this.taskArray[index].iscomplted
}
editmethod(index:number){
this.taskArray[index].isEdit=true;
}
saveMethod(index:number, nameoftask:string){
  this.taskArray[index].taskname=nameoftask;
  this.taskArray[index].isEdit=!this.taskArray[index].isEdit
  console.log(this.taskArray);
}
}
