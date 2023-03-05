import { Component } from '@angular/core';
import { ChatServiceService } from 'src/app/services/chat-service.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {

  constructor(private chatServ: ChatServiceService){}
   name?: string;
   age?: number;

   getAge(){
    this.chatServ.getData('Tom').subscribe(data =>{
      this.age = data.age;
      console.log(data);
    })
   }
}
