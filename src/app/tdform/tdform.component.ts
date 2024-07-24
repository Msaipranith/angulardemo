import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';


@Component({
  selector: 'app-tdform',
  standalone: true,
  imports: [CommonModule,
    FormsModule,HttpClientModule],
  templateUrl: './tdform.component.html',
  styleUrl: './tdform.component.scss'
 
})
export class TdformComponent implements OnInit{

  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(data=>{
      this.users=data;
    })
  }


  title = 'Template-driven Form Example';
  user = {
    name: '',
    email: ''
  };

  addUser() {
  /*   const newUser = { name: 'New User', email: 'newuser@example.com' }; */
  // this.http.post<any>(this.apiUrl, user)
    this.userService.addUser(this.user).subscribe(user => {
      this.users.push(user);
    });
  }

  updateUser(user: any) {
    user.name = 'Updated Name';
    this.userService.updateUser(user).subscribe(updatedUser => {
      const index = this.users.findIndex(u => u.id === updatedUser.id);
      if (index !== -1) {
        this.users[index] = updatedUser;
      }
    });
  }

  deleteUser(user: any) {
    this.userService.deleteUser(user.id).subscribe(() => {
      this.users = this.users.filter(u => u.id !== user.id);
    });
  }
 
  onSubmit() {
    console.log(this.user);
  }
}
