import {Component, OnInit} from '@angular/core';
import {textArr} from "./text-data";
import * as _ from "lodash";
import {Direction} from "@angular/cdk/bidi/directionality";
import * as he from "he";

export interface Unicode {
  abbreviation: string;
  code: string;
  description: string;
}

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
  unicodeArr: Unicode[] = [
    {abbreviation: 'LRE', code: 'U+200A', description: 'Left to Right Embedding'},
    {abbreviation: 'RLE', code: 'U+200B', description: 'Right to Left Embedding'},
    {abbreviation: 'PDF', code: 'U+200C', description: 'Pop Directional Formatting (ending an embedding)'},
    {abbreviation: 'LRI', code: 'U+2066', description: 'Left to Right Isolate'},
    {abbreviation: 'RLI', code: 'U+2067', description: 'Right to Left Isolate'},
    {abbreviation: 'FSI', code: 'U+2068', description: 'First Strong Isolate'},
    {abbreviation: 'PDI', code: 'U+2069', description: 'Pop Directional Isolate (ending an isolate)'},
  ];
  selectionStart: number = 0;
  directions = ['ltr', 'rtl', 'auto']
  he = he;

  onChange(value: string) {
    // this.inputValue = _.cloneDeep(value);
    console.log('value', value)
    this.preview = _.cloneDeep(he.decode(value));
    console.log('preview', he.decode(value))

  }

  ngOnInit(): void {
    this.updateInputValue();
  }

  onTextAreaClick(textArea: HTMLTextAreaElement) {
    this.selectionStart = textArea.selectionStart;
  }

  onUnicodeButtonClick(unicode: Unicode) {
    this.inputValue = this.insertAt(this.selectionStart, this.inputValue, unicode.code);
    console.log(this.inputValue);
  }

  insertAt(selectionStart: number, inputValue: string, code: string): string {
    return inputValue.slice(0, selectionStart) + code + inputValue.slice(selectionStart + Math.abs(0));
  };

  updateInputValue() {
    this.inputValue = _.cloneDeep(he.decode(this.selectedText));
    this.preview = _.cloneDeep(this.inputValue);
  }
}
