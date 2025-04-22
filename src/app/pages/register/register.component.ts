import { Component } from '@angular/core';
import { FormsComponent } from '../../components/forms/forms.component';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';
import { ListTask } from '../../Models/Task';

@Component({
  selector: 'app-register',
  imports: [FormsComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  btnAction = "Cadastrar";
  descTitle = "Criar Tarefa";

  constructor(private taskService:TaskService, private router: Router){}

  registerTask(task:ListTask){
    this.taskService.RegisterTask(task).subscribe(response =>{
      this.router.navigate(['/']);
    });
  }

}
