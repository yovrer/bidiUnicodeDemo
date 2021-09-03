import {Component, OnInit} from '@angular/core';
import {textArr} from "./text-data";
import * as _ from "lodash";
import {Direction} from "@angular/cdk/bidi/directionality";
import * as he from "he";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  texts = textArr;
  selectedText = this.texts[7];
  inputValue = '';
  preview = '';

  dir: Direction = 'ltr';
  directions = ['ltr', 'rtl', 'auto']
  he = he;

  onChange(value: string) {
    // this.inputValue = _.cloneDeep(value);
    console.log('value', value)
    console.log('he.decode(value)', he.decode(value))
    this.preview = _.cloneDeep(he.decode(value));

  }

  ngOnInit(): void {
    this.updateInputValue();
  }

  updateInputValue() {
    this.inputValue = _.cloneDeep(this.selectedText);
    this.preview = _.cloneDeep(this.inputValue);
  }
}
