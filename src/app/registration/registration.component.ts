import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { LoggerService } from '../logger.service';



@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})



export class RegistrationComponent {
  myProperty={
    color:'black',
    material:'strong'
  };
  image="https://okcredit-blog-images-prod.storage.googleapis.com/2021/03/Software-Development-Business1--1-.jpg";
  // username = 'JohnDoe';
  isDisabled = true;
  isSpecial = true;

  // two way data binding
  name='pranith';

  message = '';

  onClickMe() {
    this.message = 'Button was clicked!';
  }


//structural directives in angular
  isLoggedIn: boolean = false; //ngIf example 
  items: string[] = ['Item 1', 'Item 2', 'Item 3']; //ngFor example
  status: string = 'online'; //ngSwitch example

  constructor(private logger: LoggerService) {
    // this.logger.log('AppComponent initialized');

    this.logger.addSum('pranith', 'sunny');
  }


  title = 'Two-Way Data Binding Example';
  username: string = '';
}
