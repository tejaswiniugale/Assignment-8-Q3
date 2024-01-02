import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
textInput: string ='';
textLength: number = 0;

onInputChange(){
  this.textLength = this.textInput.length;
}


  title = 'Div';
}
