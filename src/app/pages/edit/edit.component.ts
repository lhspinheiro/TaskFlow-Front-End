import { Component } from '@angular/core';
import { FormsComponent } from '../../components/forms/forms.component';
import { CommonModule } from '@angular/common';
import { ListTask } from '../../Models/Task';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  imports: [FormsComponent, CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  btnAction = "Editar";
  descTitle = "Editar tarefa";
  task!: ListTask;

  constructor(private taskService:TaskService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(){
    console.log(1);
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.GetTaskById(id).subscribe(response =>{
      console.log(2);
      console.log('Resposta da API:', response);
      this.task = response;
    });  
  }

  editTask(task:ListTask){
    console.log('🔥 editarTask() foi chamado! Task recebida:', task);
    const id = this.task.id;
    if(!id){
      console.error('ID da task está undefined!');
      return;
    }
    this.taskService.EditTask(id, task).subscribe(response =>{
      this.router.navigate(['/']);
    })
  }
}
