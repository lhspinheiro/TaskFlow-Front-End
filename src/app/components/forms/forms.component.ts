import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListTask } from '../../Models/Task';

@Component({
  selector: 'app-forms',
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent implements OnInit {
  
  @Output() onSubmit = new EventEmitter<ListTask>();
  @Input() dadosTask: ListTask |  null = null;
  @Input() btnAction!: string;
  @Input() descTitle!: string;
  
  taskForm!: FormGroup; 
  
  ngOnInit(): void {

    console.log(3);

    this.taskForm = new FormGroup({
      title: new FormControl(this.dadosTask ? this.dadosTask.title:''),
      description: new FormControl(this.dadosTask ? this.dadosTask.description:''),
      dueDate: new FormControl(this.dadosTask ? this.dadosTask.dueDate:''),
      isCompleted: new FormControl(this.dadosTask ? this.dadosTask.isCompleted:''),
      priority: new FormControl(this.dadosTask ? this.dadosTask.priority:''),
    });
  }

  submit(){
    const formValue = { ...this.taskForm.value };
    // Convertendo o valor de priority para número, porque o backend espera um valor numérico
    formValue.priority = Number(formValue.priority);

    if (this.dadosTask?.id) {
      formValue.id = this.dadosTask.id; // 👈 Adiciona o ID
    }

    console.log('📤 Enviando task:', formValue);
    const { id, ...taskSemId } = formValue;
    this.onSubmit.emit(taskSemId);
  }

}
