import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrationComponent } from "./registration/registration.component";
import { AddbookComponent } from './addbook/addbook.component';
import { TdformComponent } from "./tdform/tdform.component";


import { RformComponent } from "./rform/rform.component";
import { DemoComponent } from './demo/demo.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, RegistrationComponent, AddbookComponent, TdformComponent, RformComponent,DemoComponent, HttpClientModule]
    ,
    providers: [UserService]
  }
)
export class AppComponent {
  title = 'online-book-store';
  course='angular';
}
