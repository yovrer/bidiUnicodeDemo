import {Component} from '@angular/core';
import {textArr} from "./text-data";
import * as _ from "lodash";
import {Direction} from "@angular/cdk/bidi/directionality";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  texts = textArr;
  selectedText = this.texts[7];
  inputValue = _.cloneDeep(this.selectedText);
  dir: Direction = 'ltr';
  directions = ['ltr','rtl','auto']

  onChange(value: string) {
    this.inputValue = _.cloneDeep(value);
  }

  updateInputValue() {
    this.inputValue = _.cloneDeep(this.selectedText);
  }
}
