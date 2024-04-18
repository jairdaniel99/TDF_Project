import { Component } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css',
})
export class TdfComponent {
  email: string = '';
  password: string = '';
  gender: string = '';
  age: number = 0;
  onSubmit(survey: any) {
    console.log('Email: ' + this.email);
    console.log('Password: ' + this.password);
    console.log('Gender: ' + this.gender);
    console.log('Age: ' + this.age);
  }
}
