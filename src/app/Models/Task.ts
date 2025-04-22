import { Priority } from "./Priority";


export interface ListTask{
    id?:number;
    title: string,
    description: string,
    dueDate: string,
    isCompleted: string,
    priority: Priority
}