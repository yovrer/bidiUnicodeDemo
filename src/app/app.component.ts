import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  options: FormGroup;
  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));
  texts = [
    "The quick brown fox jumped over the lazy dog.",
    "Bahrain Egypt Kuwait!",
    "Bahrain &#x0645;&#x0635;&#x0631; Kuwait!",
    "&#x641; Bahrain Egypt Kuwait! -123",
    "Purple Pizza - 4 reviews",
    "פיצה סגולה - 4 reviews",
    "&#x0627;&#x0644;&#x0628;&#x062D;&#x0631;&#x064A;&#x0646; &#x0645;&#x0635;&#x0631; &#x0627;&#x0644;&#x0643;&#x0648;&#x064A;&#x062A;!",
    'The title is "&#x0627;&#x0644;&#x0628;&#x062D;&#x0631;&#x064A;&#x0646; &#x0645;&#x0635;&#x0631; &#x0627;&#x0644;&#x0643;&#x0648;&#x064A;&#x062A;!" in Arabic.',
    'The title is "&#x202E;&#x0627;&#x0644;&#x0628;&#x062D;&#x0631;&#x064A;&#x0646; &#x0645;&#x0635;&#x0631; &#x0627;&#x0644;&#x0643;&#x0648;&#x064A;&#x062A;!&#x202C;" in ',
    "Arabic.",
    'The title is "&#x0627;&#x0644;&#x0628;&#x062D;&#x0631;&#x064A;&#x0646; (123456) &#x0645;&#x0635;&#x0631; &#x0627;&#x0644;&#x0643;&#x0648;&#x064A;&#x062A;!" in Arabic.',
    "&#x0627;&#x0644;&#x0639;&#x0646;&#x0648;&#x0627;&#x0646; &#x0647;&#x0648; ''Bahrain Kuwait Egypt!'' &#x0628;&#x0627;&#x0644;&#x0644;&#x063A;&#x0629; &#x0627;&#x0644;&#x",
    "0625;&#x0646;&#x062C;&#x0644;&#x064A;&#x0632;&#x064A;&#x0629;.",
    "&#x0645;&#x0627; &#x0647;&#x0648; &#x202A;C++&#x202C;&#x200F;&#x061F; (Arabic Edition)",
    "&#x0627;&#x0644;&#x0639;&#x0646;&#x0648;&#x0627;&#x0646; &#x0647;&#x0648; {0,number,integer} &#x0628;&#x0627;&#x0644;&#x0644;&#x063A;&#x0629; &#x0627;&#x0644;&#x0625;",
    '&#x0646;&#x062C;&#x0644;&#x064A;&#x0632;&#x064A;&#x0629;.',
    "&#x0627;&#x0644;&#x0633;&#x0639;&#x0631; {0,price,in_sentence} + {1,price,in_sentence} &#x0627;&#x0644;&#x0634;&#x062D;&#x0646;",
    "&#x0627;&#x0644;&#x0633;&#x0639;&#x0631; {0,price,in_sentence} &#x0648; {1,price,in_sentence} &#x0627;&#x0644;&#x0634;&#x062D;&#x0646;",
    "&#x0627;&#x0644;&#x0633;&#x0639;&#x0631; {0,number, ##.00} + {1, number, 000.00} &#x0627;&#x0644;&#x0634;&#x062D;&#x0646;",
    "&#x0627;&#x0644;&#x0633;&#x0639;&#x0631; 1,234.56 ILS + 12,99 USD &#x0627;&#x0644;&#x0634;&#x062D;&#x0646;",
    "&#x0627;&#x0644;&#x0633;&#x0639;&#x0631; 1,234.56 ILS &#x0648; 12,99 USD &#x0627;&#x0644;&#x0634;&#x062D;&#x0646;",
    "The price is 1,234.56 &#x062f;&#x0631;&#x0647;&#x645; + 12.99 &#x062f;&#x0631;&#x0647;&#x645; in shipping.",
    "Apple iPhone XS Max (6.5) &#x0648;&#x0627;&#x0642;&#x064A; &#x0634;&#x0627;&#x0634;&#x0629; &#x0632;&#x062C;&#x0627;&#x062C;&#x064A; &#x0645;&#x0642;&#x0648;&#x0649; ",
    '&#x0648;&#x062E;&#x0644;&#x0641;&#x064A; 2.5D - &#x0634;&#x0641;&#x0627;&#x0641; &#x0644;&#x0647;&#x0627;&#x062A;&#x0641; iPhone XS Max',
    "&#x0627;&#x0633;&#x062A;&#x0642;&#x0644; &#x0647;&#x0646;&#x0627; &#x0644;&#x0644;&#x0628;&#x0648;&#x0627;&#x0628;&#x0627;&#x062A; A & B &#x060C; &#x0648;&#x0646;",
    '&#x0642;&#x0644; &#x0625;&#x0644;&#x0649; &#x062C;&#x0645;&#x064A;&#x0639; &#x0627;&#x0644;&#x0628;&#x0648;&#x0627;&#x0628;&#x0627;&#x062A; &#x0627;&#x',
    "HTML &#x0648; CSS: &#x062A;&#x0635;&#x0645;&#x064A;&#x0645; &#x0648; &#x0625;&#x0646;&#x0634;&#x0627;&#x0621; &#x0645;&#x0648;&#x0627;&#x0642;&#x0639; &#x0627;&#x0644;",
    "&#x0648;&#x064A;&#x0628;",
    "from البحرين, بربادوس, and روسيا البيضاء",
  ];

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      color: this.colorControl,
      fontSize: this.fontSizeControl,
    });
  }

  getFontSize() {
    return Math.max(10, this.fontSizeControl.value);
  }


}
