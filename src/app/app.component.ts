import {Component} from '@angular/core';
import {textArr} from "./text-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputValue?: string;
  texts = textArr;
}
