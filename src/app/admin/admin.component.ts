import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  nom: string = '';
  prenom: string = '';
  genre: string = '';
  tel: string = '';
  email: string = '';
  admin: any[] = [
    { name: 'John Smith', firstName: 'John', email: 'john@example.com', phoneNumber: '123-456-7890', gender: 'Male' },
    { name: 'Alice Johnson', firstName: 'Alice', email: 'alice@example.com', phoneNumber: '987-654-3210', gender: 'Female' },
    { name: 'Bob Davis', firstName: 'Bob', email: 'bob@example.com', phoneNumber: '555-123-4567', gender: 'Male' },
    { name: 'Emily White', firstName: 'Emily', email: 'emily@example.com', phoneNumber: '777-888-9999', gender: 'Female' },
    { name: 'Michael Brown', firstName: 'Michael', email: 'michael@example.com', phoneNumber: '111-222-3333', gender: 'Male' },
    { name: 'Olivia Miller', firstName: 'Olivia', email: 'olivia@example.com', phoneNumber: '444-555-6666', gender: 'Female' },
    { name: 'Daniel Wilson', firstName: 'Daniel', email: 'daniel@example.com', phoneNumber: '999-888-7777', gender: 'Male' },
    { name: 'Sophia Turner', firstName: 'Sophia', email: 'sophia@example.com', phoneNumber: '222-333-4444', gender: 'Female' },
    { name: 'David Harris', firstName: 'David', email: 'david@example.com', phoneNumber: '666-777-8888', gender: 'Male' },
    { name: 'Emma Carter', firstName: 'Emma', email: 'emma@example.com', phoneNumber: '888-999-0000', gender: 'Female' },
  ];

  newAdmin: any = {
    name: '',
    firstName: '',
    email: '',
    phoneNumber: '',
    gener: ''
  };

  constructor() {}

  addAdmin(newAdmin: any) {
    newAdmin.name=this.nom
    newAdmin.firstName=this.prenom
    newAdmin.phoneNumber=this.tel
    newAdmin.gener=this.genre
    newAdmin.email=this.email
    console.log(newAdmin)
    this.admin.push(newAdmin);
  }

  resetForm() {
    this.newAdmin = {
      name: '',
      firstName: '',
      email: '',
      phoneNumber: '',
      gender: ''
    };
  }

  deleteAdmin(index: number) {
    this.admin.splice(index, 1);
    // or: this.admin = this.admin.filter((_, i) => i !== index);
  }

}
