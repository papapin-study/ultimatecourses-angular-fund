import { Component } from '@angular/core';


interface Passenger {
  id: number,
  fullName: string,
  checkIn: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  passengers: Passenger[] = [
    {
      id: 1,
      fullName: 'Andrew',
      checkIn: false
    },
    {
      id: 2,
      fullName: 'Todd',
      checkIn: true
    },
    {
      id: 3,
      fullName: 'Diana',
      checkIn: false
    }
  ]
 
}
