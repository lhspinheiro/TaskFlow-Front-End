import { Component, OnInit } from '@angular/core';
import { ListTask } from '../../Models/Task';
import { TaskService } from '../../services/task.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  
  task: ListTask[] = [];
  allTask: ListTask[] = [];

  constructor(private serviceTask:TaskService){}
  
  ngOnInit(): void {
  this.serviceTask.GetTask().subscribe(response => {
    this.task = response.tasks;
    this.allTask = response.tasks;
    console.log(response);
  });
  }

search(event: Event){
  const target = event.target as HTMLInputElement;
  const value = target.value.toLowerCase();

  this.task = this.allTask.filter(task =>{
    const title = task.title.toLowerCase();
    const description = task.description.toLowerCase();
    return title.includes(value) || description.includes(value);
  });
}

delet(id:number | undefined ){
  this.serviceTask.DeleteTask(id).subscribe(response =>{
    console.log(response);
    window.location.reload();
  })
}




}

